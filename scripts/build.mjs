// Fills the <!-- AUTO:name --> … <!-- /AUTO:name --> regions in index.html
// from js/data.js, and regenerates the JSON-LD. No dependencies.
//   node scripts/build.mjs          write index.html
//   node scripts/build.mjs --check  exit 1 if index.html is out of date
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { SITE, PROJECTS, APPS, MOTION, TESTIMONIALS, FAQ } = require(path.join(root, 'js/data.js'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ico = (id, cls = 'ico') => `<svg class="${cls}"><use href="#i-${id}"/></svg>`;

// ── image checks ──
const missing = [];
const need = (p, hint) => { if (!existsSync(path.join(root, p))) missing.push(`${p}   ${hint}`); };
for (const p of PROJECTS) for (const w of [1200, 640]) {
  const h = w * 10 / 16;
  need(`images/work/${p.slug}-${w}.webp`, `ffmpeg -i project-images/${p.slug}.jpg -vf "scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h}" -c:v libwebp -quality 78 images/work/${p.slug}-${w}.webp`);
}
for (const m of MOTION) { need(m.video, '(motion video)'); need(m.poster, '(640x360 WebP poster)'); }
for (const a of APPS) for (const w of [1200, 640]) need(`images/apps/${a.slug}-${w}.webp`, '(screenshot from the demo video, 16:10)');

const srcset = (dir, slug) => `/images/${dir}/${slug}-640.webp 640w, /images/${dir}/${slug}-1200.webp 1200w`;
const waUrl = SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}` : '';

// ── regions ──
const R = {};

R.preview = `<div class="browser-view">
${PROJECTS.map((p, i) => `                <img src="/images/work/${p.slug}-640.webp" width="640" height="400" alt=""${i ? ' loading="lazy"' : ' fetchpriority="high"'} data-name="${esc(p.name)}">`).join('\n')}
              </div>
              <div class="browser-cap"><span class="browser-name">${esc(PROJECTS[0].name)}</span><span class="dots">${PROJECTS.map((_, i) => `<b${i ? '' : ' class="on"'}></b>`).join('')}</span></div>`;

const t = TESTIMONIALS[0];
R.testimonial = t ? `<div class="stars" role="img" aria-label="Rated 5 out of 5">${ico('star').repeat(5)}</div>
            <blockquote class="quote">${esc(t.quote)}</blockquote>
            <div class="quote-by">${t.avatar ? `<img class="avatar" src="/${esc(t.avatar)}" width="38" height="38" alt="" loading="lazy">` : `<span class="avatar" aria-hidden="true">${esc(t.name.trim()[0] || '★')}</span>`}<div><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span></div></div>` : '';

R.stats = `<div class="stats">
              <div class="stat"><b>${PROJECTS.length}</b><span>live website builds</span></div>
              <div class="stat"><b>${APPS.length}</b><span>business apps shipped</span></div>
              <div class="stat"><b>24h</b><span>quote turnaround</span></div>
            </div>`;

R['app-names'] = `<div class="app-names">${APPS.map((a) => `<span class="chip">${esc(a.name)}</span>`).join('')}</div>`;
R.fan = APPS.slice(0, 3).map((a) => `<img src="/images/apps/${a.slug}-640.webp" width="640" height="400" alt="" loading="lazy">`).join('\n              ');

const WORK_SPANS = ['s7', 's5', 's5', 's7', 's6', 's6'];
R.work = PROJECTS.map((p, i) => `<article class="tile proj ${WORK_SPANS[i % WORK_SPANS.length]} m12 reveal" data-project>
            <button class="proj-open" type="button" aria-label="Open case study: ${esc(p.name)}" data-ev="case_open" data-ev-label="${esc(p.slug)}">
              <div class="shot"><img src="/images/work/${p.slug}-640.webp" srcset="${srcset('work', p.slug)}" sizes="(max-width:900px) 92vw, 50vw" width="1200" height="750" alt="${esc(p.name)} website" loading="lazy"><span class="chip">${esc(p.category)}</span></div>
            </button>
            <div class="meta">
              <span class="kicker">${esc(p.kicker)}</span>
              <h3>${esc(p.name)}</h3>
              <p>${esc(p.desc)}</p>
              <div class="row">${p.tags.map((tag) => `<span class="chip">${esc(tag)}</span>`).join('')}<span class="more">Case study ${ico('arrow')}</span></div>
            </div>
            <div class="case" data-live="${esc(p.liveUrl)}" data-img="/images/work/${p.slug}-1200.webp">
              <div class="case-grid">
                <div><h3>The challenge</h3><p>${esc(p.case.challenge)}</p></div>
                <div><h3>The approach</h3><p>${esc(p.case.approach)}</p></div>
                <div style="grid-column:1/-1"><h3>What was delivered</h3><ul class="ticks">${p.case.results.map((r) => `<li>${ico('check')}${esc(r)}</li>`).join('')}</ul></div>
              </div>
            </div>
          </article>`).join('\n          ');

const APP_SPANS = ['s7', 's5', 's4', 's4', 's4'];
R.apps = APPS.map((a, i) => `<article class="tile proj ${APP_SPANS[i % APP_SPANS.length]} m12 reveal">
            <button class="proj-open" type="button" data-video="/${a.video}" data-video-title="${esc(a.name)} — ${esc(a.category)}" aria-label="Watch the ${esc(a.name)} demo video">
              <div class="shot"><img src="/images/apps/${a.slug}-640.webp" srcset="${srcset('apps', a.slug)}" sizes="(max-width:900px) 92vw, 50vw" width="1200" height="750" alt="${esc(a.name)} dashboard" loading="lazy"><span class="chip">${esc(a.category)}</span><span class="playmark">${ico('play')}</span></div>
            </button>
            <div class="meta">
              <h3>${esc(a.name)}</h3>
              <p>${esc(a.desc)}</p>
              <div class="row">${a.tags.map((tag) => `<span class="chip">${esc(tag)}</span>`).join('')}<span class="more">Watch demo ${ico('play')}</span></div>
            </div>
          </article>`).join('\n          ');


const m0 = MOTION[0];
R.motion = `<div class="showcase" data-showcase>
            <div class="stage">
              <video class="stage-video" muted playsinline loop preload="none" poster="/${esc(m0.poster)}" data-src="/${esc(m0.video)}" aria-label="${esc(m0.title)}"></video>
              <button class="stage-play" type="button" aria-label="Play animation">${ico('play')}</button>
              <div class="stage-info">
                <p class="stage-tag">${esc(m0.tag)}</p>
                <h3 class="stage-title">${esc(m0.title)}</h3>
                <p class="stage-desc">${esc(m0.desc)}</p>
                <div class="stage-tools">${m0.tools.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
              </div>
            </div>
            <div class="thumbs" role="list">
${MOTION.map((m, i) => `              <button class="thumb${i ? '' : ' is-on'}" type="button" role="listitem" aria-pressed="${i ? 'false' : 'true'}" data-video="/${esc(m.video)}" data-poster="/${esc(m.poster)}" data-tag="${esc(m.tag)}" data-title="${esc(m.title)}" data-desc="${esc(m.desc)}" data-tools="${esc(m.tools.join('|'))}" data-inline>
                <img src="/${esc(m.poster)}" width="640" height="360" alt="" loading="lazy">
                <span class="thumb-text"><b>${esc(m.title)}</b><small>${esc(m.tag)}</small></span>
              </button>`).join('\n')}
            </div>
          </div>`;

R['motion-reel'] = MOTION.filter((m) => m.reel).map((m) => `<button class="reel-item" type="button" data-video="/${esc(m.video)}" data-video-title="${esc(m.title)}" aria-label="Play: ${esc(m.title)}"><img src="/${esc(m.poster)}" width="640" height="360" alt="" loading="lazy"><span class="playmark">${ico('play')}</span><span class="reel-cap">${esc(m.tag)}</span></button>`).join('\n              ');

R.faq = FAQ.map((f, i) => `<details${i ? '' : ' open'}><summary>${esc(f.q)}</summary><div class="a">${esc(f.a)}</div></details>`).join('\n        ');

R['wa-side'] = waUrl ? `<a class="icon-btn" href="${esc(waUrl)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" data-ev="whatsapp_click" data-ev-label="sidebar"><svg class="ico ico-fill"><use href="#i-wa"/></svg></a>` : '';
R['wa-channel'] = waUrl ? `<a class="tile channel is-link reveal" href="${esc(waUrl)}" target="_blank" rel="noopener" data-ev="whatsapp_click" data-ev-label="contact"><span class="badge wa"><svg class="ico" style="fill:currentColor;stroke:none"><use href="#i-wa"/></svg></span><div><b>WhatsApp</b><span>Fastest reply · tap to chat</span></div></a>` : '';
R['wa-mobile'] = waUrl
  ? `<a class="btn btn-ghost" href="${esc(waUrl)}" target="_blank" rel="noopener" data-ev="whatsapp_click" data-ev-label="mobile_bar"><svg class="ico" style="fill:currentColor;stroke:none"><use href="#i-wa"/></svg>WhatsApp</a>`
  : `<a class="btn btn-ghost" href="mailto:${esc(SITE.email)}" data-ev="email_click">Email</a>`;

// ── JSON-LD ──
const base = SITE.url;
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${base}#business`,
      name: SITE.name,
      url: base,
      description: 'Freelance web development and design studio in the Philippines building custom websites, web apps and business systems.',
      image: `${base}brand/og.png`,
      logo: `${base}images/brand/icon-180.png`,
      email: SITE.email,
      priceRange: '$$',
      address: { '@type': 'PostalAddress', addressCountry: 'PH' },
      areaServed: ['Philippines', 'Worldwide'],
      founder: { '@id': `${base}#marc` },
      sameAs: [SITE.linkedin],
      knowsAbout: ['Web development', 'Web design', 'UI/UX design', 'Branding', 'SEO', 'Web applications', 'Motion graphics', 'Video production', 'Three.js', 'React', 'Next.js'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web design & development services',
        itemListElement: ['Websites', 'Web apps & business systems', 'Branding', 'UI/UX design', 'SEO & growth', 'Website maintenance', 'Promo & app showcase videos']
          .map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${base}#marc`,
      name: SITE.owner,
      jobTitle: 'Freelance Web Developer & Designer',
      image: `${base}images/brand/marc-480.webp`,
      worksFor: { '@id': `${base}#business` },
      sameAs: [SITE.linkedin],
    },
    { '@type': 'WebSite', '@id': `${base}#website`, url: base, name: SITE.name, publisher: { '@id': `${base}#business` } },
    {
      '@type': 'ItemList',
      '@id': `${base}#work`,
      name: 'Featured website projects',
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: p.liveUrl, description: p.desc })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${base}#faq`,
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};
R.jsonld = `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2).replace(/</g, '\\u003c')}\n  </script>`;

