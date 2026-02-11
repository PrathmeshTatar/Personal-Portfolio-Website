const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true },
  details: [String],
});

module.exports =
  mongoose.models.Education || mongoose.model("Education", educationSchema);
