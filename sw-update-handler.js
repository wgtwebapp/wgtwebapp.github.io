// Custom service worker update handler
// This script will be injected into the generated service worker

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    // Force the waiting service worker to become the active service worker
    self.skipWaiting();
  }
});

// Listen for the 'activate' event to claim all clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Claim all clients immediately so the new SW takes control right away
    self.clients.claim()
  );
});

// Force update checks more frequently
self.addEventListener('fetch', (event) => {
  // Let the default service worker handle the fetch
  // This is just to ensure the service worker stays active
});

console.log('SW Update Handler: Custom update logic loaded'); 