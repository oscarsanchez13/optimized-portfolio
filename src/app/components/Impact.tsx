"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { metrics, type Metric } from "@/data/profile";

function Counter({ m, start }: { m: Metric; start: boolean }) {
  const [n, setN] = useState(m.value);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(m.value); return; }
    setN(0);
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame += 1;
      setN(Math.round((m.value * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [start, m.value]);
  return <span>{m.prefix}{n.toLocaleString()}{m.suffix}</span>;
}

export default function Impact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section ref={ref} aria-label="Impact" className="relative z-10 bg-black/80 border-y border-emerald-400/20 py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 neon-number"><Counter m={m} start={inView} /></div>
            <div className="text-xs md:text-sm text-slate-300 mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
