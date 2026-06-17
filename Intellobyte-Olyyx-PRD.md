# Intellobyte × Olyyx — Website Clone PRD & Build Plan

**Goal:** Rebuild the Intellobyte marketing site so it matches the Olyyx template's design, layout, motion, and structure — but powered entirely by Intellobyte's own content, assets, and brand. Built in clean, original code (Next.js), not exported Webflow code.

**Reference:** `olyyx.webflow.io` (design reference only)
**Content source:** `intellobyte.com` (the data that fills the new design)
**Build tools:** Claude (planning, specs, component code) + Antigravity (agentic IDE — scaffolding, wiring, preview, iteration)

---

## 1. How to use this document

This is the single source of truth for the build. Work **top to bottom, phase by phase** (Section 11). Each phase has a goal, a concrete deliverable, an acceptance check, and a ready-to-paste prompt for Antigravity. Do not skip ahead — the static layout must be solid before animation goes on top, or you'll spend the animation phase fighting layout bugs.

Confirm the decisions in Section 4 **before** Phase 0. They change a few tokens and the data model.

---

## 2. Usage / IP note (read once, then move on)

Olyyx is a paid commercial Webflow template. We are using it as a **design reference** and rebuilding the look in our own original code with our own content and assets. That's the safe path. The two things to avoid: copying Olyyx's exported HTML/CSS verbatim, and reusing its actual image files, the "Logoipsum" placeholder logos, its stock portraits, or its marketing copy. Everything in this PRD is structured so we replace those with Intellobyte's real assets and freshly written copy. Treat the reference as "how it should look and move," never as a file to lift.

---

## 3. Key decisions to confirm

| # | Decision | Options | Recommended default | Why |
|---|----------|---------|---------------------|-----|
| D1 | Accent color | Olyyx acid-yellow `#F0E327` **or** Intellobyte red/coral | **Acid-yellow** (exact clone) | You said "clone exactly." Accent is a single token — flipping to red later is a one-line change. |
| D2 | Service cards | Olyyx's 4 **or** Intellobyte's 6 | **4 primary cards** (fold SEO + Mobile + Strategy as bullets inside the four) | Keeps the sticky-stack rhythm identical to Olyyx. |
| D3 | Team count | Olyyx shows 4; Intellobyte has 2 founders | **2 cards, same staggered style** | Use real people. Grid adapts cleanly to 2. |
| D4 | Testimonials | Olyyx text-quote marquee **or** Intellobyte video testimonials | **Text-quote marquee** (clone) + keep 1 video as a featured card | Matches the "Our Client Voices" auto-scroll grid; you currently only have 1 strong quote, so we'll write a few real ones. |
| D5 | Blog section | Include 2 cards **or** omit | **Include as "Insights"**, 2 cards | Cheap to keep; fills the layout. Can be stubbed until you have posts. |
| D6 | Pages scope | Single long homepage **or** multi-page (About/Works/Services/Blog) | **Phase 1 = homepage only**, inner pages later | Homepage carries 90% of the design. Inner pages reuse the same components. |
| D7 | Hero image | Duotone portrait (like Olyyx) **or** abstract | **Duotone portrait** in yellow/black | It's the signature of the whole look. |

Everything below assumes the recommended defaults. Flag any you want to change.

---

## 4. Tech stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 14+ (App Router) + TypeScript** | Reuses your existing React content; SSR for SEO; great with Vercel. |
| Styling | **Tailwind CSS** + CSS variables for tokens | Fast, consistent, themeable via one token file. |
| Smooth scroll | **Lenis** | Gives the buttery Webflow scroll feel; required for scroll-scrubbed animations to feel right. |
| Scroll animation | **GSAP + ScrollTrigger** | Industry standard for sticky-stacks, text-fill-on-scroll, the morphing process shape, parallax, count-up. |
| Component motion | **Framer Motion** | Enter/hover micro-interactions, accordion, simpler reveals. |
| Carousel/marquee | **Embla** (project/testimonial) + CSS/GSAP marquee | Lightweight, drag support. |
| Images | **next/image** | Optimized, lazy, responsive. |
| Icons | **Lucide** + a few custom SVGs (diamond icons, chain-link label icon) | Matches the thin geometric icon style. |
| Fonts | **Clash Display** (display) + **Space Grotesk** (body/UI) via Fontshare/Google | Closest free match to Olyyx's heavy condensed grotesk + clean grotesk body. |
| Deploy | **Vercel** | One-click, preview deploys per phase. |
| Content | `content.ts` (typed) — all copy/data in one place | Design and data stay decoupled (your "structure first, then data" requirement). |

