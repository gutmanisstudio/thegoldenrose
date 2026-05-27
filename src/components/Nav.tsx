"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";

export const NAV_LINKS = [
  { href: "/veikals", label: "Veikals" },
  { href: "/par-mums", label: "Par mums" },
  { href: "/kontakti", label: "Kontakti" },
  { href: "/buj", label: "BUJ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lineCount, openDrawer } = useCart();
  const { navOpen, toggleNav } = useUI();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="nav__brand" aria-label="The Golden Rose">
        <Image
          className="nav__brand-mark"
          src="/img/logo-mark.png"
          alt=""
          width={36}
          height={36}
        />
        <span className="nav__brand-text">The Golden Rose</span>
      </Link>

      <nav className="nav__links" aria-label="Galvenā navigācija">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav__link"
            aria-current={pathname === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="nav__right">
        <a className="nav__phone" href="tel:+37127772200">+371 27 772 200</a>
        <button
          type="button"
          className="nav__cart"
          onClick={openDrawer}
          aria-label={`Grozs (${lineCount})`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 7h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7Z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
          {lineCount > 0 && <span className="nav__cart-badge">{lineCount}</span>}
        </button>
        <button
          type="button"
          className="nav__burger"
          onClick={toggleNav}
          aria-label="Izvēlne"
          aria-expanded={navOpen}
        >
          <span className="nav__burger-bars">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
