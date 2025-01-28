const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

// Sample route for testing
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
