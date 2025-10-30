const express = require("express");
const router = express.Router();

// Import controller functions
const addSchool = require("../controllers/addSchool");
const listSchools = require("../controllers/listSchool");

// Route to add a new school
router.post("/addSchool", addSchool);

// Route to list schools sorted by proximity
router.get("/listSchools", listSchools);

// Root route for basic API check
router.get("/", (req, res) => {
  res.send("School Management API is live!");
});

module.exports = router;
