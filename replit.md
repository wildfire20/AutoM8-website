# AutoM8 Website

## Overview
AutoM8 is a company website for a South African software development company focusing on custom software, business automation, and education technology. The site is a static website served via Express.js.

## Design System: Concept D — Bold Minimal
Inspired by synthesis.co.za and Apple's website. Key design decisions:
- **Background**: Pure white (`#ffffff`) everywhere; alternate sections use barely-off-white (`#f9fafb`)
- **Typography**: Near-black (`#111827`) at 900 weight, tight letter-spacing (`-0.04em`). Headings are the visual centrepiece.
- **Accent**: Blue (`#2563eb`) used sparingly — one accent word per headline, CTA buttons, small uppercase micro-labels. Never as section backgrounds (except the single dark CTA strip).
- **Borders**: Thin 1px `#e5e7eb` lines separate sections and define cards. No coloured section backgrounds.
- **Illustrations**: `filter: grayscale(20%) saturate(0.65)` applied to desaturate DrawKit illustrations so they blend naturally without clashing colours.
- **Cards**: White background, 1px border, 14px radius, subtle hover lift. No coloured backgrounds.
- **Section separators**: `border-bottom: 1px solid #f3f4f6` instead of background colour changes.

## Project Architecture
- **Framework**: Node.js with Express.js
- **Type**: Static website server
- **Port**: 5000
- **Entry Point**: server.js

## Directory Structure
```
/
├── server.js
├── package.json
├── public/
│   ├── index.html       # Homepage — hero, stats strip, pain section, 3 service cards, about, process, portfolio preview, CTA
│   ├── about.html
│   ├── services.html
│   ├── pricing.html
│   ├── portfolio.html   # 8 case studies
│   ├── contact.html
│   └── styles/
│       └── theme.css    # Shared design system — all CSS variables and global classes
```

## Commands
- `npm start` — Start the production server
- `npm run dev` — Start development server with nodemon

## Configuration
- Server binds to `0.0.0.0:5000` for Replit compatibility
- Static files served from `/public` directory

## Contact Details
- Email: Autom8streamlining@gmail.com
- WhatsApp: +27 68 153 6136

## Illustration Mapping
- illus-1.png → Hero (team collaboration)
- illus-2.png → Custom software service card
- illus-3.png → Pain point section (overwhelmed)
- illus-4.png → Automation service card
- illus-5.png → Education service card
- illus-6.png → Process section
- illus-7.png → About section (calm, in control)

## Hidden Pages
- `/transit-demo.html` — Embeds taxi booking app demo, no AutoM8 nav/footer

## Recent Changes
- 2026-03-18: Full redesign to Concept D (Bold Minimal / Stripe-inspired)
  - Complete rewrite of all 6 pages + theme.css
  - Pure white backgrounds, near-black heavy typography
  - Blue as sparse accent only (no coloured section backgrounds)
  - Illustrations desaturated via CSS filter
  - Numbered service cards (01, 02, 03)
  - Stats strip with animated counters
  - Dark (#111827) closing CTA section
