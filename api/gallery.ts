import { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from 'fs';
import path from 'path';

let gallery: any[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200', title: 'Manicured English Garden' },
  { id: '2', url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200', title: 'Stone Patio & Firepit' },
  { id: '3', url: 'https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=1200', title: 'Modern Walkway Lighting' },
  { id: '4', url: 'https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=1200', title: 'Luxury Pool Landscape' },
  { id: '5', url: 'https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=1200', title: 'Emerald Lawn Stripes' },
  { id: '6', url: 'https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=1200', title: 'Zen Garden Installation' },
let dataGallery: any[] = null;
const dataPath = path.join(process.cwd(), 'data', 'gallery.json');

async function loadGallery() {
  if (dataGallery != null) return dataGallery;
  try {
    const raw = await fs.readFile(dataPath, 'utf8');
    dataGallery = JSON.parse(raw);
    return dataGallery;
  } catch {
    dataGallery = [];
    return dataGallery;
  }
}

async function saveGallery(arr: any[]) {
  await fs.writeFile(dataPath, JSON.stringify(arr, null, 2), 'utf8');
  dataGallery = arr;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const data = await loadGallery();
  if (req.method === 'GET') {
    return res.status(200).json(data);
  }
  if (req.method === 'POST') {
    const newItem = { ...req.body, id: Date.now().toString() };
    data.push(newItem);
    await saveGallery(data);
    return res.status(201).json(newItem);
  }
  if (req.method === 'DELETE') {
    const { id } = req.query;
    const updated = data.filter((g) => g.id !== id);
    await saveGallery(updated);
    return res.sendStatus(204);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
