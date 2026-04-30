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
    api.getContent().then(data => {
      setContent(data);
      setLoading(false);
    });
  }, []);

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
    { icon: <Leaf />, name: "Lawn Care", desc: "Mowing, fertilization, and weed control for a lush green carpet." },
    { icon: <Trees />, name: "Garden Design", desc: "Expert selection of flora to suit your soil and aesthetic vision." },
    { icon: <Droplets />, name: "Irrigation", desc: "Smart watering systems that save water while keeping plants healthy." },
    { icon: <Shovel />, name: "Hardscaping", desc: "Custom patios, retaining walls, and walkways built to last." }
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
            src={content.hero.backgroundImage}
            alt="Beautiful Landscape"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl text-white space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-emerald-500" />
              <span className="uppercase tracking-[0.3em] text-xs font-bold text-emerald-400">Professional Landscaping & Design</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight"
            >
              {content.hero.title.split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-emerald-500 italic drop-shadow-sm font-light">
                {content.hero.title.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              {content.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-16 px-10 text-base font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-950/20">
                <Link to="/contact">{content.hero.cta} <ArrowRight className="ml-2" size={18} /></Link>
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
              className="absolute top-0 left-0 w-full h-1/2 bg-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Welcome & Services Overview */}
      <section className="py-24 bg-white">
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
                className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 text-center space-y-6 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] transform scale-150 rotate-12 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {service.icon}
                </div>
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6">
                  {i === 0 && <Leaf size={32} />}
                  {i === 1 && <Trees size={32} />}
                  {i === 2 && <Droplets size={32} />}
                  {i === 3 && <Shovel size={32} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Read More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="bg-emerald-950 py-20 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=1000"
                  alt="Quality Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-12 rounded-[2.5rem] z-20 hidden md:block shadow-2xl shadow-emerald-900/20">
                <div className="flex items-center gap-6 text-white">
                  <span className="text-6xl font-display font-bold tracking-tighter">15</span>
                  <span className="text-sm font-bold uppercase leading-tight tracking-[0.1em]">
                    Years of <br /> Excellence
                  </span>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] -z-10" />
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Our Diamond Standards</span>
                <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                  Why Our Clients Trust Us <br /> For Their Outdoor Spaces
                </h2>
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

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Customer Feedback</span>
              <h2 className="text-4xl font-display font-bold text-slate-900">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Hanan Innocent", location: "Washington", text: "They completed the job on time and it looked better than what we expected. We feel very satisfied.", rating: 5 },
                { name: "Fedo Elweed", location: "Los Angeles", text: "Excellent job, excellent workmanship. The job was neat, thorough and professional.", rating: 5 },
                { name: "Astley Jenifer", location: "California", text: "Shining Diamond helped me transform my dated, patchwork front yard into an inviting landscape.", rating: 5 }
              ].map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="fill-emerald-400 text-emerald-400" size={16} />)}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"{t.text}"</p>
                  <div className="pt-4 border-t border-slate-50 w-full">
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* FAQ & Quick Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Find Answers</span>
                <h2 className="text-4xl font-display font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeFaq === i ? "bg-emerald-50 text-emerald-600" : "bg-white text-slate-900"}`}
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

            <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Leaf size={300} />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-bold leading-tight">Ready to start your <br /> next project?</h3>
                  <p className="text-emerald-100/80 leading-relaxed font-light">
                    Join hundreds of satisfied homeowners across the United States who trust us with their dream landscapes.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Call Us Now</p>
                      <p className="text-xl font-bold">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Email Us At</p>
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

      {/* CTA Banner */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Need expert help right now?</h2>
            <p className="text-emerald-100 font-medium">Professional gardening and maintenance services at your doorstep.</p>
          </div>
          <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 h-14 text-sm font-bold uppercase tracking-widest shadow-xl">
             <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
