import mailchimp from '@mailchimp/mailchimp_marketing';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID!,
      {
        email_address: email,
        status: 'subscribed',
      }
    );

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Mailchimp error:', error);
    return res.status(500).json({
      error: error.response?.body?.title || 'Failed to subscribe to newsletter',
    });
  }
} 