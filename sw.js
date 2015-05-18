console.log("Service worker entry");

self.addEventListener('install', function(e) {
  console.log("Service worker installed");
});

self.addEventListener('activate', function(e) {
  console.log("Service worker activated");
});

self.addEventListener('fetch', function(event) {
  console.log('fetching');
  console.log(event);
  event.respondWith(
    caches.match(event.request).then( function(response) {
      return response || fetch(event.request);
    })
  );
});
