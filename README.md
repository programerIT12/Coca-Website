# Coca — Multi-page Website

A responsive multi-page website built with Vite, SCSS and vanilla JavaScript.

🔗 **Live demo:** https://programerit12.github.io/Coca-Website/

![Preview](preview.png)

## Tech stack
HTML · SCSS · JavaScript (ES6 modules) · Vite · Swiper · GitHub Actions

## Pages
- **Home**: hero, features, partners, slider
- **About**: approach, gallery slider, team slider
- **Pricing**: plans with a price switcher (regular / discounted prices)
- **Contact**: contact form with an international phone input

## Features
- Fully responsive layout with a burger menu on mobile
- Light / dark theme switcher, with the choice saved in localStorage
- Touch-friendly sliders built with Swiper
- Pricing toggle that updates plan prices with JavaScript
- International phone input (intl-tel-input) with automatic country detection
- Reusable HTML partials via `vite-plugin-html-inject`
- Image optimization and HTML minification at build time
- Code quality tools: ESLint, Stylelint, Prettier
- Automatic deployment to GitHub Pages with GitHub Actions

## Project Structure
```
src/
├── index.html, about.html, pricing.html, contact.html
├── assests/
│   ├── html/     # reusable HTML partials
│   ├── scss/     # base, components, mixins, page styles
│   ├── image/
│   ├── icons/
│   └── fonts/
└── js/
    ├── main.js, about.js, pricing.js, contact.js
    └── components/   # burger, theme, sliders, pricing, phone input
```

## Getting Started
```bash
git clone https://github.com/programerIT12/Coca-Website.git
cd Coca-Website
npm install
npm run dev
```

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:style` | Run Stylelint |
| `npm run format` | Format code with Prettier |

## Deployment
Every push to `main` triggers a GitHub Actions workflow that builds the project and deploys `dist/` to GitHub Pages.