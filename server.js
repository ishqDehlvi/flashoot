const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // For testing purposes, just log the email and return success
    console.log('Subscription request received for:', email);

    // Here you would typically integrate with your email service
    // For now, we'll simulate a successful subscription
    return res.status(200).json({
      success: true,
      message: 'Subscription successful',
      email
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({
      error: 'Failed to subscribe to newsletter'
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 