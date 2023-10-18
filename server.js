const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Define your Flask app route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
