import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Simple in-memory "database" (reset on restart in this environment)
  let leads: any[] = [];
  let gallery: any[] = [
    { id: "1", url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200", title: "Manicured English Garden" },
    { id: "2", url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200", title: "Stone Patio & Firepit" },
    { id: "3", url: "https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=1200", title: "Modern Walkway Lighting" },
    { id: "4", url: "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=1200", title: "Luxury Pool Landscape" },
    { id: "5", url: "https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=1200", title: "Emerald Lawn Stripes" },
    { id: "6", url: "https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=1200", title: "Zen Garden Installation" },
  ];
  let content = {
    hero: {
      title: "Shining Diamond Land & House",
      subtitle: "Professional Gardening & Landscaping Excellence across the United States.",
      cta: "Book Appointment",
      backgroundImage: "https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000"
    },
    about: {
      title: "Our Diamond Standard",
      text: "With over a decade of experience, we bring precision and passion to every outdoor space. At Shining Diamond, we treat every landscape as a unique gem, meticulously crafted to reflect the beauty of nature and the vision of our clients."
    }
  };

  // API Routes
  app.get("/api/leads", (req, res) => res.json(leads));
  app.post("/api/leads", (req, res) => {
    const newLead = { ...req.body, id: Date.now().toString(), status: "new", createdAt: new Date() };
    leads.push(newLead);
    res.status(201).json(newLead);
  });
  app.delete("/api/leads/:id", (req, res) => {
    leads = leads.filter(l => l.id !== req.params.id);
    res.sendStatus(204);
  });

  app.get("/api/gallery", (req, res) => res.json(gallery));
  app.post("/api/gallery", (req, res) => {
    const newItem = { ...req.body, id: Date.now().toString() };
    gallery.push(newItem);
    res.status(201).json(newItem);
  });
  app.delete("/api/gallery/:id", (req, res) => {
    gallery = gallery.filter(g => g.id !== req.params.id);
    res.sendStatus(204);
  });

  app.get("/api/content", (req, res) => res.json(content));
  app.post("/api/content", (req, res) => {
    content = { ...content, ...req.body };
    res.json(content);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
