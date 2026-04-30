import { VercelRequest, VercelResponse } from '@vercel/node';

let leads: any[] = [];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(leads);
  }

  if (req.method === 'POST') {
    const newLead = {
      ...req.body,
      id: Date.now().toString(),
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    leads.push(newLead);
    return res.status(201).json(newLead);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    leads = leads.filter((l) => l.id !== id);
    return res.sendStatus(204);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}