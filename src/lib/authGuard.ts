import type { VercelRequest } from '@vercel/node';

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string;

// Verify admin token by calling Supabase auth user endpoint
export async function verifyAdminToken(token?: string): Promise<boolean> {
  if (!token) return false;
  // Use Supabase auth user endpoint to verify token validity
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'apikey': SUPABASE_ANON_KEY
      }
    });
    return res.ok;
  } catch {
    return false;
  }
}

// Simple wrapper for middleware-style usage in serverless handlers
export async function requireAdmin(req: VercelRequest): Promise<boolean> {
  const authHeader = req.headers?.authorization as string | undefined;
  const token = authHeader?.split(' ')[1];
  return verifyAdminToken(token);
}
