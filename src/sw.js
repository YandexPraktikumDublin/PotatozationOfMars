const CACHE_VERSION = 11
const CURRENT_CACHE = `main-${CACHE_VERSION}`

const cacheFiles = [
  '/',
  '/auth',
  '/signup',
  '/game',
  '/profile',
  '/leaderboard',
  '/forum'
]

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
    .then((cache) => cache.match(request).then((matching) => matching))

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    fromNetwork(event.request, 10000).catch(() => fromCache(event.request))
  )

  event.waitUntil(update(event.request))
})
