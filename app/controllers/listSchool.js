const pool = require("../db");
const getDistance = require("../utils/distance");

async function listSchools(req, res) {
  const userLat = parseFloat(req.query.latitude);
  const userLng = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLng)) {
    return res.status(400).json({
      error: "Missing or invalid latitude/longitude query parameters",
    });
  }

  try {
    const [schools] = await pool.query("SELECT * FROM schools");

    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: getDistance(
          userLat,
          userLng,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    console.error("Error listing schools:", err);
    res.status(500).json({ error: "Database error", details: err.message });
  }
}

module.exports = listSchools;
