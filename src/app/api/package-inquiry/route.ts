import { NextResponse } from 'next/server';
import GhostAdminAPI from '@tryghost/admin-api';
import nodemailer from 'nodemailer';

// Initialize Ghost API client
const ghost = new GhostAdminAPI({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_ADMIN_API_KEY || '',
  version: 'v5.0'
});

// Initialize email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, weddingDate, eventDetails, packageType } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create subscriber in Ghost
    try {
      await ghost.members.add({
        email,
        name,
        note: `Package Inquiry - ${packageType}`,
        labels: ['package-inquiry', packageType.toLowerCase()],
        email_disabled: false,
        subscribed: true,
      });
    } catch (error) {
      console.error('Ghost API Error:', error);
      // Continue execution even if Ghost API fails
    }

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Package Inquiry - ${packageType}`,
      html: `
        <h2>New Package Inquiry</h2>
        <p><strong>Package Type:</strong> ${packageType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Wedding Date:</strong> ${weddingDate}</p>
        <p><strong>Event Details:</strong></p>
        <p>${eventDetails}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const customerMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for your inquiry - Flashoot',
      html: `
        <h2>Thank you for your inquiry, ${name}!</h2>
        <p>We have received your package inquiry for ${packageType}. Our team will review your requirements and get back to you within 24 hours.</p>
        <p>Here's a summary of your inquiry:</p>
        <ul>
          <li>Package: ${packageType}</li>
          <li>Wedding Date: ${weddingDate}</li>
          <li>Event Details: ${eventDetails}</li>
        </ul>
        <p>If you have any immediate questions, please don't hesitate to reach out to us.</p>
        <p>Best regards,<br>Team Flashoot</p>
      `,
    };

    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
} 