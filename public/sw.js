/* eslint-disable */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

const preCacheAssets = [
  "favicon.ico",
  "index.html",
  "logo192.png",
  "logo512.png",
  "manifest.json",
  "robots.txt",
  "/"
];

const getCacheName = url => {
  if (preCacheAssets.includes(url)) {
    return "static-assets";
  } else if (new RegExp("/*.js").test(url)) {
    return "js";
  } else {
    return "others";
  }
};

self.addEventListener("install", event => {
  console.log("SW Installing");
  self.skipWaiting();
  event.waitUntil(
    caches.open("static-assets").then(cache => {
      cache.addAll(preCacheAssets).then(() => {
        console.log("Added pre cache assets to static-assets cache");
      });
    })
  );
});

self.addEventListener("waiting", () => {
  console.log("SW Waiting");
});

self.addEventListener("activate", () => {
  console.log("SW Active");
  clients.claim();
});

workbox.routing.registerRoute(
  ({ url }) => preCacheAssets.includes(url),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp("/*.js"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "jsFiles"
  })
);

// self.addEventListener("fetch", event => {
//   const key = new URL(event.request.url).pathname;
//   event.respondWith(
//     caches.match(key).then(respose => {
//       if (respose) {
//         console.log(
//           `Response for ${key} found in cache. Respoding with cached result.`
//         );
//         return respose;
//       } else {
//         console.log(`Response for ${key} not found in cache. Fetching...`);
//         return fetch(event.request).then(respose => {
//           const responseToCache = respose.clone();
//           const cacheName = getCacheName(responseToCache.url);
//           caches.open(cacheName).then(cache => {
//             cache.put(event.request, responseToCache);
//             console.log(
//               `Added ${key} to cache. Should be avaiable for future use.`
//             );
//           });
//           return respose;
//         });
//       }
//     })
//   );
// });
