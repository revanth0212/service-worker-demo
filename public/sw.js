/* eslint-disable */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

self.addEventListener("install", event => {
  console.log("SW Installing");
});

self.addEventListener("waiting", () => {
  console.log("SW Waiting");
});

self.addEventListener("activate", () => {
  console.log("SW Active");
});
