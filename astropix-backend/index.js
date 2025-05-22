require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const apodRoutes = require("./routes/apod");

app.use("/apod", apodRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Astropix Backend is alive 🚀");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
