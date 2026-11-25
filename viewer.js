(function(){
  document.querySelectorAll('.viewer').forEach(function(v){
    var name=v.dataset.name,n=+v.dataset.count,i=1;
    var img=v.querySelector('.slide'),cnt=v.querySelector('.count'),bar=v.querySelector('.bar-progress span');
    var prev=v.querySelector('.prev'),next=v.querySelector('.next'),fs=v.querySelector('.fs');
    function src(k){return 'slides/'+name+'-'+(k<10?'0':'')+k+'.jpg';}
    function show(k){
      i=Math.max(1,Math.min(n,k));
      img.src=src(i);img.alt='שקף '+i+' מתוך '+n;
      cnt.textContent='שקף '+i+' מתוך '+n;
      bar.style.width=(i/n*100)+'%';
      prev.disabled=(i===1);next.disabled=(i===n);
      if(i<n){new Image().src=src(i+1);}
    }
    prev.addEventListener('click',function(){show(i-1);});
    next.addEventListener('click',function(){show(i+1);});
    v.addEventListener('keydown',function(e){
      if(e.key==='ArrowLeft'){show(i+1);e.preventDefault();}
      if(e.key==='ArrowRight'){show(i-1);e.preventDefault();}
    });
    var x0=null;
    img.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
    img.addEventListener('touchend',function(e){
      if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;x0=null;
      if(Math.abs(dx)>40){show(dx<0?i+1:i-1);}
    });
    fs.addEventListener('click',function(){
      try{var el=v.querySelector('.stage');(el.requestFullscreen||el.webkitRequestFullscreen).call(el);}catch(err){}
    });
    show(1);
  });
})();
