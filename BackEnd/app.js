require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

module.exports = app;

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);


const projectRoutes = require("./routes/projectRoutes");

app.use("/api/projects", projectRoutes);





const profileRoutes = require("./routes/profileRoutes");

app.use("/api/profile", profileRoutes);








const experienceRoutes = require("./routes/experienceRoutes");

app.use("/api/experience", experienceRoutes);







const educationRoutes = require("./routes/educationRoutes");

app.use("/api/education", educationRoutes);
