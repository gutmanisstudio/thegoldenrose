import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return {};
  return {
    title: `${product.title} — The Golden Rose`,
    description: product.subtitle ?? product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.handle !== product.handle,
  ).slice(0, 4);

  return <ProductDetail product={product} related={related} />;
}
