const CACHE_NAME = "wedding-site-v1";
const urlsToCache = [
  "/", 
  "/greetings",
  "/bride",
  "/groom",
  "/event",
  "/maps",
  "/gallery",
  "/quotes",
  "/rspv",
  "/gift",
  "/thanks",
  "/index.html",
  "/vite.svg",
];

// Install SW → pre-cache halaman dasar
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch → cek cache dulu, kalau belum ada fetch & simpan
self.addEventListener("fetch", (event) => {
  const { request } = event;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        // runtime cache untuk images atau static assets
        if (
          request.url.includes("/images/") || 
          request.destination === "style" ||
          request.destination === "script" ||
          request.destination === "font"
        ) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        }

        return networkResponse;
      });
    })
  );
});

// Activate → hapus cache lama
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
