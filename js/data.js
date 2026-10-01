// ─────────────────────────────────────────────────────────────
//  Crams Creative — site content (single source of truth)
//
//  Edit this file, then run:   node scripts/build.mjs
//  The build writes the Work / Apps / FAQ / testimonial sections and
//  the structured data (JSON-LD) into index.html, so the page stays
//  fast, crawlable, and always matches this file.
//
//  Add a project:  1) put a screenshot at project-images/<slug>.jpg
//                  2) add an object to PROJECTS below
//                  3) run the build (it tells you if the WebP images are missing)
//  Text is plain text — no HTML needed (& and < are escaped for you).
// ─────────────────────────────────────────────────────────────

const SITE = {
  name: 'Crams Creative',
  owner: 'Marc Patrick Orcullo',
  url: 'https://www.cramscreative.com/',
  email: 'hirememarc2992@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marc-patrick-orcullo-8903b117a',
  // WhatsApp number in international format, digits only (e.g. '639171234567').
  // Leave empty to hide every WhatsApp button.
  whatsapp: '639951853184',
  whatsappText: 'Hi Marc! I found Crams Creative and would like a quote for a website.',
  formspree: 'https://formspree.io/f/mdavkjow',
};

const PROJECTS = [
  {
    slug: 'maison-luxe',
    name: 'Maison Luxe',
    category: 'E-commerce',
    kicker: 'Luxury jewelry & bags',
    desc: 'Luxury online store with cart, checkout and a custom admin dashboard for products and orders.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Admin panel'],
    liveUrl: 'https://gmsnowflakes.github.io/maison-luxe/',
    case: {
      challenge: 'A luxury jewelry brand needed an online store that matched its premium positioning — not a generic template, but a custom experience that made products feel worth the price before checkout.',
      approach: 'Designed from the ground up with a dark luxury aesthetic. Every step — product listings, cart, checkout — was crafted to build trust and reinforce perceived value.',
      results: [
        'Full store: storefront, cart, checkout, accounts',
        'Admin dashboard to manage products, orders and customers',
        'Premium presence that supports ₱5k+ product pricing',
      ],
    },
  },
  {
    slug: 'titan-construction',
    name: 'Titan Construction',
    category: 'Corporate',
    kicker: 'Construction company',
    desc: 'Bold corporate site that showcases projects, services and capability to win B2B clients.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://gmsnowflakes.github.io/titan-construction/',
    case: {
      challenge: 'A construction firm with serious credentials was losing B2B leads to competitors with better-looking websites. It needed to communicate scale, trust and capability — fast.',
      approach: 'Heavy, authoritative design language: bold typography, high-contrast layout and structured project showcases that let the work speak for itself.',
      results: [
        'Services, portfolio and company profile pages',
        'High-impact project showcase',
        'A professional presence that earns decision-maker trust',
      ],
    },
  },
  {
    slug: 'la-tavola-restaurant',
    name: 'La Tavola',
    category: 'Restaurant',
    kicker: 'Fine dining',
    desc: 'Atmospheric restaurant website with menu showcase and reservations that turn browsers into bookings.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://gmsnowflakes.github.io/la-tavola/',
    case: {
      challenge: 'A fine dining restaurant needed a website as elegant as its experience — one that lets first-time visitors feel the atmosphere before they arrive.',
      approach: 'Atmosphere-first design with rich imagery, refined typography and deliberate pacing that guides visitors from ambiance, to menu, to booking a table.',
      results: [
        'Immersive hero, curated menu, reservation section',
        'Storytelling that sells the experience',
        'Clear path from browsing to booking',
      ],
    },
  },
  {
    slug: 'pickleball-hub',
    name: 'Pickleball Hub',
    category: 'Sports club',
    kicker: 'Community platform',
    desc: 'Sports club site with events, coaching, tournaments and membership sign-ups.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://gmsnowflakes.github.io/pickleball-hub/',
    case: {
      challenge: 'A growing sports club needed a digital home that turned casual browsers into members and communicated events, coaching and tournaments clearly.',
      approach: 'Community energy with a clear information hierarchy: bold sports design, high-impact imagery and calls to action placed to shorten the path from "interested" to "signed up".',
      results: [
        'Events, coaching and tournament sections',
        'Facility showcase and membership sign-up',
        'Paired with a custom POS system (see Apps)',
      ],
    },
  },
  {
    slug: 'pulse-ai-service',
    name: 'Pulse AI',
    category: 'SaaS landing page',
    kicker: 'AI service platform',
    desc: 'Conversion-focused SaaS landing page with feature highlights, pricing tiers and clear calls to action.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://gmsnowflakes.github.io/pulse-ai/',
    case: {
      challenge: 'An AI service platform needed a landing page that felt credible and modern — without the generic "robot + gradient" look — and turned visitors into sign-ups.',
      approach: 'Conversion-first structure: a clear value proposition, feature-to-benefit framing, social proof placement and pricing designed to anchor on the middle plan.',
      results: [
        'Hero, features, pricing and sign-up flow',
        'Animated UI that supports the message',
        'Premium brand feel that builds instant trust',
      ],
    },
  },
  {
    slug: 'animated-website',
    name: 'Animated Web',
    category: 'Interactive',
    kicker: 'Motion-first experience',
    desc: 'Live demo of immersive animation: 3D particles, scroll-driven motion and layered depth.',
    tags: ['Three.js', 'GSAP', 'JavaScript'],
    liveUrl: 'https://gmsnowflakes.github.io/animated-website/',
    case: {
      challenge: 'Most portfolio demos look the same. This one had to prove — live — how far a website can go with motion and interaction.',
      approach: 'Built as a working capability showcase: a Three.js particle hero, scroll-triggered reveals and floating UI layers, each with a purpose.',
      results: [
        'Three.js particle hero and GSAP scroll reveals',
        'Parallax layers and interactive motion',
        'Shows clients the ceiling of what their site can be',
      ],
    },
  },
];

