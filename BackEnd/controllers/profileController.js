const Profile = require("../models/Profile");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};
