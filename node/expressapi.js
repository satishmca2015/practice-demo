const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// A simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
