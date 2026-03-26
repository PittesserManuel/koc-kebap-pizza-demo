"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BestellCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="bestellen" className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-paprika/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-paprika font-serif-alt text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Hunger? Wir helfen!
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-darkgreen mb-6 leading-tight">
              Direkt zu Ihnen
              <br />
              <span className="text-paprika italic">nach Hause.</span>
            </h2>
            <p className="font-serif-alt text-warm-gray text-lg leading-relaxed mb-8 max-w-xl">
              Bestellen Sie Ihren Lieblingsdöner, die knusprige Pizza oder eine
              türkische Spezialität bequem online – wir liefern direkt zu Ihnen.
              Schnell, heiß und frisch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+436601414666"
                className="group flex items-center gap-3 bg-white border-2 border-paprika/20 text-darkgreen font-serif-alt font-semibold px-6 py-4 rounded-full hover:border-paprika hover:bg-paprika/5 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-paprika/10 rounded-full flex items-center justify-center group-hover:bg-paprika group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-paprika group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-warm-gray">Telefonisch bestellen</div>
                  <div className="text-darkgreen font-bold">0660 1414666</div>
                </div>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: "🚀", text: "Schnelle Lieferung" },
                { icon: "🔥", text: "Immer heiß" },
                { icon: "💯", text: "Frische Zutaten" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-warm-gray font-serif-alt text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                alt="Pizza bestellen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Floating order card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif font-bold text-darkgreen">Ihr nächste Bestellung</span>
                  <span className="text-green-500 text-xs font-serif-alt font-semibold">● Jetzt offen</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {["Koc Dürüm", "Pizza Diavolo", "Falafel Box"].map((item) => (
                    <span key={item} className="bg-paprika/10 text-paprika text-xs font-serif-alt font-medium px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="tel:+436601414666"
                  className="block w-full bg-paprika text-white text-center font-serif-alt font-semibold text-sm py-3 rounded-xl hover:bg-paprika-dark transition-colors"
                >
                  Jetzt anrufen – 0660 1414666
                </a>
              </motion.div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold/20 rounded-full pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-paprika/15 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
