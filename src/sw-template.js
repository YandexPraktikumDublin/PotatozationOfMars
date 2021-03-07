import { precacheAndRoute } from 'workbox-precaching'
import { registerNavigationRoute, registerRoute } from 'workbox-routing'
import { networkFirst, cacheFirst } from 'workbox-strategies'
import { Plugin as ExpirationPlugin } from 'workbox-expiration'
import { Plugin as CacheableResponsePlugin } from 'workbox-cacheable-response'
import { clientsClaim, skipWaiting } from 'workbox-core'

self.__precacheManifest = [].concat(self.__precacheManifest || [])

// precahce and route asserts built by webpack
precacheAndRoute(self.__precacheManifest, {})

// return app shell for all navigation requests
registerNavigationRoute('/app-shell')

self.importScripts(
  '/precache-manifest.{hash}.js',
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
)

registerRoute(
  /^https:\/\/dog.ceo/i,
  networkFirst({
    cacheName: 'react-pwa-demo-api-cache'
  })
)

// routing for cloud served images
registerRoute(
  /^https:\/\/.+\.(jpe?g|png|gif|svg)$/i,
  cacheFirst({
    cacheName: 'react-pwa-demo-image-cache',
    plugins: [
      new ExpirationPlugin({
        // Only cache requests for a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
        // Only cache 20 requests.
        maxEntries: 20
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
)

clientsClaim()
skipWaiting()