---

## 5. Design system (exact tokens)

### Color (sampled from the reference)
```
--bg            #111111   /* page background (NOT pure black) */
--surface       #161616   /* cards, raised panels */
--surface-2     #1C1C1C   /* hover / nested */
--ink-deep      #0A0A0A   /* hero photo wells, deepest areas */
--accent        #F0E327   /* acid yellow — the one bold color */
--accent-dim    rgba(240,227,39,0.12)  /* olive button fills */
--text          #FFFFFF
--text-muted    #848484
--border        rgba(255,255,255,0.08)
```
Spend boldness only on `--accent`. Everything else stays quiet: black, white, grey. That restraint is what makes the yellow hit.

### Typography
- **Display:** Clash Display, weights 600–700, **UPPERCASE**, tight tracking (`-0.02em`), tight leading (`0.95`). Used huge — hero is clamp(3rem, 12vw, 11rem).
- **Body:** Space Grotesk, 400/500, normal case, muted grey for descriptions.
- **Labels/eyebrows:** Space Grotesk 500, uppercase, `0.1em` tracking, ~12px, wrapped in a **pill** with a thin chain-link icon (e.g. `▭ WHY US`).
- **Type scale (desktop):** Display 1 ~160px / Display 2 ~64px / H-section ~56px / card title ~22px / body ~16px / label ~12px.

### Structure & components (reused everywhere)
- **Eyebrow pill:** outlined rounded pill, chain icon + uppercase label, accent or white.
- **Yellow square bullet:** `▪` accent square before list items and counters.
- **Button (primary):** dark olive fill (`--accent-dim`), accent text, `→` arrow, subtle border; hover fills brighter.
- **Card:** `--surface`, 1px `--border`, generous padding, no/low radius (Olyyx uses near-square corners, ~2–4px).
- **Numbered counter:** accent square + mono-ish number (`01/04`).
- **Section rhythm:** very tall sections, lots of negative space, content often offset to a 2/3 column with the eyebrow in the left margin.

### Motion principles
- Smooth-scroll everything (Lenis).
- Reveals are **staggered**, not simultaneous; ease `power3.out`; ~0.6–0.9s.
- One signature orchestrated moment (the morphing process shape) — everything else is restrained.
- **Respect `prefers-reduced-motion`:** disable scrubbing, cursor trail, and marquees; keep content static and legible.

---

## 6. Information architecture (homepage order)

1. Sticky nav
2. Hero (duotone, giant headline, rating)
3. Client logo marquee
4. About intro (text-fill-on-scroll statement)
5. Why Choose Us (4 staggered cards)
6. Our Work / "Masterpieces" (project selector, counter 01/0N)
7. Impact (statement + count-up stats + tall image)
8. Full-bleed parallax banner (duotone)
9. Services (4 sticky-stacked cards)
10. How We Work (morphing yellow process shape, steps 001–004)
11. Team (staggered B&W portrait cards)
12. Testimonials — "Client Voices" (3-column auto-scroll grid)
13. FAQ (accordion)
14. Insights / Blog (2 cards)
15. Keyword marquee strip
16. Footer (nav columns + newsletter)

---

## 7. Section-by-section spec + content mapping

For each section: **Olyyx pattern → Intellobyte content → animation.** Copy marked _(write)_ is new content you need to create or approve; suggested drafts are provided.

### 7.1 Nav
- **Pattern:** Left logo with chain-link mark; center links with small square markers (active = filled accent); right side empty in Olyyx — we add a CTA.
- **Content:** Logo `Intellobyte`. Links: `Home · Services · Work · About · Contact`. CTA button: `Get a Quote →`. Keep your light/dark toggle if desired (optional; the design is dark-native).
- **Animation:** Slides down on load; shrinks/blurs background on scroll; link underline on hover; mobile = full-screen overlay menu.

