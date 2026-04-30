import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Diamond, Menu, X, Phone, Mail, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Top Bar */}
      <div className="hidden lg:block bg-emerald-950 text-emerald-100 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-emerald-400" /> +1 (555) 000-0000
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-emerald-400" /> info@shiningdiamond.com
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-emerald-400" /> Mon - Fri: 8:00 AM - 6:00 PM
            </span>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm shadow-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Diamond size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none text-slate-900 uppercase tracking-tighter">
                  Shining <span className="text-emerald-600 italic">Diamond</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                  Landscaping Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-emerald-600 relative py-1 group ${
                      location.pathname === link.path ? "text-emerald-600" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                ))}
              </div>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-6 font-bold uppercase text-xs tracking-widest h-12 shadow-md shadow-emerald-100">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-3 bg-slate-50 rounded-xl text-slate-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-xl font-display font-bold uppercase tracking-tight ${
                      location.pathname === link.path ? "text-emerald-600" : "text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full bg-emerald-600 h-14 text-lg">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
