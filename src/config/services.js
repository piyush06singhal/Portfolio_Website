// Service configuration.
//
// These read from .env (see .env.example) with the previously hardcoded values
// as fallbacks so the site keeps working if no .env is present.
//
// Note: anything referenced here still ends up in the built bundle — Vite
// inlines VITE_* at build time. A Supabase *anon* key is designed to be public
// and is protected by row-level security, not by secrecy. The real defence
// against abuse is the RLS policy plus rate limiting, not hiding the key.
// Never put a service_role key in here.

const env = import.meta.env

export const SUPABASE_URL =
  env.VITE_SUPABASE_URL || 'https://uytxgeuqechshvxubmvw.supabase.co'

export const SUPABASE_ANON_KEY =
  env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dHhnZXVxZWNoc2h2eHVibXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2OTI4NDksImV4cCI6MjA4MTI2ODg0OX0.UOpyzloYOKS3WN6IpLHYnYLoUjfuDkUYox9DVkUw4Ts'

export const EMAILJS_SERVICE_ID =
  env.VITE_EMAILJS_SERVICE_ID || 'service_gnsfm9p'

export const EMAILJS_TEMPLATE_ID =
  env.VITE_EMAILJS_TEMPLATE_ID || 'template_67qkcao'

export const EMAILJS_PUBLIC_KEY =
  env.VITE_EMAILJS_PUBLIC_KEY || '8sm2r2ORMsbw0nKRl'

export const CONTACT_EMAIL = 'piyush.singhal.2004@gmail.com'

// Shared helper for writing a row to a Supabase table via the REST API.
export const supabaseInsert = async (table, row) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(row)
  })

  if (!response.ok) {
    throw new Error(`Supabase responded ${response.status}`)
  }

  return response
}
