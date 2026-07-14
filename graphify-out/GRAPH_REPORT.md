# Graph Report - .  (2026-06-27)

## Corpus Check
- 20 files · ~395,367 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 43 nodes · 75 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Site Infrastructure & Analytics|Site Infrastructure & Analytics]]
- [[_COMMUNITY_Brand Identity & Core Services|Brand Identity & Core Services]]
- [[_COMMUNITY_Website Projects Portfolio|Website Projects Portfolio]]
- [[_COMMUNITY_Pickleball Ecosystem|Pickleball Ecosystem]]
- [[_COMMUNITY_Visual Brand System|Visual Brand System]]
- [[_COMMUNITY_Founder Profile|Founder Profile]]
- [[_COMMUNITY_Motion & Animation Work|Motion & Animation Work]]
- [[_COMMUNITY_Inventory App|Inventory App]]
- [[_COMMUNITY_Invoice App|Invoice App]]
- [[_COMMUNITY_Titan Construction|Titan Construction]]

## God Nodes (most connected - your core abstractions)
1. `Crams Creative Portfolio Website (index.html)` - 35 edges
2. `Crams Creative` - 17 edges
3. `Pickleball Hub POS — Point of Sale System` - 6 edges
4. `Pickleball Hub — Sports Community Website` - 5 edges
5. `Maison Luxe — Luxury E-Commerce Project` - 4 edges
6. `La Tavola — Fine Dining Restaurant Website` - 4 edges
7. `Animated Website — Motion & Animation Demo` - 4 edges
8. `Pulse AI — SaaS Landing Page` - 4 edges
9. `Core Tech Stack: HTML / CSS / JavaScript` - 4 edges
10. `Marc Patrick Orcullo` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Crams Creative Portfolio Website (index.html)` --references--> `Animated Website Screenshot`  [EXTRACTED]
  Crams-creative/index.html → Crams-creative/project-images/animated-website.jpg
- `Crams Creative Portfolio Website (index.html)` --references--> `La Tavola Restaurant Website Screenshot`  [EXTRACTED]
  Crams-creative/index.html → Crams-creative/project-images/la-tavola-restaurant.jpg
- `Crams Creative Portfolio Website (index.html)` --references--> `Maison Luxe Project Image`  [EXTRACTED]
  Crams-creative/index.html → Crams-creative/project-images/maison-luxe.jpg
- `Crams Creative Portfolio Website (index.html)` --references--> `Marc Patrick Orcullo Portrait Photo`  [EXTRACTED]
  Crams-creative/index.html → Crams-creative/project-images/own-photo.jpg
- `Crams Creative Portfolio Website (index.html)` --references--> `Pickleball Hub Project Image`  [EXTRACTED]
  Crams-creative/index.html → Crams-creative/project-images/pickleball-hub.jpg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Crams Creative Portfolio Projects (6 client-facing projects)** — project_maison_luxe, project_pickleball_hub, project_titan_construction, project_la_tavola, project_animated_web, project_pulse_ai [EXTRACTED 1.00]
- **Crams Creative Business Apps (3 live internal tools)** — app_invoicer, app_pickleball_hub_pos, app_inventory_system [EXTRACTED 1.00]
- **Crams Creative Core Services** — service_web_development, service_ui_ux_design, service_brand_design, service_seo_growth, service_app_development [EXTRACTED 1.00]
- **Crams Creative Pricing Tiers** — pricing_landing_page, pricing_business_website, pricing_custom_systems [EXTRACTED 1.00]
- **Crams Creative Brand Identity Assets** — brand_logo_png, brand_favicon_png, design_system_dark_purple, typography_dm_sans_syne [INFERRED 0.95]

## Communities (10 total, 3 thin omitted)

### Community 0 - "Site Infrastructure & Analytics"
Cohesion: 0.25
Nodes (9): Google Analytics (G-PD2ZTJ1RD8), Crams Creative Portfolio Website (index.html), Pricing Tier: Business Website (₱35k starting), Pricing Tier: Custom Systems (Quote-based), Pricing Tier: Landing Page (₱15k starting), Robots.txt, JSON-LD Structured Data Schema, SEO & Growth Service (+1 more)

### Community 1 - "Brand Identity & Core Services"
Cohesion: 0.29
Nodes (7): Crams Creative, Google Site Verification File, App Development Service, Brand Design Service, UI/UX Design Service, Web Development Service, Advanced Stack: React / Next.js / TypeScript / Node.js

### Community 2 - "Website Projects Portfolio"
Cohesion: 0.29
Nodes (7): La Tavola Restaurant Website Screenshot, Maison Luxe Project Image, Pulse AI Website Screenshot, La Tavola — Fine Dining Restaurant Website, Maison Luxe — Luxury E-Commerce Project, Pulse AI — SaaS Landing Page, Core Tech Stack: HTML / CSS / JavaScript

### Community 3 - "Pickleball Ecosystem"
Cohesion: 0.67
Nodes (4): Pickleball Hub POS — Point of Sale System, Pickleball Hub Project Image, Pickleball Hub — Sports Community Website, Pickleball Hub POS Thumbnail (Splash Screen)

### Community 4 - "Visual Brand System"
Cohesion: 0.67
Nodes (4): Crams Creative Favicon (favicon.png), Crams Creative Logo (logo.png), Brand Assets README, Dark Purple Design System (#8A4DFF accent, #0D0D0D background)

### Community 5 - "Founder Profile"
Cohesion: 0.67
Nodes (3): Contact Email: hirememarc2992@gmail.com, Marc Patrick Orcullo Portrait Photo, Marc Patrick Orcullo

### Community 6 - "Motion & Animation Work"
Cohesion: 0.67
Nodes (3): Animated Website Screenshot, Animated Website — Motion & Animation Demo, Animation Stack: Three.js / GSAP

## Knowledge Gaps
- **10 isolated node(s):** `Robots.txt`, `Google Site Verification File`, `App Development Service`, `Typography: DM Sans + Syne`, `Advanced Stack: React / Next.js / TypeScript / Node.js` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Crams Creative Portfolio Website (index.html)` connect `Site Infrastructure & Analytics` to `Brand Identity & Core Services`, `Website Projects Portfolio`, `Pickleball Ecosystem`, `Visual Brand System`, `Founder Profile`, `Motion & Animation Work`, `Inventory App`, `Invoice App`, `Titan Construction`?**
  _High betweenness centrality (0.791) - this node is a cross-community bridge._
- **Why does `Crams Creative` connect `Brand Identity & Core Services` to `Site Infrastructure & Analytics`, `Website Projects Portfolio`, `Pickleball Ecosystem`, `Founder Profile`, `Motion & Animation Work`, `Inventory App`, `Invoice App`, `Titan Construction`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **Why does `Animated Website — Motion & Animation Demo` connect `Motion & Animation Work` to `Site Infrastructure & Analytics`, `Brand Identity & Core Services`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Pickleball Hub POS — Point of Sale System` (e.g. with `Pickleball Hub POS — Point of Sale System` and `Pickleball Hub — Sports Community Website`) actually correct?**
  _`Pickleball Hub POS — Point of Sale System` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Robots.txt`, `Google Site Verification File`, `App Development Service` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._