importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

var extSrc = [
  'https://placehold.it/*',
  'https://jsonplaceholder.typicode.com/photos',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css',
  'https://code.jquery.com/jquery-3.3.1.slim.min.j',
  'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.js'
];

for (var i = 0; i < extSrc.length; i++) {
  workbox.routing.registerRoute(
    new RegExp(extSrc[i]),
    workbox.strategies.cacheFirst()
  );
}

// Caching CSS and JS
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "index.html",
    "revision": "f6be1ba13012bacb72e1a5c79d44f805"
  },
  {
    "url": "js/app.js",
    "revision": "732f4099d73f6e86b110e55c93b67790"
  }
]);
