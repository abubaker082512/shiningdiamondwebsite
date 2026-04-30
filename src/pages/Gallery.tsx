import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Plus, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {
      const data = await api.getGallery();
      setItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-emerald-900 py-32 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Our Work Gallery</h1>
        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
          Explore a selection of our finest residential and commercial landscaping projects across the country.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer bg-slate-100 break-inside-avoid"
              onClick={() => setSelectedImage(item.url)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6">
                <Maximize2 size={32} className="mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-widest text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white p-2 hover:text-emerald-400 transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
