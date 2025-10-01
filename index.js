// Importing Express library
const express = require('express');

// Create an Express application
const app = express();

// Set up the server to accept JSON data
app.use(express.json());

// Default route to check if the server is working
app.get('/', (req, res) => {
  res.send('Welcome to the Bus Tracking API');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('API is running on http://localhost:3000');
});
