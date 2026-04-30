import { VercelRequest, VercelResponse } from '@vercel/node';

let content = {
  hero: {
    title: 'Shining Diamond Land & House',
    subtitle: 'Professional Gardening & Landscaping Excellence across the United States.',
    cta: 'Book Appointment',
    backgroundImage: 'https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000',
  },
  about: {
    title: 'Our Diamond Standard',
    text: 'With over a decade of experience, we bring precision and passion to every outdoor space. At Shining Diamond, we treat every landscape as a unique gem, meticulously crafted to reflect the beauty of nature and the vision of our clients.',
  },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(content);
  }

  if (req.method === 'POST') {
    content = { ...content, ...req.body };
    return res.status(200).json(content);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}