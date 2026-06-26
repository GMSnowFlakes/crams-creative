// Add a project: one object to PROJECTS. Add an app: one object to APPS.
// Badge styles: 'primary' (#8A4DFF purple), 'blue' (#8A7CFF blue), 'secondary' (dim white)

const PROJECTS = [
  {
    type: 'ecommerce',
    searchTags: 'html css javascript maison luxe luxury jewelry bags e-commerce',
    heroName: 'Maison Luxe',
    heroCat: 'E-Commerce',
    img: 'project-images/maison-luxe.jpg',
    imgAlt: 'Maison Luxe',
    badge: { label: 'E-Commerce', style: 'primary' },
    title: 'MAISON LUXE',
    subtitle: 'Luxury Jewelry &amp; Bags',
    desc: 'Full-featured luxury e-commerce store for jewelry and bags with admin dashboard, cart, checkout, and product management.',
    projTags: ['HTML', 'CSS', 'JavaScript', 'Admin Panel'],
    liveUrl: 'https://gmsnowflakes.github.io/maison-luxe/',
    case: {
      challenge: 'A luxury jewelry brand needed an online store that matched their premium positioning — not a generic template, but a custom experience that made products feel worth the price before checkout.',
      approach: 'Designed from the ground up with a dark luxury aesthetic. Every section — product listings, cart, checkout — was crafted to build trust and reinforce perceived value at each step.',
      results: [
        'Full e-commerce platform: storefront, cart, checkout, accounts',
        'Admin dashboard: manage products, orders, customers',
        'Premium online presence that supports ₱5k+ product pricing',
        'Tools: HTML · CSS · JavaScript · Custom Admin Panel',
      ]
    }
  },
  {
    type: 'landing',
    searchTags: 'html css javascript pickleball hub sports community landing page',
    heroName: 'Pickleball Hub',
    heroCat: 'Sports &amp; Community',
    img: 'project-images/pickleball-hub.jpg',
    imgAlt: 'Pickleball Hub',
    badge: { label: 'Landing Page', style: 'blue' },
    title: 'PICKLEBALL HUB',
    subtitle: 'Sports community platform',
    desc: 'Community-driven sports platform for a pickleball club with events, coaching programs, tournaments, and membership sign-ups.',
    projTags: ['HTML', 'CSS', 'JavaScript', 'Community'],
    liveUrl: 'https://gmsnowflakes.github.io/pickleball-hub/',
    case: {
      challenge: 'A growing sports club needed a digital home that converted casual browsers into committed members — and communicated events, coaching, and tournaments clearly to their community.',
      approach: 'Led with community energy and clear information hierarchy. Bold sports design language, high-impact imagery, and CTA placement optimized to reduce the decision gap between "interested" and "signed up."',
      results: [
        'Events, coaching programs, tournament schedule sections',
        'Community gallery, facility showcase, membership CTA',
        'Professional presence that converts visitors to members',
        'Tools: HTML · CSS · JavaScript',
      ]
    }
  },
  {
    type: 'corporate',
    searchTags: 'html css tailwind javascript titan construction corporate landing page',
    heroName: 'Titan Construction',
    heroCat: 'Corporate',
    img: 'project-images/titan-construction.jpg',
    imgAlt: 'Titan Construction',
    badge: { label: 'Corporate', style: 'primary' },
    title: 'TITAN CONSTRUCTION',
    subtitle: 'Building Tomorrow Together',
    desc: 'Bold corporate website for a construction company showcasing projects, services, and expertise with a strong visual identity.',
    projTags: ['HTML', 'Tailwind CSS', 'JavaScript', 'Corporate'],
    liveUrl: 'https://gmsnowflakes.github.io/titan-construction/',
    case: {
      challenge: 'A construction firm with serious credentials was losing B2B leads to competitors with better-looking websites. They needed a site that communicated scale, trust, and capability — fast.',
      approach: 'Heavy, authoritative design language — bold typography, high-contrast layout, and structured project showcases that let their work speak for itself. Every section was built to build confidence with decision-makers.',
      results: [
        'Corporate site: services, portfolio, company profile',
        'Project showcase with bold, high-impact visuals',
        'Professional presence that wins B2B client trust',
        'Tools: HTML · CSS · Tailwind CSS · JavaScript',
      ]
    }
  },
  {
    type: 'landing',
    searchTags: 'html css javascript la tavola restaurant dining food hospitality landing page',
    heroName: 'La Tavola',
    heroCat: 'Restaurant &amp; Dining',
    img: 'project-images/la-tavola-restaurant.jpg',
    imgAlt: 'La Tavola Restaurant',
    badge: { label: 'Landing Page', style: 'blue' },
    title: 'LA TAVOLA',
    subtitle: 'Fine Dining Experience',
    desc: 'Elegant restaurant website with an immersive dining atmosphere, menu showcase, reservations, and rich visual storytelling.',
    projTags: ['HTML', 'CSS', 'JavaScript', 'Hospitality'],
    liveUrl: 'https://gmsnowflakes.github.io/la-tavola/',
    case: {
      challenge: 'A fine dining restaurant needed a website as elegant as the experience they deliver — something that made first-time visitors feel the atmosphere before they even stepped through the door.',
      approach: 'Atmosphere-first design: rich imagery, refined typography, and deliberate pacing. The layout guides visitors emotionally — from the ambiance, to the menu, to booking a table — with zero friction.',
      results: [
        'Immersive hero, curated menu, reservation section',
        'Atmosphere-driven storytelling throughout',
        'Site that converts browsers into bookings',
        'Tools: HTML · CSS · JavaScript',
      ]
    }
  },
  {
    type: 'landing',
    searchTags: 'html css javascript animation gsap three.js motion interactive animated experiences',
    heroName: 'Animated Website',
    heroCat: 'Motion &amp; Animation',
    img: 'project-images/animated-website.jpg',
    imgAlt: 'Animated Experiences',
    badge: { label: 'Interactive', style: 'primary' },
    title: 'ANIMATED WEB',
    subtitle: 'Motion-First Experience',
    desc: 'A live interactive demo showcasing immersive animations, particle systems, and scroll-driven motion — built to show what CRAMS Creative can do with movement.',
    projTags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    liveUrl: 'https://gmsnowflakes.github.io/animated-website/',
    case: {
      challenge: 'Most portfolio demos look the same. The challenge was to build a live, working proof of advanced web animation capability — something that instantly shows clients the ceiling of what their website could be.',
      approach: 'Built as a capability showcase, not a concept mockup. Every animation has a purpose: the particle hero demonstrates 3D rendering, the scroll triggers demonstrate interaction design, the floating UI demonstrates layered depth — all working live.',
      results: [
        'Three.js particle hero, GSAP scroll-driven reveals',
        'Floating UI, parallax layers, interactive motion',
        'Live demo that wins clients who want standout sites',
        'Tools: HTML · CSS · JavaScript · Three.js · GSAP',
      ]
    }
  },
  {
    type: 'landing',
    searchTags: 'html css javascript pulse ai service artificial intelligence saas tech landing page',
    heroName: 'Pulse AI',
    heroCat: 'AI &amp; SaaS',
    img: 'project-images/pulse-ai-service.jpg',
    imgAlt: 'Pulse AI Service',
    badge: { label: 'Landing Page', style: 'primary' },
    title: 'PULSE AI',
    subtitle: 'AI-Powered Services',
    desc: 'Sleek SaaS landing page for an AI service platform with feature highlights, pricing tiers, and high-converting CTAs.',
    projTags: ['HTML', 'CSS', 'JavaScript', 'SaaS / AI'],
    liveUrl: 'https://gmsnowflakes.github.io/pulse-ai/',
    case: {
      challenge: 'An AI service platform needed a landing page that felt credible and cutting-edge — without the generic "robot + gradient" look every AI company defaults to. It had to convert visitors into sign-ups.',
      approach: 'Conversion-first structure: clear hero value proposition, feature-to-benefit framing, social proof placement, and tiered pricing designed to anchor on the mid plan. Animated UI kept engagement high without distracting from the CTA.',
      results: [
        'SaaS landing: hero, features, pricing, CTA flow',
        'Animated UI with conversion-optimized layout',
        'Premium AI brand feel that builds immediate trust',
        'Tools: HTML · CSS · JavaScript',
      ]
    }
  },
];

