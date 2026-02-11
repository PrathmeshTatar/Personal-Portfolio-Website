const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create({ firstName, lastName, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}
      `,
    });

    res.status(201).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
