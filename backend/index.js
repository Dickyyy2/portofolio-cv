// backend/index.js
const express = require("express");
const cors = require("cors");
const { educationHistory, skills, projects } = require("./data");
const app = express();
// const PORT = 3000;
app.use(cors());

app.use(express.json());
app.get("/api/education", (req, res) => {
  res.json(educationHistory);
});
app.get("/api/skills", (req, res) => res.json(skills));
app.get("/api/projects", (req, res) => res.json(projects));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});