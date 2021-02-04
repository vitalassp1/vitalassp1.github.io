importScripts('https://web.webpushs.com/sp-push-worker-fb.js?ver=2.0');
importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.min.js");

const {routing, strategies, expiration, cacheableResponse} = workbox;
const {registerRoute} = routing;
const {CacheFirst} = strategies;
const {ExpirationPlugin} = expiration;
const {CacheableResponsePlugin} = cacheableResponse;

const maxAgeSeconds = 12 * 60 * 60

registerRoute(({request}) => request.destination === "style", new CacheFirst({
    cacheName: "styles", plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({maxAgeSeconds}),
    ]
}))

registerRoute(({request}) => request.destination === "font", new CacheFirst({
    cacheName: "fonts", plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({maxAgeSeconds}),
    ]
}))

registerRoute(({request}) => request.destination === "image", new CacheFirst({
    cacheName: "images", plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({maxAgeSeconds}),
    ]
}))

registerRoute(({request}) => request.destination === "script", new CacheFirst({
    cacheName: "scripts", plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({maxAgeSeconds}),
    ]
}))
