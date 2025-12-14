-- ============================================
-- Portfolio Contact Form Database Setup
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- Project: https://uytxgeuqechshvxubmvw.supabase.co
-- ============================================

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE,
  replied BOOLEAN DEFAULT FALSE
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_messages_read 
  ON contact_messages(read);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated updates" ON contact_messages;

-- Create policy to allow anyone to insert (submit contact form)
CREATE POLICY "Allow public inserts" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all messages
CREATE POLICY "Allow authenticated reads" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update messages
CREATE POLICY "Allow authenticated updates" ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add comments for documentation
COMMENT ON TABLE contact_messages IS 'Stores contact form submissions from portfolio website';
COMMENT ON COLUMN contact_messages.id IS 'Unique identifier for each message';
COMMENT ON COLUMN contact_messages.name IS 'Name of the person contacting';
COMMENT ON COLUMN contact_messages.email IS 'Email address of the person contacting';
COMMENT ON COLUMN contact_messages.subject IS 'Subject of the message';
COMMENT ON COLUMN contact_messages.message IS 'The actual message content';
COMMENT ON COLUMN contact_messages.created_at IS 'Timestamp when the message was submitted';
COMMENT ON COLUMN contact_messages.read IS 'Flag to mark if message has been read';
COMMENT ON COLUMN contact_messages.replied IS 'Flag to mark if message has been replied to';

-- ============================================
-- Verification Queries
-- ============================================

-- View all messages (run after setup to verify)
-- SELECT * FROM contact_messages ORDER BY created_at DESC;

-- Count total messages
-- SELECT COUNT(*) as total_messages FROM contact_messages;

-- Count unread messages
-- SELECT COUNT(*) as unread_messages FROM contact_messages WHERE read = false;

-- ============================================
-- Optional: Create a view for easy access
-- ============================================

CREATE OR REPLACE VIEW recent_messages AS
SELECT 
  id,
  name,
  email,
  subject,
  LEFT(message, 100) as message_preview,
  created_at,
  read,
  replied
FROM contact_messages
ORDER BY created_at DESC
LIMIT 50;

-- ============================================
-- Setup Complete!
-- ============================================
-- Your contact form is now ready to receive messages
-- Test it by submitting a message from your portfolio website
-- ============================================
