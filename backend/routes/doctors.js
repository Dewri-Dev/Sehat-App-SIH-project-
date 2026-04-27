const express = require("express");
const router = express.Router();
const db = require("../db");

const mockDoctors = [
  { id: 1, name: "Dr. Priya Sharma", specialty: "Cardiology", experience: 15, rating: 4.9, reviews: 124 },
  { id: 2, name: "Dr. Vikram Singh", specialty: "General Physician", experience: 10, rating: 4.8, reviews: 98 },
  { id: 3, name: "Dr. Anika Patel", specialty: "Pediatrics", experience: 8, rating: 4.9, reviews: 150 },
  { id: 4, name: "Dr. Rahul Verma", specialty: "Dermatology", experience: 12, rating: 4.7, reviews: 85 },
  { id: 5, name: "Dr. Sneha Kapoor", specialty: "Cardiology", experience: 20, rating: 5.0, reviews: 210 },
  { id: 6, name: "Dr. Amit Das", specialty: "General Physician", experience: 5, rating: 4.6, reviews: 45 }
];

// GET all doctors
router.get("/", (req, res) => {
  db.query("SELECT * FROM doctors", (err, results) => {
    if (err) {
      console.warn("DB error, returning mock doctors");
      res.json(mockDoctors);
    } else {
      // If DB is empty, might as well return mock data to look good
      if (results.length === 0) {
          res.json(mockDoctors);
      } else {
          res.json(results);
      }
    }
  });
});

module.exports = router;
