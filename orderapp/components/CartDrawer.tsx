"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/menu";

interface CartDrawerProps {
  onCheckout: () => void;
}

export default function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { state, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  const handleCheckout = () => {
    closeCart();
    onCheckout();
  };

  return (
    <>
      {/* Backdrop */}
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Warenkorb"
      >
        {/* Header */}
        <div className="bg-paprika text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <h2 className="font-bold text-lg">Warenkorb</h2>
            {totalItems > 0 && (
              <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                {totalItems} {totalItems === 1 ? "Artikel" : "Artikel"}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xl leading-none"
            aria-label="Warenkorb schließen"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 pb-16">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="font-semibold text-gray-700 text-lg mb-2">Ihr Warenkorb ist leer</h3>
              <p className="text-gray-500 text-sm">
                Fügen Sie Artikel aus der Speisekarte hinzu
              </p>
              <button
                onClick={closeCart}
                className="mt-6 bg-paprika text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-paprika-dark transition-colors"
              >
                Zur Speisekarte
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {state.items.map(({ item, quantity }) => (
                <div key={item.id} className="px-5 py-4 flex items-center gap-3">
                  {/* Emoji placeholder */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-tight truncate">{item.name}</p>
                    <p className="text-paprika font-bold text-sm mt-0.5">{formatPrice(item.price)}</p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-2 py-1.5">
                    <button
                      onClick={() => updateQuantity(item.id, quantity - 1)}
                      className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 font-bold hover:bg-paprika hover:text-white transition-colors text-sm"
                      aria-label="Menge verringern"
                    >
                      −
                    </button>
                    <span className="w-5 text-center font-bold text-gray-900 text-sm">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, quantity + 1)}
                      className="w-6 h-6 rounded-full bg-paprika text-white flex items-center justify-center font-bold hover:bg-paprika-dark transition-colors text-sm shadow-sm"
                      aria-label="Menge erhöhen"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Zwischensumme</span>
              <span className="font-bold text-lg text-gray-900">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-gray-400 text-xs mb-4 text-center">
              Liefergebühr wird im nächsten Schritt berechnet
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-paprika text-white py-3.5 rounded-xl font-bold text-base hover:bg-paprika-dark active:scale-[0.98] transition-all shadow-md"
            >
              Zur Bestellung → {formatPrice(subtotal)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
