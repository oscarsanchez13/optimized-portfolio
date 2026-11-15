"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight, FiPlus } from "react-icons/fi";
import { caseStudies, disciplines, type CaseStudy } from "@/data/profile";
import CaseVisual from "./CaseVisual";
import SectionHeading from "./SectionHeading";

const label = (key: string) => disciplines.find((d) => d.key === key)?.title ?? key;

/**
 * Mouse/trackpad: hover (or keyboard focus) flips the card to the summary; click opens the detail.
 * Touch: there is no hover, so the front already shows the key impact and a tap opens the detail.
 */
function Card({ cs, onOpen }: { cs: CaseStudy; onOpen: (el: HTMLElement) => void }) {
  return (
    <li className="reveal">
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`${cs.name}: open case study`}
        onClick={(e) => onOpen(e.currentTarget)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(e.currentTarget); }
        }}
        className="flip-card perspective relative block h-[20rem] cursor-pointer w-full rounded-xl text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:h-80"
      >
        <div className="flip-inner transform-style-3d absolute inset-0 transition-transform duration-500 ease-in-out">
          {/* Front: live illustrative visual */}
          <div className="backface-hidden absolute inset-0 overflow-hidden rounded-xl border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
            <CaseVisual kind={cs.visual} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-10">
              <h3 className="text-lg font-semibold leading-snug text-white">{cs.name}</h3>
              <p className="mt-0.5 line-clamp-2 text-sm text-slate-300 [@media(hover:hover)_and_(pointer:fine)]:line-clamp-1 [@media(hover:hover)_and_(pointer:fine)]:text-xs">{cs.tagline}</p>
              {/* Touch only: the impact you'd otherwise see on the flip side */}
              <p className="mt-2 flex items-end justify-between gap-3 text-sm font-medium leading-snug text-emerald-300 [@media(hover:hover)_and_(pointer:fine)]:hidden">
                <span className="line-clamp-2">▸ {cs.impact[0]}</span>
                <span className="flex flex-shrink-0 items-center gap-1 text-xs font-semibold text-white">Read <FiArrowRight aria-hidden /></span>
              </p>
            </div>
          </div>
          {/* Back: summary (hover devices only ever see this) */}
          <div className="backface-hidden glow-primary absolute inset-0 flex rotate-y-180 flex-col rounded-xl border border-emerald-400/30 bg-gray-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-emerald-400">{cs.name}</h3>
            <p className="mb-3 text-sm text-slate-200">{cs.tagline}</p>
            <ul className="mb-auto space-y-1 text-xs text-slate-300">
              {cs.impact.map((i) => <li key={i}>▸ {i}</li>)}
            </ul>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {cs.disciplines.map((d) => <span key={d} className="rounded-full border border-emerald-400/40 px-2 py-0.5 text-[10px] text-emerald-300">{label(d)}</span>)}
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-white">Read the case study <FiArrowRight aria-hidden /></span>
          </div>
        </div>
      </div>
    </li>
  );
}

function Detail({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Keep Tab inside the dialog.
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    const html = document.documentElement;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-title"
        className="relative h-[100dvh] w-full overflow-y-auto overscroll-contain bg-gray-950 sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl sm:border sm:border-emerald-400/30"
        initial={{ y: 40, opacity: 0.6 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky bar so Close is always one thumb away */}
        <div
          className="sticky top-0 z-20 flex items-center gap-3 border-b border-white/10 bg-gray-950/90 px-4 pb-2 backdrop-blur-md sm:px-5"
          style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}
        >
          <p className="eyebrow truncate">Case study</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <FiX size={22} />
          </button>
        </div>
        <div className="relative h-52 sm:h-72"><CaseVisual kind={cs.visual} /></div>
        <div className="px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 text-white sm:p-8">
          <h3 id="cs-title" className="mb-1 text-2xl font-bold leading-tight md:text-3xl">{cs.name}</h3>
          <p className="mb-6 text-emerald-300">{cs.tagline}</p>
          <div className="grid gap-6 text-[15px] leading-relaxed md:grid-cols-2 md:text-sm">
            <div>
              <h4 className="mb-2 text-xs uppercase tracking-wider text-slate-400">The problem</h4>
              <p className="mb-5 text-slate-200">{cs.problem}</p>
              <h4 className="mb-2 text-xs uppercase tracking-wider text-slate-400">Impact</h4>
              <ul className="space-y-1.5 text-slate-200">{cs.impact.map((i) => <li key={i}>▸ {i}</li>)}</ul>
            </div>
            <div>
              <h4 className="mb-2 text-xs uppercase tracking-wider text-slate-400">What I built</h4>
              <ul className="space-y-1.5 text-slate-200">{cs.built.map((b) => <li key={b}>▸ {b}</li>)}</ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.stack.map((s) => <span key={s} className="rounded-md bg-white/10 px-2.5 py-1 text-xs">{s}</span>)}
            {cs.disciplines.map((d) => <span key={d} className="rounded-md border border-emerald-400/40 px-2.5 py-1 text-xs text-emerald-300">{label(d)}</span>)}
          </div>
          <p className="mt-6 text-[11px] text-slate-500">Screens are illustrative recreations with sample data.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState<CaseStudy | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const list = showAll ? caseStudies : caseStudies.slice(0, 6);

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  return (
    <section id="projects" className="bg-gray-900 py-14 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="03 / Case studies"
          title="Selected Work"
          lead="Platforms that run real businesses — finance, operations, marketing and AI. Hover or tap a card for the impact."
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {list.map((cs) => (
            <Card key={cs.slug} cs={cs} onOpen={(el) => { opener.current = el; setOpen(cs); }} />
          ))}
        </ul>
        {!showAll && caseStudies.length > 6 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="glass-strong glow-hover flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 px-6 font-semibold text-white sm:w-auto"
            >
              View {caseStudies.length - 6} more case studies <FiPlus aria-hidden />
            </button>
          </div>
        )}
      </div>
      {/* Portal to <body>: <main> is its own stacking context and would sit under the navbar */}
      {mounted && createPortal(<AnimatePresence>{open && <Detail key={open.slug} cs={open} onClose={close} />}</AnimatePresence>, document.body)}
    </section>
  );
}
