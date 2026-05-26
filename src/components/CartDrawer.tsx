"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatEUR } from "@/lib/format";

export default function CartDrawer() {
  const { open, closeDrawer, lines, total, updateQty, removeLine } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDrawer();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeDrawer]);

  return (
    <>
      <div
        className={`cd-backdrop ${open ? "open" : ""}`}
        onClick={closeDrawer}
        aria-hidden
      />
      <aside className={`cd ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Grozs">
        <div className="cd__top">
          <h3>Grozs</h3>
          <button type="button" className="cd__close" onClick={closeDrawer} aria-label="Aizvērt">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="cd__lines">
            <p className="cd__empty">Tavs grozs ir tukšs.</p>
          </div>
        ) : (
          <div className="cd__lines">
            {lines.map((l) => {
              const addonsSum = l.addons?.reduce((a, b) => a + b.price, 0) ?? 0;
              return (
                <article key={l.id} className="cd-line">
                  <Image src={l.image} alt={l.title} width={80} height={100} />
                  <div>
                    <p className="cd-line__n">{l.title}</p>
                    {(l.sizeLabel || l.colorLabel) && (
                      <p className="cd-line__meta">
                        {[l.sizeLabel, l.colorLabel].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {l.addons && l.addons.length > 0 && (
                      <p className="cd-line__meta">+ {l.addons.map((a) => a.label).join(", ")}</p>
                    )}
                    <div className="cd-line__qty">
                      <button type="button" onClick={() => updateQty(l.id, l.qty - 1)} aria-label="Mazāk">−</button>
                      <span>{l.qty}</span>
                      <button type="button" onClick={() => updateQty(l.id, l.qty + 1)} aria-label="Vairāk">+</button>
                    </div>
                    <button type="button" className="cd-line__rm" onClick={() => removeLine(l.id)}>
                      Noņemt
                    </button>
                  </div>
                  <span className="cd-line__price">{formatEUR((l.unitPrice + addonsSum) * l.qty)}</span>
                </article>
              );
            })}
          </div>
        )}

        <div className="cd__foot">
          <div className="cd__total">
            <span>Kopā</span>
            <b>{formatEUR(total)}</b>
          </div>
          <button type="button" className="btn" disabled={lines.length === 0}>
            Doties uz kasi
          </button>
        </div>
      </aside>
    </>
  );
}
