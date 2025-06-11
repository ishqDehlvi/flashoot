import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { formData, applicationId } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Flashoot <onboarding@flashoot.com>',
      to: 'onboarding@flashoot.com',
      subject: `New Partner Application: ${formData.fullName}`,
      html: `
        <h2>New Partner Application</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>iPhone Model:</strong> ${formData.iphoneModel}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Contact:</strong> ${formData.contactNumber}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Instagram:</strong> ${formData.instagramId}</p>
        <p><strong>Recent Works:</strong> ${formData.recentWorks}</p>
        <br>
        <p>Application ID: ${applicationId}</p>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 