import { motion } from "framer-motion";
import { Users, Target, Award, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-emerald-600" size={48} />
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa8c1ae0062?auto=format&fit=crop&q=80&w=2000"
          alt="Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-sm"
            >
              About Our Company
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Crafting Landscapes with <br />
              <span className="text-emerald-400">Diamond Precision</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-emerald-100 leading-relaxed"
            >
              Shining Diamond Land & House has been the gold standard for premium landscaping in the USA for over a decade. We combine horticultural expertise with modern design principles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-emerald-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 text-center text-white">
            <div>
              <span className="text-4xl font-display font-bold text-emerald-400">500+</span>
              <p className="text-emerald-200/60 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold text-emerald-400">12+</span>
              <p className="text-emerald-200/60 text-sm mt-1">Years Excellence</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold text-emerald-400">45</span>
              <p className="text-emerald-200/60 text-sm mt-1">Team Members</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold text-emerald-400">100%</span>
              <p className="text-emerald-200/60 text-sm mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200">
              <img
                src="https://images.unsplash.com/photo-1592150621344-82d43b4a23ce?auto=format&fit=crop&q=80&w=1200"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400"
                alt="Garden detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Our Story</span>
              <h2 className="text-4xl font-bold text-slate-900">{content.about?.title || "Our Diamond Standard"}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.about?.text || "With over a decade of experience, we bring precision and passion to every outdoor space. At Shining Diamond, we treat every landscape as a unique gem, meticulously crafted to reflect the beauty of nature and the vision of our clients."}
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2012, Shining Diamond started as a small family business with a big vision: to transform ordinary outdoor spaces into extraordinary landscapes. Today, we serve hundreds of clients across multiple states, delivering award-winning designs that stand the test of time.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Licensed, bonded, and fully insured professionals",
                "Certified horticulturists on every project team",
                "Sustainable practices and eco-friendly materials",
                "Transparent pricing with no hidden fees"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600 shrink-0" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
        {[
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1599110502273-049896791986?auto=format&fit=crop&q=80&w=600"
        ].map((img, i) => (
          <div key={i} className="overflow-hidden group">
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1456073167817-2194689658ec?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm">What Drives Us</span>
            <h2 className="text-4xl font-bold text-white">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Target className="text-emerald-400" size={40} />, title: "Precision", desc: "Every edge defined, every plant purposefully placed." },
              { icon: <Users className="text-emerald-400" size={40} />, title: "Trust", desc: "Honest pricing and reliable timelines for every client." },
              { icon: <Award className="text-emerald-400" size={40} />, title: "Quality", desc: "We use only the finest materials and hardiest plant varieties." },
              { icon: <MapPin className="text-emerald-400" size={40} />, title: "Local Expertise", desc: "Deep knowledge of regional soil and climate conditions." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold tracking-wide uppercase text-white">{value.title}</h3>
                <p className="text-emerald-100/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1533467686150-d1e63a1c7845?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Ready to Work With Us?</h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">Get a free consultation and see how we can transform your outdoor space into something extraordinary.</p>
          <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 h-16 px-12 font-bold uppercase tracking-widest shadow-xl">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}