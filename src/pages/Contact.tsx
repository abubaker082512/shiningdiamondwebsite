import { Mail, Phone, MapPin, Clock } from "lucide-react";
import LeadFormComp from "@/components/LeadForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-emerald-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Ready to transform your landscape? Reach out to schedule a consultation or request an appointment.
          </p>
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
                { icon: <Phone size={24} />, title: "Call Us", details: ["+1 (555) 000-0000", "+1 (555) 111-1111"] },
                { icon: <Mail size={24} />, title: "Email Us", details: ["info@shiningdiamond.com", "sales@shiningdiamond.com"] },
                { icon: <MapPin size={24} />, title: "Visit Us", details: ["123 Landscape Way,", "Green City, CA 90210"] },
                { icon: <Clock size={24} />, title: "Working Hours", details: ["Mon - Fri: 8am - 6pm", "Sat: 9am - 4pm"] },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    {item.details.map((d, j) => (
                      <p key={j} className="text-slate-600">{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <LeadFormComp />
          </div>
        </div>
      </section>
    </div>
  );
}
