// Create web server
const express = require('express');

// Create express app
const app = express();

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,
      text: 'This is a comment!'
    },
    {
      id: 2,
      text: 'This is another comment!'
    }
  ]);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
// End web server