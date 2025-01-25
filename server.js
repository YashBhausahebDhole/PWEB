const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // Parse JSON request bodies

app.post('/create-account', (req, res) => {
  // Process the form data and create the account
  const { username, email, password } = req.body;
  // Add your account creation logic here
  console.log('New account created:', { username, email, password });
  res.json({ message: 'Account created successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});