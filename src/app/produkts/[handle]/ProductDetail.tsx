"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { formatEUR } from "@/lib/format";
import { CATEGORY_LABELS, Product } from "@/lib/products";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const gallery = product.gallery ?? [product.image];
  const [activeImg, setActiveImg] = useState(gallery[0]);
  const [sizeId, setSizeId] = useState(product.sizes?.[0]?.id);
  const [colorId, setColorId] = useState(product.colors?.[0]?.id);
  const [addons, setAddons] = useState<string[]>([]);
  const [qty, setQty] = useState(1);
  const { addLine } = useCart();

  const size = product.sizes?.find((s) => s.id === sizeId);
  const color = product.colors?.find((c) => c.id === colorId);
  const unitPrice = size?.price ?? product.price;
  const addonObjs = (product.addons ?? []).filter((a) => addons.includes(a.id));
  const lineTotal = useMemo(
    () => (unitPrice + addonObjs.reduce((a, b) => a + b.price, 0)) * qty,
    [unitPrice, addonObjs, qty],
  );

  const toggleAddon = (id: string) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const handleAdd = () =>
    addLine({
      id: [product.handle, sizeId, colorId, addons.join("_")].filter(Boolean).join("|"),
      handle: product.handle,
      title: product.title,
      image: product.image,
      unitPrice,
      qty,
      sizeLabel: size?.label,
      colorLabel: color?.label,
      addons: addonObjs,
    });

  return (
    <>
      <section className="pd">
        <nav className="pd__crumb" aria-label="Breadcrumbs">
          <Link href="/">Sākums</Link> / <Link href="/veikals">Veikals</Link> / {product.title}
        </nav>

        <div className="pd__gal">
          <div className="pd__thumbs">
            {gallery.map((src) => (
              <button
                key={src}
                type="button"
                className={activeImg === src ? "on" : ""}
                onClick={() => setActiveImg(src)}
                aria-label="Skats"
              >
                <Image src={src} alt="" width={84} height={84} />
              </button>
            ))}
          </div>
          <div className="pd__main">
            <Image src={activeImg} alt={product.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" />
            {product.tag && <span className="badge">{product.tag}</span>}
          </div>
        </div>

        <div className="pd__info">
          <p className="pd__cat">{CATEGORY_LABELS[product.category]}</p>
          <h1 className="pd__title">{product.title}</h1>
          {product.subtitle && <p className="pd__sub">{product.subtitle}</p>}

          <div className="pd__price-row">
            <p className="pd__price">
              <span className="pd__price__cur">EUR</span>
              {(unitPrice / 100).toFixed(2).replace(".", ",")}
            </p>
            <span className="pd__stock">Pieejams</span>
          </div>

          <div className="pd__opts">
            {product.sizes && (
              <div>
                <div className="pd__opt-h"><span>Izmērs</span><span>Izvēlies</span></div>
                <div className="pd__sizes">
                  {product.sizes.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`pd__size ${sizeId === s.id ? "on" : ""}`}
                      onClick={() => setSizeId(s.id)}
                    >
                      <span className="pd__size__name">{s.label}</span>
                      <span className="pd__size__price">{formatEUR(s.price)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div>
                <div className="pd__opt-h"><span>Krāsa</span><span>{color?.label}</span></div>
                <div className="pd__colors">
                  {product.colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`pd__color ${colorId === c.id ? "on" : ""}`}
                      style={{ background: c.swatch }}
                      onClick={() => setColorId(c.id)}
                      aria-label={c.label}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.addons && (
              <div>
                <div className="pd__opt-h"><span>Papildinājumi</span><span>Brīvi</span></div>
                <div style={{ display: "grid", gap: 10 }}>
                  {product.addons.map((a) => (
                    <label key={a.id} className="pd__addon">
                      <input
                        type="checkbox"
                        checked={addons.includes(a.id)}
                        onChange={() => toggleAddon(a.id)}
                      />
                      <div style={{ flex: 1 }}>
                        <strong>{a.label}</strong>
                        <em>+ {formatEUR(a.price)}</em>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pd__add">
            <div className="pd__qty">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="−">−</button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="+">+</button>
            </div>
            <button type="button" className="btn" onClick={handleAdd}>
              Pievienot grozam · {formatEUR(lineTotal)}
            </button>
          </div>

          <div className="pd__notes">
            <div className="pd__note">
              <span className="pd__note__l">Piegāde</span>
              <span className="pd__note__v">Jelgava un Rīga · šodien</span>
            </div>
            <div className="pd__note">
              <span className="pd__note__l">Pasūtījums</span>
              <span className="pd__note__v">24h iepriekš</span>
            </div>
          </div>
        </div>
      </section>

      {product.description && (
        <section className="pd__desc-section">
          <h3>Apraksts</h3>
          <div className="body">
            <p>{product.description}</p>
            {product.ingredients && (
              <div className="pd__ingredients">
                {product.ingredients.map((i, idx) => (
                  <div key={i} className="pd__ingredient">
                    <span>{i}</span>
                    <span>0{idx + 1}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {product.care && (
        <section className="pd__care">
          {product.care.map((c, i) => (
            <div key={c} className="pd__care__col">
              <span className="pd__care__num">0{i + 1}</span>
              <h4 className="pd__care__h">Solis {i + 1}</h4>
              <p className="pd__care__b">{c}</p>
            </div>
          ))}
        </section>
      )}

      {related.length > 0 && (
        <section className="pd__related">
          <h2>Tev varētu <em>patikt</em></h2>
          <div className="pd__related__grid">
            {related.map((p) => <ProductCard key={p.handle} p={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
