const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'avl.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌳 AVL Tree Visualization running on http://localhost:${PORT}`);
});
