# DevOps Portfolio Website

A clean, professional single-page portfolio for DevOps engineers. Content is written for **non-technical readers** and **engineers** side by side — no flashy or confusing animations.

## Features

- Dual explanations (“In simple terms” / “For engineers”)
- Animated pipeline walkthrough (subtle; respects `prefers-reduced-motion`)
- Scroll reveal and light hover motion only
- Easy to customize via `src/data/portfolio.js`

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Customize

Edit `src/data/portfolio.js` with your name, links, projects, and skills.

### Your photo (hero background)

1. Add your portrait as **`public/photo.jpg`** (recommended: 1600×1000 or larger, you centered).
2. The hero uses it as a **full background** (slow zoom motion) and as a **card on desktop**.
3. Until `photo.jpg` exists, the site uses **`public/photo.svg`** as a placeholder.
4. For PNG, set `heroPhoto: "/photo.png"` in `portfolio.js`.

## Build for production

```bash
npm run build
npm run preview
```

Static files are in `dist/` — deploy to Netlify, Vercel, GitHub Pages, or any static host.