### 7.2 Hero
- **Pattern:** Full-bleed duotone portrait (yellow on black), eyebrow pill, rating row with avatar stack, two-line giant headline (line 1 outline/white, line 2 solid accent).
- **Content:**
  - Eyebrow: `AVAILABLE FOR NEW PROJECTS · 2026`
  - Rating: `★★★★★ 5.0 — BASED ON 50+ VERIFIED REVIEWS` + 3 avatars
  - Headline: line 1 `DIGITAL` (white) / line 2 `EXPERIENCES` (accent) — or keep your full line "We craft digital experiences that convert." styled big. _Recommend the two-word stacked treatment for max impact._
  - Sub + CTAs (can sit just below or in About): `Start a Project →` / `See Our Work`
- **Animation:** Headline reveals line-by-line (clip-path/mask), image subtle scale-in + slow parallax, cursor trail active over hero.

### 7.3 Client logos
- **Pattern:** Horizontal auto-scrolling marquee of logo lockups.
- **Content:** `TechCorp · Lumina · Northwind · Helio · Vertex · Quantum · Atlas Co. · Nova Labs` (your existing names — render as clean monochrome wordmarks/SVGs).
- **Animation:** Infinite marquee, pauses on hover, greyscale → white on hover.

### 7.4 About intro
- **Pattern:** `ABOUT US` pill + large statement where text fills from grey → white as you scroll, then a button.
- **Content (write):** `INTELLOBYTE IS A PREMIUM WEB DESIGN & BRANDING STUDIO TURNING AMBITIOUS IDEAS INTO HIGH-PERFORMING DIGITAL EXPERIENCES.` + `About Us →`
- **Animation:** Word-by-word color fill on scroll (GSAP ScrollTrigger scrub).

### 7.5 Why Choose Us (4 cards)
- **Pattern:** `WHY US` pill, `WHY CHOOSE US` heading, short intro top-right, 4 vertically staggered cards each with a thin diamond icon, title, one-line description; subtle horizontal drag/scroll.
- **Content (write):**
  1. `CRAFT-LEVEL QUALITY` — Pixel-perfect builds on modern stacks (React, Next.js, Webflow).
  2. `CLIENT-CENTRIC` — Your goals are the brief; we build around your outcomes.
  3. `FAST DELIVERY` — Tight, reliable timelines without cutting corners.
  4. `FULL-STACK STUDIO` — Strategy, design, and engineering under one roof.
- **Animation:** Cards stagger-reveal on scroll; lift + accent border on hover.

### 7.6 Our Work / Masterpieces
- **Pattern:** `PROJECTS` pill, `OUR MASTERPIECES` heading, counter `01/04`, large featured image, project title + tags + description, and a clickable vertical list of project names on the right that swaps the feature.
- **Content (your real projects):**

  | # | Project | Tags | Description (write) |
  |---|---------|------|---------------------|
  | 01 | Built for Builders | Education · Incubator Platform | A platform built for an incubator/education program. |
  | 02 | RamaAstra | Corporate · Aerospace & Defence | Corporate presence for an aerospace & defence brand. |
  | 03 | Chhaya Dental Care | Healthcare · Clinic · 2025 | Conversion-focused clinic website. |
  | 04 | Dental Care Clinic | Healthcare · Booking · 2026 | Booking-driven dental site. |

  _You already have these project screenshots on your current site — reuse them._
- **Animation:** Click name → crossfade/scale image swap + counter tick; active name turns accent; auto-advance optional.

### 7.7 Impact (stats)
- **Pattern:** `IMPACT` pill + bold statement + `Start a Project →`, then count-up stat blocks beside a tall B&W image.
- **Content:**
  - Statement (write): `TURNING IDEAS INTO MEASURABLE GROWTH THROUGH DESIGN AND ENGINEERING.`
  - Stats (use your real numbers — **fix the placeholders first**): `28+ Projects Shipped` · `100+ Websites Delivered` · `50+ Reviews (5.0★)` · `1yr+ Experience`. _Replace the odd "2% revenue lift" with a real figure or drop it._
