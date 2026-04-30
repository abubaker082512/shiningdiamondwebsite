import * as React from "react";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { 
  BarChart3, 
  Users, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Trash2, 
  CheckCircle2, 
  Clock,
  Plus,
  ExternalLink
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [leads, setLeads] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [content, setContent] = useState<any>(null);
  const [newItem, setNewItem] = useState({ title: "", url: "" });

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
    // hydrate token from localStorage
    const t = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
    if (t) {
      setAdminToken(t);
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  async function loadData() {
    try {
      const [leadsData, galleryData, contentData] = await Promise.all([
        api.getLeads(), 
        api.getGallery(),
        api.getContent()
      ]);
      setLeads(leadsData);
      setGallery(galleryData);
      setContent(contentData);
    } catch (err) {
      toast.error("Failed to load dashboard data");
    }
  }

  const handleUpdateContent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.updateContent(content);
      toast.success("Website content updated successfully");
    } catch (err) {
      toast.error("Failed to update content");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Authenticate against admin API and store a token
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'admin', password }),
      });
      if (!res.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await res.json();
      const t = data?.token || null;
      if (t) {
        localStorage.setItem('admin_token', t);
        setAdminToken(t);
        setIsAuthenticated(true);
        toast.success("Welcome, Admin");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Invalid credentials");
    }
  };

  const deleteLead = async (id: string) => {
    if (confirm("Delete this lead?")) {
      await api.deleteLead(id);
      setLeads(leads.filter(l => l.id !== id));
      toast.success("Lead removed");
    }
  };

  const deleteGalleryItem = async (id: string) => {
    await api.deleteGalleryItem(id);
    setGallery(gallery.filter(g => g.id !== id));
    toast.success("Image removed from gallery");
  };

  const addGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.url) return;
    const added = await api.addGalleryItem(newItem);
    setGallery([...gallery, added]);
    setNewItem({ title: "", url: "" });
    toast.success("Image added to gallery");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
        <Card className="w-full max-w-md border-slate-800 bg-slate-900 text-white p-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Admin Portal</h1>
            <p className="text-slate-400">Unlock your dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Security Key</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="bg-slate-800 border-slate-700 text-white h-12"
              />
            </div>
            <Button type="submit" className="w-full h-12 bg-emerald-600 hover:bg-emerald-700">Enter Dashboard</Button>
          </form>
          <p className="text-center text-xs text-slate-500 italic">Hint: use admin123</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl uppercase">A</div>
            <div>
              <h1 className="font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-xs text-slate-500">Shining Diamond Management</p>
            </div>
          </div>
          <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="text-slate-500 hover:text-red-600">
            <LogOut className="mr-2" size={18} /> Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="leads" className="space-y-8">
          <TabsList className="bg-white border border-slate-200 p-1 rounded-xl h-14">
            <TabsTrigger value="leads" className="h-full px-8 rounded-lg data-[state=active]:bg-slate-100"><Users className="mr-2" size={18}/> Leads</TabsTrigger>
            <TabsTrigger value="gallery" className="h-full px-8 rounded-lg data-[state=active]:bg-slate-100"><ImageIcon className="mr-2" size={18}/> Gallery</TabsTrigger>
            <TabsTrigger value="content" className="h-full px-8 rounded-lg data-[state=active]:bg-slate-100"><Settings className="mr-2" size={18}/> Content</TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <Card className="border-slate-200 shadow-sm overflow-hidden">
              <CardHeader className="border-b bg-slate-50/50">
                <CardTitle>Appointment Submissions</CardTitle>
                <CardDescription>Manage all inquiries and service requests from your customers.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-10 text-slate-400 italic">No submissions yet.</TableCell>
                      </TableRow>
                    ) : (
                      leads.map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell className="text-xs text-slate-500 font-mono italic whitespace-normal overflow-auto">{new Date(lead.createdAt).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="font-bold text-slate-900">{lead.name}</div>
                            <div className="text-xs text-slate-500">{lead.email} | {lead.phone}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize bg-emerald-50 text-emerald-700 border-emerald-100">{lead.service}</Badge>
                          </TableCell>
                          <TableCell className="max-w-[200px] truncate text-slate-600">{lead.message}</TableCell>
                          <TableCell>
                            {lead.status === "new" ? (
                              <Badge className="bg-blue-500"><Clock size={12} className="mr-1"/> New</Badge>
                            ) : (
                              <Badge className="bg-emerald-500" variant="secondary"><CheckCircle2 size={12} className="mr-1"/> Contacted</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => deleteLead(lead.id)} className="text-slate-400 hover:text-red-500">
                              <Trash2 size={18} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-1 h-fit">
                <CardHeader>
                  <CardTitle>Add Project</CardTitle>
                  <CardDescription>Upload a fresh image to your public work gallery.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={addGalleryItem} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="imgTitle">Project Title</Label>
                      <Input 
                        id="imgTitle" 
                        value={newItem.title} 
                        onChange={e => setNewItem({...newItem, title: e.target.value})} 
                        placeholder="e.g. Modern Patio"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="imgUrl">Image URL</Label>
                      <Input 
                        id="imgUrl" 
                        value={newItem.url} 
                        onChange={e => setNewItem({...newItem, url: e.target.value})} 
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-slate-900"><Plus className="mr-2" size={18}/> Add to Gallery</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20 whitespace-normal overflow-auto">
                {gallery.map((item) => (
                  <div key={item.id} className="relative group rounded-xl overflow-hidden bg-white border border-slate-200">
                    <img src={item.url} alt={item.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                    <div className="p-4 flex items-center justify-between">
                      <span className="font-bold uppercase tracking-wider text-xs">{item.title}</span>
                      <Button variant="ghost" size="icon" onClick={() => deleteGalleryItem(item.id)} className="text-slate-400 hover:text-red-500">
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Website Content</CardTitle>
                <CardDescription>Update the text sections of your website in real-time.</CardDescription>
              </CardHeader>
              <CardContent>
                {content ? (
                  <form onSubmit={handleUpdateContent} className="space-y-12">
                    {/* Hero Section */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold border-b pb-2">Hero Section</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Main Title</Label>
                          <Input 
                            value={content.hero.title} 
                            onChange={(e) => setContent({...content, hero: {...content.hero, title: e.target.value}})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Hero Background URL</Label>
                          <Input 
                            value={content.hero.backgroundImage} 
                            onChange={(e) => setContent({...content, hero: {...content.hero, backgroundImage: e.target.value}})}
                          />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <Label>Subtitle</Label>
                          <Input 
                            value={content.hero.subtitle} 
                            onChange={(e) => setContent({...content, hero: {...content.hero, subtitle: e.target.value}})}
                          />
                        </div>
                      </div>
                    </div>

                    {/* About Section */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold border-b pb-2">About Section</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>About Title</Label>
                          <Input 
                            value={content.about.title} 
                            onChange={(e) => setContent({...content, about: {...content.about, title: e.target.value}})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>About Description</Label>
                          <textarea 
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={content.about.text} 
                            onChange={(e) => setContent({...content, about: {...content.about, text: e.target.value}})}
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto px-12 h-12">
                      Save All Changes
                    </Button>
                  </form>
                ) : (
                  <div className="py-20 text-center text-slate-400">Loading content...</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
