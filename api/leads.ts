import { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyAdminToken } from '@/lib/authGuard';
import { supabase } from '@/lib/dbSupabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Guard admin-only endpoints for modifying data
  const ok = await verifyAdminToken((req.headers as any)['authorization']?.split(' ')[1]);
  if (!ok) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('leads').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data ?? []);
  }
  if (req.method === 'POST') {
    const { name, email, phone, service, message } = req.body || {};
    const { data, error } = await supabase.from('leads').insert([
      { name, email, phone, service, message, status: 'new' }
    ]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data?.[0]);
  }
  if (req.method === 'DELETE') {
    const { id } = req.query;
    const { error } = await supabase.from('leads').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(204).end();
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
