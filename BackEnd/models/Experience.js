const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  points: [String],
});

module.exports =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
