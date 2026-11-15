"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { metrics, type Metric } from "@/data/profile";

function Counter({ m, start }: { m: Metric; start: boolean }) {
  // Server HTML carries the real number; the count-up is a client-only flourish.
  const [n, setN] = useState(m.value);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame += 1;
      setN((m.value * frame) / total);
      if (frame >= total) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [start, m.value]);
  return <span>{m.prefix}{n.toLocaleString("en-US", { minimumFractionDigits: m.decimals ?? 0, maximumFractionDigits: m.decimals ?? 0 })}{m.suffix}</span>;
}

export default function Impact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="impact" ref={ref} aria-label="Impact" className="relative z-10 border-y border-emerald-400/20 bg-black/80 py-10 md:py-14">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-2 px-5 sm:px-8 md:grid-cols-4 lg:px-8">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col-reverse items-center px-2 py-4 text-center md:py-2">
            <dt className="mt-1 max-w-[16ch] text-xs leading-snug text-slate-300 md:text-sm">{m.label}</dt>
            <dd className="neon-number text-4xl font-bold tabular-nums text-emerald-400 md:text-5xl">
              <Counter m={m} start={inView} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
