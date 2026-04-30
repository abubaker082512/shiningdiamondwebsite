export const api = {
  getLeads: () => fetch("/api/leads").then((res) => res.json()),
  submitLead: (data: any) =>
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  deleteLead: (id: string) => fetch(`/api/leads/${id}`, { method: "DELETE" }),

  getGallery: () => fetch("/api/gallery").then((res) => res.json()),
  addGalleryItem: (data: any) =>
    fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
  deleteGalleryItem: (id: string) => fetch(`/api/gallery/${id}`, { method: "DELETE" }),

  getContent: () => fetch("/api/content").then((res) => res.json()),
  updateContent: (data: any) =>
    fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
};
