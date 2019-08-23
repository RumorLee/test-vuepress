/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a731fbc248f886e9a1459d94175cf6f6"
  },
  {
    "url": "assets/css/0.styles.e5e254fa.css",
    "revision": "587cfe1a37b1801b0d8beb5d557bdc09"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.0c1cd6fb.js",
    "revision": "16c45a2ea0de5b751e92b41cf2f82a25"
  },
  {
    "url": "assets/js/3.a2f99e8d.js",
    "revision": "f5fb5856b51689b180805483b04448b2"
  },
  {
    "url": "assets/js/4.04d6c729.js",
    "revision": "24b9a777f166480e829519ab303f33bb"
  },
  {
    "url": "assets/js/5.2ed27ad0.js",
    "revision": "5ec6c06344c74f6932ad6e2f1ae10291"
  },
  {
    "url": "assets/js/6.ad348627.js",
    "revision": "41f26260fcd5794ae1766cd7b2ceafe8"
  },
  {
    "url": "assets/js/7.a1f59a67.js",
    "revision": "e92635594febadd8c5eaa2325ee52eb0"
  },
  {
    "url": "assets/js/8.5a94662c.js",
    "revision": "8b029a2fcbf1e9d059f78e4ee6492a69"
  },
  {
    "url": "assets/js/app.01cd39b5.js",
    "revision": "7a15440857dba01c90a1eed235a65746"
  },
  {
    "url": "index.html",
    "revision": "2b2cfea28fe6720d41aa949316aa5bfa"
  },
  {
    "url": "test.html",
    "revision": "11479a50312c0a8071acef554458ea76"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
