// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an instance of express
const app = express();

// Define the port number
const port = 9000;

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB using mongoose
mongoose.connect('mongodb://localhost/snakegame', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Get a reference to the database connection
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Snake Game Backend');
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// Import the score routes
const scoreRoutes = require('./routes/scores');

// Use the score routes for any requests to /scores
app.use('/scores', scoreRoutes);
