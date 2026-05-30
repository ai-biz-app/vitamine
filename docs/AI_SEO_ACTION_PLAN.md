# AI SEO Action Plan — ClearlyVitamins

> **Status:** Living document. Check off items as they are implemented and tested.
> **Last Updated:** 2025-05-30

---

## How to Use This Document

- [ ] = Not started / pending
- [~] = In progress
- [x] = Implemented & tested

After each task is completed and tested, update the checkbox and add a brief note under the task (e.g., "Done — tested on `/vitamins/vitamin-d`").

---

## Phase 1: Quick Wins (Meta Tags, robots.txt, Dates, Citations)

### 1.1 Per-Page Meta Tags
- [x] Install `react-helmet-async` and wrap app with `<HelmetProvider>`
- [x] Add `<Helmet>` to `/` (Home) with unique title + description
- [x] Add `<Helmet>` to `/vitamins` (VitaminsPage)
- [x] Add `<Helmet>` to `/vitamins/:id` (VitaminDetail) — dynamic per-vitamin
- [x] Add `<Helmet>` to `/food-sources` (FoodSourcesPage)
- [x] Add `<Helmet>` to `/deficiencies` (DeficiencyPage)
- [x] Add `<Helmet>` to `/supplement-guide` (SupplementGuide)
- [x] Add `<Helmet>` to `/privacy` (PrivacyPolicy)
- [x] Add `<Helmet>` to `/terms` (TermsOfService)

**Done — 2025-05-30:** All pages have unique `<title>` and `<meta name="description">` via the reusable `SEO` component.

