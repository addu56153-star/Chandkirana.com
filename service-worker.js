const CACHE='chand-kirana-final-v1';
const CORE=['index.html','manifest.json','service-worker.js','assets/logo.png','assets/hero-banner.jpg','assets/icon-192.png','assets/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).catch(()=>{}));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
