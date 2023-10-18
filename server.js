const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your Book Mania app!');
});

// Add more route handlers or integrate with Flask API as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
