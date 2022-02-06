import { registerRoute } from "workbox-routing"
import { ExpirationPlugin } from "workbox-expiration";
import { CacheFirst, NetworkFirst } from "workbox-strategies"
import { CacheableResponsePlugin } from "workbox-cacheable-response"

/**
 * Cache Images, JS, CSS.
 */
registerRoute(
  ({ request }) =>
    request.destination === "image" ||
    "script" ||
    request.destination === "style",
  new CacheFirst({
    cacheName: "assets",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 12 * 30 * 24 * 60 * 60, // 360 Days
      }),
    ],
  })
);

/**
 * Cache Drupal pages.
 */
registerRoute(
  ({ url }) => url.origin === self.location.origin 
    && !url.pathname.startsWith('/admin')
    && !url.pathname.endsWith('/edit'),
  new NetworkFirst({
    cacheName: "pages",
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);
