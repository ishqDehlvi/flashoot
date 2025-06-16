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
    const { to, subject, data } = req.body;

    const { data: emailData, error } = await resend.emails.send({
      from: 'Flashoot <onboarding@flashoot.com>',
      to: to || 'aman@flashoot.com',
      subject: subject || `New Partner Application: ${data.fullName}`,
      html: `
        <h2>New Partner Application</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>iPhone Model:</strong> ${data.iphoneModel}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Contact:</strong> ${data.contactNumber}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Instagram:</strong> ${data.instagramId}</p>
        <p><strong>Recent Works:</strong> ${data.recentWorks}</p>
        <br>
        <p>Application ID: ${data.applicationId}</p>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data: emailData });
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