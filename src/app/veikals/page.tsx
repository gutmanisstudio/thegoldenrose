"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { CATEGORY_LABELS, Category, PRODUCTS } from "@/lib/products";

type Sort = "featured" | "asc" | "desc" | "new";

const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "Visi" },
  { id: "puski", label: CATEGORY_LABELS.puski },
  { id: "ligavu", label: CATEGORY_LABELS.ligavu },
  { id: "kastes", label: "Ziedu kastes" },
  { id: "kazas", label: "Kāzas un pasākumi" },
];

export default function ShopPage() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const [sort, setSort] = useState<Sort>("featured");

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
            <Link href="/">Sākums</Link> — Veikals
          </p>
          <h1 data-reveal>Veikals <em>—</em><br />visi pušķi</h1>
        </div>
        <p className="shop-hero__count" data-reveal>
          <span className="big">{items.length}</span>
          <span>preces krājumā</span>
          <br />
          <span>atjaunots šodien</span>
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
            <option value="featured">Izvēlēti</option>
            <option value="asc">Cena augoši</option>
            <option value="desc">Cena dilstoši</option>
            <option value="new">Jaunākie</option>
          </select>
        </label>
      </div>

      <section className="shop-grid">
        {items.map((p) => <ProductCard key={p.handle} p={p} />)}
      </section>

      <section className="sub-pitch">
        <div data-reveal>
          <span className="eyebrow">— Jaunums —</span>
          <h3 style={{ marginTop: 12 }}>Ziedu abonements <em>—</em><br />katru nedēļu pie tevis.</h3>
          <p>
            Reizi nedēļā mēs piegādājam tev svaigus, ar roku veidotus pušķus. XS, S, M izmēri.
            Atceļ jebkurā laikā.
          </p>
          <Link href="/kontakti" className="btn">Pierakstīties <span className="arr">→</span></Link>
        </div>
        <div className="sub-pitch__img" data-reveal />
      </section>
    </>
  );
}
