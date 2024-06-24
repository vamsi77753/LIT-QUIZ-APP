const express = require("express");
const path = require("path");
const app = express();

// Serve the questions.json file
app.get("/api/questions", (req, res) => {
  res.sendFile(path.join(__dirname, "data", "questions.json"));
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
