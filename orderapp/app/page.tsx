"use client";

import { useState } from "react";
import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import MenuSection from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("dueruem-doener");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { subtotal, totalItems, openCart } = useCart();

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    // Scroll to top of menu content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f7f4]">
      <DemoBanner />
      <Header />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Hero strip */}
      <div className="bg-gradient-to-r from-paprika to-paprika-light text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Frisch & Lecker aus Baden 🌯🍕
            </h2>
            <p className="text-red-200 text-sm mt-1">
              Täglich 11:00–21:00 · Lieferung & Abholung
            </p>
          </div>
          <div className="flex gap-4 text-center">
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <div className="text-gold font-bold text-lg">4.8 ⭐</div>
              <div className="text-red-200 text-xs">234 Bewertungen</div>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <div className="font-bold text-lg">30 min</div>
              <div className="text-red-200 text-xs">Lieferzeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <MenuSection activeCategory={activeCategory} />
      </main>

      {/* Sticky cart button (mobile) */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 sm:hidden">
          <button
            onClick={openCart}
            className="bg-paprika text-white px-6 py-3.5 rounded-full shadow-2xl font-bold flex items-center gap-3 hover:bg-paprika-dark active:scale-95 transition-all"
          >
            <span className="bg-gold text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
            <span>Warenkorb ansehen</span>
            <span className="text-red-200">
              €{subtotal.toFixed(2).replace(".", ",")}
            </span>
          </button>
        </div>
      )}

      <Footer />

      {/* Cart drawer */}
      <CartDrawer onCheckout={() => setIsCheckoutOpen(true)} />

      {/* Checkout modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