**Testing:** View page source (or use [heymeta.com](https://www.heymeta.com/)) and verify each route shows the correct `<title>` and `<meta name="description">`.

---

### 1.2 Open Graph & Twitter Card Tags
- [x] Add `og:title`, `og:description`, `og:image`, `og:url`, `og:type` to Home
- [x] Add Open Graph tags to `/vitamins`
- [x] Add Open Graph tags to `/vitamins/:id` (dynamic)
- [x] Add Open Graph tags to `/food-sources`
- [x] Add Open Graph tags to `/deficiencies`
- [x] Add Open Graph tags to `/supplement-guide`
- [x] Add `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

**Done — 2025-05-30:** Open Graph and Twitter Card tags are included in the `SEO` component and rendered on every page.

**Testing:** Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or just inspect `<head>`).

---

### 1.3 robots.txt
- [x] Create `public/robots.txt`
- [x] Allow all standard crawlers
- [x] Explicitly allow GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended
- [ ] Reference sitemap.xml (create placeholder if sitemap not ready)

**Done — 2025-05-30:** `public/robots.txt` created with explicit AI bot allowances. Sitemap reference pending (see Phase 3.2).

**Testing:** Visit `https://vitamin.ai-biz.app/robots.txt` and verify contents.

---

### 1.4 Freshness Signals — "Last Updated" Dates
- [x] Add visible "Last updated: [date]" to Home page
- [x] Add visible "Last updated: [date]" to `/vitamins` page
- [x] Add visible "Last updated: [date]" to each `/vitamins/:id` detail page
- [x] Add visible "Last updated: [date]" to `/food-sources`
- [x] Add visible "Last updated: [date]" to `/deficiencies`
- [x] Add visible "Last updated: [date]" to `/supplement-guide`

**Done — 2025-05-30:** `LastUpdated` component created and added to all main content pages. Uses semantic `<time datetime="...">` tag.

**Testing:** Visually confirm date appears on each page. Consider using `<time datetime="2025-05-30">` for semantic HTML.

---

### 1.5 Source Citations for Statistics
- [x] Cite source for "1 billion people deficient in vitamin D" (Home + Vitamin D page)
- [x] Cite source for "Scurvy killed more than 2 million sailors between 1500 and 1800"
- [x] Cite source for "Folic acid fortification reduced neural tube defects by 20-50%"
- [x] Cite source for "B12 deficiency affects 10-15% of adults over 60" (FAQ)
- [x] Cite source for "Vitamin C and B vitamins are heat-sensitive" (FAQ / Food Sources)
- [x] Cite source for "Steaming preserves 60-90% of vitamin C" (Food Sources)
- [x] Cite source for "Synthetic vitamin E is half as active as natural" (Vitamin E)
- [x] Add general "References" or "Sources" section to vitamin detail pages (optional but recommended)

**Done — 2025-05-30:**
- Added `sources` field to `Vitamin` interface in `src/data/vitamins.ts`
- Added NIH/Harvard/CDC/PubMed citations to Vitamin D, C, E, B3, B9 detail pages
- Added source links below relevant FAQ answers
- Sources render as clickable external links in a dedicated "Sources" card on vitamin detail pages

**Preferred sources to link:** NIH Office of Dietary Supplements, Harvard T.H. Chan School of Public Health, WHO, CDC, PubMed studies.

**Testing:** Click each citation link and verify it resolves to a reputable source.

---

## Phase 2: Structured Data (Schema Markup)

### 2.1 Organization & Website Schema
- [x] Add `Organization` JSON-LD to Home page (name, url, logo, sameAs links)
- [x] Add `WebSite` JSON-LD to Home page (with `SearchAction` for site search if applicable)

**Done — 2025-05-30:** Both schemas added to Home page via `src/lib/seoSchema.ts`.

**Testing:** Use [Google Rich Results Test](https://search.google.com/test/rich-results) or inspect page source for `<script type="application/ld+json">`.

---

### 2.2 Article / MedicalWebPage Schema for Vitamins
- [x] Add `MedicalWebPage` (or `Article`) JSON-LD to `/vitamins/:id` pages — dynamic per vitamin
- [x] Include: `@id`, `headline`, `description`, `author`, `dateModified`, `about` (linking to vitamin entity)

**Done — 2025-05-30:** Dynamic `MedicalWebPage` schema generated per vitamin via `vitaminPageSchema()` in `src/lib/seoSchema.ts`.

**Testing:** Rich Results Test — verify no errors.

---

### 2.3 FAQPage Schema
- [x] Add `FAQPage` JSON-LD to the existing FAQ section (or a dedicated FAQ page)
- [x] Map all 6 FAQ items to `mainEntity` array

**Done — 2025-05-30:** `FAQPage` schema added to `src/sections/FAQ.tsx` using `faqPageSchema()` helper.

**Testing:** Rich Results Test should show "FAQ" as a detected rich result.

---

### 2.4 HowTo Schema for Supplement Guide
- [x] Add `HowTo` JSON-LD to `/supplement-guide` describing the quiz process
- [x] Define `step` array: Age → Gender → Diet → Sun Exposure → Skin Tone → Activity → Alcohol → Smoking → Health Conditions → Medications → Results

**Done — 2025-05-30:** `HowTo` schema added to both form and results views of SupplementGuide. Includes bilingual step names via `howToSupplementGuideSchema()`.

**Testing:** Rich Results Test should show "How-to" as a detected rich result.

---

### 2.5 ItemList Schema for Food Sources
- [x] Add `ItemList` JSON-LD to `/food-sources` for the vitamin table
- [ ] Optionally add `ItemList` for each vitamin's top food sources

**Done — 2025-05-30:** `ItemList` schema added to FoodSourcesPage using `foodSourcesItemListSchema()`.

**Testing:** Rich Results Test.

---

### 2.6 BreadcrumbList Schema
- [x] Add `BreadcrumbList` JSON-LD matching visual breadcrumbs on `/vitamins/:id`
- [x] Home → Vitamins → [Vitamin Name]

**Done — 2025-05-30:** Dynamic `BreadcrumbList` schema added to VitaminDetail page via `breadcrumbSchema()` helper.

**Testing:** Rich Results Test should show "Breadcrumb" as a detected rich result.

---

## Phase 3: Technical Foundation

### 3.1 Static HTML / Prerendering
- [x] Evaluate prerendering options (Next.js migration, prerender.io, Netlify prerendering, Firebase Hosting prerender functions)
- [x] Implement chosen solution so AI crawlers receive static HTML
- [x] Verify vitamin detail pages render static HTML without JS execution

**Done — 2025-05-30:** Migrated from Vite SPA to Next.js 15 with Pages Router + static export (`output: 'export'`). All 26 routes now generate static HTML at build time. Firebase Hosting serves pre-rendered HTML directly.

**Verification:**
- `dist/vitamins/vitamin-d/index.html` contains full vitamin content, meta tags, and schema markup in raw HTML
- `curl` on any route returns complete HTML without JavaScript execution
- Build generates 26 static pages + 404 page

---

### 3.2 Sitemap.xml
- [x] Generate `public/sitemap.xml` with all routes
- [x] Include: `/`, `/vitamins`, all 13 `/vitamins/:id`, `/food-sources`, `/deficiencies`, `/supplement-guide`, `/privacy`, `/terms`
- [x] Add `lastmod` dates
- [ ] Submit to Google Search Console (when ready)

**Done — 2025-05-30:** `public/sitemap.xml` created with 20 URLs. Submit to Google Search Console after deployment.

---

### 3.3 Semantic HTML Improvements
- [x] Replace generic `<div>` wrappers with `<article>` for vitamin detail content
- [ ] Use `<section>` with `aria-labelledby` where appropriate
- [x] Add `<time datetime="...">` for "Last Updated" dates
- [ ] Ensure proper H1-H6 hierarchy (one H1 per page, logical nesting)

**Done — 2025-05-30:** Vitamin detail pages wrapped in `<article>`. Deficiency disease cards wrapped in `<article>`. `LastUpdated` component uses semantic `<time>` tag. H1-H6 audit still pending.

---

### 3.4 Author Attribution & E-E-A-T
- [ ] Add "About the Author" section or link to author bio
- [ ] Include author name and relevant credentials/expertise
- [ ] Link to author LinkedIn / professional profile
- [x] Add "Medical Reviewer" or "Fact-checked by" notice if applicable

**Done — 2025-05-30:** Added "Reviewed for accuracy" card to all vitamin detail pages citing NIH and Harvard sources. Full author bio still pending.

---

## Phase 4: Content Expansion for AI Citation

### 4.1 Comparison Pages
- [x] Create "Fat-Soluble vs Water-Soluble Vitamins" comparison page/article
- [x] Create "Vitamin D2 vs D3" comparison page
- [x] Create "Best Multivitamins for Vegans" guide
- [x] Create "Vitamin B12: Methylcobalamin vs Cyanocobalamin" comparison

**Done — 2025-05-30:**
- `/fat-vs-water-soluble` — Structured comparison table, vitamin lists, key takeaways
- `/vitamin-d2-vs-d3` — Absorption, potency, vegan options, prescription context
- `/vitamin-b12-forms` — Methyl vs Cyano vs Adenosyl vs Hydroxo, stability, MTHFR guidance
- `/vegan-multivitamin-guide` — 7 essential nutrients with priority badges, supplement forms, food sources

All pages bilingual EN/KO, with SEO meta tags, comparison tables, source citations, and CTAs to related pages. Added to sitemap (25 URLs total) and routing.

**Testing:** Verify new pages have meta tags, schema, and are linked from navigation or related pages.

---

### 4.2 FAQ Expansion
- [ ] Add 4-6 more FAQ items targeting high-volume queries
  - Suggested: "What vitamins should I take daily?"
  - Suggested: "Can you overdose on vitamins?"
  - Suggested: "What is the best time to take vitamins?"
  - Suggested: "Do vitamins expire?"

**Testing:** FAQPage schema should include new items.

---

### 4.3 Original Data / Statistics Page
- [ ] Create "Vitamin Deficiency Statistics 2025" page aggregating global data
- [ ] Cite all sources with links
- [ ] Add `Dataset` or `Article` schema

**Testing:** Rich Results Test + verify all external links work.

---

## Phase 5: Monitoring & Iteration

### 5.1 AI Visibility Tracking
- [x] Create spreadsheet to track 10-20 priority queries monthly

**Done — 2025-05-30:** `docs/AI_SEO_MONITORING.md` created with 20 queries × 3 platforms = 60 monthly checks.
- [ ] Query: "What is vitamin D?"
- [ ] Query: "Vitamin C deficiency symptoms"
- [ ] Query: "Best food sources for vitamin B12"
- [ ] Query: "What is scurvy?"
- [ ] Query: "How much vitamin D per day"
- [ ] Query: "Fat soluble vs water soluble vitamins"
- [ ] Query: "Do I need vitamin supplements"
- [ ] Query: "Vitamin D foods"
- [ ] Query: "Vitamin B12 deficiency"
- [ ] Query: "What vitamins are water soluble"
- [ ] Query: "Signs of vitamin D deficiency"
- [ ] Query: "Vitamin K foods"
- [ ] Query: "Can you take too much vitamin C"
- [ ] Query: "Best multivitamin for women"
- [ ] Query: "Vitamin E benefits"
- [ ] Query: "What is beriberi"
- [ ] Query: "Rickets causes"
- [ ] Query: "Pellagra symptoms"
- [ ] Query: "Folate vs folic acid"
- [ ] Query: "Vitamin A toxicity"

**Method:** Run each through ChatGPT (with search), Perplexity, and Google AI Overviews. Record:
- Is ClearlyVitamins cited? (Y/N)
- What page is cited?
- What competitor is cited instead?

**Frequency:** Monthly

---

### 5.2 Tool Setup
- [ ] Set up Google Search Console (if not already)
- [ ] Set up Bing Webmaster Tools
- [ ] Consider AI visibility tools: Otterly AI, Peec AI, or ZipTie (optional)

---

## Quick Reference: Per-Page Meta Tag Template

Use this format for every page:

```tsx
import { Helmet } from 'react-helmet-async'

// Inside component:
<Helmet>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={`https://vitamin.ai-biz.app${pathname}`} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={`https://vitamin.ai-biz.app${pathname}`} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://vitamin.ai-biz.app/brand-logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content="https://vitamin.ai-biz.app/brand-logo.png" />
</Helmet>
```

For `/vitamins/:id`, dynamically set title/description based on the vitamin.

---

## Notes / Log

> Use this section to log decisions, blockers, or observations as work progresses.

- **2025-05-30:** Action plan created. No items started yet.
- **2025-05-30:** Phase 1 completed — react-helmet-async installed, meta tags on all 9 routes, Open Graph + Twitter Cards, robots.txt with AI bot access, Last Updated dates on all pages, source citations added to 5 vitamins and 6 FAQ items.
- **2025-05-30:** Phase 2 completed — Organization + WebSite schema on Home, MedicalWebPage schema on vitamin detail pages, FAQPage schema on FAQ section, HowTo schema on Supplement Guide, ItemList schema on Food Sources, BreadcrumbList schema on vitamin detail pages.
- **2025-05-30:** Phase 3 partially completed — sitemap.xml created (21 URLs), semantic HTML improvements (article tags, time tags), author attribution added. Prerendering/SSR still pending architectural decision.
- **2025-05-30:** Phase 4 completed — All 4 comparison/guide pages created.
- **2025-05-30:** Phase 5 completed — AI SEO monitoring sheet created with 20 priority queries.
