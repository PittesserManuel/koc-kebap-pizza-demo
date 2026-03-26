"use client";

import { motion } from "framer-motion";

const items = [
  "Koc Dürüm",
  "★",
  "Pizza Diavolo",
  "★",
  "Kalb Dürüm",
  "★",
  "Wunschpizza",
  "★",
  "Falafel Box",
  "★",
  "Kebap-Teller",
  "★",
  "Pide Kebap",
  "★",
  "Schnitzel",
  "★",
  "Gemischtes Dürüm",
  "★",
  "Calzone",
  "★",
  "Pizza Hawaii",
  "★",
  "Grill-Teller",
  "★",
];

export default function Marquee() {
  return (
    <section className="relative bg-paprika overflow-hidden py-0 z-10">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />

      {/* First row */}
      <div className="marquee-wrapper flex overflow-hidden py-5 border-b border-white/10">
        <div className="flex animate-marquee whitespace-nowrap gap-0 shrink-0">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`inline-flex items-center px-6 font-serif text-xl ${
                item === "★"
                  ? "text-gold text-2xl"
                  : "text-white/90 font-bold tracking-wide"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-0 shrink-0" aria-hidden>
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`inline-flex items-center px-6 font-serif text-xl ${
                item === "★"
                  ? "text-gold text-2xl"
                  : "text-white/90 font-bold tracking-wide"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Second row – reverse */}
      <div className="marquee-wrapper flex overflow-hidden py-4">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-0 shrink-0" style={{ animationDuration: "25s" }}>
          {[...items.slice(8), ...items.slice(0, 8), ...items].map((item, i) => (
            <span
              key={i}
              className={`inline-flex items-center px-6 font-serif-alt text-sm uppercase tracking-[0.2em] ${
                item === "★"
                  ? "text-gold/60"
                  : "text-white/50 font-medium"
              }`}
            >
              {item === "★" ? "·" : item}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-0 shrink-0" style={{ animationDuration: "25s" }} aria-hidden>
          {[...items.slice(8), ...items.slice(0, 8), ...items].map((item, i) => (
            <span
              key={i}
              className={`inline-flex items-center px-6 font-serif-alt text-sm uppercase tracking-[0.2em] ${
                item === "★"
                  ? "text-gold/60"
                  : "text-white/50 font-medium"
              }`}
            >
              {item === "★" ? "·" : item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
