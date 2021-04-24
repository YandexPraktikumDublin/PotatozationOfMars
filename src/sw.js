const CACHE_VERSION = 10
const CURRENT_CACHE = `main-${CACHE_VERSION}`

const cacheFiles = ['/']

self.addEventListener('activate', (evt) =>
  evt.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName)
          } else {
            return ''
          }
        })
      )
    })
  )
)

self.addEventListener('install', (evt) =>
  evt.waitUntil(
    caches.open(CURRENT_CACHE).then((cache) => {
      return cache.addAll(cacheFiles)
    })
  )
)

const update = (request) =>
  caches.open(CURRENT_CACHE).then((cache) =>
    fetch(request).then((response) => {
      if (response.status === 200) {
        return cache.put(request, response)
      }
    })
  )

const fromNetwork = (request, timeout) =>
  new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout)
    fetch(request).then((response) => {
      clearTimeout(timeoutId)
      resolve(response)
      update(request)
    }, reject)
  })

const fromCache = (request) =>
  caches
    .open(CURRENT_CACHE)
    .then((cache) =>
      cache
        .match(request)
        .then((matching) => matching || cache.match('/offline/'))
    )

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    fromNetwork(evt.request, 10000).catch(() => fromCache(evt.request))
  )
  evt.waitUntil(update(evt.request))
})
