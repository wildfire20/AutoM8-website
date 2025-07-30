# AutoM8 Company Website

A modern, responsive website for AutoM8 - a South African tech company providing digital solutions for schools and businesses.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Fast Loading**: Optimized images, CSS, and JavaScript for quick load times
- **SEO Friendly**: Semantic HTML structure and meta tags for better search rankings
- **Interactive Elements**: Contact forms, pricing calculators, and smooth scrolling
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Express.js Server**: Ready for deployment on platforms like Railway, Vercel, or Heroku

## 📁 Project Structure

```
AutoM8-website/
├── server.js               # Express.js server
├── package.json            # Node.js dependencies and scripts
├── railway.toml            # Railway deployment configuration
├── .gitignore              # Git ignore file
├── public/                 # Static website files
│   ├── index.html          # Homepage
│   ├── services.html       # Services page
│   ├── pricing.html        # Pricing plans page
│   ├── portfolio.html      # Portfolio/work examples
│   ├── about.html          # Company information
│   ├── contact.html        # Contact form and information
│   ├── styles/
│   │   └── main.css        # Main stylesheet
│   └── scripts/
│       └── main.js         # JavaScript functionality
└── README.md               # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Node.js**: Server runtime
- **Express.js**: Web application framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- Footer with company information

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wildfire20/AutoM8-website.git
   cd AutoM8-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Alternative Development (Static Files)
If you prefer to work with static files:
1. Use a local server (e.g., Live Server extension in VS Code)
2. Open the `public` folder in your code editor
3. Start the local server and navigate to the served URL

## 🌐 Deployment

### Railway Deployment
1. **Connect your GitHub repository** to Railway
2. **Configure environment variables** (if needed)
3. **Deploy**: Railway will automatically detect the Express.js app and deploy it

### Other Platforms
- **Vercel**: Supports Node.js applications
- **Heroku**: Classic platform for web applications
- **Netlify**: Great for static sites (serve from `public` folder)

## 📄 Pages Overview

### Homepage (`public/index.html`)
- Hero section with main value proposition
- Feature overview cards
- Call-to-action sections
- Company highlights

### Services (`public/services.html`)
- Detailed service offerings
- Feature lists for each service
- Development process overview
- Service-specific CTAs

### Pricing (`public/pricing.html`)
- Three-tier pricing structure (Base, Pro, Premium)
- Feature comparison table
- FAQ section
- Custom solution information

### Portfolio (`public/portfolio.html`)
- Project showcases
- Client testimonials
- Technology stack display
- Success metrics

### About (`public/about.html`)
- Company mission and values
- Team information
- Company story and background
- Why choose AutoM8

### Contact (`contact.html`)
- Contact form with validation
- Multiple contact methods
- Response time information
- Quick action buttons

## 🎯 Key Features

### Interactive Elements
- Mobile-responsive navigation
- Smooth scrolling between sections
- Form validation and submission
- Hover effects and animations
- Back-to-top button
- Loading animations

### Performance Optimizations
- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Lazy loading for images
- Compressed and optimized assets

### SEO Optimizations
- Semantic HTML structure
- Meta tags for search engines
- Alt text for images
- Structured data markup ready
- Fast loading speeds

## 🛡️ Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Colors
Edit the CSS custom properties in `styles/main.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
  --text-color: #1e293b;
  --background-color: #ffffff;
}
```

### Content
- Update contact information in `contact.html`
- Modify company details in `about.html`
- Adjust pricing in `pricing.html`
- Update portfolio items in `portfolio.html`

### Styling
- Main styles: `styles/main.css`
- Mobile responsiveness: Check media queries at bottom of CSS file
- Animations: Modify keyframes and transition properties

## 📞 Contact Information Update

Before going live, update the following placeholders:

1. **Phone Numbers**: Replace `+27 XXX XXX XXX` with actual phone numbers
2. **Email**: Ensure `contact@autom8.co.za` is active
3. **WhatsApp Links**: Update WhatsApp links with actual phone numbers
4. **Social Media**: Add social media links if applicable

## 🚀 Deployment

### GitHub Pages
1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Web Hosting
1. Upload files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Configure domain settings if using custom domain

### Local Testing
- Use VS Code Live Server extension
- Or use Python: `python -m http.server 8000`
- Or use Node.js: `npx serve .`

## 📈 Analytics Setup

To add Google Analytics:
1. Create a Google Analytics account
2. Add the tracking code to all HTML files
3. Update the `gtag` function in `main.js`

## 🔄 Updates and Maintenance

### Regular Updates
- Keep contact information current
- Update portfolio with new projects
- Refresh testimonials and case studies
- Monitor and fix any broken links

### Performance Monitoring
- Check page load speeds regularly
- Monitor mobile responsiveness
- Test contact forms functionality
- Verify all links work correctly

## 📝 License

This project is created for AutoM8 company. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ for AutoM8 - Automating Success Through Digital Solutions**
