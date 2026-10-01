/* Crams Creative — homepage behaviour
   Views (hash routing), dialogs, theme, mobile menu, preview carousel,
   scroll reveals, quote form and GA4 events. No dependencies. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  var $ = function (s, el) { return (el || doc).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function track(name, params) { try { if (window.gtag) gtag('event', name, params || {}); } catch (e) {} }

  /* ── Views ─────────────────────────────────────────── */
  var views = $$('.view');
  var viewIds = views.map(function (v) { return v.id; });
  var navLinks = $$('.side-nav a[data-view]');

  // anchor ids inside a view (e.g. #pricing lives in #services)
  function viewFor(id) {
    if (!id) return 'home';
    if (viewIds.indexOf(id) > -1) return id;
    var el = doc.getElementById(id);
    var v = el && el.closest('.view');
    return v ? v.id : null;
  }

  function show(hash, opts) {
    opts = opts || {};
    var id = (hash || '').replace(/^#/, '');
    var viewId = viewFor(id);
    if (!viewId) { if (!opts.initial) return false; viewId = 'home'; id = ''; }
    views.forEach(function (v) { v.classList.toggle('is-active', v.id === viewId); });
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-view') === viewId) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    var view = doc.getElementById(viewId);
    if (view && view.getAttribute('data-title')) doc.title = view.getAttribute('data-title');
    closeMenu();
    revealIn(view);
    var target = id && id !== viewId ? doc.getElementById(id) : null;
    if (target) {
      requestAnimationFrame(function () { target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); });
    } else if (!opts.initial) {
      window.scrollTo(0, 0);
    }
    if (opts.focus && view) { var h = $('h1, h2', view); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
    return true;
  }

  doc.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var hash = a.getAttribute('href');
    if (hash.length < 2 || !viewFor(hash.slice(1))) return;
    e.preventDefault();
    if (a.hasAttribute('data-close')) closeDialogs();
    if (location.hash !== hash) history.pushState(null, '', hash);
    show(hash, { focus: !!a.closest('.side-nav') });
  });
  window.addEventListener('popstate', function () { show(location.hash); });
  window.addEventListener('hashchange', function () { show(location.hash); });

  /* ── Theme ─────────────────────────────────────────── */
  var themeBtn = $('#themeBtn');
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function syncThemeBtn() {
    if (!themeBtn) return;
    var dark = currentTheme() === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncThemeBtn();
  });
  syncThemeBtn();

  /* ── Mobile menu ───────────────────────────────────── */
  var sidebar = $('#sidebar'), menuBtn = $('#menuBtn');
  function closeMenu() {
    if (!sidebar || !sidebar.classList.contains('open')) return;
    sidebar.classList.remove('open');
    if (menuBtn) { menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu'); }
  }
  if (menuBtn) menuBtn.addEventListener('click', function () {
    var open = sidebar.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ── Dialogs ───────────────────────────────────────── */
  var lastFocus = null;
  function openDialog(d) {
    lastFocus = doc.activeElement;
    if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
  }
  function closeDialogs() { $$('dialog[open]').forEach(function (d) { d.close ? d.close() : d.removeAttribute('open'); }); }
  $$('dialog.modal').forEach(function (d) {
    d.addEventListener('click', function (e) {
      if (e.target === d || e.target.closest('[data-close]')) {
        if (e.target.closest('a[href^="#"]')) return; // handled by router (closes too)
        d.close();
      }
    });
    d.addEventListener('close', function () {
      var v = $('video', d); if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    });
  });

  var pd = $('#projectDialog');
  doc.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-project] .proj-open');
    var card = !btn && e.target.closest('[data-project]');
    if (card && !e.target.closest('a')) btn = $('.proj-open', card);
    if (!btn || !pd) return;
    var art = btn.closest('[data-project]'), cs = $('.case', art);
    $('#pdImg').src = cs.getAttribute('data-img');
    $('#pdImg').alt = $('h3', art).textContent + ' website screenshot';
    $('#pdKicker').textContent = $('.kicker', art).textContent;
    $('#pdTitle').textContent = $('h3', art).textContent;
    $('#pdDesc').textContent = $('.meta p', art).textContent;
    $('#pdCase').innerHTML = cs.innerHTML;
    $('#pdLive').href = cs.getAttribute('data-live');
    $('#pdLive').setAttribute('data-ev-label', $('h3', art).textContent);
    openDialog(pd);
  });

  var vd = $('#videoDialog'), vdVideo = $('#vdVideo');
  doc.addEventListener('click', function (e) {
    var t = e.target.closest('[data-video]:not([data-inline])');
    if (!t || !vd) return;
    var title = t.getAttribute('data-video-title') || 'Video';
    $('#vdTitle').textContent = title;
    vdVideo.src = t.getAttribute('data-video');
    openDialog(vd);
    var p = vdVideo.play(); if (p && p.catch) p.catch(function () {});
    track('video_play', { video_title: title });
  });


  /* ── 3D / motion showcase (inline player) ──────────── */
  $$('[data-showcase]').forEach(function (sc) {
    var stage = $('.stage', sc), video = $('.stage-video', stage), playBtn = $('.stage-play', stage);
    var visible = false, userPaused = false;
    function sync() {
      var shouldPlay = visible && !doc.hidden && !userPaused && sc.offsetParent !== null && !reduceMotion;
      if (shouldPlay) {
        if (!video.getAttribute('src')) video.src = video.getAttribute('data-src');
        var p = video.play(); if (p && p.catch) p.catch(function () { stage.classList.add('paused'); });
        stage.classList.remove('paused');
      } else {
        if (!video.paused) video.pause();
        if (reduceMotion || userPaused) stage.classList.add('paused');
      }
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (en) { visible = en[0].intersectionRatio > 0.35; sync(); }, { threshold: [0, 0.35, 0.7] }).observe(stage);
    doc.addEventListener('visibilitychange', sync);
    window.addEventListener('hashchange', function () { setTimeout(sync, 50); });
    if (reduceMotion) stage.classList.add('paused');
    playBtn.addEventListener('click', function () { userPaused = false; if (!video.getAttribute('src')) video.src = video.getAttribute('data-src'); video.play(); stage.classList.remove('paused'); });
    video.addEventListener('click', function () { if (video.paused) playBtn.click(); else { userPaused = true; video.pause(); stage.classList.add('paused'); } });
    $$('.thumb', sc).forEach(function (th) {
      th.addEventListener('click', function () {
        $$('.thumb', sc).forEach(function (o) { o.classList.toggle('is-on', o === th); o.setAttribute('aria-pressed', String(o === th)); });
        $('.stage-tag', stage).textContent = th.getAttribute('data-tag');
        $('.stage-title', stage).textContent = th.getAttribute('data-title');
        $('.stage-desc', stage).textContent = th.getAttribute('data-desc');
        $('.stage-tools', stage).innerHTML = '';
        th.getAttribute('data-tools').split('|').forEach(function (x) { var sp = doc.createElement('span'); sp.textContent = x; $('.stage-tools', stage).appendChild(sp); });
        video.setAttribute('aria-label', th.getAttribute('data-title'));
        video.poster = th.getAttribute('data-poster');
        video.setAttribute('data-src', th.getAttribute('data-video'));
        video.src = th.getAttribute('data-video');
        userPaused = false; visible = true; sync();
        track('motion_view', { item: th.getAttribute('data-title') });
      });
    });
  });

  /* ── Featured work preview carousel ────────────────── */
  var pv = $('.browser-view');
  if (pv) {
    var imgs = $$('img', pv), dots = $$('.browser-cap .dots b'), nameEl = $('.browser-name'), idx = 0;
    var showSlide = function (n) {
      imgs.forEach(function (im, i) { im.classList.toggle('on', i === n); });
      dots.forEach(function (d, i) { d.classList.toggle('on', i === n); });
      if (nameEl) nameEl.textContent = imgs[n].getAttribute('data-name');
    };
    showSlide(0);
    if (!reduceMotion && imgs.length > 1) setInterval(function () {
      if (doc.hidden || !pv.offsetParent) return;
      idx = (idx + 1) % imgs.length; showSlide(idx);
    }, 3200);
  }

  /* ── Scroll reveals ────────────────────────────────── */
  var io = ('IntersectionObserver' in window) && !reduceMotion ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  function revealIn(scope) {
    $$('.reveal:not(.in)', scope).forEach(function (el, i) {
      if (io) { el.style.transitionDelay = Math.min(i, 6) * 50 + 'ms'; io.observe(el); }
      else el.classList.add('in');
    });
  }

  /* ── Quote form (Formspree) ────────────────────────── */
  var form = $('#quoteForm'), status = $('#formStatus');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = $$('[required]', form).filter(function (f) { return !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim())); });
    $$('[aria-invalid]', form).forEach(function (f) { f.removeAttribute('aria-invalid'); });
    if (bad.length) {
      bad.forEach(function (f) { f.setAttribute('aria-invalid', 'true'); });
      status.className = 'form-status err';
      status.textContent = 'Please add your name, a valid email and a short message.';
      bad[0].focus();
      return;
    }
    var btn = $('button[type=submit]', form);
    btn.disabled = true; btn.firstChild.textContent = 'Sending… ';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('bad status');
        status.className = 'form-status ok';
        status.textContent = 'Thanks! Your request is in. I\'ll reply within 24 hours.';
        track('generate_lead', { form: 'quote', service: form.service.value, budget: form.budget.value });
        form.reset();
      })
      .catch(function () {
        status.className = 'form-status err';
        status.textContent = 'Something went wrong sending your request. Please email hirememarc2992@gmail.com instead.';
      })
      .then(function () { btn.disabled = false; btn.firstChild.textContent = 'Send request '; });
  });

  /* ── Generic click events ──────────────────────────── */
  doc.addEventListener('click', function (e) {
    var el = e.target.closest('[data-ev]');
    if (el) track(el.getAttribute('data-ev'), { label: el.getAttribute('data-ev-label') || '' });
  });

  /* ── Init ──────────────────────────────────────────── */
  show(location.hash, { initial: true });
})();
