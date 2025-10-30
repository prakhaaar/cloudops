const pool = require("../db");

async function addSchool(req, res) {
  const { name, address, latitude, longitude } = req.body;

  if (
    !name ||
    !address ||
    typeof latitude !== "number" ||
    typeof longitude !== "number"
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      message: "School added successfully",
      schoolId: result.insertId,
    });
  } catch (err) {
    console.error("Error inserting school:", err);
    res.status(500).json({ error: "Database error", details: err.message });
  }
}

module.exports = addSchool;
