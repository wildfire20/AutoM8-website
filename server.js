const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root path to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle all other routes by serving index.html (for SPA-like behavior)
app.get('*', (req, res) => {
    // Check if the request is for a specific HTML file
    const requestedFile = req.path.substring(1); // Remove leading slash
    if (requestedFile.endsWith('.html')) {
        res.sendFile(path.join(__dirname, 'public', requestedFile));
    } else {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`🚀 AutoM8 website server is running on port ${PORT}`);
    console.log(`📱 Access your website at: http://localhost:${PORT}`);
});

module.exports = app;
