export type Category = "puski" | "ligavu" | "kastes" | "kazas";

export type Size = { id: string; label: string; price: number };
export type Addon = { id: string; label: string; price: number };

export type Product = {
  handle: string;
  title: string;
  subtitle?: string;
  category: Category;
  price: number; // base price in cents
  image: string;
  gallery?: string[];
  description?: string;
  ingredients?: string[];
  care?: string[];
  sizes?: Size[];
  colors?: { id: string; label: string; swatch: string }[];
  addons?: Addon[];
  tag?: string;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  puski: "Pušķi",
  ligavu: "Līgavu pušķi",
  kastes: "Kastes & dāvanas",
  kazas: "Kāzu dekors",
};

export const PRODUCTS: Product[] = [
  {
    handle: "rosa-blush",
    title: "Rosa Blush",
    subtitle: "Pūdera rožu pušķis",
    category: "puski",
    price: 4800,
    image: "/img/pink-bouquet-candle.jpg",
    gallery: ["/img/pink-bouquet-candle.jpg", "/img/pink-purple-bouquet.jpg", "/img/white-roses-closeup.jpg"],
    description:
      "Mīksts, romantisks pušķis ar pūdera tonu rozēm, eikalipta zariem un sezonas zaļumiem. Ietīts smalkā papīrā ar zīda lenti.",
    ingredients: ["Rozes (pūdera tonis) ×11", "Eikalipts cinerea", "Sezonas zaļumi", "Zīda lente"],
    care: [
      "Nogriež kātus zem 45° leņķa",
      "Maina ūdeni ik pēc 2 dienām",
      "Tur prom no tiešas saules un caurvēja",
    ],
    sizes: [
      { id: "s", label: "S — 9 ziedi", price: 4800 },
      { id: "m", label: "M — 15 ziedi", price: 6800 },
      { id: "l", label: "L — 24 ziedi", price: 9500 },
    ],
    colors: [
      { id: "blush", label: "Blush", swatch: "#e9c3cf" },
      { id: "bone", label: "Bone", swatch: "#f1ebe2" },
      { id: "rose", label: "Rose", swatch: "#cc8a9c" },
    ],
    addons: [
      { id: "candle", label: "Svece", price: 800 },
      { id: "card", label: "Kartīte", price: 500 },
      { id: "sweets", label: "Konfektes", price: 300 },
    ],
    tag: "Jaunums",
  },
  {
    handle: "fuchsia-noir",
    title: "Fuchsia Noir",
    subtitle: "Dziļš fuksiju pušķis",
    category: "puski",
    price: 7500,
    image: "/img/pink-purple-bouquet.jpg",
    description:
      "Dramatisks pušķis ar dziļi fuksiju peonijām un tumšiem zariem — vakara svinībām un teātra naktīm.",
    sizes: [
      { id: "m", label: "M", price: 7500 },
      { id: "l", label: "L", price: 10500 },
    ],
  },
  {
    handle: "hydrangea-bleu",
    title: "Hydrangea Bleu",
    subtitle: "Pelnu zilas hortenzijas kastē",
    category: "kastes",
    price: 6200,
    image: "/img/blue-hydrangea-box.jpg",
  },
  {
    handle: "jaunmala-blanc",
    title: "Jaunmāla Blanc",
    subtitle: "Baltais minimālais pušķis",
    category: "puski",
    price: 5500,
    image: "/img/white-roses-closeup.jpg",
  },
  {
    handle: "perla",
    title: "Perla",
    subtitle: "Līgavu pušķis ar peonijām",
    category: "ligavu",
    price: 12000,
    image: "/img/bride-peony.jpg",
  },
  {
    handle: "calla",
    title: "Calla",
    subtitle: "Kallu līgavu pušķis",
    category: "ligavu",
    price: 9500,
    image: "/img/bw-bride-calla.jpg",
  },
  {
    handle: "rouge",
    title: "Rouge",
    subtitle: "Sarkanais līgavu pušķis",
    category: "ligavu",
    price: 8800,
    image: "/img/noir-roses.jpg",
  },
  {
    handle: "tulips-ring",
    title: "Tulpju Loks",
    subtitle: "Līgavu tulpju aplis",
    category: "ligavu",
    price: 9800,
    image: "/img/bride-tulips-ring.jpg",
  },
  {
    handle: "olivine",
    title: "Olivine",
    subtitle: "Eikalipta galda kompozīcija",
    category: "kazas",
    price: 24000,
    image: "/img/table-eucalyptus.jpg",
  },
  {
    handle: "ceremonia",
    title: "Ceremonia",
    subtitle: "Baltā kāzu arka",
    category: "kazas",
    price: 32000,
    image: "/img/white-arch.jpg",
  },
  {
    handle: "outdoor-arches",
    title: "Pasāža",
    subtitle: "Āra arku projekts",
    category: "kazas",
    price: 38000,
    image: "/img/outdoor-arches.jpg",
  },
  {
    handle: "draperija",
    title: "Drapērija",
    subtitle: "Zāles drapērijas un gaismas",
    category: "kazas",
    price: 42000,
    image: "/img/drapery-lights.jpg",
  },
  {
    handle: "chiavari",
    title: "Chiavari",
    subtitle: "Krēslu un eju dekors",
    category: "kazas",
    price: 12000,
    image: "/img/chairs.jpg",
  },
  {
    handle: "venue-drape",
    title: "Venue Drape",
    subtitle: "Telpas drapējums",
    category: "kazas",
    price: 28000,
    image: "/img/venue-drape.jpg",
  },
  {
    handle: "s-paka",
    title: "Paka S",
    subtitle: "Dāvanu paka — mazā",
    category: "kastes",
    price: 4500,
    image: "/img/s-paka.jpg",
  },
  {
    handle: "xs-paka",
    title: "Paka XS",
    subtitle: "Dāvanu paka — miniatūra",
    category: "kastes",
    price: 2800,
    image: "/img/xs-paka.jpg",
  },
];

export function getProduct(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle);
}

export function byCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}
