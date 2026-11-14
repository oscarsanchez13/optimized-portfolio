"use client";
import { motion } from "framer-motion";
import { experience, disciplines } from "@/data/profile";

const label = (key: string) => disciplines.find((d) => d.key === key)?.title ?? key;

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <h2 className="section-title text-4xl font-bold text-center mb-12">Experience</h2>
        <ol className="relative border-l border-emerald-400/30 ml-3">
          {experience.map((r, i) => (
            <motion.li
              key={`${r.company}-${r.start}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="mb-10 ml-8"
            >
              <span className="absolute -left-[9px] mt-1.5 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <div className="glass-strong border border-emerald-400/20 rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold">{r.title}</h3>
                  <span className="text-sm text-emerald-300">{r.start} — {r.end}</span>
                </div>
                <p className="text-slate-300 font-semibold mb-3">{r.company}</p>
                <p className="text-sm text-slate-300 mb-3">{r.summary}</p>
                <ul className="text-sm text-slate-200 space-y-1.5 mb-4">
                  {r.highlights.map((h) => <li key={h}>▸ {h}</li>)}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((t) => <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-400/40 text-emerald-300">{label(t)}</span>)}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
