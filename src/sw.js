const CACHE_VERSION = '1.0.2'
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

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.open(CURRENT_CACHE).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            if (response.status === 200) {
              cache.put(event.request, response.clone())
            }

            return response
          })
        )
      })
    })
  )
})
