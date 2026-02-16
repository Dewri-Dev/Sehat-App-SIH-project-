const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { patient_name, doctor_id, appointment_date, appointment_time } = req.body;

  const sql = `
    INSERT INTO appointments 
    (patient_name, doctor_id, appointment_date, appointment_time)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [patient_name, doctor_id, appointment_date, appointment_time],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ message: "Appointment Booked!" });
      }
    });
});

module.exports = router;
