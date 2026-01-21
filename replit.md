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
- 2026-01-21: Complete website redesign - all 6 pages updated with premium dark theme
  - Created shared theme.css for consistent styling (dark background #0f0f23, indigo/violet gradients)
  - **Services page**: 6 service cards, 4-step process, technology stack grid
  - **Portfolio page**: 8 impressive case studies with stats
    - Lephalale Connect (business directory)
    - LPG Gas Stock Control (fraud prevention, R500K+ savings)
    - Harmony Institute LMS (300+ students)
    - TransLogix Fleet Tracker (45 vehicles)
    - MedBook Appointment System (60% fewer no-shows)
    - FreshFarm Direct (e-commerce, 2K+ orders/month)
    - StaffSync HR System (200+ employees)
    - ServiceBot AI Assistant (70% auto-resolved)
  - **Pricing page**: Project-based pricing (R20K starter, R50K business, R150K+ enterprise)
    - Education plans (R15-R35 per student/month)
  - **About page**: Mission, values, team sections with agency positioning
  - **Contact page**: Form with WhatsApp integration, response time cards
  - Updated contact email to info@auto-m8.co.za throughout
  - Fade-in animations, floating card effects, mobile-responsive (breakpoints at 1024px, 768px)
- 2026-01-21: Configured for Replit environment (port 5000, bind to 0.0.0.0)
