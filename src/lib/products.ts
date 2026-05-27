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
  imageHover?: string;
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
    subtitle: "N°01 · Maigs",
    category: "puski",
    price: 4800,
    image: "/img/pink-bouquet-candle.jpg",
    imageHover: "/img/pink-purple-bouquet.jpg",
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
    tag: "Jauns",
  },
  {
    handle: "fuchsia-noir",
    title: "Fuchsia Noir",
    subtitle: "N°03 · Drosmīgs",
    category: "puski",
    price: 7500,
    image: "/img/pink-purple-bouquet.jpg",
    imageHover: "/img/noir-roses.jpg",
    gallery: ["/img/pink-purple-bouquet.jpg", "/img/noir-roses.jpg"],
    description:
      "Dramatisks pušķis ar dziļi fuksiju peonijām un tumšiem zariem — vakara svinībām un teātra naktīm.",
    sizes: [
      { id: "m", label: "M", price: 7500 },
      { id: "l", label: "L", price: 10500 },
    ],
    tag: "Limited",
  },
  {
    handle: "hydrangea-bleu",
    title: "Hydrangea Bleu",
    subtitle: "N°02 · Klusums",
    category: "kastes",
    price: 6200,
    image: "/img/blue-hydrangea-box.jpg",
    imageHover: "/img/white-roses-closeup.jpg",
  },
  {
    handle: "jaunmala-blanc",
    title: "Jaunmala Blanc",
    subtitle: "N°04 · Tīrs",
    category: "puski",
    price: 5500,
    image: "/img/white-roses-closeup.jpg",
    imageHover: "/img/bride-peony.jpg",
  },
  {
    handle: "perla",
    title: "Perla",
    subtitle: "Līgavu pušķis · Pilnīgs",
    category: "ligavu",
    price: 12000,
    image: "/img/bride-peony.jpg",
    imageHover: "/img/bride-tulips-ring.jpg",
  },
  {
    handle: "calla",
    title: "Calla Lily",
    subtitle: "Līgavu pušķis · Minimālisms",
    category: "ligavu",
    price: 9500,
    image: "/img/bride-tulips-ring.jpg",
    imageHover: "/img/white-roses-closeup.jpg",
    tag: "Sezonas",
  },
  {
    handle: "rouge",
    title: "Rouge Profond",
    subtitle: "N°05 · Dramatisks",
    category: "puski",
    price: 8800,
    image: "/img/noir-roses.jpg",
    imageHover: "/img/pink-purple-bouquet.jpg",
  },
  {
    handle: "olivine",
    title: "Olivine",
    subtitle: "Arka · uz 4 personām",
    category: "kazas",
    price: 24000,
    image: "/img/white-arch.jpg",
    imageHover: "/img/outdoor-arches.jpg",
  },
  {
    handle: "ceremonia",
    title: "Ceremonia Blanc",
    subtitle: "Komplekts · 2 statīvi",
    category: "kazas",
    price: 32000,
    image: "/img/outdoor-arches.jpg",
    imageHover: "/img/white-arch.jpg",
  },
  {
    handle: "banketo",
    title: "Banketo",
    subtitle: "Galda dekors · uz galdiem",
    category: "kazas",
    price: 18500,
    image: "/img/table-eucalyptus.jpg",
    imageHover: "/img/venue-interior.jpg",
  },
  {
    handle: "velvet-rose",
    title: "Velvet Rose",
    subtitle: "Kaste · L izmērs",
    category: "kastes",
    price: 7800,
    image: "/img/pink-purple-bouquet.jpg",
    imageHover: "/img/pink-bouquet-candle.jpg",
  },
  {
    handle: "draperija",
    title: "Drapērija",
    subtitle: "Pakaramie un gaismas",
    category: "kazas",
    price: 42000,
    image: "/img/drapery-lights.jpg",
    imageHover: "/img/venue-drape.jpg",
  },
  {
    handle: "chiavari",
    title: "Chiavari",
    subtitle: "Krēslu noma · gab.",
    category: "kazas",
    price: 12000,
    image: "/img/chairs.jpg",
    imageHover: "/img/venue-interior.jpg",
  },
  {
    handle: "orchid-box",
    title: "Orchid Box",
    subtitle: "Kaste · S izmērs",
    category: "kastes",
    price: 9500,
    image: "/img/blue-hydrangea-box.jpg",
    imageHover: "/img/white-roses-closeup.jpg",
    tag: "Jauns",
  },
];

export function getProduct(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle);
}

export function byCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}
