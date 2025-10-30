const mysql = require("mysql2/promise");
require("dotenv").config();

// Create a MySQL connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Database host (e.g., localhost)
  user: process.env.DB_USER, // DB username
  password: process.env.DB_PASSWORD, // DB password
  database: process.env.DB_NAME, // Target database name
  waitForConnections: true, // Queue incoming requests when pool is full
  connectionLimit: 10, // Max simultaneous connections
  queueLimit: 0, // No limit on queued requests
});

module.exports = pool;
