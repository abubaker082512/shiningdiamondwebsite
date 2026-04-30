import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import LeadFormComp from "@/components/LeadForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1416872848652-30fd014ca98e?auto=format&fit=crop&q=80&w=2000"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-emerald-800/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/70 max-w-2xl mx-auto"
          >
            Ready to transform your landscape? Reach out to schedule a consultation or request an appointment.
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-lg text-slate-600">
                Our team is available to answer your questions and help you plan your next outdoor project.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Phone size={24} />, title: "Call Us", details: ["+1 (555) 000-0000", "+1 (555) 111-1111"], color: "bg-emerald-100 text-emerald-600" },
                { icon: <Mail size={24} />, title: "Email Us", details: ["info@shiningdiamond.com", "sales@shiningdiamond.com"], color: "bg-blue-100 text-blue-600" },
                { icon: <MapPin size={24} />, title: "Visit Us", details: ["123 Landscape Way,", "Green City, CA 90210"], color: "bg-amber-100 text-amber-600" },
                { icon: <Clock size={24} />, title: "Working Hours", details: ["Mon - Fri: 8am - 6pm", "Sat: 9am - 4pm"], color: "bg-purple-100 text-purple-600" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    {item.details.map((d, j) => (
                      <p key={j} className="text-slate-600">{d}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Trusted by 1,200+ Clients</h3>
              <p className="text-slate-600 text-sm">Across the United States, homeowners and businesses trust Shining Diamond for exceptional landscaping results.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <LeadFormComp />
          </div>
        </div>
      </section>

      {/* Map-like Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592150621344-82d43b4a23ce?auto=format&fit=crop&q=80&w=2000"
          alt="Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Serving the Entire United States</h2>
            <p className="text-xl text-emerald-100 max-w-xl mx-auto">From coast to coast, we bring our diamond-standard service to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
}