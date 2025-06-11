import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, phone, eventType, reelsRequired, eventDate, shootHours } = await req.json()

    // Create SMTP client
    const client = new SmtpClient()

    // Configure SMTP connection
    await client.connectTLS({
      hostname: Deno.env.get('SMTP_HOSTNAME') || '',
      port: Number(Deno.env.get('SMTP_PORT')) || 587,
      username: Deno.env.get('SMTP_USERNAME') || '',
      password: Deno.env.get('SMTP_PASSWORD') || '',
    })

    // Prepare email content
    const emailContent = `
      New Booking Request:
      
      Name: ${name}
      Phone: ${phone}
      Event Type: ${eventType}
      Number of Reels: ${reelsRequired}
      Event Date: ${eventDate}
      Shoot Hours: ${shootHours}
    `

    // Send email
    await client.send({
      from: Deno.env.get('SMTP_FROM') || '',
      to: Deno.env.get('NOTIFICATION_EMAIL') || '',
      subject: 'New Booking Request - Flashoot',
      content: emailContent,
    })

    await client.close()

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
}) 