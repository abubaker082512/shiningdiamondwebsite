import { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'content.json');

async function loadContent() {
  try {
    const raw = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    const initial = {
      hero: {
        title: 'Shining Diamond Land & House',
        subtitle: 'Professional Gardening & Landscaping Excellence across the United States.',
        cta: 'Book Appointment',
        backgroundImage: 'https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000',
      },
      about: {
        title: 'Our Diamond Standard',
        text: 'With over a decade of experience, we bring precision and passion to every outdoor space. At Shining Diamond, we treat every landscape as a unique gem, meticulously crafted to reflect the beauty of nature and the vision of our clients.'
      }
    };
    await fs.writeFile(dataPath, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const content = await loadContent();
    return res.status(200).json(content);
  }
  if (req.method === 'POST') {
    const existing = await loadContent();
    const updated = { ...existing, ...req.body };
    await fs.writeFile(dataPath, JSON.stringify(updated, null, 2), 'utf8');
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
