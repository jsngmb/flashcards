// Simple offline cache for the flash cards app
var CACHE='flashcards-v1';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(
    fetch(r).then(function(res){
      var copy=res.clone();caches.open(CACHE).then(function(c){c.put(r,copy)});return res;
    }).catch(function(){return caches.match(r).then(function(m){return m||caches.match('./')})})
  );
});