const APPS = [
  {
    slug: 'clinicos',
    name: 'ClinicOS',
    category: 'Clinic management',
    desc: 'Patients, appointments, records, packages, inventory and billing — one system for clinics.',
    tags: ['React', 'Node.js', 'MySQL'],
    video: 'app-videos/ClinicOS-Demo.mp4',
  },
  {
    slug: 'payrollos',
    name: 'PayrollOS',
    category: 'Payroll & HR',
    desc: 'Automated payroll, tax computation, leave and payslips for growing teams.',
    tags: ['React', 'Node.js', 'MySQL'],
    video: 'app-videos/PayrollOS-Demo.mp4',
  },
  {
    slug: 'inventoryos',
    name: 'InventoryOS',
    category: 'Inventory & stock',
    desc: 'Real-time stock tracking, low-stock alerts and reorder insights across branches.',
    tags: ['React', 'Node.js', 'MySQL'],
    video: 'app-videos/InventoryOS-Demo.mp4',
  },
  {
    slug: 'invoicer',
    name: 'Invoicer',
    category: 'Invoicing',
    desc: 'Create, manage and send professional invoices in seconds.',
    tags: ['JavaScript', 'PDF export'],
    video: 'app-videos/invoicer-demo.mp4',
  },
  {
    slug: 'pickleball-pos',
    name: 'Pickleball Hub POS',
    category: 'Point of sale',
    desc: 'Queue tickets, court status, memberships and rentals for a sports venue — live on every screen.',
    tags: ['JavaScript', 'POS'],
    video: 'app-videos/pickleball-hub-demo.mp4',
  },
];

// Only real, attributable reviews. Shown on Home + About.
// avatar: optional square image (96×96 WebP works well).
const TESTIMONIALS = [
  {
    quote: "We hired Marc for our WordPress website design and we highly recommend his service! He was very prompt on updating us regarding the project's progress and communication was smooth all throughout. We were incredibly satisfied with the result! 5/5 stars and we'll definitely keep him in mind for our future projects!",
    name: 'BoredSprites',
    role: 'WordPress website client',
    avatar: 'images/brand/client-boredsprites.webp',
  },
];

// Visible FAQ + FAQPage structured data are both generated from this list.
const FAQ = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most projects take 1–3 weeks depending on scope. A landing page can be ready in 3–5 days. You get an exact timeline in your free quote before anything starts.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Landing pages start at $59 (about ₱3,500) and multi-page business websites at $299 (about ₱17,000). E-commerce, web apps and business systems are quoted on scope. Every quote is fixed-price with no hidden fees, and you get it within 24 hours.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes. Structured revision rounds are included in every project, and we review together at each milestone so changes happen early, not after launch.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'A short overview: what you need, your industry, a few sites you like, and your timeline. I handle the rest — design, development and launch.',
  },
  {
    q: 'Will my website be mobile-friendly and fast?',
    a: 'Always. Every site is fully responsive and optimized for speed, because load time directly affects your Google ranking and how many visitors turn into customers.',
  },
  {
    q: 'Can you help me get found on Google?',
    a: 'Yes. Every site ships with SEO foundations: semantic HTML, meta tags, structured data, fast load times and mobile optimization. Ongoing SEO and growth work is available too.',
  },
  {
    q: 'Do you build web apps and business systems?',
    a: 'Yes. Besides websites I build custom software such as clinic management, payroll, inventory, invoicing and POS systems, tailored to how your business actually works.',
  },
  {
    q: 'Do you work with clients outside the Philippines?',
    a: 'Absolutely. I am based in the Philippines (GMT+8) and work remotely with clients worldwide, including the US, Australia, the UK and across Asia.',
  },
];

// Expose for Node (scripts/build.mjs). Harmless in the browser.
if (typeof module !== 'undefined') module.exports = { SITE, PROJECTS, APPS, TESTIMONIALS, FAQ };
