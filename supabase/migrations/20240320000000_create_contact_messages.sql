-- Create contact_messages table
CREATE TABLE contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    status TEXT DEFAULT 'pending'::text NOT NULL,
    CONSTRAINT contact_messages_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create index on email for faster lookups
CREATE INDEX contact_messages_email_idx ON contact_messages(email);

-- Create index on created_at for sorting
CREATE INDEX contact_messages_created_at_idx ON contact_messages(created_at DESC);

-- Add RLS (Row Level Security) policies
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow insert for authenticated users
CREATE POLICY "Allow insert for authenticated users" ON contact_messages
    FOR INSERT TO authenticated
    WITH CHECK (true);

-- Allow select for authenticated users
CREATE POLICY "Allow select for authenticated users" ON contact_messages
    FOR SELECT TO authenticated
    USING (true);

-- Allow update for authenticated users
CREATE POLICY "Allow update for authenticated users" ON contact_messages
    FOR UPDATE TO authenticated
    USING (true)
    WITH CHECK (true); 