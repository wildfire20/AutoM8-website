const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

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
