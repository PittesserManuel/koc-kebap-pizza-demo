"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Markus H.",
    rating: 5,
    date: "vor 3 Tagen",
    text: "Absolut bester Döner in ganz Baden! Das Fleisch ist immer perfekt mariniert und die Soßen sind einfach unglaublich. Komme schon seit Jahren hierher und es wird nie schlechter. Top!",
    dish: "Koc Dürüm",
  },
  {
    name: "Sandra W.",
    rating: 5,
    date: "vor 1 Woche",
    text: "Die Pizza Diavolo ist phänomenal – genau die richtige Schärfe und der Teig ist so knusprig wie er sein soll. Auch die Lieferung war super schnell. 5 Sterne ohne Frage!",
    dish: "Pizza Diavolo",
  },
  {
    name: "Thomas K.",
    rating: 5,
    date: "vor 2 Wochen",
    text: "Was für ein Laden! Koc Kebap ist seit Jahren unser Familienfavorit. Die Kinder lieben die Pizza Hawaii und ich kann nicht aufhören mit dem Kalb Dürüm. Freundliches Personal, schnell und lecker!",
    dish: "Kalb Dürüm",
  },
  {
    name: "Lisa M.",
    rating: 5,
    date: "vor 3 Wochen",
    text: "Falafel Box war der Wahnsinn – alles frisch, reichlich und geschmacklich einfach top. Endlich ein Imbiss in Baden, der auch vegetarisch wirklich gut kann. Danke!",
    dish: "Falafel Box",
  },
  {
    name: "Andreas R.",
    rating: 4,
    date: "vor 1 Monat",
    text: "Super Essen, sehr gute Qualität. Das Schnitzel hat meiner Frau besonders gut geschmeckt. Einzig die Wartezeit war etwas länger, aber bei dem Andrang verständlich. Sehr zu empfehlen!",
    dish: "Schnitzel-Teller",
  },
  {
    name: "Claudia B.",
    rating: 5,
    date: "vor 1 Monat",
    text: "Mein absolutes Lieblingslokal! Die Gemischte Box ist eine Wucht – so viel für einen fairen Preis. Immer wieder super, immer frisch. Der beste Kebap in der Region, da bin ich mir sicher.",
    dish: "Gemischte Box",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-gold" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="bewertungen"
      className="bg-darkgreen py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-serif-alt text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Was unsere Gäste sagen
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bewertungen,
            <br />
            <span className="text-gold italic">die für sich sprechen.</span>
          </h2>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="font-serif text-6xl font-bold text-gold">4.8</div>
              <div className="flex justify-center mt-2 mb-1">
                <StarRating rating={5} />
              </div>
              <div className="text-white/60 font-serif-alt text-sm">
                234 Bewertungen auf Lieferando
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-paprika/20 border border-paprika/30 flex items-center justify-center">
                    <span className="font-serif font-bold text-paprika text-lg">
                      {review.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-serif-alt font-semibold text-white text-sm">
                      {review.name}
                    </div>
                    <div className="text-white/40 font-serif-alt text-xs">
                      {review.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Lieferando_logo.svg"
                    alt="Lieferando"
                    className="w-16 h-3 object-contain opacity-60"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-white/75 font-serif-alt text-sm leading-relaxed mt-4 mb-4">
                "{review.text}"
              </p>

              {/* Dish */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-gold/50" />
                <span className="text-gold/70 font-serif-alt text-xs">
                  {review.dish}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lieferando badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#bestellen"
            className="inline-flex items-center gap-3 bg-gold text-darkgreen font-serif-alt font-bold px-8 py-4 rounded-full hover:bg-gold-light transition-colors shadow-lg hover:shadow-xl"
          >
            Auch Sie werden begeistert sein – Jetzt bestellen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
