"use client";

import { categories } from "@/data/menu";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-[60px] z-30 shadow-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto category-scroll py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-paprika text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
