const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    if (process.env.NODE_ENV === 'production') {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }
    next();
});

// Keep one canonical homepage URL so search engines do not split signals.
app.get('/index.html', (req, res) => {
    res.redirect(301, '/');
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        } else if (/\.(?:css|js|svg|png|jpe?g|webp|avif|woff2?)$/i.test(filePath)) {
            res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
        }
    }
}));

// Route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve known HTML pages directly
app.get('/:page.html', (req, res, next) => {
    const filePath = path.join(__dirname, 'public', req.params.page + '.html');
    res.sendFile(filePath, (err) => {
        if (err) next(); // fall through to 404
    });
});

// 404 handler — serve custom 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 AutoM8 website server is running on port ${PORT}`);
    console.log(`📱 Access your website at: http://localhost:${PORT}`);
});

module.exports = app;
