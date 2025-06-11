import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    return res.status(500).json({ error });
  }
} 