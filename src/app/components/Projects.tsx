"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight } from "react-icons/fi";
import { caseStudies, disciplines, type CaseStudy } from "@/data/profile";
import CaseVisual from "./CaseVisual";

const label = (key: string) => disciplines.find((d) => d.key === key)?.title ?? key;

function Card({ cs, onOpen }: { cs: CaseStudy; onOpen: () => void }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${cs.name} — open case study`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); }
      }}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      className="relative w-full h-72 md:h-80 cursor-pointer group perspective outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
    >
      <div className={`absolute inset-0 transition-transform duration-500 ease-in-out transform-style-3d group-hover:rotate-y-180 ${flipped ? "rotate-y-180" : ""}`}>
        {/* Front: live illustrative visual */}
        <div className="absolute inset-0 rounded-lg overflow-hidden border border-emerald-500/20 shadow-lg shadow-emerald-500/10 backface-hidden">
          <CaseVisual kind={cs.visual} />
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 className="text-lg font-semibold text-white">{cs.name}</h3>
            <p className="text-xs text-slate-300 line-clamp-1">{cs.tagline}</p>
          </div>
        </div>
        {/* Back: summary */}
        <div className="absolute inset-0 rounded-lg p-5 flex flex-col bg-gray-950 border border-emerald-400/30 glow-primary rotate-y-180 backface-hidden">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">{cs.name}</h3>
          <p className="text-sm text-slate-200 mb-3">{cs.tagline}</p>
          <ul className="text-xs text-slate-300 space-y-1 mb-auto">
            {cs.impact.map((i) => <li key={i}>▸ {i}</li>)}
          </ul>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {cs.disciplines.map((d) => <span key={d} className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/40 text-emerald-300">{label(d)}</span>)}
          </div>
          <span className="text-sm font-semibold text-white flex items-center gap-1">Read the case study <FiArrowRight /></span>
        </div>
      </div>
    </div>
  );
}

function Detail({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        role="dialog" aria-modal="true" aria-labelledby="cs-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-emerald-400/30 bg-gray-950"
        initial={{ y: 30, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 30, scale: 0.97 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-black/60 hover:bg-black text-white"><FiX size={20} /></button>
        <div className="relative h-56 md:h-72"><CaseVisual kind={cs.visual} /></div>
        <div className="p-6 md:p-8 text-white">
          <h3 id="cs-title" className="text-2xl md:text-3xl font-bold mb-1">{cs.name}</h3>
          <p className="text-emerald-300 mb-6">{cs.tagline}</p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="uppercase tracking-wider text-xs text-slate-400 mb-2">The problem</h4>
              <p className="text-slate-200 mb-5">{cs.problem}</p>
              <h4 className="uppercase tracking-wider text-xs text-slate-400 mb-2">Impact</h4>
              <ul className="space-y-1.5 text-slate-200">{cs.impact.map((i) => <li key={i}>▸ {i}</li>)}</ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wider text-xs text-slate-400 mb-2">What I built</h4>
              <ul className="space-y-1.5 text-slate-200">{cs.built.map((b) => <li key={b}>▸ {b}</li>)}</ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {cs.stack.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-white/10">{s}</span>)}
            {cs.disciplines.map((d) => <span key={d} className="text-xs px-2.5 py-1 rounded-md border border-emerald-400/40 text-emerald-300">{label(d)}</span>)}
          </div>
          <p className="text-[11px] text-slate-500 mt-6">Screens are illustrative recreations with sample data.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(6);
  const [open, setOpen] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="section-title text-4xl font-bold text-center mb-3">Selected Work</h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">Platforms that run real businesses — finance, operations, marketing and AI. Hover or tap a card for the impact.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.slice(0, visible).map((cs) => <Card key={cs.slug} cs={cs} onOpen={() => setOpen(cs)} />)}
          {visible < caseStudies.length && (
            <button
              onClick={() => setVisible(caseStudies.length)}
              className="flex items-center justify-center glass-strong border border-emerald-400/30 glow-hover text-white w-full h-72 md:h-80 rounded-lg text-xl font-semibold"
            >
              View More Work <span className="text-2xl ml-2">+</span>
            </button>
          )}
        </div>
      </div>
      <AnimatePresence>{open && <Detail cs={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
