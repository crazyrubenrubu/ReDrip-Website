// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route for the homepage
app.get('/', (req, res) => {
    // Render the index.ejs file from the 'views' folder
    res.render('index'); 
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});