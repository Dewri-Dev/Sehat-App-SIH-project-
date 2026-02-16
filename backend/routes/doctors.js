const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all doctors
router.get("/", (req, res) => {
  db.query("SELECT * FROM doctors", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
