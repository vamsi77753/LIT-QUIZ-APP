const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 9000;

// Middleware to serve static files from the 'data' directory
app.use(express.static(path.join(__dirname, "data")));

// Route to serve questions.json
app.get("/questions", (req, res) => {
  res.sendFile(path.join(__dirname, "data", "questions.json"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
