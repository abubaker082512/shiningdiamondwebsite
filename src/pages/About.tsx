import { Users, Target, Award, MapPin, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

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
      <section className="relative py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Crafting Landscapes with <br />
            <span className="text-emerald-600">Diamond Precision</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Shining Diamond Land & House has been the gold standard for premium landscaping in the USA for over a decade. We combine horticultural expertise with modern design principles.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-3xl z-0 -mt-24"></div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200">
            <img
              src="https://images.unsplash.com/photo-1592150621344-82d43b4a23ce?auto=format&fit=crop&q=80&w=1200"
              alt="Our Story"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">{content.about.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.about.text}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-emerald-600">500+</h4>
                <p className="text-slate-500 font-medium">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-emerald-600">12+</h4>
                <p className="text-slate-500 font-medium">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Target className="text-emerald-400" size={40} />, title: "Precision", desc: "Every edge defined, every plant purposefully placed." },
              { icon: <Users className="text-emerald-400" size={40} />, title: "Trust", desc: "Honest pricing and reliable timelines for every client." },
              { icon: <Award className="text-emerald-400" size={40} />, title: "Quality", desc: "We use only the finest materials and hardiest plant varieties." },
              { icon: <MapPin className="text-emerald-400" size={40} />, title: "Local Expertise", desc: "Deep knowledge of regional soil and climate conditions." },
            ].map((value, i) => (
              <div key={i} className="space-y-6">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold tracking-wide uppercase">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
