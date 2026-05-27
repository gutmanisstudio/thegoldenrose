"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useUI } from "@/context/UIContext";
import { NAV_LINKS } from "./Nav";

export default function NavSheet() {
  const { navOpen, closeNav } = useUI();
  const pathname = usePathname();

  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeNav();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [navOpen, closeNav]);

  return (
    <div className={`nav-sheet ${navOpen ? "open" : ""}`} aria-hidden={!navOpen}>
      <div className="nav-sheet__top">
        <span className="nav-sheet__brand">The Golden Rose</span>
        <button
          type="button"
          className="nav-sheet__close"
          aria-label="Aizvērt"
          onClick={closeNav}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
        </button>
      </div>

      <nav className="nav-sheet__links">
        {NAV_LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav-sheet__link"
            aria-current={pathname === l.href ? "page" : undefined}
            onClick={closeNav}
          >
            <span className="nav-sheet__link-n">0{i + 1}</span>
            <span className="nav-sheet__link-t">{l.label}</span>
          </Link>
        ))}
      </nav>

      <div className="nav-sheet__foot">
        <div>
          <span className="nav-sheet__foot-l">Studija</span>
          <span className="nav-sheet__foot-v">Rīgas iela 14, Jelgava</span>
        </div>
        <div>
          <span className="nav-sheet__foot-l">E-pasts</span>
          <span className="nav-sheet__foot-v">studija@thegoldenrose.lv</span>
        </div>
        <div>
          <span className="nav-sheet__foot-l">Telefons</span>
          <span className="nav-sheet__foot-v">+371 27 772 200</span>
        </div>
      </div>
    </div>
  );
}
