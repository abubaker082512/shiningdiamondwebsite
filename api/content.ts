import { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyAdminToken } from '@/lib/authGuard';
import { supabase } from '@/lib/dbSupabase';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const ok = await verifyAdminToken((req.headers as any)['authorization']?.split(' ')[1]);
  if (!ok) return res.status(401).json({ error: 'Unauthorized' });
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('contents').select('*').eq('id', 'singleton');
    if (error) return res.status(500).json({ error: error.message });
    if (data && data.length > 0) return res.status(200).json(data[0]);
    // fallback
    const fallback = {
      id: 'singleton',
      hero: {
        title: 'Shining Diamond Land & House',
        subtitle: 'Professional Gardening & Landscaping Excellence across the United States.',
        backgroundImage: 'https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000'
      },
      about: { title: 'Our Diamond Standard', text: 'Default content' }
    };
    return res.status(200).json(fallback);
  }
  if (req.method === 'POST') {
    const { hero, about } = req.body || {};
    const { data, error } = await supabase.from('contents').upsert([{ id: 'singleton', hero, about }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data?.[0]);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
