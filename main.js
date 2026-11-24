(function(){
  var nav=document.querySelector('.nav'),btn=document.querySelector('.nav__toggle'),menu=document.getElementById('menu');
  function setOpen(o){nav.classList.toggle('is-open',o);btn.setAttribute('aria-expanded',String(o));btn.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú');document.body.style.overflow=o?'hidden':'';}
  btn.addEventListener('click',function(){setOpen(!nav.classList.contains('is-open'));});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
  var dev=document.querySelectorAll('.develop');
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){dev.forEach(function(d){d.classList.add('is-in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}});},{threshold:.35});
  dev.forEach(function(d){io.observe(d);});
})();