- **Animation:** Numbers count up when in view; image parallax.

### 7.8 Parallax banner
- **Pattern:** Full-bleed duotone (yellow/black) cinematic image, parallax on scroll.
- **Content:** One striking abstract/portrait you own or license, duotoned to `--accent`/black.
- **Animation:** Background-position / scale parallax.

### 7.9 Services (4 sticky-stacked cards)
- **Pattern:** Four large cards that pin and stack as you scroll; each = image (one side) + title + description + 5 yellow-square bullets.
- **Content (consolidating your 6 into 4):**

  | Card | Title | Description (write) | Bullets |
  |------|-------|---------------------|---------|
  | 1 | BRANDING & IDENTITY | Visual systems and guidelines that make brands unforgettable. | Logo Design & Icons · Color Palette · Typography · Stationery · Brand Guidelines |
  | 2 | UI/UX & MOBILE | Intuitive interfaces and native-feeling PWAs across every device. | User Research · Wireframing & Prototyping · Mobile/PWA · Web Interface · Motion Design |
  | 3 | WEB & E-COMMERCE | High-performance sites and storefronts on React, Next.js & Webflow. | Custom Development · E-Commerce (Shopify/Stripe) · CMS · Landing Pages · API/Backend |
  | 4 | DIGITAL STRATEGY & GROWTH | Data-driven marketing and SEO that move metrics. | SEO · Social Media · PPC Ads · Email Campaigns · Analytics & Growth |
- **Animation:** Sticky pin + stack (GSAP ScrollTrigger); bullets stagger in.

### 7.10 How We Work (signature animation)
- **Pattern:** `PROCESS` pill, `HOW WE WORK` heading, `Start a Project →`, and a large yellow stadium/oval shape that **morphs across scroll** while cycling step text in its center (001 → 004).
- **Content (write):**
  - `001 DISCOVERY` — Defining goals through deep research and analysis.
  - `002 STRATEGY` — Mapping the roadmap for your brand's success.
  - `003 DESIGN` — Transforming ideas into stunning, usable interfaces.
  - `004 LAUNCH` — Shipping with polish and ensuring it performs.
- **Animation:** Scroll-scrubbed SVG path morph (oval → opened curve), step text crossfades per stage. This is the one orchestrated centerpiece — budget the most time here.

### 7.11 Team
- **Pattern:** `TEAM` pill, staggered B&W portrait cards, name + role, hover reveal.
- **Content (your real founders):** `Pranav Patil — Founder, Podcaster & Content Creator` (LinkedIn, YouTube) · `Kunal Manjare — Founder & LinkedIn Expert` (LinkedIn, YouTube).
- **Animation:** Stagger reveal; portrait desaturated → color or accent tint on hover; social links slide up.

### 7.12 Testimonials — Client Voices
- **Pattern:** `TESTIMONIAL` pill, `OUR CLIENT VOICES` heading, 3-column grid of cards auto-scrolling at different speeds; each = client logo + quote + avatar + name + role.
- **Content:** Keep your real one — `Om Bansod, Founder, Yodha Electronics, Delhi — "We saw a 2× increase in leads after the campaign."` Plus 3–5 more real quotes you collect (or a featured video card for Om). _Don't ship placeholder "Logoipsum" logos — use real client wordmarks or omit the logo._
- **Animation:** Vertical auto-scroll columns (opposing speeds), pause on hover.

### 7.13 FAQ
- **Pattern:** `FAQ` pill, `FREQUENT QUESTIONS` heading, accordion (first open), `Contact Us →` footer.
- **Content (write — Intellobyte answers):**
  - What services does Intellobyte specialize in?
  - How long does a typical project take?
  - Do you offer custom pricing for small businesses?
  - Will I own the full rights to the final designs?
  - How do we communicate during the project?
  - Do you provide post-launch support and maintenance?
- **Animation:** Smooth height expand/collapse (Framer Motion), `+`/`−` or chevron rotate.