// ── apply ──
const file = path.join(root, 'index.html');
const before = readFileSync(file, 'utf8');
let html = before;
const seen = new Set();
html = html.replace(/(<!-- AUTO:([\w-]+) -->)[\s\S]*?(<!-- \/AUTO:\2 -->)/g, (m, open, name, close) => {
  if (!(name in R)) throw new Error(`No generator for AUTO:${name}`);
  seen.add(name);
  const indent = (m.match(/\n([ \t]*)<!-- \/AUTO/) || [, ''])[1];
  return R[name] ? `${open}\n${indent}${R[name]}\n${indent}${close}` : `${open}\n${indent}${close}`;
});
for (const name of Object.keys(R)) if (!seen.has(name)) console.warn(`warning: AUTO:${name} marker not found in index.html`);

if (missing.length) { console.warn('\nMissing images:'); for (const m of missing) console.warn('  ' + m); }

if (process.argv.includes('--check')) {
  if (html !== before) { console.error('index.html is out of date — run: node scripts/build.mjs'); process.exit(1); }
  console.log('index.html is up to date');
} else {
  writeFileSync(file, html);
  console.log(`index.html built: ${PROJECTS.length} projects, ${APPS.length} apps, ${FAQ.length} FAQs, WhatsApp ${waUrl ? 'on' : 'off (set SITE.whatsapp)'}`);
}
