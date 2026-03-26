"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="bg-darkgreen text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-paprika rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold font-serif">K</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white">Koc Kebap</div>
                <div className="text-white/60 text-sm font-serif-alt">& Pizza Baden</div>
              </div>
            </div>
            <p className="text-white/60 font-serif-alt text-sm leading-relaxed mt-4">
              Authentischer Döner, handgemachte Pizza & türkische Spezialitäten
              am Josefsplatz Baden. Täglich frisch, täglich lecker.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <StarRow />
              <span className="text-white/60 font-serif-alt text-sm">4.8 · 234 Bewertungen</span>
            </div>
          </motion.div>

          {/* Speisekarte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-serif font-bold text-white text-lg mb-6">Speisekarte</h3>
            <ul className="space-y-3">
              {[
                "Döner & Dürüm",
                "Pizza",
                "Pide & Spezialitäten",
                "Falafel & Wraps",
                "Schnitzel & Grill",
                "Beilagen",
                "Getränke",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#speisekarte"
                    className="text-white/60 font-serif-alt text-sm hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-serif font-bold text-white text-lg mb-6">Information</h3>
            <ul className="space-y-3">
              {[
                { label: "Über Uns", href: "#ueber-uns" },
                { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
                { label: "Kontakt", href: "tel:+436601414666" },
                { label: "Bewertungen", href: "#bewertungen" },
                { label: "Impressum", href: "#" },
                { label: "Datenschutz", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/60 font-serif-alt text-sm hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-serif font-bold text-white text-lg mb-6">Kontakt</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-paprika shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-white/60 font-serif-alt text-sm leading-relaxed">
                  Josefsplatz 3, Top 5<br />
                  2500 Baden, NÖ
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-paprika shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+436601414666" className="text-white/60 font-serif-alt text-sm hover:text-gold transition-colors">
                  0660 1414666
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-paprika shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-white/60 font-serif-alt text-sm">
                  Täglich 11:00 – 21:00 Uhr
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+436601414666"
              className="inline-flex items-center gap-2 mt-8 bg-paprika text-white font-serif-alt font-semibold text-sm px-6 py-3 rounded-full hover:bg-paprika-dark transition-colors"
            >
              Jetzt bestellen
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 font-serif-alt text-sm text-center sm:text-left">
            © 2025 Koc Kebap & Pizza Baden. Alle Rechte vorbehalten.
          </div>
          <a
            href="https://stratify.at"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 font-serif-alt text-sm hover:text-gold transition-colors group"
          >
            <span>Powered by</span>
            <span className="font-bold text-gold/70 group-hover:text-gold transition-colors">
              Stratify
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
