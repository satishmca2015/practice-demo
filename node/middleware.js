/*
Middleware in Express is a fundamental concept that allows you to execute functions in between receiving a request and sending a response. It sits in the middle of these two actions, hence the term "middleware." Middleware functions have access to the request object (req), response object (res), and the next function in the application's request-response cycle 

next(); // next function next to proceed to the next middleware or route handler

 */



const express = require('express');
const app = express();

// Custom middleware function
const logTimestamp = (req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next(); // Call next to proceed to the next middleware or route handler
};

// Registering the middleware globally for all routes
app.use(logTimestamp);

// Route handlers
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


