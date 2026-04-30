import { motion } from "framer-motion";
import { 
  ArrowRight, Leaf, Shield, Clock, Star, Loader2, 
  Droplets, Shovel, Trees, Scissors, Award, Users, 
  MapPin, CheckCircle2, Plus, Minus, ChevronRight,
  TrendingUp, MessageSquare, Phone, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!content) setLoading(false);
    }, 5000);
    api.getContent().then(data => {
      setContent(data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
    return () => clearTimeout(timeout);
  }, []);

  // Prepare hero fallback source and safe hero image
  const heroSrcFallback = "https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000";
  const heroSrc = content?.hero?.backgroundImage || heroSrcFallback;
  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-emerald-600" size={48} />
    </div>
  );

  const faqs = [
    { q: "What areas do you serve?", a: "We provide professional landscaping and garden maintenance services across the greater metropolitan area and surrounding suburbs within a 50-mile radius." },
    { q: "Do you offer seasonal maintenance packages?", a: "Yes, we offer comprehensive Spring and Fall cleanup packages, as well as year-round maintenance contracts tailored to your property's specific needs." },
    { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed, bonded, and carry extensive professional liability insurance for your total peace of mind." },
    { q: "How do I get a custom quote?", a: "You can request a quote through our online form, and one of our specialists will visit your property for a detailed assessment and personalized proposal." }
  ];

  const services = [
    { icon: <Leaf />, name: "Lawn Care", desc: "Mowing, fertilization, and weed control for a lush green carpet.", image: "https://images.unsplash.com/photo-1592150621344-82d43b4a23ce?auto=format&fit=crop&q=80&w=600" },
    { icon: <Trees />, name: "Garden Design", desc: "Expert selection of flora to suit your soil and aesthetic vision.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=600" },
    { icon: <Droplets />, name: "Irrigation", desc: "Smart watering systems that save water while keeping plants healthy.", image: "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=600" },
    { icon: <Shovel />, name: "Hardscaping", desc: "Custom patios, retaining walls, and walkways built to last.", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=600" }
  ];

  const whyUs = [
    { icon: <Shield />, title: "Fully Licensed", desc: "We operate with full legal compliance and top-tier insurance." },
    { icon: <Award />, title: "Award Winning", desc: "Recognized for excellence in design and customer satisfaction." },
    { icon: <Users />, title: "Expert Team", desc: "Our staff are certified horticulturists with years of field experience." },
    { icon: <Clock />, title: "Punctual", desc: "We respect your schedule and arrive exactly when promised." },
    { icon: <TrendingUp />, title: "Sustainable", desc: "Eco-friendly methods that protect your family and the planet." },
    { icon: <MessageSquare />, title: "Clear Support", desc: "Direct communication with your project manager at all times." }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1,200+", label: "Projects Done" },
    { value: "45", label: "Team Members" },
    { value: "100%", label: "Satisfaction" }
  ];

  return (
    <div className="space-y-0 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSrc}
            alt="Beautiful Landscape"
            className="w-full h-full object-cover brightness-[0.35]"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroSrcFallback; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-transparent to-emerald-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl text-white space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-emerald-400" />
              <span className="uppercase tracking-[0.3em] text-xs font-bold text-emerald-300">Professional Landscaping & Design</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight"
            >
              Shining Diamond <br />
              <span className="text-emerald-400 italic drop-shadow-sm font-light">
                Land & House
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-light"
            >
              Professional Gardening & Landscaping Excellence across the United States.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-16 px-10 text-base font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-950/30">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-base font-bold uppercase tracking-wider rounded-xl border-white/30 text-white hover:bg-white hover:text-emerald-950 transition-all backdrop-blur-sm">
                <Link to="/gallery">View Portfolio</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
          <span className="uppercase text-[10px] tracking-[0.4em] font-bold">Scroll</span>
          <div className="w-[2px] h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-emerald-400"
            />
          </div>
        </div>
      </section>

      {/* Welcome & Services Overview */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Welcome to Shining Diamond</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Creating Purposeful <br /> Landscapes For <span className="text-emerald-600">Living</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    {i === 0 && <Leaf size={24} />}
                    {i === 1 && <Trees size={24} />}
                    {i === 2 && <Droplets size={24} />}
                    {i === 3 && <Shovel size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest pt-2 hover:gap-3 transition-all">
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2000"
          alt="Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">Your Dream Landscape Starts Here</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">Every project begins with a vision. Let us bring yours to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="bg-emerald-950 py-20 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-3">
                <span className="text-5xl md:text-6xl font-display font-bold text-emerald-400 leading-none">
                  {stat.value}
                </span>
                <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-emerald-100/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[100px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1592150621344-82d43b4a23ce?auto=format&fit=crop&q=80&w=1000"
                  alt="Quality Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-12 rounded-[2.5rem] z-20 hidden md:block shadow-2xl shadow-emerald-900/30">
                <div className="flex items-center gap-6 text-white">
                  <span className="text-6xl font-display font-bold tracking-tighter">15</span>
                  <span className="text-sm font-bold uppercase leading-tight tracking-[0.1em]">
                    Years of <br /> Excellence
                  </span>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl -z-10" />
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Our Diamond Standards</span>
                <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                  Why Our Clients Trust Us <br /> For Their Outdoor Spaces
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  We combine decades of expertise with cutting-edge design to create landscapes that inspire.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {whyUs.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0 w-10 h-10 bg-emerald-50 rounded-lg text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-14 px-10">
                <Link to="/about">Learn Our History</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm">Customer Feedback</span>
            <h2 className="text-4xl font-display font-bold text-white">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Hanan Innocent", location: "Washington", text: "They completed the job on time and it looked better than what we expected. We feel very satisfied.", rating: 5 },
              { name: "Fedo Elweed", location: "Los Angeles", text: "Excellent job, excellent workmanship. The job was neat, thorough and professional.", rating: 5 },
              { name: "Astley Jenifer", location: "California", text: "Shining Diamond helped me transform my dated, patchwork front yard into an inviting landscape.", rating: 5 }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 flex flex-col items-center text-center space-y-6 hover:bg-white/15 transition-all">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="fill-emerald-400 text-emerald-400" size={16} />)}
                </div>
                <p className="text-white/80 leading-relaxed italic text-lg">"{t.text}"</p>
                <div className="pt-4 border-t border-white/10 w-full">
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-emerald-300 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Gallery Strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Our Portfolio</span>
            <h2 className="text-4xl font-display font-bold text-slate-900">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800", title: "English Garden Restoration", location: "Connecticut" },
              { img: "https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=800", title: "Modern Walkway & Lighting", location: "Oregon" },
              { img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800", title: "Stone Patio & Fire Pit", location: "Colorado" },
              { img: "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=800", title: "Luxury Pool Landscape", location: "California" },
              { img: "https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=800", title: "Emerald Lawn Design", location: "New York" },
              { img: "https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=800", title: "Zen Garden Installation", location: "Washington" }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-emerald-300 text-sm flex items-center gap-1"><MapPin size={14} /> {project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="h-14 px-10 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
              <Link to="/gallery">View Full Gallery <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ & Quick Contact */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Find Answers</span>
                <h2 className="text-4xl font-display font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeFaq === i ? "bg-emerald-50 text-emerald-700" : "bg-white text-slate-900 hover:bg-slate-50"}`}
                    >
                      <span className="font-bold">{faq.q}</span>
                      {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    {activeFaq === i && (
                      <div className="p-6 bg-emerald-50/50 text-slate-600 text-sm leading-relaxed border-t border-emerald-100/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1456073167817-2194689658ec?auto=format&fit=crop&q=80&w=800"
                alt="Contact us"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/90" />
              <div className="relative z-10 p-12 text-white space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-bold leading-tight">Ready to start your <br /> next project?</h3>
                  <p className="text-emerald-100/80 leading-relaxed font-light">
                    Join hundreds of satisfied homeowners across the United States who trust us with their dream landscapes.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-700 rounded-2xl flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Call Us Now</p>
                      <p className="text-xl font-bold">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-700 rounded-2xl flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Email Us At</p>
                      <p className="text-xl font-bold">quotes@shiningdiamond.com</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <Button asChild size="lg" className="w-full h-16 bg-white text-emerald-950 font-bold uppercase tracking-widest hover:bg-emerald-50">
                    <Link to="/contact">Request Free Estimate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner with Background */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=2000"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-700/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/50 to-emerald-600/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Need expert help right now?</h2>
            <p className="text-xl text-emerald-100 font-medium">Professional gardening and maintenance services at your doorstep.</p>
          </div>
          <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-12 h-16 text-base font-bold uppercase tracking-widest shadow-2xl">
             <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
