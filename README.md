# Nitesh Domal — Portfolio

Personal portfolio of **Nitesh Domal** — AI/ML Engineer (Multi-Agent systems · Edge AI · Agentic systems).

Built with **React + Vite**.

## Highlights
- ⚛️ React 18 + Vite — component-based, fast HMR, optimized production build.
- 🤖 Scroll-driven "tech buddy" mascot that travels a pathway as you scroll (Lenis smooth scroll).
- 🖥️ Enriched sections: live `whoami` console, agent-pipeline visual, proficiency manifest.
- 🏆 Reimagined "Trophy Cabinet" — holographic, cursor-tilt foil cards with metallic medallion seals.
- 🎞️ Interactive project carousel (arrows, dots, keyboard, touch-swipe).
- 💼 Work experience timeline + downloadable résumé and internship certificate.
- 📱 Fully responsive, dark "terminal/agentic" aesthetic.

## Tech
React 18 · [Vite](https://vitejs.dev) · [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll · [Simple Icons](https://simpleicons.org) (CDN) · Clash Display / Satoshi / JetBrains Mono fonts.

## Run locally
```bash
npm install
npm run dev        # dev server with HMR
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Tip: append `?fast` to the URL to skip the boot screen and entrance animations.

## Structure
```
index.html              # Vite entry (mounts React)
src/
  main.jsx              # app bootstrap
  App.jsx               # section composition
  data/portfolio.js     # single source of content
  hooks/                # scroll manager + IntersectionObserver hooks
  components/           # one component per section + chrome
  styles/global.css     # design tokens + all styles
public/
  hackathon/            # hackathon win photos
  work_exp/             # résumé + internship certificate (PDF)
```

## Deploy
Build with `npm run build` and serve the `dist/` folder on any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages).

---
© 2026 Nitesh Domal
