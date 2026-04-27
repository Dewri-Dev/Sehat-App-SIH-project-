const mysql = require("mysql2");

const db_config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Nayan@123",
  database: process.env.DB_NAME || "sehat",
  port: process.env.DB_PORT || 3306
};

const connection = mysql.createConnection(db_config);

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

module.exports = connection;
