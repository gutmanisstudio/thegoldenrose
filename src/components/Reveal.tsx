"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    // Defer one frame so newly-routed DOM is in place before we query it.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)").forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);
  return null;
}
