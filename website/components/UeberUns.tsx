"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function UeberUns() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="ueber-uns" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images – Asymmetric Layout */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527481138388-31827a7c94d5?w=800&q=80"
                alt="Unsere Küche"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating second image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-6 lg:-right-12 w-2/5 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                alt="Frische Pizza"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute top-6 -right-4 lg:-right-10 bg-paprika text-white p-5 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-serif font-bold">4.8</div>
              <div className="text-gold text-sm">★★★★★</div>
              <div className="text-white/80 text-xs font-serif-alt mt-1">
                234 Bewertungen
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-gold/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 border border-paprika/10 rounded-full -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <span className="inline-block text-paprika font-serif-alt text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Unsere Geschichte
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-darkgreen mb-8 leading-tight">
              Mehr als nur
              <br />
              <span className="text-paprika italic">ein Imbiss.</span>
            </h2>

            <div className="space-y-5 font-serif-alt text-warm-gray leading-relaxed">
              <p className="text-lg">
                Seit Jahren verwöhnen wir die Badener mit authentischen
                Geschmackserlebnissen direkt vom Josefsplatz. Was als kleines
                Familienunternehmen begann, ist heute eine feste Institution in
                der Stadt.
              </p>
              <p>
                Unser Döner wird täglich frisch vorbereitet – das Fleisch
                marinieren wir nach einer überlieferten Familienrezeptur aus der
                Türkei. Die Soßen, die Salate, die Falafel – alles hausgemacht,
                alles mit Liebe.
              </p>
              <p>
                Neben unseren türkischen Klassikern führen wir auch eine
                handverlesene Pizzakarte mit knusprigem Teig und frischen
                Zutaten. Und weil wir in Baden daheim sind, darf ein echtes
                Schnitzel natürlich nicht fehlen.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gold/20">
              {[
                { icon: "🌿", label: "Täglich frisch" },
                { icon: "🏠", label: "Familienbetrieb" },
                { icon: "❤️", label: "Mit Liebe gekocht" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-serif-alt text-sm font-semibold text-darkgreen">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="#bestellen"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-paprika font-serif-alt font-semibold mt-10 group"
            >
              <span>Jetzt bestellen</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
