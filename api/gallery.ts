import { VercelRequest, VercelResponse } from '@vercel/node';

let gallery: any[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200', title: 'Manicured English Garden' },
  { id: '2', url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200', title: 'Stone Patio & Firepit' },
  { id: '3', url: 'https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=1200', title: 'Modern Walkway Lighting' },
  { id: '4', url: 'https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=1200', title: 'Luxury Pool Landscape' },
  { id: '5', url: 'https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=1200', title: 'Emerald Lawn Stripes' },
  { id: '6', url: 'https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=1200', title: 'Zen Garden Installation' },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(gallery);
  }

  if (req.method === 'POST') {
    const newItem = { ...req.body, id: Date.now().toString() };
    gallery.push(newItem);
    return res.status(201).json(newItem);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    gallery = gallery.filter((g) => g.id !== id);
    return res.sendStatus(204);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}