/* ── Blog shared behaviour (CRAMS Creative) ──
   Minimal + guarded: theme toggle, mobile menu, sticky nav, scroll-top.
   Reuses global markup (nav/footer) so it never throws on missing elements. */
(function(){
  /* Theme toggle */
  var themeBtn = document.getElementById('themeBtn');
  if(themeBtn){
    var isDark = true;
    themeBtn.addEventListener('click', function(){
      isDark = !isDark;
      document.body.classList.toggle('light', !isDark);
      themeBtn.innerHTML = isDark
        ? '<svg width="15" height="15"><use href="#ico-moon"/></svg>'
        : '<svg width="15" height="15"><use href="#ico-sun"/></svg>';
    });
  }

  /* Mobile menu */
  window.toggleMenu = function(){
    var m = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-toggle');
    if(!m) return;
    var open = m.classList.toggle('open');
    if(btn) btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  /* Sticky nav shadow + scroll-top reveal */
  var nav = document.getElementById('main-nav');
  var scrollTop = document.getElementById('scroll-top');
  function onScroll(){
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    if(scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 600);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
