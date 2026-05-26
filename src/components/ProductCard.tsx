import Image from "next/image";
import Link from "next/link";
import { Product, CATEGORY_LABELS } from "@/lib/products";
import { formatEUR } from "@/lib/format";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/produkts/${p.handle}`} className="pcard" data-reveal>
      <div className="pcard__media">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        {p.tag && <span className="pcard__tag">{p.tag}</span>}
        <div className="pcard__quick">
          <button type="button" tabIndex={-1}>Apskatīt</button>
        </div>
      </div>
      <p className="pcard__meta">{CATEGORY_LABELS[p.category]}</p>
      <div className="pcard__row">
        <h3 className="pcard__name">{p.title}</h3>
        <span className="pcard__price">{formatEUR(p.price)}</span>
      </div>
      {p.subtitle && <p className="pcard__meta">{p.subtitle}</p>}
    </Link>
  );
}
