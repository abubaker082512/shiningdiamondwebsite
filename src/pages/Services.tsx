import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, Trees, Droplets, Shovel, ShieldCheck, 
  Paintbrush, Construction, CalendarCheck, ArrowRight,
  Scissors, Star, ChevronRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Lawn Maintenance",
      description: "Regular mowing, edging, fertilization, and weed control to keep your turf emerald green and healthy all year long.",
      image: "https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="text-emerald-400" />
    },
    {
      title: "Custom Garden Design",
      description: "Bespoke garden plans that reflect your style. From Mediterranean aesthetics to modern minimalist layouts.",
      image: "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=800",
      icon: <Trees className="text-emerald-400" />
    },
    {
      title: "Expert Hardscaping",
      description: "Installation of patios, retaining walls, walkways, and water features using premium stone and materials.",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800",
      icon: <Shovel className="text-emerald-400" />
    },
    {
      title: "Irrigation Systems",
      description: "Smart watering solutions that conserve water while ensuring your plants get the hydration they need.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      icon: <Droplets className="text-emerald-400" />
    },
    {
      title: "Seasonal Cleanup",
      description: "Spring preparation and fall leaf removal to keep your property looking its best during seasonal transitions.",
      image: "https://images.unsplash.com/photo-1572242004944-ff73f00f8623?auto=format&fit=crop&q=80&w=800",
      icon: <CalendarCheck className="text-emerald-400" />
    },
    {
      title: "Commercial Landscaping",
      description: "Professional landscape management for businesses, hotels, and public spaces to maintain an elite brand image.",
      image: "https://images.unsplash.com/photo-1456073167817-2194689658ec?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck className="text-emerald-400" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-900/70 to-emerald-800/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
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
              className="text-6xl md:text-8xl font-display font-bold tracking-tight text-white"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-emerald-100/70 leading-relaxed max-w-2xl"
            >
              From precision maintenance to complete landscape overhauls, we provide a full range of architectural landscaping services across the country.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.description}</p>
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

      {/* Image Divider */}
      <section className="relative h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
          alt="Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Every Project is a Masterpiece</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">From concept to completion, we craft landscapes that inspire.</p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Working Process</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">How We Work For You</h2>
                <p className="text-lg text-slate-600 leading-relaxed">Our proven four-step process ensures every project is delivered on time, on budget, and beyond expectations.</p>
              </div>

              <div className="space-y-8">
                {[
                  { step: "01", icon: <Paintbrush size={24} />, title: "The Brief", desc: "We discuss your vision, budget, and spatial needs to create a tailored project plan." },
                  { step: "02", icon: <Scissors size={24} />, title: "Precision Design", desc: "Architectural blueprints, 3D renderings, and expert flora selection for your space." },
                  { step: "03", icon: <Construction size={24} />, title: "Build Phase", desc: "Our skilled team executes with precision, from hardscaping to planting." },
                  { step: "04", icon: <Star size={24} />, title: "Final Care", desc: "Ongoing maintenance plans to keep your landscape thriving year-round." }
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0 w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                      <span className="text-sm font-bold">{p.step}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl text-slate-900">{p.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1592150621344-82d43b4a23ce?auto=format&fit=crop&q=80&w=1000"
                  alt="Process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-100 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Banner */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-80 md:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=1000"
            alt="Design"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-emerald-900/60 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <h3 className="text-3xl font-display font-bold text-white">Landscape Design</h3>
              <p className="text-emerald-100 max-w-md mx-auto">Transform your vision into a stunning reality with our expert design team.</p>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-emerald-950 mt-4">
                <Link to="/contact" className="flex items-center gap-2">Get Started <ChevronRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-80 md:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000"
            alt="Maintenance"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <h3 className="text-3xl font-display font-bold text-white">Ongoing Maintenance</h3>
              <p className="text-slate-200 max-w-md mx-auto">Keep your landscape pristine year-round with our maintenance plans.</p>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-950 mt-4">
                <Link to="/contact" className="flex items-center gap-2">Learn More <ChevronRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-700/85" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">Ready to transform your home into <br /> a shining diamond?</h2>
            <p className="text-xl text-emerald-100/90 font-light">Join 1200+ happy clients and get your free customized landscaping roadmap today.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 h-16 px-12 font-bold uppercase tracking-widest rounded-2xl shadow-2xl">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 border-white/30 text-white hover:bg-white hover:text-emerald-950 rounded-2xl">
              <Link to="/gallery">View Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}