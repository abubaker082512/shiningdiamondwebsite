import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, Trees, Droplets, Shovel, ShieldCheck, 
  Paintbrush, Construction, CalendarCheck, ArrowRight,
  Scissors, Star
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Lawn Maintenance",
      description: "Regular mowing, edging, fertilization, and weed control to keep your turf emerald green and healthy all year long.",
      image: "https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="text-emerald-500" />
    },
    {
      title: "Custom Garden Design",
      description: "Bespoke garden plans that reflect your style. From Mediterranean aesthetics to modern minimalist layouts.",
      image: "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=800",
      icon: <Trees className="text-emerald-500" />
    },
    {
      title: "Expert Hardscaping",
      description: "Installation of patios, retaining walls, walkways, and water features using premium stone and materials.",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800",
      icon: <Shovel className="text-emerald-500" />
    },
    {
      title: "Irrigation Systems",
      description: "Smart watering solutions that conserve water while ensuring your plants get the hydration they need.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      icon: <Droplets className="text-emerald-500" />
    },
    {
      title: "Seasonal Cleanup",
      description: "Spring preparation and fall leaf removal to keep your property looking its best during seasonal transitions.",
      image: "https://images.unsplash.com/photo-1572242004944-ff73f00f8623?auto=format&fit=crop&q=80&w=800",
      icon: <CalendarCheck className="text-emerald-500" />
    },
    {
      title: "Commercial Landscaping",
      description: "Professional landscape management for businesses, hotels, and public spaces to maintain an elite brand image.",
      image: "https://images.unsplash.com/photo-1456073167817-2194689658ec?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck className="text-emerald-500" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-emerald-950 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tight"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-emerald-100/60 max-w-2xl mx-auto leading-relaxed">
            From precision maintenance to complete landscape overhauls, we provide a full range of architectural landscaping services across the country.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
          <Leaf size={400} />
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group space-y-8"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-xl">
                     {s.icon}
                   </div>
                   <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{s.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">{s.description}</p>
                <div className="pt-4">
                   <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest hover:gap-4 transition-all">
                     Get Specific Quote <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
              <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Working Process</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">How We Work For You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[2.25rem] left-[15%] right-[15%] h-[2px] bg-slate-200 -z-10" />
            {[
              { step: "01", icon: <Paintbrush size={24} />, title: "The Brief", desc: "We discuss your vision and spatial needs." },
              { step: "02", icon: <Scissors size={24} />, title: "Precision Design", desc: "Architectural blueprints and flora selection." },
              { step: "03", icon: <Construction size={24} />, title: "Build phase", desc: "Expert construction and planting begins." },
              { step: "04", icon: <Star size={24} />, title: "Final Care", desc: "Ongoing maintenance for your new retreat." }
            ].map((p, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 group hover:border-emerald-500 hover:text-emerald-500 transition-all relative">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center border-4 border-slate-50 shadow-lg">
                    {p.step}
                  </span>
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-lg text-slate-900 uppercase tracking-tight">{p.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed px-4">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">Ready to transform your home into <br /> a shining diamond?</h2>
            <p className="text-xl text-emerald-100/80 font-light">Join 1200+ happy clients and get your free customized landscaping roadmap today.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-emerald-950 hover:bg-emerald-900 h-16 px-12 text-sm font-bold uppercase tracking-widest rounded-2xl shadow-2xl">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 text-sm font-bold uppercase tracking-widest rounded-2xl border-white/20 text-white hover:bg-white hover:text-emerald-950">
              <Link to="/gallery">View Work</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
      </section>
    </div>
  );
}
