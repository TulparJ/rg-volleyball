# RG Volleyball Training

Professional website for **RG Volleyball Training** — youth volleyball coaching in Princeton, NJ.

## Tech Stack
- React 18 + Vite
- Tailwind CSS v3

## Quick Start

```bash
npm install
npm run dev        # dev server at localhost:5173
npm run build      # production build → dist/
npm run preview    # preview prod build locally
```

## Deploy (Pick One)

**Netlify** (easiest): Push to GitHub → netlify.com → New site from Git → build cmd: `npm run build`, publish dir: `dist`

**Vercel**: Push to GitHub → vercel.com → Import → auto-detects Vite → Deploy

**GitHub Pages**: Add `base: '/repo-name/'` to `vite.config.js`, then `npm run build && npx gh-pages -d dist`

## Structure

```
src/
  components/    Navbar, Footer, Icon
  sections/      Hero, HowItWorks, About, Programs, Skills, Pricing, FAQ, Contact...
  hooks/         useScrollReveal
  utils/         constants.js  ← edit content here
public/
  coach-holding.png
  coach-spike.png
  coach-match.png
```

## Customizing Content

All site content (programs, skills, FAQs, areas) lives in **`src/utils/constants.js`** — edit there without touching components.

Update contact info (email, phone) in `src/sections/Sections.jsx` and `src/components/Footer.jsx`.
