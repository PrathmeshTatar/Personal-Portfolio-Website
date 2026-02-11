const Experience = require("../models/Experience");

exports.getExperience = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch experience" });
  }
};
