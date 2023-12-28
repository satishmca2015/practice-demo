/*

Implementing rate limiting in a Node.js application can be efficiently achieved using middleware, especially in a framework like Express. One of the most popular middleware for this purpose is express-rate-limit. It allows you to limit repeated requests to public APIs and/or endpoints such as password reset.

*/

const express = require('express');
const rateLimit = require('express-rate-limit');

// Create an instance of express
const app = express();

// Define a rate limit rule
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply the rate limiting middleware to all requests
app.use('/api/', apiLimiter);

// Your API endpoints
app.get('/api/some-endpoint', (req, res) => {
  res.json({ message: "Hello from API!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
