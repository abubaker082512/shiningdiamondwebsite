import { Diamond, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="group">
      <div className="bg-emerald-950 text-slate-300 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="space-y-8">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                   <Diamond size={24} />
                </div>
                <span className="font-display font-bold text-2xl text-white tracking-tighter uppercase">
                  Shining <span className="text-emerald-500">Diamond</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Shining Diamond is dedicated to the highest quality lawn and landscape products and services, exceeding our customer's expectations every time.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-8 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-600 rounded-full" />
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                {["Lawn Care & Maintenance", "Spring & Fall Cleanup", "Landscape Lighting", "Irrigation Systems", "Hardscape Design", "Garden Installation"].map((service) => (
                  <li key={service} className="flex items-center gap-2 group/item">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-900 group-hover/item:bg-emerald-500 transition-colors" />
                    <Link to="/services" className="hover:text-emerald-500 transition-colors">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-8 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-600 rounded-full" />
              </h3>
              <ul className="space-y-6 text-sm text-slate-400">
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-500">
                    <MapPin size={18} />
                  </div>
                  <span>123 Landscape Way,<br />Green City, USA 12345</span>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-500">
                    <Phone size={18} />
                  </div>
                  <span>+1 (555) 000-0000<br />+1 (555) 111-2222</span>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-500">
                    <Mail size={18} />
                  </div>
                  <span>info@shiningdiamond.com<br />quotes@shiningdiamond.com</span>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-8 relative inline-block">
                Working Hours
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-600 rounded-full" />
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Friday", hours: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed", closed: true },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-slate-500">{item.day}</span>
                    <span className={item.closed ? "text-emerald-600 font-bold" : "text-slate-300 font-medium"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-emerald-950 border-t border-emerald-900/50 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} Shining Diamond Land & House. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Request Quote</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
