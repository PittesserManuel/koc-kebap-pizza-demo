"use client";

import { categories, getItemsByCategory } from "@/data/menu";
import MenuCard from "./MenuCard";

interface MenuSectionProps {
  activeCategory: string;
}

export default function MenuSection({ activeCategory }: MenuSectionProps) {
  const items = getItemsByCategory(activeCategory);
  const category = categories.find((c) => c.id === activeCategory);

  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">{category?.emoji}</span>
        <h2 className="text-xl font-bold text-gray-900">{category?.name}</h2>
        <span className="text-gray-400 text-sm ml-1">({items.length} Gerichte)</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
