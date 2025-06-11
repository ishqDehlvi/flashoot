-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    status TEXT DEFAULT 'subscribed'::text NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    CONSTRAINT newsletter_subscribers_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index on email for faster lookups
CREATE INDEX newsletter_subscribers_email_idx ON newsletter_subscribers(email);

-- Create index on status for filtering
CREATE INDEX newsletter_subscribers_status_idx ON newsletter_subscribers(status);

-- Create index on created_at for sorting
CREATE INDEX newsletter_subscribers_created_at_idx ON newsletter_subscribers(created_at DESC);

-- Add RLS (Row Level Security) policies
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow insert for anyone (needed for public subscription)
CREATE POLICY "Allow public insert" ON newsletter_subscribers
    FOR INSERT TO public
    WITH CHECK (true);

-- Allow select for authenticated users
CREATE POLICY "Allow select for authenticated users" ON newsletter_subscribers
    FOR SELECT TO authenticated
    USING (true);

-- Allow update for authenticated users
CREATE POLICY "Allow update for authenticated users" ON newsletter_subscribers
    FOR UPDATE TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at
    BEFORE UPDATE ON newsletter_subscribers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 