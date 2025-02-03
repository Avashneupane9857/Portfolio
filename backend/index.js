import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";
const app = express();
dotenv.config({});
const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Your React app URL
    credentials: true,
  })
);
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Thank you for contacting me!</h2>
            <p>Dear ${name},</p>
            <p>I have received your message and will get back to you soon.</p>
            <p>Best regards,</p>
            <p>Avsh</p>
          </div>
        `,
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

app.get("/", (req, res) => {
  res.send("serve is running");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
