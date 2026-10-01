/* ── Blog behaviour (Crams Creative) ──
   Theme toggle (shared with the homepage via localStorage), mobile menu, sticky nav. */
(function () {
  var root = document.documentElement;

  /* Theme */
  var themeBtn = document.getElementById('themeBtn');
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paint() {
    if (!themeBtn) return;
    var dark = current() === 'dark';
    themeBtn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor"><use href="#' + (dark ? 'ico-sun' : 'ico-moon') + '"/></svg>';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
    paint();
  }

  /* Mobile menu */
  window.toggleMenu = function () {
    var m = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-toggle');
    if (!m) return;
    var open = m.classList.toggle('open');
    if (btn) { btn.setAttribute('aria-expanded', String(open)); btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
  };
  document.addEventListener('click', function (e) {
    if (e.target.closest('#mobile-menu a')) { var m = document.getElementById('mobile-menu'); if (m) m.classList.remove('open'); }
  });

  /* Sticky nav border */
  var nav = document.getElementById('main-nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
