import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize Mailchimp client
mailchimp.setConfig({
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
  server: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX,
});

export async function subscribeToNewsletter(email: string) {
  try {
    // Verify the API key and server prefix are set
    if (!import.meta.env.VITE_MAILCHIMP_API_KEY || !import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || !import.meta.env.VITE_MAILCHIMP_LIST_ID) {
      throw new Error('Mailchimp configuration is missing');
    }

    const response = await mailchimp.lists.addListMember(
      import.meta.env.VITE_MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: '', // Optional: Add first name if you collect it
          LNAME: '', // Optional: Add last name if you collect it
        },
      }
    );

    return response;
  } catch (error: any) {
    console.error('Mailchimp subscription error:', error);
    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      throw new Error('This email is already subscribed to our newsletter');
    }
    throw error;
  }
} 