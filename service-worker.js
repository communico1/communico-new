const CACHE_NAME = 'communico-cache-v1';
const assets = [
  '/communico-new/',
  '/communico-new/index.html',
  '/communico-new/manifest.json'
];

// Installazione dell'app in background
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Gestione dei file per far funzionare l'app offline o con connessione lenta
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
