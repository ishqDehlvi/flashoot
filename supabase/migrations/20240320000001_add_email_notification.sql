-- Create function to send email notification
CREATE OR REPLACE FUNCTION notify_admin_new_application()
RETURNS TRIGGER AS $$
DECLARE
    resend_api_key TEXT;
BEGIN
    -- Get Resend API key from secrets
    SELECT value INTO resend_api_key
    FROM supabase_secrets
    WHERE name = 'resend_api_key';

    -- Call the Resend API to send email
    PERFORM
        net.http_post(
            url := 'https://api.resend.com/emails',
            headers := jsonb_build_object(
                'Authorization', 'Bearer ' || resend_api_key,
                'Content-Type', 'application/json'
            ),
            body := jsonb_build_object(
                'from', 'Flashoot <onboarding@flashoot.com>',
                'to', 'onboarding@flashoot.com',
                'subject', 'New Partner Application: ' || NEW.full_name,
                'html', format(
                    '<h2>New Partner Application</h2>
                    <p><strong>Name:</strong> %s</p>
                    <p><strong>iPhone Model:</strong> %s</p>
                    <p><strong>Location:</strong> %s</p>
                    <p><strong>Contact:</strong> %s</p>
                    <p><strong>Email:</strong> %s</p>
                    <p><strong>Instagram:</strong> %s</p>
                    <p><strong>Recent Works:</strong> %s</p>
                    <br>
                    <p>Application ID: %s</p>
                    <p>Submitted at: %s</p>',
                    NEW.full_name,
                    NEW.iphone_model,
                    NEW.location,
                    NEW.contact_number,
                    NEW.email,
                    NEW.instagram_id,
                    NEW.recent_works,
                    NEW.id,
                    NEW.created_at
                )
            )
        );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to send email on new application
CREATE TRIGGER send_admin_notification
    AFTER INSERT ON partners
    FOR EACH ROW
    EXECUTE FUNCTION notify_admin_new_application();

-- Add Resend API key to app settings
ALTER DATABASE postgres SET "app.settings.resend_api_key" = 're_123...'; -- Replace with your actual Resend API key 