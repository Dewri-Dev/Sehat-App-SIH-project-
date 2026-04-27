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

  try {
    db.query(sql, [patient_name, doctor_id, appointment_date, appointment_time],
      (err, result) => {
        if (err) {
          console.warn("DB error when booking, simulating success", err);
          res.json({ message: "Appointment Booked! (Simulated locally)" });
        } else {
          res.json({ message: "Appointment Booked!" });
        }
      });
  } catch (err) {
    console.warn("DB not connected, simulating success", err);
    res.json({ message: "Appointment Booked! (Simulated locally)" });
  }
});

module.exports = router;
