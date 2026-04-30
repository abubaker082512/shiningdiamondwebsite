import { VercelRequest, VercelResponse } from '@vercel/node';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'admin-token-xyz';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body || {};
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Issue a simple static token that the frontend will send back in Authorization header
      return res.status(200).json({ token: ADMIN_TOKEN });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.setHeader('Allow', 'POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
