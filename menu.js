(function(){
  var btn=document.getElementById('menu-btn'),nav=document.getElementById('site-nav');
  if(!btn||!nav)return;
  function set(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');}
  btn.addEventListener('click',function(){set(!nav.classList.contains('open'));});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);}});
  nav.addEventListener('click',function(e){if(e.target.closest('a')){set(false);}});
})();
