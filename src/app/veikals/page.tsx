"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { CATEGORY_LABELS, Category, PRODUCTS } from "@/lib/products";

type Sort = "new" | "asc" | "desc";

const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "Visi" },
  { id: "puski", label: CATEGORY_LABELS.puski },
  { id: "ligavu", label: CATEGORY_LABELS.ligavu },
  { id: "kastes", label: CATEGORY_LABELS.kastes },
  { id: "kazas", label: CATEGORY_LABELS.kazas },
];

export default function ShopPage() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const [sort, setSort] = useState<Sort>("new");

  const items = useMemo(() => {
    let list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
    if (sort === "asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, sort]);

  return (
    <>
      <section className="shop-hero">
        <div>
          <p className="shop-hero__crumb">
            <Link href="/">Sākums</Link> / Veikals
          </p>
          <h1 data-reveal>Sezonas <em>izlase</em>, gatava aiziet šovakar.</h1>
        </div>
        <p className="shop-hero__count" data-reveal>
          <span className="big">{items.length}</span>
          darbi pieejami
        </p>
      </section>

      <div className="shop-bar">
        <div className="shop-bar__cats">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={cat === f.id ? "on" : ""}
              onClick={() => setCat(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="shop-bar__sort">
          <span>Kārtot</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="new">Jaunākie</option>
            <option value="asc">Cena ↑</option>
            <option value="desc">Cena ↓</option>
          </select>
        </label>
      </div>

      <section className="shop-grid">
        {items.map((p) => <ProductCard key={p.handle} p={p} />)}
      </section>

      <section className="sub-pitch">
        <div data-reveal>
          <h3>Kāzas un lielāki projekti</h3>
          <p>
            Sarunās uzbūvējam pilnu noformējuma plānu — no līgavas pušķa līdz
            zāles drapējumam un āra arkām.
          </p>
          <Link href="/kontakti" className="btn btn--ghost">Pieteikt sarunu</Link>
        </div>
        <div className="sub-pitch__img" data-reveal />
      </section>
    </>
  );
}
