export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  available: boolean
}

export const CATEGORIES = [
  'Dürüm & Döner',
  'Pizza',
  'Pide & Türkische Spezialitäten',
  'Österreichischer Grill & Schnitzel',
  'Getränke',
]

export const mockProducts: Product[] = [
  // Dürüm & Döner
  {
    id: 'p1',
    name: 'Koc Dürüm',
    category: 'Dürüm & Döner',
    price: 9.90,
    description: 'Dürüm mit Fleischsorte nach Wahl, Salat, Soße',
    available: true,
  },
  {
    id: 'p2',
    name: 'Kalb Dürüm',
    category: 'Dürüm & Döner',
    price: 10.90,
    description: 'Dürüm mit zartem Kalbfleisch, Salat, Soße',
    available: true,
  },
  {
    id: 'p3',
    name: 'Gemischtes Dürüm',
    category: 'Dürüm & Döner',
    price: 10.50,
    description: 'Dürüm mit gemischtem Fleisch, Salat, Soße',
    available: true,
  },
  {
    id: 'p4',
    name: 'Schnitzel Dürüm',
    category: 'Dürüm & Döner',
    price: 10.50,
    description: 'Dürüm mit knusprigem Schnitzel, Salat, Soße',
    available: true,
  },
  {
    id: 'p5',
    name: 'Kebap-Teller',
    category: 'Dürüm & Döner',
    price: 12.90,
    description: 'Kebap-Fleisch auf Teller mit Salat und Beilage',
    available: true,
  },
  {
    id: 'p6',
    name: 'Koc Salat mit Dönerfleisch',
    category: 'Dürüm & Döner',
    price: 11.90,
    description: 'Frischer gemischter Salat mit Dönerfleisch',
    available: true,
  },
  // Pizza
  {
    id: 'p7',
    name: 'Wunschpizza',
    category: 'Pizza',
    price: 11.90,
    description: 'Pizza mit 4 Zutaten nach Wahl',
    available: true,
  },
  {
    id: 'p8',
    name: 'Pizza Mozzarella',
    category: 'Pizza',
    price: 9.90,
    description: 'Tomatensoße, Mozzarella, Basilikum',
    available: true,
  },
  {
    id: 'p9',
    name: 'Pizza Hawaii',
    category: 'Pizza',
    price: 10.50,
    description: 'Tomatensoße, Mozzarella, Schinken, Ananas',
    available: true,
  },
  {
    id: 'p10',
    name: 'Pizza Funghi',
    category: 'Pizza',
    price: 10.90,
    description: 'Tomatensoße, Mozzarella, frische Champignons',
    available: true,
  },
  {
    id: 'p11',
    name: 'Pizza Diavolo',
    category: 'Pizza',
    price: 11.50,
    description: 'Tomatensoße, Mozzarella, Salami, Peperoni – scharf!',
    available: true,
  },
  {
    id: 'p12',
    name: 'Calzone',
    category: 'Pizza',
    price: 11.90,
    description: 'Gefaltete Pizza mit Mozzarella, Schinken, Champignons',
    available: true,
  },
  // Pide & Türkische Spezialitäten
  {
    id: 'p13',
    name: 'Pide Kebap',
    category: 'Pide & Türkische Spezialitäten',
    price: 10.90,
    description: 'Türkisches Fladenbrot belegt mit Kebap-Fleisch',
    available: true,
  },
  {
    id: 'p14',
    name: 'Pide Mozzarella',
    category: 'Pide & Türkische Spezialitäten',
    price: 9.50,
    description: 'Türkisches Fladenbrot mit Mozzarella',
    available: true,
  },
  {
    id: 'p15',
    name: 'Pide Spinat & Käse',
    category: 'Pide & Türkische Spezialitäten',
    price: 9.90,
    description: 'Türkisches Fladenbrot mit Spinat und Feta-Käse',
    available: true,
  },
  {
    id: 'p16',
    name: 'Kalb-Box',
    category: 'Pide & Türkische Spezialitäten',
    price: 11.90,
    description: 'Box mit Kalbfleisch, Reis, Salat und Soße',
    available: true,
  },
  {
    id: 'p17',
    name: 'Gemischte Box',
    category: 'Pide & Türkische Spezialitäten',
    price: 12.50,
    description: 'Box mit gemischtem Fleisch, Reis, Salat und Soße',
    available: true,
  },
  {
    id: 'p18',
    name: 'Falafel Box',
    category: 'Pide & Türkische Spezialitäten',
    price: 9.90,
    description: 'Vegane Box mit Falafel, Reis, Salat und Soße',
    available: true,
  },
  {
    id: 'p19',
    name: 'Falafel-Wrap',
    category: 'Pide & Türkische Spezialitäten',
    price: 8.90,
    description: 'Wrap mit Falafel, Salat und Joghurt-Soße',
    available: true,
  },
  // Österreichischer Grill & Schnitzel
  {
    id: 'p20',
    name: 'Wiener Schnitzel',
    category: 'Österreichischer Grill & Schnitzel',
    price: 12.90,
    description: 'Klassisches Wiener Schnitzel vom Kalb mit Beilage',
    available: true,
  },
  {
    id: 'p21',
    name: 'Grill-Teller',
    category: 'Österreichischer Grill & Schnitzel',
    price: 14.90,
    description: 'Gemischter Grill-Teller mit Fleisch, Beilagen und Salat',
    available: true,
  },
  // Getränke
  {
    id: 'p22',
    name: 'Cola 0,5l',
    category: 'Getränke',
    price: 2.90,
    description: 'Coca-Cola 0,5 Liter',
    available: true,
  },
  {
    id: 'p23',
    name: 'Ayran',
    category: 'Getränke',
    price: 2.50,
    description: 'Türkisches Joghurtgetränk 0,3 Liter',
    available: true,
  },
  {
    id: 'p24',
    name: 'Wasser 0,5l',
    category: 'Getränke',
    price: 1.90,
    description: 'Mineralwasser still oder prickelnd',
    available: true,
  },
  {
    id: 'p25',
    name: 'Fanta 0,5l',
    category: 'Getränke',
    price: 2.90,
    description: 'Fanta Orange 0,5 Liter',
    available: false,
  },
]