### 7.14 Insights / Blog
- **Pattern:** Heading + `Start a Project →` + 2 image cards (title + excerpt).
- **Content (write or stub):** 2 article cards, e.g. "Branding that builds trust for tech startups" / "Designing websites that convert." Link to `#` until posts exist.
- **Animation:** Card reveal + image zoom on hover.

### 7.15 Keyword marquee
- **Pattern:** Two big yellow marquee rows scrolling opposite directions.
- **Content:** `BRANDING • UI/UX • DEVELOPMENT • SEO • E-COMMERCE • STRATEGY •` (repeat).
- **Animation:** Infinite opposing marquees; slight skew optional.

### 7.16 Footer
- **Pattern:** Logo + bold mission statement + 3 nav columns + newsletter + bottom bar.
- **Content:**
  - Statement: `Intellobyte is a premium web design & branding studio building digital experiences that convert.`
  - Columns — **Menu:** Home, Services, Work, About, Contact · **Pages:** Process, Blog, Privacy, Terms · **Social:** LinkedIn, Instagram, YouTube, Twitter/X
  - Newsletter: `Never miss an update` + email + `Subscribe →`
  - Contact: `hello@intellobyte.com · +91 76665 96339 · Remote-first, worldwide`
  - Bottom: `© 2026 Intellobyte · Privacy · Terms`
- **Animation:** Links arrow-slide on hover; newsletter input focus state.

---

## 8. Master animation inventory

| Animation | Section | Library | Complexity | Reduced-motion fallback |
|-----------|---------|---------|-----------|--------------------------|
| Smooth scroll | global | Lenis | Low | Native scroll |
| Custom cursor + trail | global | Custom (rAF) | Med | Hidden, native cursor |
| Nav slide-in + scroll shrink | nav | Framer/GSAP | Low | Static nav |
| Hero headline line reveal | hero | GSAP (mask) | Med | Visible immediately |
| Hero image parallax/scale | hero | GSAP | Low | Static |
| Logo marquee | logos | CSS/GSAP | Low | Static row, wrap |
| Text fill-on-scroll | about | GSAP scrub | Med | Full-white text |
| Staggered card reveal | why/team/services | Framer/GSAP | Low | Visible |
| Project selector swap | work | Embla/GSAP | Med | Click swaps, no anim |
| Count-up stats | impact | GSAP | Low | Final number shown |
| Parallax banner | banner | GSAP | Low | Static image |
| **Sticky-stack service cards** | services | GSAP ScrollTrigger pin | High | Normal stacked cards |
| **Morphing process shape** | how-we-work | GSAP + SVG morph | High (signature) | Static stepper list |
| Auto-scroll testimonial columns | testimonials | GSAP/CSS | Med | Static grid |
| Accordion expand | FAQ | Framer Motion | Low | Toggle, no anim |
| Keyword marquee | marquee | CSS/GSAP | Low | Static |

---

## 9. Asset requirements

### Images / media to source (you own or license — do **not** pull from Olyyx)

| Asset | Qty | Spec | Source | Status |
|-------|-----|------|--------|--------|
| Intellobyte logo (light, for dark bg) | 1 | SVG | You have it | ✅ |
| Hero portrait (for yellow duotone) | 1 | ≥2400px, dramatic lighting | Stock (Unsplash/licensed) or original shoot | ☐ |
| Parallax banner image | 1 | ≥2400px, abstract/portrait, duotone-able | Stock/original | ☐ |
| Service card mockups | 4 | ~1200×1200, branding/UIUX/dev/marketing scenes | Your project shots or licensed mockups | ☐ |
| Project / Work images | 4 | Use existing site screenshots | You have them | ✅ |
| Team portraits (B&W) | 2 | ~1000×1200, consistent lighting | Photos of Pranav & Kunal | ☐ |
| Client logos (wordmarks) | 8 | Mono SVG | Recreate as styled text/SVG | ☐ |
| Testimonial avatars + client logos | 3–6 | Square, real clients | Collect with quotes | ☐ |
| Insights/blog images | 2 | ~1200×800 | Stock/original | ☐ (optional) |
| Favicon + OG image | 2 | 512px / 1200×630 | Generate from brand | ☐ |
| Hero video loop (optional) | 1 | ≤5s, muted, webm/mp4 | Optional | ☐ |

