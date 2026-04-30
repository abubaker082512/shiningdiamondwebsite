-- Supabase MVP Setup Script
-- Creates core tables and seeds initial data for Leads, Gallery, and Content

CREATE TABLE IF NOT EXISTS public.leads (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  service TEXT,
  message TEXT,
  status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.gallery (
  id TEXT PRIMARY KEY,
  title TEXT,
  url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.contents (
  id TEXT PRIMARY KEY,
  hero JSONB,
  about JSONB,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed contents singleton
INSERT INTO public.contents (id, hero, about) VALUES
('singleton',
  '{"title":"Shining Diamond Land & House","subtitle":"Professional Gardening & Landscaping Excellence across the United States.","backgroundImage":"https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000","cta":"Book Appointment"}'::JSONB,
  '{"title":"Our Diamond Standard","text":"With over a decade of experience, we bring precision and passion to every outdoor space."}'::JSONB
)
ON CONFLICT (id) DO NOTHING;

-- Seed sample gallery items
INSERT INTO public.gallery (id, title, url) VALUES
('1','Manicured English Garden','https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200'),
('2','Stone Patio & Firepit','https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200'),
('3','Modern Walkway Lighting','https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=1200')
ON CONFLICT (id) DO NOTHING;

-- Optional: privileges (adjust for your role as needed)
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL ON ALL TABLES IN SCHEMA public TO public;
