"use client";

import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="bg-paprika text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-xl font-bold text-white shadow">
            K
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight">Koc Kebap & Pizza</h1>
            <p className="text-red-200 text-xs">Baden · Tägl. 11–21 Uhr</p>
          </div>
        </div>

        <button
          onClick={openCart}
          className="relative bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-2 flex items-center gap-2 text-sm font-medium"
          aria-label="Warenkorb öffnen"
        >
          <span className="text-lg">🛒</span>
          <span className="hidden sm:inline">Warenkorb</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
