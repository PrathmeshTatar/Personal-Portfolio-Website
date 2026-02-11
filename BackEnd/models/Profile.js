const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  about: [String],
  skills: [String],
});

module.exports =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
