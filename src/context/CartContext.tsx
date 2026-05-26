"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";

export type CartLine = {
  id: string; // composite handle+size+color
  handle: string;
  title: string;
  image: string;
  unitPrice: number; // cents
  qty: number;
  sizeLabel?: string;
  colorLabel?: string;
  addons?: { id: string; label: string; price: number }[];
};

type CartState = {
  lines: CartLine[];
  open: boolean;
  lineCount: number;
  total: number;
  openDrawer: () => void;
  closeDrawer: () => void;
  addLine: (line: Omit<CartLine, "qty"> & { qty?: number }) => void;
  removeLine: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  const addLine: CartState["addLine"] = useCallback((line) => {
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.id === line.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + (line.qty ?? 1) };
        return next;
      }
      return [...prev, { ...line, qty: line.qty ?? 1 }];
    });
    setOpen(true);
  }, []);

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: Math.max(0, qty) } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const { lineCount, total } = useMemo(() => {
    let count = 0;
    let sum = 0;
    for (const l of lines) {
      count += l.qty;
      const addonsSum = (l.addons ?? []).reduce((a, b) => a + b.price, 0);
      sum += (l.unitPrice + addonsSum) * l.qty;
    }
    return { lineCount: count, total: sum };
  }, [lines]);

  const value: CartState = {
    lines,
    open,
    lineCount,
    total,
    openDrawer,
    closeDrawer,
    addLine,
    removeLine,
    updateQty,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
