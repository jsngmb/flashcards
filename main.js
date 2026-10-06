var S=function(inner,vb){return '<svg viewBox="0 0 100 100" role="img" aria-hidden="true">'+inner+'</svg>'};
var ANIMALS=[['Giraffe','🦒','The tallest animal on land!'],['Kangaroo','🦘','Babies ride in a pouch.'],['Koala','🐨','Sleeps up to 20 hours a day.'],['Sloth','🦥','Moves very, very slowly.'],['Flamingo','🦩','Rests standing on one leg.'],['Peacock','🦚','Shows off colorful tail feathers.'],['Owl','🦉','Can turn its head far around.'],['Penguin','🐧','A bird that swims, not flies.'],['Octopus','🐙','Has eight long arms.'],['Hippo','🦛','Loves staying in the water.'],['Carabao','🐃','The national animal of the Philippines!'],['Hedgehog','🦔','Curls up into a prickly ball.']];
var SHAPES=[
['Circle','#ff7a59','<circle cx="50" cy="50" r="40"/>','🕒','A clock face is a circle.'],
['Square','#2ec4b6','<rect x="12" y="12" width="76" height="76" rx="4"/>','🎲','Each side of a dice is a square.'],
['Triangle','#ffb703','<polygon points="50,10 92,88 8,88"/>','🍕','A pizza slice is a triangle.'],
['Rectangle','#4cc9f0','<rect x="6" y="26" width="88" height="48" rx="4"/>','🚪','A door is a rectangle.'],
['Oval','#80c342','<ellipse cx="50" cy="50" rx="44" ry="30"/>','🥚','An egg is an oval.'],
['Star','#f72585','<polygon points="50,6 62,38 96,38 68,58 78,92 50,72 22,92 32,58 4,38 38,38"/>','⭐','Stars twinkle in the night sky.'],
['Heart','#e63946','<path d="M50 90C10 60 4 38 18 22c12-12 28-8 32 4 4-12 20-16 32-4 14 16 8 38-32 68z"/>','❤️','A heart shape means love.'],
['Hexagon','#7b5cf0','<polygon points="50,6 88,28 88,72 50,94 12,72 12,28"/>','🐝','Bees build hexagon honeycombs.'],
['Octagon','#e76f51','<polygon points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30"/>','🛑','A stop sign is an octagon.'],
['Crescent','#e9c46a','<path d="M62 8A42 42 0 1 0 62 92A32 32 0 1 1 62 8Z"/>','🌙','The moon can look like a crescent.'],
['Diamond','#4361ee','<polygon points="50,6 90,50 50,94 10,50"/>','💎','A gem can be a diamond shape.']];
var NUMS=['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
var ABC=[['Avocado','🥑'],['Broccoli','🥦'],['Coconut','🥥'],['Dinosaur','🦕'],['Eagle','🦅'],['Feather','🪶'],['Guitar','🎸'],['Helicopter','🚁'],['Island','🏝️'],['Jellyfish','🪼'],['Kiwi','🥝'],['Lemon','🍋'],['Mango','🥭'],['Noodles','🍜'],['Otter','🦦'],['Pineapple','🍍'],['Quill','✒️'],['Rocket','🚀'],['Saxophone','🎷'],['Telescope','🔭'],['Unicorn','🦄'],['Volcano','🌋'],['Whale','🐋'],['X-ray','🩻'],['Yacht','🛥️'],['Zebra','🦓']];
var LD=['Ey','Bee','Cee','Dee','Ee','Ef','Jee','Aych','Eye','Jay','Kay','El','Em','En','Oh','Pee','Kyoo','Ar','Es','Tee','Yoo','Vee','Dub-ul-yoo','Eks','Wy','Zee'];
var LS=['ay','bee','see','dee','ee','eff','gee','aitch','eye','jay','kay','el','em','en','oh','pee','cue','are','ess','tee','you','vee','double you','ex','why','zee'];
var AS=['Juh','Kuh','Kuh','Suh','Fuh','Puh','Oh','Puh','Ah','Huh','Kuh','Huh'];
var SS=['Suh','Suh','Tuh','Ruh','Oh','Suh','Huh','Huh','Ah','Kuh','Duh'];
var NS=['Wuh','Tuh','Thuh','Fuh','Fuh','Suh','Suh','Ey','Nuh','Tuh'];
var PHOTOS={
  'Avocado':'images/avocado.png',
  'Broccoli':'images/broccoli.png',
  'Coconut':'images/coconut.png',
  'Dinosaur':'images/dinosaur.png',
  'Eagle':'images/eagle.png',
  'Feather':'images/feather.png',
  'Guitar':'images/guitar.png',
  'Helicopter':'images/helicopter.png',
  'Island':'images/island.png',
  'Jellyfish':'images/jellyfish.png',
  'Kiwi':'images/kiwi.png',
  'Lemon':'images/lemon.png',
  'Mango':'images/mango.png',
  'Noodles':'images/noodles.png',
  'Otter':'images/otter.png',
  'Pineapple':'images/pineapple.png',
  'Quill':'images/quill.png',
  'Rocket':'images/rocket.png',
  'Saxophone':'images/saxophone.png',
  'Telescope':'images/telescope.png',
  'Unicorn':'images/unicorn.png',
  'Volcano':'images/volcano.png',
  'Whale':'images/whale.png',
  'Yacht':'images/yacht.png',
  'Zebra':'images/zebra.png'
};
var COL=['#ff7a59','#7b5cf0','#2ec4b6','#ffb703','#4cc9f0'];
function BE(e){return '<div class="emoji" style="font-size:min(52vw,210px)">'+e+'</div>'}
var CATS={
alphabet:{name:'Alphabet',ic:'ABC',color:'#2ec4b6',cards:ABC.map(function(a,i){var L=a[0][0];return{word:L+' for '+a[0],key:a[0],c:COL[i%5],art:'<div class="num">'+L+L.toLowerCase()+'</div><div class="emoji" style="font-size:min(22vw,84px)">'+a[1]+'</div>',back:BE(a[1]),note:a[0]+' starts with the letter '+L+'.',ph:LD[i],say:[[LS[i],.7]]}})},
animals:{name:'Animals',ic:'🦒',color:'#ffcf3f',cards:ANIMALS.map(function(a,i){return{word:a[0],key:a[0],c:COL[i%5],art:'<div class="emoji">'+a[1]+'</div>',back:BE(a[1]),note:a[2],ph:AS[i]+' - '+a[0],say:[[AS[i].toLowerCase()+',',.55],[a[0],.7]]}})},
shapes:{name:'Shapes',ic:'🔺',color:'#4cc9f0',cards:SHAPES.map(function(s,i){return{word:s[0],key:s[0],c:s[1],art:S('<g fill="'+s[1]+'">'+s[2]+'</g>'),back:BE(s[3]),note:s[4],ph:SS[i]+' - '+s[0],say:[[SS[i].toLowerCase()+',',.55],[s[0],.7]]}})},
numbers:{name:'Numbers',ic:'123',color:'#ff7a59',cards:NUMS.map(function(n,i){var d='',b='';for(var k=0;k<=i;k++){d+='<span>⭐</span>';b+='<span>🦋</span>'}return{word:n,key:n,c:COL[(i+2)%5],art:'<div class="num">'+(i+1)+'</div><div class="dots" aria-hidden="true">'+d+'</div>',back:'<div class="dots" style="font-size:min(14vw,56px);gap:6px">'+b+'</div>',note:'Count the butterflies!',ph:NS[i]+' - '+n,say:[[NS[i].toLowerCase()+',',.55],[n,.7]]}})}
};
var app=document.getElementById('app'),cat=null,idx=0,tx=null;
var VO=[],vi=0;
var FEM=/female|zira|samantha|karen|susan|hazel|moira|tessa|fiona|aria|jenny|ava|allison|victoria|joanna|salli|ivy|kendra|kimberly|google us english|siri/i,MAL=/\bmale\b|david|daniel|alex|fred|mark|guy|james|george|ryan|aaron|arthur|rishi/i;
function loadVoices(){try{var all=speechSynthesis.getVoices().filter(function(v){return /^en/i.test(v.lang)});if(!all.length)return;var sc=function(v){return (FEM.test(v.name)?2:MAL.test(v.name)?0:1)+(v.localService?.5:0)};all.sort(function(a,b){return sc(b)-sc(a)});VO=all;if(vi>=VO.length)vi=0}catch(e){}}
function pitch(){return VO[vi]?(FEM.test(VO[vi].name)?1.4:1):1.3}
try{speechSynthesis.onvoiceschanged=loadVoices;loadVoices()}catch(e){}
function speakParts(parts){
  try{
    if(!('speechSynthesis' in window))return;
    var ss=speechSynthesis;ss.cancel();if(ss.paused)ss.resume();
    setTimeout(function(){parts.forEach(function(it){
      var u=new SpeechSynthesisUtterance(it[0]),v=VO[vi];u.rate=it[1];u.pitch=pitch();u.lang='en-US';
      if(v){u.voice=v;u.lang=v.lang}
      u.onerror=function(){if(v&&!u._r){u._r=1;var f=new SpeechSynthesisUtterance(it[0]);f.rate=it[1];f.lang='en-US';ss.speak(f)}};
      ss.speak(u)})},60);
  }catch(e){}
}
function speak(t){speakParts([[t,.85]])}
function speakPh(){var c=cur();if(c.say)speakParts(c.say)}
function cycleVoice(){loadVoices();if(!VO.length)return;vi=(vi+1)%VO.length;sayNow();var h=document.getElementById('hint');if(h)h.textContent='Voice: '+VO[vi].name}
function home(){
  cat=null;
  var h='<h1>Flash Cards</h1><p class="sub">Tap a deck to start learning!</p><div class="menu">';
  Object.keys(CATS).forEach(function(k){var c=CATS[k];h+='<button class="tile" data-k="'+k+'" style="background:'+c.color+'"><span class="ic">'+c.ic+'</span><span><b>'+c.name+'</b><small>'+c.cards.length+' cards</small></span></button>'});
  app.innerHTML=h+'</div>';
  app.querySelectorAll('.tile').forEach(function(b){b.onclick=function(){open(b.dataset.k)}});
  addInstall();
}
function open(k){cat=k;idx=0;shell();show(false)}
function shell(){
  var c=CATS[cat];
  app.innerHTML='<div class="top"><button class="round" id="back" aria-label="Back to decks">←</button><div class="title">'+c.name+'</div><button class="round" id="vc" aria-label="Change voice" style="width:44px;height:44px;font-size:1.2rem">🎤</button><div class="count" id="cnt"></div></div><div class="bar"><i id="pg"></i></div><div class="stage"><div class="card" id="card" role="button" tabindex="0" aria-label="Tap to flip the card"></div></div><div class="nav"><button class="round big" id="prev" aria-label="Previous card">‹</button><button class="round say" id="say" aria-label="Say the word">🔊</button><button class="round big" id="next" aria-label="Next card">›</button></div>';
  document.getElementById('back').onclick=home;document.getElementById('vc').onclick=cycleVoice;
  document.getElementById('prev').onclick=function(){go(-1)};
  document.getElementById('next').onclick=function(){go(1)};
  document.getElementById('say').onclick=sayNow;
  var card=document.getElementById('card');
  card.onclick=flip;
  card.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}};
  card.ontouchstart=function(e){tx=e.touches[0].clientX};
  card.ontouchend=function(e){if(tx===null)return;var d=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(d)>50){e.preventDefault();go(d<0?1:-1)}};
}
function cur(){return CATS[cat].cards[idx]}
function sayNow(){var c=cur();speak(c.spoken||c.word)}
var face=0;
function render(){
  var c=cur(),card=document.getElementById('card');
  card.style.setProperty('--c',c.c);card.classList.toggle('back',face===1);
  if(face===0){var ph=c.ph?'<div class="ph"><span>'+c.ph+'</span><button aria-label="Hear how to pronounce" onclick="event.stopPropagation();speakPh()" onkeydown="event.stopPropagation()">🔊</button></div>':'';card.innerHTML=ph+'<div class="art">'+c.art+'</div><div class="word">'+c.word+'</div><div class="hint" id="hint">Tap to flip</div>'}
  else{var img=PHOTOS[c.key]?'<img src="'+PHOTOS[c.key]+'" alt="'+c.word+'" style="max-width:100%;max-height:100%;border-radius:18px;object-fit:cover">':c.back;
    card.innerHTML='<div class="art">'+img+'</div><div class="word">'+c.word+'</div><div class="note">'+c.note+'</div><div class="hint" id="hint">Tap to flip back</div>'}
}
function show(say){
  var n=CATS[cat].cards.length,card=document.getElementById('card');
  face=0;render();
  card.style.transform='';card.style.transition='';
  card.classList.remove('in');void card.offsetWidth;card.classList.add('in');
  document.getElementById('cnt').textContent=(idx+1)+' / '+n;
  document.getElementById('pg').style.width=((idx+1)/n*100)+'%';
  if(say)sayNow();
}
function flip(){
  var card=document.getElementById('card');card.classList.remove('in');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){face^=1;render();if(face)sayNow();return}
  card.style.transition='transform .18s ease-in';card.style.transform='rotateY(90deg)';
  setTimeout(function(){face^=1;render();card.style.transition='none';card.style.transform='rotateY(-90deg)';void card.offsetWidth;card.style.transition='transform .18s ease-out';card.style.transform='rotateY(0deg)';if(face)sayNow()},180);
}
function go(d){var n=CATS[cat].cards.length;idx=(idx+d+n)%n;show(true)}
document.addEventListener('keydown',function(e){if(!cat)return;if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1);if(e.key==='Escape')home()});

/* ---- Install app (PWA) ---- */
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
home();
