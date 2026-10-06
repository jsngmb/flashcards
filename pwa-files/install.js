/* Paste this at the END of main.js, and add  addInstall();  as the last line inside home() */
if('serviceWorker' in navigator){addEventListener('load',function(){navigator.serviceWorker.register('sw.js')})}
var deferred=null;
addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;addInstall()});
function isStandalone(){return matchMedia('(display-mode: standalone)').matches||navigator.standalone}
function addInstall(){
  if(isStandalone()||cat||document.getElementById('inst'))return;
  var ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
  if(!deferred&&!ios)return;
  var b=document.createElement('button');
  b.id='inst';b.className='tile';b.style.cssText='background:#fff;justify-content:center';
  b.innerHTML='<span class="ic" style="font-size:1.8rem">\u{1F4F2}</span><b style="font-size:1.2rem">Install app</b>';
  b.onclick=function(){
    if(deferred){deferred.prompt();deferred.userChoice.then(function(){deferred=null;b.remove()})}
    else{alert('Sa iPhone/iPad: pindutin ang Share button sa Safari, tapos "Add to Home Screen".')}
  };
  var m=document.querySelector('.menu');if(m)m.appendChild(b);
}
