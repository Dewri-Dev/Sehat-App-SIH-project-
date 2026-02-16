const express = require("express");
const cors = require("cors");

const doctorRoutes = require("./routes/doctors");
const appointmentRoutes = require("./routes/appointments");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

