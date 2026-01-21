# AutoM8 Website

## Overview
AutoM8 is a company website for a South African digital solutions provider focusing on schools and businesses. The site is a static website served via Express.js.

## Project Architecture
- **Framework**: Node.js with Express.js
- **Type**: Static website server
- **Port**: 5000 (development and production)
- **Entry Point**: server.js

## Directory Structure
```
/
├── server.js          # Express server serving static files
├── package.json       # Node.js dependencies and scripts
├── public/            # Static assets
│   ├── index.html     # Homepage
│   ├── about.html     # About page
│   ├── services.html  # Services page
│   ├── pricing.html   # Pricing page
│   ├── portfolio.html # Portfolio page
│   ├── contact.html   # Contact page
│   ├── scripts/       # JavaScript files
│   └── styles/        # CSS files
└── styles/            # Additional styles
```

## Commands
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

## Configuration
- Server binds to `0.0.0.0:5000` for Replit compatibility
- Static files served from `/public` directory
- SPA-like routing: unmatched routes serve index.html

## Recent Changes
- 2026-01-21: Major landing page redesign - pivot from school systems to high-end business automation agency
  - New dark premium theme with existing brand colors (#4f46e5, #7c3aed)
  - Updated hero: "We Build the Digital Engines that Power Your Business"
  - Added Featured Deployments section (Lephalale Connect, LPG Gas Stock Control, Harmony Institute LMS)
  - Reorganized Services into 3 cards (Custom Operational Software, Specialized Web Platforms, School & Education Tech)
  - Added Agency Partnerships section for B2B white-label services
  - Updated contact email to info@auto-m8.co.za
  - Added fade-in animations and floating card effects
  - Mobile-responsive design with breakpoints at 1024px and 768px
- 2026-01-21: Configured for Replit environment (port 5000, bind to 0.0.0.0)
