window.onload = function() {

  // Register service worker to control making site work offline

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://jeremy-am.github.io/Lyon-3/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
};
