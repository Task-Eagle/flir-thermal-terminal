const CACHE_NAME = 'thermal-terminal-v1';
const ASSETS = [
  'thermal_camera_template.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Cache all critical UI skin components immediately upon installation
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Intercept interface asset requests for rapid local execution
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