const APPS = [
  {
    heroName: 'Invoicer',
    heroCat: 'Finance App',
    videoSrc: 'app-videos/invoicer-demo.mp4',
    poster: 'app-videos/thumbnails/invoicer-thumb.jpg',
    videoTitle: 'Invoicer — Invoice Management App',
    badgeLabel: 'Invoice App',
    title: 'Invoicer',
    desc: 'A clean invoicing tool for freelancers and small businesses — create, manage, and send professional invoices fast.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PDF Export'],
  },
  {
    heroName: 'Hub POS',
    heroCat: 'Point of Sale',
    videoSrc: 'app-videos/pickleball-hub-demo.mp4',
    poster: 'app-videos/thumbnails/pickleball-hub-thumb.jpg',
    videoTitle: 'Pickleball Hub POS — Point of Sale System',
    badgeLabel: 'POS System',
    title: 'Pickleball Hub POS',
    desc: 'A point-of-sale system built for Pickleball Hub — handles memberships, equipment rental, and session bookings in real time.',
    tags: ['HTML', 'CSS', 'JavaScript', 'POS'],
  },
  {
    heroName: 'Inventory System',
    heroCat: 'Stock Management',
    videoSrc: 'app-videos/inventory-system-demo.mp4',
    poster: 'app-videos/thumbnails/inventory-system-thumb.jpg',
    videoTitle: 'Inventory System — Smart Stock Management',
    badgeLabel: 'Inventory System',
    title: 'Inventory System',
    desc: 'A smart stock management system with real-time tracking, low-stock alerts, and automated reorder ranking — built for businesses that need full visibility over their inventory.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Inventory'],
  },
];
