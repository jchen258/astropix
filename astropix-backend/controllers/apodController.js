const axios = require("axios");

const getAPOD = async (req, res) => {
  try {
    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: process.env.NASA_API_KEY,
        date: req.query.date, // Optional: support ?date=YYYY-MM-DD
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching APOD:", error.message);
    res.status(500).json({ error: "Failed to fetch APOD" });
  }
};

module.exports = { getAPOD };
