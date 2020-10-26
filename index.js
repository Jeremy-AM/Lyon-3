window.onload = function() {

  // Register service worker to control making site work offline

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
};
