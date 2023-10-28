const CACHE_NAME = 'pub-chat-task-manager-1-0-2';
const urlsToCache = ['/manifest.json', '/index.html'];

// // Install a service worker
// self.addEventListener('install', event => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     }),
//   );
// });

// // Cache and return requests
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     }),
//   );
// });

// // Update a service worker
// self.addEventListener('activate', event => {
//   const cacheWhitelist = ['pub-chat-task-manager'];
//   event.waitUntil(
//     caches.keys().then(cacheNames =>
//       Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         }),
//       ),
//     ),
//   );
// });

// =============================

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('activate', function (event) {});

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       if (response) {
//         return response;
//       } else {
//         return fetch(event.request).then(function (res) {
//           return caches.open('dynamic').then(function (cache) {
//             cache.put(event.request.url, res.clone());
//             return res;
//           });
//         });
//       }
//     }),
//   );
// });

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    }),
  );
});
