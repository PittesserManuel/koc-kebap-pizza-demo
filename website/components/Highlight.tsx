"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Highlight() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <img
          src="https://images.unsplash.com/photo-1548940740-204726a19be3?w=1920&q=80"
          alt="Authentische Küche"
          className="w-full h-[130%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-paprika/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: textY }}
      >
        <div className="max-w-3xl">
          {/* Ornament */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold font-serif-alt text-sm tracking-widest uppercase">
              Unser Versprechen
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Jeder Bissen
            <br />
            <span className="text-gold italic">eine Geschichte.</span>
          </h2>

          <p className="font-serif-alt text-white/80 text-xl leading-relaxed mb-10 max-w-2xl">
            Wir verwenden nur frische Zutaten, marinieren unser Fleisch nach
            traditionellen Rezepten und backen unsere Pizza in echter
            Handarbeit. Das schmeckt man.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { number: "234", label: "zufriedene Gäste auf Lieferando" },
              { number: "4.8★", label: "Durchschnittsbewertung" },
              { number: "20+", label: "Gerichte auf der Karte" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl font-bold text-gold">
                  {stat.number}
                </div>
                <div className="text-white/60 font-serif-alt text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#C9922A" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#C9922A" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
