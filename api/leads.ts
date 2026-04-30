import { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'leads.json');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // helper to load
  const loadLeads = async () => {
    try {
      const raw = await fs.readFile(dataPath, 'utf8');
      return JSON.parse(raw);
    } catch {
      return [];
    }
  };

  // helper to save
  const saveLeads = async (arr: any[]) => {
    await fs.writeFile(dataPath, JSON.stringify(arr, null, 2), 'utf8');
  };

  if (req.method === 'GET') {
    const leads = await loadLeads();
    return res.status(200).json(leads);
  }

  if (req.method === 'POST') {
    const leads = await loadLeads();
    const newLead = {
      ...req.body,
      id: Date.now().toString(),
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    leads.push(newLead);
    await saveLeads(leads);
    return res.status(201).json(newLead);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    const leads = await loadLeads();
    const updated = leads.filter((l) => l.id !== id);
    await saveLeads(updated);
    return res.sendStatus(204);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
