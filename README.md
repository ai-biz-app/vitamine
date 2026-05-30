# ClearlyVitamins

> Make informed decisions about vitamins and supplements — backed by science, built for real life.

**Live Site:** https://vitamine-guide.web.app

---

## Why This Project Exists

### The Problem

The supplement industry is a $150+ billion market built largely on confusion. Walk into any pharmacy and you're confronted with hundreds of bottles promising better health, energy, immunity, and longevity — yet most people have no idea what they actually need. Six key facts drive this problem:

1. **Information overload** — There are 13 essential vitamins, not 50. The supplement aisle is 90% marketing.
2. **No personalization** — A 25-year-old vegan athlete and a 70-year-old sedentary adult have fundamentally different nutritional needs, yet most advice treats everyone the same.
3. **Fear-based marketing** — "Mega-dose" and "super-blend" are selling points, not health advice. More is often worse, especially with fat-soluble vitamins.
4. **Language barriers** — In Korea and other non-English markets, reliable vitamin information is either unavailable or poorly translated.
5. **Historical ignorance** — Scurvy, rickets, beriberi, and pellagra killed millions within living memory. Understanding these diseases underscores why vitamins matter.
6. **The food-first truth** — For most healthy adults, a varied diet provides all needed vitamins. Supplements matter for specific groups, not everyone.

### The Mission

ClearlyVitamins exists to cut through the noise. It provides:
- **Clear, science-backed information** about all 13 essential vitamins
- **Personalized recommendations** based on age, gender, diet, lifestyle, and health conditions
- **Bilingual support** (English/Korean) to serve a global audience
- **Zero commercial bias** — no product sales, no affiliate links, no sponsorships

---

## What You'll Find

