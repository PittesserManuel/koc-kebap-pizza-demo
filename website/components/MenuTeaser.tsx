"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const menuItems = [
  {
    category: "Döner & Dürüm",
    name: "Koc Dürüm",
    description: "Saftiges Dönerfleisch nach Wahl, frische Salate, hausgemachte Soßen im knusprigen Fladenbrot",
    price: "€ 9,90",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
    badge: "Bestseller",
  },
  {
    category: "Döner & Dürüm",
    name: "Kalb Dürüm",
    description: "Feines Kalbfleisch, gegrilltes Gemüse, Kräutersoße – eine Delikatesse der besonderen Art",
    price: "€ 11,50",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    badge: null,
  },
  {
    category: "Pizza",
    name: "Pizza Diavolo",
    description: "Tomatensauce, Mozzarella, Salami, scharfe Peperoni – für alle, die es heiß mögen",
    price: "€ 12,90",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    badge: "Scharf",
  },
  {
    category: "Pizza",
    name: "Wunschpizza",
    description: "4 Zutaten nach Wahl – Ihr Traum, unsere Küche. Mit knusprigem Teig & frischen Zutaten",
    price: "€ 11,90",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    badge: "Individuell",
  },
  {
    category: "Türkische Spezialitäten",
    name: "Falafel Box",
    description: "Knusprige Falafel, Hummus, Tabbouleh, Pita – vegetarisch & sättigend",
    price: "€ 10,90",
    image: "https://images.unsplash.com/photo-1593001874117-c22021e3c2bd?w=600&q=80",
    badge: "Vegetarisch",
  },
  {
    category: "Österreichischer Grill",
    name: "Schnitzel-Teller",
    description: "Zartes Wiener Schnitzel mit Pommes oder Salat – österreichische Hausmannskost vom Feinsten",
    price: "€ 13,90",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    badge: null,
  },
];

const badgeColors: Record<string, string> = {
  Bestseller: "bg-paprika text-white",
  Scharf: "bg-orange-500 text-white",
  Individuell: "bg-gold text-white",
  Vegetarisch: "bg-darkgreen text-white",
};

export default function MenuTeaser() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="speisekarte" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-paprika font-serif-alt text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Unsere Speisekarte
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-darkgreen mb-6">
            Highlights aus
            <br />
            <span className="text-paprika italic">unserer Küche</span>
          </h2>
          <p className="font-serif-alt text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Von traditionellem Döner bis zur kreativen Pizza – bei uns findet
            jeder seinen Liebling. Täglich frisch zubereitet.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gold/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge */}
                {item.badge && (
                  <span
                    className={`absolute top-3 left-3 text-xs font-serif-alt font-semibold px-3 py-1 rounded-full ${
                      badgeColors[item.badge] || "bg-paprika text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Price */}
                <div className="absolute bottom-3 right-3 bg-gold text-white font-serif font-bold text-lg px-3 py-1 rounded-lg shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-paprika font-serif-alt text-xs font-semibold tracking-wider uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-xl text-darkgreen mb-3 group-hover:text-paprika transition-colors">
                  {item.name}
                </h3>
                <p className="text-warm-gray font-serif-alt text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#bestellen"
            className="inline-flex items-center gap-3 bg-paprika text-white font-serif-alt font-semibold text-base px-10 py-4 rounded-full hover:bg-paprika-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Vollständige Speisekarte & Bestellen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
