"use client";
import { useEffect } from "react";

/**
 * Progressive scroll reveal for any element with the `reveal` class.
 * The server HTML is always fully visible; this only hides blocks that are
 * still below the fold once the browser proves it can bring them back.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const fold = window.innerHeight * 0.95;
    // Anything already on screen (or scrolled past) stays visible — no flash.
    for (const el of els) {
      if (el.getBoundingClientRect().top < fold) el.classList.add("is-in");
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Also reveal blocks a fast scroll or anchor jump carried past the viewport.
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.filter((el) => !el.classList.contains("is-in")).forEach((el) => io.observe(el));
    document.documentElement.classList.add("reveal-ready");

    return () => {
      io.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
  return null;
}
