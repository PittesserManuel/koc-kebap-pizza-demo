"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Speisekarte", href: "#speisekarte" },
    { label: "Über Uns", href: "#ueber-uns" },
    { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
    { label: "Bewertungen", href: "#bewertungen" },
  ];

  return (
    <motion.header
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg border-b border-gold/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-paprika rounded-full flex items-center justify-center shadow-md group-hover:bg-paprika-dark transition-colors">
              <span className="text-white text-lg font-bold font-serif leading-none">K</span>
            </div>
            <div className="hidden sm:block">
              <div
                className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                  scrolled ? "text-paprika" : "text-white"
                }`}
              >
                Koc Kebap
              </div>
              <div
                className={`text-xs font-serif-alt transition-colors duration-300 ${
                  scrolled ? "text-warm-gray" : "text-white/80"
                }`}
              >
                & Pizza Baden
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-serif-alt text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-darkgreen" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bestellen"
              className="bg-paprika text-white font-serif-alt font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-paprika-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Jetzt bestellen
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors ${
              scrolled ? "text-darkgreen" : "text-white"
            }`}
            aria-label="Menu öffnen"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 bg-current ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream/98 backdrop-blur-md border-t border-gold/20 overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-darkgreen font-serif-alt font-medium py-2 border-b border-gold/10 hover:text-paprika transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#bestellen"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-2 bg-paprika text-white font-serif-alt font-semibold text-center py-3 rounded-full hover:bg-paprika-dark transition-colors"
              >
                Jetzt bestellen
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
