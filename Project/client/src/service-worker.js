const CACHE = 'minimalist-todo-v1';
const OFFLINE_URLS = ['/', '/index.html'];

self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE).then(cache => cache.addAll(OFFLINE_URLS)));
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request)));
});
