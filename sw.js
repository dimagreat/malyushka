// Offline support: the app keeps working without internet after the first open.
const CACHE = 'malyushka-v10';
const FILES = ['./', './index.html', './manifest.json',
  './paints.js', './sounds.js', './sounds/animals.js', './sounds/cat.m4a', './sounds/puppy.m4a', './sounds/bunny.m4a', './sounds/hamster.m4a', './sounds/parrot.m4a', './sounds/cow.m4a', './sounds/pig.m4a', './sounds/chicken.m4a', './sounds/sheep.m4a', './sounds/whale.m4a', './sounds/lion.m4a', './sounds/elephant.m4a', './sounds/zebra.m4a', './sounds/owl.m4a', './sounds/bear.m4a', './sounds/squirrel.m4a',  './pages/core.js', './pages/home.js', './pages/farm.js', './pages/sea.js', './pages/savanna.js', './pages/forest.js', './pages/dino.js', './pages/transport.js', './pages/fairy.js', './pages/holiday.js', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first (so updates arrive), cache as fallback when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    // no-cache: always check the server, so new versions show up right away
    fetch(e.request.url, { cache: 'no-cache' })
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