### Fonts
- **Clash Display** (Fontshare, free) — display. **Space Grotesk** (Google, free) — body. Self-host via `next/font` for performance.

### Icons / SVG
- Diamond icons (Why Choose Us) — custom SVG (4 variants).
- Chain-link label icon, arrow `→`, social icons — Lucide.
- Process stadium shape — custom SVG path (two keyframe states for the morph).

### Content to write/approve (gather before Phase 1)
About statement · Why-Choose-Us copy · project descriptions ×4 · service descriptions ×4 · impact statement + final stat numbers · process step copy ×4 · 3–5 real testimonials · 6 FAQ answers · 2 blog stubs · footer copy. **Confirm the corrected stats** (the "2%" and the garbled experience number).

---

## 10. Phased build plan

Each phase ends with a working, previewable state. Don't move on until the acceptance check passes.

### Phase 0 — Foundation
**Goal:** Project skeleton + design tokens + global shell.
**Deliverables:** Next.js + TS + Tailwind installed; tokens from §5 wired as CSS vars + Tailwind theme; Clash Display + Space Grotesk self-hosted; Lenis smooth scroll; GSAP + Framer Motion installed; folder structure (`/components`, `/sections`, `/lib`, `content.ts` stub); empty page that scrolls smoothly with correct bg/fonts; custom cursor component (behind a feature flag).
**Acceptance:** Blank page renders at `#111111`, headings in Clash Display uppercase, smooth scroll works, no console errors.
**Antigravity prompt:**
> "Scaffold a Next.js 14 App Router + TypeScript + Tailwind project. Add CSS variables and Tailwind theme tokens exactly: bg #111111, surface #161616, accent #F0E327, text #FFFFFF, muted #848484. Self-host Clash Display (display) and Space Grotesk (body) via next/font. Install and initialize Lenis smooth scroll in the root layout, plus GSAP (with ScrollTrigger) and Framer Motion. Create folders /components, /sections, /lib and an empty typed content.ts. Build a minimal homepage that just renders a tall empty section so I can confirm smooth scrolling, the dark background, and the fonts."

### Phase 1 — Content model
**Goal:** All Intellobyte data typed in one file.
**Deliverables:** `content.ts` with typed objects for every section in §7 (nav, hero, logos, about, why, projects, impact, services, process, team, testimonials, faq, insights, footer). Real copy where ready; clearly-marked TODO strings where pending.
**Acceptance:** Importable, typed, no `any`; one edit changes one place.
**Note:** This is your "data" layer. Sections will read from it so design never hard-codes copy.

### Phase 2 — Static layout (no animation)
**Goal:** Every section built, responsive, with placeholder images — pixel-faithful to Olyyx in spacing/type/structure, but static.
**Deliverables:** All 16 sections from §6 as components reading from `content.ts`; correct grid, spacing, type scale, eyebrow pills, bullets, buttons; responsive desktop→mobile; placeholder image blocks.
**Acceptance:** Side-by-side with the PDF, layout/hierarchy/spacing match at desktop and mobile. No animation yet. This is the most important phase — get it right.
**Build order within phase:** nav → footer (frame first), then hero → logos → about → why → work → impact → banner → services → process (static stepper) → team → testimonials → faq → insights → marquee.
**Antigravity prompt (per section, repeat):**
> "Build the `<Hero>` section component reading from content.ts. Match this spec: [paste §7.2]. Use the tokens and type scale from the design system. Full-bleed image well at #0A0A0A as placeholder, eyebrow pill, rating row, giant two-line uppercase headline (line 1 white, line 2 accent). Responsive. No animation yet — static only. Show me a screenshot when done."

### Phase 3 — Visual polish
**Goal:** Exact look — duotone image treatment, precise colors, hover states, borders, the olive button style, near-square radii.
**Deliverables:** CSS duotone filter for hero/banner/team; refined spacing; hover states on cards/links/buttons; correct bullet/counter styling.
**Acceptance:** A static screenshot is hard to tell from Olyyx (minus content).

