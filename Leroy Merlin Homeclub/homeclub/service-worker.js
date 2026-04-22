/* HomeClub service worker — offline-after-first-load.
   Cache-first for the static shell; network-falling-back-to-cache for JSON. */
const VERSION = 'homeclub-v2-20260422';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/tokens.css',
  './assets/css/shared.css',
  './assets/css/member.css',
  './assets/css/admin.css',
  './assets/css/specials.css',
  './assets/js/data.js',
  './assets/js/app.js',
  './assets/js/charts.js',
  './assets/img/cmr-logo.png',
  './vendor/chart.umd.min.js',
  './content/copy.json',
  './app/onboarding.html',
  './app/home.html',
  './app/project.html',
  './app/gamification.html',
  './app/coalition.html',
  './app/events.html',
  './app/in-store.html',
  './admin/index.html',
  './admin/members.html',
  './admin/mystery-shop.html',
  './admin/why-cmr.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== VERSION).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // For same-origin requests, try cache first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(resp => {
          if (resp && resp.status === 200 && resp.type === 'basic') {
            const copy = resp.clone();
            caches.open(VERSION).then(c => c.put(req, copy));
          }
          return resp;
        }).catch(() => cached);
      })
    );
  }
  // Cross-origin (Google Fonts etc.) — let the browser handle; fall back to cache if offline
});
