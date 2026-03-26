"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Oeffnungszeiten() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="oeffnungszeiten"
      className="bg-cream py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-full min-h-[400px] bg-[#e8e0d5]">
              {/* Map placeholder with grid */}
              <div className="absolute inset-0 opacity-30">
                {/* Street grid simulation */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <rect width="400" height="400" fill="#E8E0D5" />
                  {/* Streets */}
                  <rect x="0" y="180" width="400" height="16" fill="#D4C9B8" />
                  <rect x="0" y="250" width="400" height="10" fill="#D4C9B8" />
                  <rect x="150" y="0" width="20" height="400" fill="#D4C9B8" />
                  <rect x="280" y="0" width="12" height="400" fill="#D4C9B8" />
                  {/* Blocks */}
                  <rect x="30" y="60" width="100" height="100" rx="4" fill="#D0C4B0" />
                  <rect x="170" y="60" width="90" height="100" rx="4" fill="#D0C4B0" />
                  <rect x="310" y="60" width="80" height="100" rx="4" fill="#D0C4B0" />
                  <rect x="30" y="210" width="100" height="80" rx="4" fill="#D0C4B0" />
                  <rect x="170" y="210" width="90" height="80" rx="4" fill="#D0C4B0" />
                  <rect x="310" y="210" width="80" height="80" rx="4" fill="#D0C4B0" />
                  <rect x="30" y="310" width="100" height="80" rx="4" fill="#D0C4B0" />
                  <rect x="170" y="310" width="90" height="80" rx="4" fill="#D0C4B0" />
                  <rect x="310" y="310" width="80" height="80" rx="4" fill="#D0C4B0" />
                </svg>
              </div>

              {/* Map overlay with real feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5ECD7]/40 via-transparent to-[#E8D8B8]/40" />

              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 bg-paprika rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-2 h-2 bg-paprika/40 rounded-full mx-auto -mt-1 blur-sm" />
                </motion.div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg text-center">
                <div className="font-serif font-bold text-darkgreen text-sm">
                  Koc Kebap & Pizza
                </div>
                <div className="font-serif-alt text-warm-gray text-xs">
                  Josefsplatz 3, Baden
                </div>
              </div>

              {/* Google Maps link */}
              <a
                href="https://maps.google.com/?q=Josefsplatz+3+Baden+Niederösterreich"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 text-xs font-serif-alt font-semibold text-darkgreen shadow-md hover:shadow-lg transition-shadow flex items-center gap-1.5"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Google Maps
              </a>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block text-paprika font-serif-alt text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Besuchen Sie uns
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-darkgreen mb-10 leading-tight">
              Wir sind <span className="text-paprika italic">täglich</span>
              <br />
              für Sie da.
            </h2>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gold/10 mb-8">
              <h3 className="font-serif font-bold text-darkgreen text-xl mb-6 flex items-center gap-3">
                <span className="text-gold text-2xl">🕐</span>
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Montag", time: "11:00 – 21:00 Uhr" },
                  { day: "Dienstag", time: "11:00 – 21:00 Uhr" },
                  { day: "Mittwoch", time: "11:00 – 21:00 Uhr" },
                  { day: "Donnerstag", time: "11:00 – 21:00 Uhr" },
                  { day: "Freitag", time: "11:00 – 21:00 Uhr" },
                  { day: "Samstag", time: "11:00 – 21:00 Uhr" },
                  { day: "Sonntag", time: "11:00 – 21:00 Uhr" },
                ].map((item, i) => (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center py-2 ${
                      i < 6 ? "border-b border-gold/10" : ""
                    }`}
                  >
                    <span className="font-serif-alt text-warm-gray text-sm">
                      {item.day}
                    </span>
                    <span className="font-serif-alt font-semibold text-darkgreen text-sm">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 font-serif-alt text-sm font-medium">
                  Heute geöffnet
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Adresse",
                  value: "Josefsplatz 3, Top 5\n2500 Baden, Niederösterreich",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "0660 1414666",
                  href: "tel:+436601414666",
                },
              ].map((contact) => (
                <div key={contact.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-paprika/10 rounded-xl flex items-center justify-center text-paprika shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-serif-alt text-xs text-warm-gray uppercase tracking-wider mb-1">
                      {contact.label}
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="font-serif-alt font-semibold text-darkgreen hover:text-paprika transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="font-serif-alt font-semibold text-darkgreen whitespace-pre-line">
                        {contact.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
