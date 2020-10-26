self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       'https://jeremy-am.github.io/Lyon-3/',
       'https://jeremy-am.github.io/Lyon-3/index.html',
       'https://jeremy-am.github.io/Lyon-3/index.js',
       'https://jeremy-am.github.io/Lyon-3/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
