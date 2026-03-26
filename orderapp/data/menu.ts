export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  gradient: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export const categories: Category[] = [
  { id: "dueruem-doener", name: "Dürüm & Döner", emoji: "🌯" },
  { id: "pizza", name: "Pizza", emoji: "🍕" },
  { id: "pide-spezialitaeten", name: "Pide & Spezialitäten", emoji: "🫓" },
  { id: "grill-schnitzel", name: "Grill & Schnitzel", emoji: "🥩" },
  { id: "getraenke", name: "Getränke", emoji: "🥤" },
];

export const menuItems: MenuItem[] = [
  // Dürüm & Döner
  {
    id: "koc-dueruem",
    name: "Koc Dürüm",
    description: "Fleischsorte nach Wahl, frisches Gemüse, Soße in Fladenbrot",
    price: 9.90,
    category: "dueruem-doener",
    emoji: "🌯",
    gradient: "from-red-700 to-orange-600",
    popular: true,
  },
  {
    id: "kalb-dueruem",
    name: "Kalb Dürüm",
    description: "Zartes Kalbfleisch, Salat, Tomaten, Joghurt-Knoblauch-Soße",
    price: 10.90,
    category: "dueruem-doener",
    emoji: "🌯",
    gradient: "from-orange-700 to-amber-600",
  },
  {
    id: "gemischtes-dueruem",
    name: "Gemischtes Dürüm",
    description: "Rind- und Hühnerfleisch gemischt, Gemüse, Haussoße",
    price: 10.50,
    category: "dueruem-doener",
    emoji: "🌯",
    gradient: "from-red-600 to-rose-500",
  },
  {
    id: "schnitzel-dueruem",
    name: "Schnitzel Dürüm",
    description: "Knuspriges Schnitzel, Salat, Tomaten, Remouladensoße",
    price: 9.90,
    category: "dueruem-doener",
    emoji: "🌯",
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    id: "kebap-teller",
    name: "Kebap-Teller",
    description: "Großzügiger Teller mit Dönerfleisch, Reis, Salat, Brot",
    price: 12.90,
    category: "dueruem-doener",
    emoji: "🍽️",
    gradient: "from-red-800 to-red-600",
    popular: true,
  },
  {
    id: "koc-salat",
    name: "Koc Salat mit Dönerfleisch",
    description: "Frischer gemischter Salat mit saftigem Dönerfleisch und Dressing",
    price: 11.90,
    category: "dueruem-doener",
    emoji: "🥗",
    gradient: "from-green-700 to-emerald-500",
  },

  // Pizza
  {
    id: "wunschpizza",
    name: "Wunschpizza",
    description: "Tomatensoße, Käse + 4 Zutaten nach Wahl",
    price: 12.90,
    category: "pizza",
    emoji: "🍕",
    gradient: "from-red-600 to-orange-500",
    popular: true,
  },
  {
    id: "pizza-mozzarella",
    name: "Pizza Mozzarella",
    description: "Tomatensoße, frischer Mozzarella, Basilikum, Olivenöl",
    price: 9.90,
    category: "pizza",
    emoji: "🍕",
    gradient: "from-yellow-500 to-red-500",
  },
  {
    id: "pizza-hawaii",
    name: "Pizza Hawaii",
    description: "Tomatensoße, Mozzarella, Schinken, Ananas",
    price: 10.90,
    category: "pizza",
    emoji: "🍕",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "pizza-funghi",
    name: "Pizza Funghi",
    description: "Tomatensoße, Mozzarella, frische Champignons, Oregano",
    price: 10.50,
    category: "pizza",
    emoji: "🍕",
    gradient: "from-amber-700 to-yellow-600",
  },
  {
    id: "pizza-diavolo",
    name: "Pizza Diavolo",
    description: "Scharfe Tomatensoße, Mozzarella, Peperoni, scharfe Salami",
    price: 11.50,
    category: "pizza",
    emoji: "🌶️",
    gradient: "from-red-800 to-orange-700",
  },
  {
    id: "calzone",
    name: "Calzone",
    description: "Gefüllte Pizza mit Mozzarella, Schinken und Pilzen",
    price: 11.90,
    category: "pizza",
    emoji: "🫔",
    gradient: "from-orange-600 to-amber-500",
  },

  // Pide & Türkische Spezialitäten
  {
    id: "pide-kebap-fleisch",
    name: "Pide Kebap Fleisch",
    description: "Türkisches Fladenbrot mit würzigem Kebap-Hackfleisch",
    price: 10.90,
    category: "pide-spezialitaeten",
    emoji: "🫓",
    gradient: "from-red-700 to-orange-600",
  },
  {
    id: "pide-mozzarella",
    name: "Pide Mozzarella",
    description: "Türkisches Fladenbrot mit Tomatensoße und Mozzarella",
    price: 9.90,
    category: "pide-spezialitaeten",
    emoji: "🫓",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    id: "pide-spinat-kaese",
    name: "Pide Spinat & Käse",
    description: "Türkisches Fladenbrot mit frischem Spinat und Feta-Käse",
    price: 9.50,
    category: "pide-spezialitaeten",
    emoji: "🫓",
    gradient: "from-green-600 to-emerald-500",
  },
  {
    id: "kalb-box",
    name: "Kalb-Box",
    description: "Box mit Kalbfleisch, Pommes Frites, Salat und Soße",
    price: 11.90,
    category: "pide-spezialitaeten",
    emoji: "📦",
    gradient: "from-amber-700 to-orange-600",
    popular: true,
  },
  {
    id: "gemischte-box",
    name: "Gemischte Box",
    description: "Box mit gemischtem Fleisch, Pommes, Salat und Dip",
    price: 11.50,
    category: "pide-spezialitaeten",
    emoji: "📦",
    gradient: "from-red-700 to-amber-600",
  },
  {
    id: "falafel-box",
    name: "Falafel Box",
    description: "Knusprige Falafel, Hummus, Salat, Fladenbrot und Tahini",
    price: 9.90,
    category: "pide-spezialitaeten",
    emoji: "🧆",
    gradient: "from-amber-600 to-yellow-500",
  },
  {
    id: "falafel-wrap",
    name: "Falafel-Wrap",
    description: "Knusprige Falafel im Wrap mit Salat, Tomaten und Tahini-Soße",
    price: 8.90,
    category: "pide-spezialitaeten",
    emoji: "🌯",
    gradient: "from-green-600 to-lime-500",
  },

  // Grill & Schnitzel
  {
    id: "wiener-schnitzel",
    name: "Wiener Schnitzel",
    description: "Klassisches Wiener Schnitzel vom Kalb mit Preiselbeeren und Zitrone",
    price: 12.90,
    category: "grill-schnitzel",
    emoji: "🥩",
    gradient: "from-yellow-600 to-amber-500",
    popular: true,
  },
  {
    id: "schnitzel-pommes",
    name: "Schnitzel mit Pommes",
    description: "Knuspriges Schnitzel mit goldenen Pommes Frites",
    price: 11.90,
    category: "grill-schnitzel",
    emoji: "🍟",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    id: "grill-teller",
    name: "Grill-Teller",
    description: "Gemischter Grillteller mit Steakstreifen, Hähnchen und Grillgemüse",
    price: 14.90,
    category: "grill-schnitzel",
    emoji: "🍖",
    gradient: "from-red-800 to-red-600",
  },
  {
    id: "pommes-frites",
    name: "Pommes Frites",
    description: "Knusprige goldene Pommes Frites mit Ketchup oder Mayo",
    price: 4.50,
    category: "grill-schnitzel",
    emoji: "🍟",
    gradient: "from-yellow-500 to-amber-400",
  },
  {
    id: "reis",
    name: "Reis",
    description: "Lockerer Langkornreis als Beilage",
    price: 3.50,
    category: "grill-schnitzel",
    emoji: "🍚",
    gradient: "from-stone-400 to-slate-300",
  },

  // Getränke
  {
    id: "cola",
    name: "Cola 0,5l",
    description: "Eisgekühlte Cola in der 0,5l Flasche",
    price: 2.90,
    category: "getraenke",
    emoji: "🥤",
    gradient: "from-red-900 to-red-700",
  },
  {
    id: "fanta",
    name: "Fanta 0,5l",
    description: "Erfrischende Fanta in der 0,5l Flasche",
    price: 2.90,
    category: "getraenke",
    emoji: "🍊",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: "ayran",
    name: "Ayran",
    description: "Traditionelles türkisches Joghurtgetränk, leicht gesalzen",
    price: 2.50,
    category: "getraenke",
    emoji: "🥛",
    gradient: "from-slate-200 to-white",
  },
  {
    id: "wasser",
    name: "Wasser 0,5l",
    description: "Stilles Mineralwasser in der 0,5l Flasche",
    price: 2.00,
    category: "getraenke",
    emoji: "💧",
    gradient: "from-blue-400 to-cyan-300",
  },
];

export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === categoryId);
};

export const formatPrice = (price: number): string => {
  return `€${price.toFixed(2).replace(".", ",")}`;
};
