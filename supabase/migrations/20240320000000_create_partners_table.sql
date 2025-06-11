-- Create partners table first
CREATE TABLE IF NOT EXISTS partners (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    iphone_model TEXT NOT NULL,
    location TEXT NOT NULL,
    contact_number TEXT NOT NULL,
    email TEXT NOT NULL,
    instagram_id TEXT NOT NULL,
    recent_works TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS partners_email_idx ON partners(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS partners_status_idx ON partners(status);

-- Enable Row Level Security
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert partner applications" ON partners;
DROP POLICY IF EXISTS "Allow users to view their own applications" ON partners;
DROP POLICY IF EXISTS "Allow admins to view all applications" ON partners;
DROP POLICY IF EXISTS "Allow all operations" ON partners;

-- Create a simple policy that allows all operations for now
CREATE POLICY "Allow all operations"
ON partners
FOR ALL
TO public
USING (true)
WITH CHECK (true);

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_partners_updated_at ON partners;

-- Create or replace the function (without dropping it)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_partners_updated_at
    BEFORE UPDATE ON partners
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 