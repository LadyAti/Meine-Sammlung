const CACHE_NAME = "ladyati-collection-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/app.css",
  "./css/album.css",
  "./css/cards.css",
  "./css/animations.css",
  "./js/app.js",
  "./js/router.js",
  "./js/ui.js",
  "./js/data.js",
  "./data/albums.json"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
