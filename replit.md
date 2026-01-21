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
- 2026-01-21: Configured for Replit environment (port 5000, bind to 0.0.0.0)
