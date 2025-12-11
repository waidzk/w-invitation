const CACHE_NAME = "nextjs-cache-v1";

// install event (precache halaman utama)
self.addEventListener("install", event => {
  self.skipWaiting();
});

// activate event
self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

// STALE-WHILE-REVALIDATE
self.addEventListener("fetch", event => {
  const request = event.request;

  // Hanya cache GET request
  if (request.method !== "GET") return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(request).then(cachedResponse => {
        const fetchPromise = fetch(request)
          .then(networkResponse => {
            // Bila berhasil, update cache
            cache.put(request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => cachedResponse);

        // Kembalikan cache lebih dulu, sambil update
        return cachedResponse || fetchPromise;
      });
    })
  );
});
