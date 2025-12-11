const CACHE_NAME = 'nextjs-cache-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // hanya GET
  if (req.method !== 'GET') return;

  let url;
  try {
    url = new URL(req.url);
  } catch (err) {
    return; // malformed URL -> skip
  }

  // hanya http/https
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // hanya same-origin (opsional, tapi aman)
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(req);
      const networkPromise = fetch(req)
        .then(async (networkResponse) => {
          // tangani cache.put secara defensif
          try {
            await cache.put(req, networkResponse.clone());
          } catch (err) {
            // ignore put errors (misalnya opaque / cors / extension)
            // console.warn('cache.put failed', err);
          }
          return networkResponse;
        })
        .catch(() => cached); // jika fetch gagal, fallback ke cache jika ada

      return cached || networkPromise;
    })
  );
});
