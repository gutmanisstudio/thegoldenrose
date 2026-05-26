# The Golden Rose

Editorial florist & event-decoration storefront for **The Golden Rose** (Jelgava, Latvia).

Built with **Next.js 15 (App Router) + React 19 + Tailwind v4**. Designed as a temporary showcase build — will be ported to **Shopify Hydrogen** once the catalog & Storefront API are wired in.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS v4 + custom CSS tokens (faithful port of the design handoff)
- Local mock product data in `src/lib/products.ts` (swap for Shopify Storefront API later)
- Cart state via a small React context (swap for `useCart()` from Hydrogen later)

## Routes

| Path | Page |
|---|---|
| `/` | Home (hero, collections, signature bouquets, decorating, process, journal) |
| `/veikals` | Shop — filter + sort + product grid |
| `/produkts/[handle]` | Product detail |
| `/par-mums` | About / story |
| `/kontakti` | Contact form + studio hours |
| `/buj` | FAQ (accordion + tag filter) |

## Dev

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Vercel-ready. Push to GitHub, import in Vercel — no env vars required for the showcase build.

## Migrating to Hydrogen (later)

- Replace `src/lib/products.ts` with Storefront API queries
- Swap the cart context in `src/context/CartContext.tsx` for `useCart()` / `<CartProvider>`
- Replace `next/image` with Hydrogen's `<Image>` and prices with `<Money>`
- Move routes from `src/app/*` to `app/routes/*` in the Hydrogen template
