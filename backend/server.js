const express = require("express");
const cors = require("cors");
const path = require("path");

const doctorRoutes = require("./routes/doctors");
const appointmentRoutes = require("./routes/appointments");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/api/health", (req, res) => {
  res.send("Server running");
});

// Fallback to index
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/homepage.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