### Phase 4 — Animation layer
**Goal:** Add motion on top of the finished layout, simplest → hardest.
**Order:** (1) reveals + stagger, (2) marquees, (3) count-up, (4) text-fill-on-scroll, (5) accordion, (6) project selector, (7) parallax, (8) cursor trail, (9) **sticky-stack services**, (10) **morphing process shape** (the centerpiece — last).
**Acceptance:** Each animation works without breaking layout; 60fps on desktop; `prefers-reduced-motion` disables scrubbing/trails/marquees.
**Antigravity prompt (example, the hard one):**
> "Add the morphing process animation to `<HowWeWork>`. A large yellow stadium/oval SVG sits centered. As the user scrolls through this pinned section, scrub a GSAP timeline that morphs the SVG path from a closed oval to an opened bottom-curve, and crossfade the centered step text through 001 DISCOVERY → 002 STRATEGY → 003 DESIGN → 004 LAUNCH (copy in content.ts). Pin the section during the sequence with ScrollTrigger. Provide a static stepper fallback under prefers-reduced-motion."

### Phase 5 — Responsiveness & QA
**Goal:** Flawless mobile/tablet, accessibility, performance.
**Deliverables:** Mobile nav overlay; sticky-stack and process shape adapted or simplified for mobile; keyboard focus visible; alt text; Lighthouse pass (perf/SEO/a11y ≥90); image sizing via next/image.
**Acceptance:** Clean on a real phone; Lighthouse ≥90; reduced-motion verified.

### Phase 6 — Real data & assets
**Goal:** Swap all placeholders for final copy and owned/licensed images; finalize stats and testimonials.
**Acceptance:** No TODO strings, no placeholder images, no "Logoipsum."

### Phase 7 — SEO & deploy
**Goal:** Metadata, OG image, sitemap, analytics; deploy to Vercel; connect domain.
**Acceptance:** Live, shareable preview renders correctly; OG card looks right.

---

## 11. Claude + Antigravity workflow

**Split the roles cleanly:**
- **Claude (here):** the PRD, per-section specs, the exact component code/prompts, design tokens, debugging help, copy drafting, and reviewing screenshots you paste back.
- **Antigravity (your repo):** runs the agent to scaffold, implement, run the dev server, take screenshots, and iterate against a live preview. (You can also set Antigravity's model to Claude.)

**The loop that avoids bottlenecks:**
1. Take one phase/section from this PRD.
2. Paste its spec + the prompt into Antigravity; let it build.
3. Have it screenshot the result.
4. Paste the screenshot back to me; I compare to the reference and give precise diffs.
5. Apply fixes, confirm acceptance check, commit, next section.

**Anti-bottleneck rules:**
- One section at a time. Never "build the whole site" in a single prompt.
- Layout fully done **before** any animation (Phase 2 before Phase 4).
- Keep all copy/data in `content.ts` — never let the agent hard-code text into components.
- Commit after every passing section so you can always roll back.
- Lock fonts, tokens, and the content model early (Phases 0–1); changing them late ripples everywhere.
- For the two hard animations (sticky-stack, morphing shape), build them in isolation on a scratch page first, then drop in.

---

## 12. Definition of done (homepage)

- [ ] All 16 sections present, reading from `content.ts`
- [ ] Matches reference for layout, type, spacing, color at desktop + mobile
- [ ] All animations in §8 working, 60fps desktop
- [ ] `prefers-reduced-motion` respected
- [ ] Lighthouse ≥90 (Perf / SEO / A11y / Best Practices)
- [ ] Real content + owned/licensed assets only (no placeholders, no Olyyx assets)
- [ ] Corrected stats and real testimonials in place
- [ ] Deployed to Vercel on the domain

---

## 13. Immediate next steps

1. Confirm the Section 4 decisions (especially D1 accent color and the corrected stat numbers).
2. Start gathering the §9 assets and writing the §9 copy — this runs in parallel with building.
3. Give me the go-ahead and I'll produce the **Phase 0 setup** in full, then we'll move section by section through Phase 2.
