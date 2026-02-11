const Education = require("../models/Education");

exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch education" });
  }
};