### 1. Explore All 13 Vitamins
Complete profiles for each vitamin covering:
- Chemical names and forms (e.g., pyridoxal 5'-phosphate for B6)
- Key biological functions with mechanistic detail
- Best food sources with serving sizes and nutrient amounts
- Recommended Daily Allowances (RDA) by gender
- Deficiency symptoms and high-risk groups
- Tolerable Upper Limits (to prevent toxicity)
- Historical fun facts

### 2. Personalized Supplement Guide
An interactive questionnaire that generates tailored recommendations based on:
- **Age** (infant through senior)
- **Gender** (with pregnancy/breastfeeding status for women)
- **Diet type** (omnivore, pescatarian, vegetarian, vegan, restrictive)
- **Sun exposure** (critical for vitamin D assessment)
- **Skin tone** (affects vitamin D synthesis efficiency)
- **Activity level, alcohol use, smoking status**
- **Health conditions** (celiac, Crohn's, osteoporosis, anemia, etc.)
- **Medications** (metformin, PPIs, warfarin, statins, etc.)

Recommendations are scored by priority (Essential / Recommended / Consider) and include dosage, best form, timing, food sources, and cautions.

### 3. Deficiency Diseases
Deep dives into the four major deficiency diseases that shaped medicine:
- **Scurvy** (Vitamin C) — killed 2+ million sailors
- **Rickets** (Vitamin D) — once affected 90% of children in some cities
- **Beriberi** (Vitamin B1) — endemic across Asia
- **Pellagra** (Vitamin B3) — killed 100,000+ Americans in the early 20th century

### 4. Food Sources
Detailed reference tables showing:
- Top food sources per vitamin ranked by content
- Serving sizes and vitamin amounts per serving
- Cooking and storage tips to maximize nutrient retention

### 5. Comparison Guides
Side-by-side comparisons to answer common questions:
- **Fat-Soluble vs. Water-Soluble Vitamins** — absorption, storage, toxicity risks
- **Vitamin D2 vs. D3** — which form is more effective and why
- **Vitamin B12 Forms** — cyanocobalamin vs. methylcobalamin vs. hydroxocobalamin
- **Vegan Multivitamin Guide** — which nutrients matter most on a plant-based diet

---

## Technical Stack

### Why This Stack?

| Technology | Purpose | Why We Chose It |
|---|---|---|
| **Next.js 15** | Framework | Static site generation (SSG) for SEO, fast pre-rendered HTML, file-system routing |
| **React 19** | UI library | Component-based architecture, massive ecosystem |
| **TypeScript** | Type safety | Catches bugs at compile time, self-documenting code |
| **Tailwind CSS** | Styling | Utility-first approach, minimal CSS bundle, rapid iteration |
| **GSAP** | Animations | Scroll-driven animations with ScrollTrigger |

### Why Next.js SSG?

The site was migrated from a Vite SPA to **Next.js with static export** for a critical reason: **AI and search engine visibility**.

- **Pre-rendered HTML** — Every page is generated as static HTML at build time, so crawlers (including AI bots like GPTBot, ClaudeBot, and PerplexityBot) see full content without executing JavaScript.
- **Meta tags per page** — Each of the 26+ routes has unique `<title>`, `<meta description>`, Open Graph, and Twitter Card tags.
- **Structured data** — JSON-LD schemas (MedicalWebPage, FAQPage, HowTo, BreadcrumbList, Organization) are embedded directly in the HTML.
- **robots.txt** — Explicitly allows AI crawlers to index all content.
- **Sitemap** — Auto-generated `sitemap.xml` with all 25+ URLs.

### Project Structure

```
src/
├── pages/                  # Next.js file-system routes
│   ├── index.tsx           # Landing page
│   ├── vitamins/
│   │   ├── index.tsx       # Vitamin directory
│   │   └── [id].tsx        # Dynamic vitamin detail pages
│   ├── deficiencies/
│   │   └── index.tsx       # Deficiency diseases
│   ├── food-sources/
│   │   └── index.tsx       # Food reference tables
│   ├── supplement-guide/
│   │   └── index.tsx       # Interactive recommendation quiz
│   ├── fat-vs-water-soluble/
│   │   └── index.tsx       # Comparison guide
│   ├── vitamin-d2-vs-d3/
│   │   └── index.tsx       # Comparison guide
│   ├── vitamin-b12-forms/
│   │   └── index.tsx       # Comparison guide
│   ├── vegan-multivitamin-guide/
│   │   └── index.tsx       # Comparison guide
│   ├── privacy/
│   │   └── index.tsx       # Privacy policy
│   └── terms/
│       └── index.tsx       # Terms of service
├── page-components/        # Page UI components (imported by routes)
│   ├── Home.tsx
│   ├── VitaminsPage.tsx
│   ├── VitaminDetail.tsx
│   ├── DeficiencyPage.tsx
│   ├── FoodSourcesPage.tsx
│   ├── SupplementGuide.tsx
│   ├── ComparisonFatWater.tsx
│   ├── ComparisonD2D3.tsx
│   ├── ComparisonB12Forms.tsx
│   ├── GuideVeganMultivitamin.tsx
│   ├── PrivacyPolicy.tsx
│   └── TermsOfService.tsx
├── sections/
│   ├── Navigation.tsx      # Top nav with language toggle
│   └── Footer.tsx
├── components/
│   ├── SEO.tsx             # Reusable meta tags + JSON-LD schema
│   └── LastUpdated.tsx     # Review date display
├── data/
│   ├── vitamins.ts         # Complete vitamin dataset (13 vitamins)
│   ├── vitaminsKo.ts       # Korean translations
│   ├── supplementEngine.ts # Recommendation logic engine
│   ├── supplementGuideKo.ts
│   ├── deficienciesKo.ts
│   └── foodSourcesKo.ts
├── contexts/
│   └── LanguageContext.tsx # Global EN/KO language state
└── lib/
    └── seoSchema.ts        # Structured data helpers
```

### Key Design Decisions

**No database** — All data is static TypeScript. This keeps the site fast, offline-capable, and deployable anywhere as a static site. The vitamin data doesn't change frequently enough to warrant a backend.

**React Context for i18n** — A lightweight `LanguageContext` with `localStorage` persistence handles the EN/KO toggle. No heavy i18n library needed for two languages.

**Data merging pattern** — English is the base dataset; Korean overlays specific fields. This avoids duplicating unchanged data (colors, IDs, numeric values) while keeping translations complete.

**Static export** — `next.config.mjs` uses `output: 'export'` to generate a static `dist/` folder deployed to Firebase Hosting. Every route produces its own `index.html`.

---

## Vitamin Data Model

Each vitamin includes:

```typescript
interface Vitamin {
  id: string                    // e.g., 'vitamin-b12'
  name: string                  // Display name
  subtitle: string              // Common name (e.g., 'Cobalamin')
  chemicalName: string          // Full chemical nomenclature
  category: 'fat-soluble' | 'water-soluble'
  categoryLabel: string         // Localized label
  description: string           // One-line summary
  longDescription: string       // Detailed explanation with mechanisms
  color: string                 // Brand color for visual identity
  functions: string[]           // 4-5 key biological functions
  foodSources: string[]         // Top food sources
  detailedFoodSources: {        // For food sources page
    food: string
    serving: string
    amount: string
  }[]
  rda: { men: string; women: string }
  upperLimit?: string          // Tolerable upper intake level
  deficiency: {
    name: string
    symptoms: string[]
  }
  highRiskGroups: string[]
  funFact: string
  sources?: {                  // Academic citations
    text: string
    url: string
  }[]
}
```

---

## Recommendation Engine Logic

The supplement engine (`supplementEngine.ts`) implements evidence-based rules covering 15+ nutrients:

**Rules are prioritized by condition:**
- **Pregnancy/lactation** — folate, iron, DHA, iodine, choline (all Essential)
- **Vegan diet** — B12 (Essential), iron, zinc, omega-3 (Recommended)
- **Age 50+** — B12 (Essential), vitamin D, calcium
- **Limited sun exposure** — vitamin D (dosage adjusted by severity)
- **Medication interactions** — PPIs reduce B12 absorption, metformin depletes B12, warfarin conflicts with vitamin K, anticonvulsants increase D needs
- **Health conditions** — celiac/Crohn's/bariatric surgery affect fat-soluble vitamin absorption; osteoporosis requires D+K2+calcium

Each recommendation includes priority level, dosage, best chemical form, rationale, food sources, timing, and cautions.

---

## Bilingual Architecture

### Translation Strategy

1. **UI strings** — Centralized in `LanguageContext.tsx` with a `t(key)` function
2. **Vitamin data** — Separate `vitaminsKo.ts` with complete Korean translations
3. **Guide labels** — `supplementGuideKo.ts` for health conditions, medications, age ranges
4. **Dynamic merging** — Pages merge Korean data over English base at runtime using `useMemo`

### Korean Coverage

All 13 vitamins, 4 deficiency diseases, 10 health conditions, 10 medication types, 9 age ranges, cooking tips, and all UI labels are fully translated.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (generates static export to dist/)
npm run build

# Deploy to Firebase Hosting
npm run deploy
```

---

## Deployment

The `dist/` folder is a static site generated by Next.js and deployed to **Firebase Hosting**. The `firebase.json` config points to `dist/` with `cleanUrls: true`.

---

## License

MIT — Use freely for educational and non-commercial purposes.

---

*Built with the belief that understanding your body shouldn't require a PhD — or a marketing filter.*
