// ponytail: badge style map keeps render.js ignorant of color values
const BADGE = {
  primary:   'background:rgba(138,77,255,.22);border:1px solid rgba(138,77,255,.5);color:#8A4DFF',
  blue:      'background:rgba(91,44,255,.22);border:1px solid rgba(91,44,255,.5);color:#8A7CFF',
  secondary: 'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6)',
};

const CHECK_SVG = '<svg width="13" height="13" style="color:#8A4DFF;flex-shrink:0"><use href="#ico-check"/></svg>';
const EXTERNAL_SVG = '<svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14 21 3"/></svg>';
const PLAY_SVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>';

/* Category-specific CSS visuals — no external images needed */
function buildVisual(heroCat) {
  var cat = String(heroCat).toLowerCase().replace(/&amp;/g,'&');
  if (cat.indexOf('e-commerce') !== -1 || cat.indexOf('ecommerce') !== -1 || cat.indexOf('jewelry') !== -1 || cat.indexOf('luxury') !== -1) {
    return '<div class="proj-visual vis-ecommerce"><div class="vis-overlay">'
      + '<div class="prod-card"><div class="prod-thumb"></div><div class="prod-bar"></div><div class="prod-bar short"></div><div class="prod-price"></div></div>'
      + '<div class="prod-card"><div class="prod-thumb" style="background:linear-gradient(135deg,rgba(245,158,11,.1),rgba(138,77,255,.06))"></div><div class="prod-bar"></div><div class="prod-bar short"></div><div class="prod-price"></div></div>'
      + '<div class="prod-card"><div class="prod-thumb"></div><div class="prod-bar"></div><div class="prod-bar short"></div><div class="prod-price"></div></div>'
      + '</div></div>';
  }
  if (cat.indexOf('sport') !== -1 || cat.indexOf('community') !== -1 || cat.indexOf('pickleball') !== -1) {
    return '<div class="proj-visual vis-sports"><div class="vis-overlay">'
      + '<div class="court"></div><div class="court"></div>'
      + '<div class="court-line"></div><div class="court-line"></div>'
      + '<div class="ball"></div><div class="ball"></div>'
      + '</div></div>';
  }
  if (cat.indexOf('corporate') !== -1 || cat.indexOf('construction') !== -1) {
    return '<div class="proj-visual vis-corporate"><div class="vis-overlay">'
      + '<div class="tower"></div><div class="tower"></div><div class="tower"></div>'
      + '<div class="beam"></div><div class="beam"></div>'
      + '<div class="window"></div><div class="window"></div><div class="window"></div><div class="window"></div>'
      + '</div></div>';
  }
  if (cat.indexOf('restaurant') !== -1 || cat.indexOf('dining') !== -1 || cat.indexOf('food') !== -1) {
    return '<div class="proj-visual vis-restaurant"><div class="vis-overlay">'
      + '<div class="plate"></div><div class="plate-inner"></div>'
      + '<div class="utensil"></div><div class="utensil"></div>'
      + '<div class="steam"></div><div class="steam"></div><div class="steam"></div>'
      + '</div></div>';
  }
  if (cat.indexOf('animation') !== -1 || cat.indexOf('motion') !== -1 || cat.indexOf('interactive') !== -1) {
    return '<div class="proj-visual vis-creative"><div class="vis-overlay">'
      + '<div class="particle"></div><div class="particle"></div><div class="particle"></div>'
      + '<div class="particle"></div><div class="particle"></div><div class="particle"></div>'
      + '<div class="p-line"></div><div class="p-line"></div><div class="p-line"></div>'
      + '</div></div>';
  }
  if (cat.indexOf('ai') !== -1 || cat.indexOf('saas') !== -1 || cat.indexOf('tech') !== -1) {
    return '<div class="proj-visual vis-ai"><div class="vis-overlay">'
      + '<div class="chip"></div>'
      + '<div class="trace"></div><div class="trace"></div><div class="trace"></div><div class="trace"></div>'
      + '<div class="node-dot"></div><div class="node-dot"></div><div class="node-dot"></div><div class="node-dot"></div>'
      + '<div class="pulse"></div><div class="pulse"></div>'
      + '</div></div>';
  }
  /* Fallback: creative particles */
  return '<div class="proj-visual vis-creative"><div class="vis-overlay">'
    + '<div class="particle"></div><div class="particle"></div><div class="particle"></div>'
    + '<div class="particle"></div><div class="particle"></div><div class="particle"></div>'
    + '<div class="p-line"></div><div class="p-line"></div><div class="p-line"></div>'
    + '</div></div>';
}

function renderProject(p) {
  return `
    <div class="project-card fade-in" data-type="${p.type}" data-tags="${p.searchTags}" data-hero-name="${p.heroName}" data-hero-cat="${p.heroCat}">
      <div class="proj-img-wrap">
        ${buildVisual(p.heroCat)}
        <div class="proj-img-overlay"></div>
        <div class="proj-badges">
          <span class="proj-badge" style="${BADGE[p.badge.style]}">${p.badge.label}</span>
          <span class="proj-badge" style="${BADGE.secondary}">Independent Build</span>
        </div>
        <div class="proj-info">
          <div class="proj-title">${p.title}</div>
          <div class="proj-line">${p.subtitle}</div>
        </div>
      </div>
      <div class="proj-body">
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">${p.projTags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-footer">
          <span class="proj-toggle" onclick="toggleCase(this)">See the Results ↓</span>
          <a href="${p.liveUrl}" class="proj-live" onclick="window.open('${p.liveUrl}','_blank','noopener,noreferrer');return false">
            Live Demo&nbsp;${EXTERNAL_SVG}
          </a>
        </div>
      </div>
      <div class="proj-case" style="display:none">
        <div class="proj-case-inner">
          <div><p class="case-label">Challenge</p><p class="case-txt">${p.case.challenge}</p></div>
          <div><p class="case-label">Approach</p><p class="case-txt">${p.case.approach}</p></div>
          <div><p class="case-label">Solution &amp; Result</p></div>
          <div>${p.case.results.map(r => `<div class="case-result">${CHECK_SVG}<span>${r}</span></div>`).join('')}</div>
        </div>
      </div>
    </div>`;
}

function renderApp(a) {
  return `
    <div class="app-card" data-hero-name="${a.heroName}" data-hero-cat="${a.heroCat}" onclick="openVideo('${a.videoSrc}','${a.videoTitle}')">
      <div class="app-video-thumb">
        <video src="${a.videoSrc}" muted preload="none" poster="${a.poster}"></video>
        <div class="app-play-btn"><div class="app-play-circle">${PLAY_SVG}</div></div>
      </div>
      <div class="app-info">
        <span class="app-badge">${a.badgeLabel}</span>
        <h3 class="app-title">${a.title}</h3>
        <p class="app-desc">${a.desc}</p>
        <div class="app-tags">${a.tags.map(t => `<span class="app-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('projectsGrid').innerHTML = PROJECTS.map(renderProject).join('');
  document.querySelector('.apps-grid').innerHTML = APPS.map(renderApp).join('');

  // ponytail: main observer ran before these elements existed — re-observe rendered fade-ins
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('#projectsGrid .fade-in, .apps-grid .fade-in').forEach(function (el) {
    obs.observe(el);
  });
});
