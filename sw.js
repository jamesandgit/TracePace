const CACHE = 'tracepace-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './data/cars-tracks.json',
  './fonts/DMSans-300-700.woff2',
  './fonts/DMMono-400.woff2',
  './fonts/DMMono-500.woff2',
  './icons/icon-192.png',
  './favicon/favicon-32x32.png',
  './favicon/android-chrome-512x512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const isNav = e.request.mode === 'navigate' ||
                new URL(e.request.url).pathname.endsWith('/index.html');

  if (isNav) {
    // Network-first for the app shell so updates reach installed users;
    // fall back to cache when offline.
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Cache-first for static assets; cache successful fetches for next time.
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached ||
      fetch(e.request).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
    ).catch(() => caches.match('./index.html'))
  );
});
