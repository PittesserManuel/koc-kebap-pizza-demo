"use client";

import { MenuItem, formatPrice } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addItem, updateQuantity, state } = useCart();

  const cartItem = state.items.find((i) => i.item.id === item.id);
  const quantity = cartItem?.quantity ?? 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Image placeholder */}
      <div className={`h-36 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
        <span className="text-5xl drop-shadow-lg">{item.emoji}</span>
        {item.popular && (
          <span className="absolute top-2 left-2 bg-gold text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Beliebt
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{item.name}</h3>
        <p className="text-gray-500 text-xs line-clamp-2 flex-1 mb-3">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-paprika text-base">{formatPrice(item.price)}</span>

          {quantity === 0 ? (
            <button
              onClick={() => addItem(item)}
              className="bg-paprika text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-paprika-dark active:scale-95 transition-all shadow-sm"
              aria-label={`${item.name} hinzufügen`}
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-paprika rounded-full px-2 py-1">
              <button
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="text-white font-bold text-base w-5 h-5 flex items-center justify-center leading-none hover:opacity-80"
                aria-label="Weniger"
              >
                −
              </button>
              <span className="text-white text-sm font-bold min-w-[16px] text-center">{quantity}</span>
              <button
                onClick={() => addItem(item)}
                className="text-white font-bold text-base w-5 h-5 flex items-center justify-center leading-none hover:opacity-80"
                aria-label="Mehr"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
