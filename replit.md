# AutoM8 Website

## Overview
AutoM8 is a company website for a South African software development company focusing on custom software, business automation, and education technology. The site is a static website served via Express.js.

## Design
- **Theme**: Clean, professional light theme (inspired by Livex.co.za)
- **Colors**: White backgrounds (#ffffff, #f8fafc), blue accents (#2563eb)
- **Typography**: Inter font family
- **Style**: Professional, business-friendly, NOT dark/techy

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
│   └── styles/        # CSS files
│       └── theme.css  # Shared theme styles
```

## Commands
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

## Configuration
- Server binds to `0.0.0.0:5000` for Replit compatibility
- Static files served from `/public` directory
- SPA-like routing: unmatched routes serve index.html

## User Preferences
- Clean, professional look similar to livex.co.za
- Blue and white color scheme (NOT dark/techy design)
- Business-friendly aesthetic
- Contact email: Autom8streamlining@gmail.com
- WhatsApp: +27 68 153 6136

## Recent Changes
- 2026-01-21: Complete redesign to clean blue/white theme (Livex-inspired)
  - White backgrounds with blue (#2563eb) accent colors
  - Professional, approachable business aesthetic
  - Clean card designs with subtle shadows
  - All 6 pages updated with consistent styling
- 2026-01-21: Portfolio content (8 case studies preserved)
  - Lephalale Connect (business directory)
  - LPG Gas Stock Control (fraud prevention, R500K+ savings)
  - Harmony Institute LMS (300+ students)
  - TransLogix Fleet Tracker (45 vehicles)
  - MedBook Appointment System (60% fewer no-shows)
  - FreshFarm Direct (e-commerce, 2K+ orders/month)
  - StaffSync HR System (200+ employees)
  - ServiceBot AI Assistant (70% auto-resolved)
- 2026-01-21: Pricing structure preserved
  - Project-based pricing (R20K starter, R50K business, R150K+ enterprise)
  - Education plans (R15-R35 per student/month)
