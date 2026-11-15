"use client";
import { useEffect, useState } from "react";
import { hero } from "@/data/profile";

const roles = hero.roles;

/**
 * Types and deletes each role in turn. The full list is always in the DOM for
 * screen readers and crawlers; the animated text is decorative.
 */
export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (still) return;
    const word = roles[index];
    let delay = deleting ? 45 : 95;
    if (!deleting && count === word.length) delay = 2600;
    const t = setTimeout(() => {
      if (!deleting && count === word.length) setDeleting(true);
      else if (deleting && count === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else setCount((c) => c + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [count, deleting, index, still]);

  const text = still ? roles[0] : roles[index].slice(0, count);

  return (
    <span className="font-semibold text-emerald-400">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden>
        {text}
        <span className="blinker">|</span>
      </span>
    </span>
  );
}
