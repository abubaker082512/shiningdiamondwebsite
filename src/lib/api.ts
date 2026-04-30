const DEFAULT_CONTENT = {
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

const DEFAULT_GALLERY = [
  { id: "1", url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200", title: "Manicured English Garden" },
  { id: "2", url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200", title: "Stone Patio & Firepit" },
  { id: "3", url: "https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=1200", title: "Modern Walkway Lighting" },
  { id: "4", url: "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=1200", title: "Luxury Pool Landscape" },
  { id: "5", url: "https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=1200", title: "Emerald Lawn Stripes" },
  { id: "6", url: "https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=1200", title: "Zen Garden Installation" },
];

export const api = {
  getLeads: () => fetch("/api/leads").then((res) => res.json()).catch(() => []),
  submitLead: (data: any) =>
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  deleteLead: (id: string) => fetch(`/api/leads/${id}`, { method: "DELETE" }),

  getGallery: () => fetch("/api/gallery").then((res) => res.json()).catch(() => DEFAULT_GALLERY),
  addGalleryItem: (data: any) =>
    fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  deleteGalleryItem: (id: string) => fetch(`/api/gallery/${id}`, { method: "DELETE" }),

  getContent: () => fetch("/api/content").then((res) => res.json()).catch(() => DEFAULT_CONTENT),
  updateContent: (data: any) =>
    fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
};