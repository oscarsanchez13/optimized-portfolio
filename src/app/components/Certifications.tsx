"use client";
import { useEffect, useState } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { certifications, certCategories, type Certification, type CertCategory } from "@/data/profile";
import s from "./CertificateWall.module.css";
import SectionHeading from "./SectionHeading";

const sealColor: Record<CertCategory, string> = {
  leadership: "#b8862b",
  technology: "#0f9f74",
  operations: "#7a3e16",
  growth: "#4b5563",
};

function Seal({ color }: { color: string }) {
  const points = Array.from({ length: 24 }, (_, i) => {
    const r = i % 2 ? 15 : 19;
    const a = (i / 24) * Math.PI * 2;
    return `${(20 + r * Math.cos(a)).toFixed(2)},${(20 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 40 40" className="w-[18%] max-w-[46px] drop-shadow" aria-hidden>
      <polygon points={points} fill={color} />
      <circle cx="20" cy="20" r="11" fill="none" stroke="#fff8" strokeWidth="1" />
      <path d="M14 20.5l4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Paper({ c, large = false }: { c: Certification; large?: boolean }) {
  const heading = c.kind === "degree" ? "Diploma" : c.kind === "license" ? "License" : "Certificate";
  return (
    <div className={`${s.paper} flex flex-col items-center justify-center text-center px-[8%]`}>
      <div className={`${s.serif} uppercase tracking-[0.25em] ${large ? "text-xs" : "text-[6px] sm:text-[8px]"} text-amber-900/70 mb-[3%] sm:mb-0`}>{c.earned ? <>{heading}<span className={large ? "" : "hidden sm:inline"}> of Achievement</span></> : <span className="inline-block rounded-full bg-amber-500 px-[0.8em] py-[0.15em] font-sans font-bold tracking-widest text-black">In progress</span>}</div>
      <div className={`${s.script} ${large ? "text-lg" : "hidden sm:block text-[11px]"} text-amber-900/80 mt-0.5`}>awarded to</div>
      <div className={`${s.serif} font-bold ${large ? "text-2xl" : "hidden sm:block text-sm"} leading-tight`}>Oscar Sanchez</div>
      <div className={`h-px w-2/3 bg-amber-900/30 my-[3%] ${large ? "" : "hidden sm:block"}`} />
      <div className={`${s.serif} ${large ? "text-xl" : "text-[10px] sm:text-xs"} font-semibold leading-tight sm:leading-snug line-clamp-3`}>{c.title}</div>
      <div className={`${large ? "text-sm" : "text-[7px] sm:text-[9px]"} text-stone-600 mt-[2%] px-[16%] leading-tight`}>{[c.issuer, c.earned ? c.year : c.target ? `Target ${c.target}` : undefined].filter(Boolean).join(" · ")}</div>
      <div className="absolute bottom-[7%] right-[7%] w-full flex justify-end"><Seal color={sealColor[c.category]} /></div>
    </div>
  );
}

function Frame({ c, i, onOpen }: { c: Certification; i: number; onOpen: () => void }) {
  const tilt = [-1.4, 0.9, -0.6, 1.2, -1, 0.5][i % 6];
  return (
    <div className={s.hang}>
      <span className={s.wire} aria-hidden />
      <span className={s.nail} aria-hidden />
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${c.title}${c.issuer ? `, ${c.issuer}` : ""}${c.earned ? (c.year ? `, ${c.year}` : "") : `, in progress, target ${c.target}`} — view certificate`}
        className={`${s.frame} ${s[c.category]} block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
        style={{ ["--tilt" as string]: `${tilt}deg` }}
      >
        <div className={s.mat}><Paper c={c} /></div>
      </button>
    </div>
  );
}

function Viewer({ c, onClose }: { c: Certification; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={c.title} className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end mb-2">
          <button onClick={onClose} aria-label="Close" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white"><FiX size={20} /></button>
        </div>
        <div className={`${s.frame} ${s[c.category]}`} style={{ ["--tilt" as string]: "0deg" }}>
          <div className={s.mat}><Paper c={c} large /></div>
        </div>
        {c.verifyUrl && (
          <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 text-sm font-semibold">
            Verify this credential <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}

// The live site shows earned credentials only; local previews also show ones in progress.
const visible = certifications.filter((c) => c.earned || Boolean(c.target));

export default function Certifications({ items = visible }: { items?: Certification[] }) {
  const [open, setOpen] = useState<Certification | null>(null);
  const rows = certCategories
    .map((cat) => ({ ...cat, items: items.filter((c) => c.category === cat.key) }))
    .filter((r) => r.items.length > 0);

  return (
    <section id="certifications" className={`${s.wall} py-14 md:py-20 text-white`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="05 / Credentials" title="Credentials" lead="Leadership, operations, growth and technology — the training behind the work." />
        <div className="space-y-12 md:space-y-16">
          {rows.map((row) => (
            <div key={row.key}>
              <div className="flex justify-center mb-6">
                <div className={`${s.plaque} ${s.serif} rounded-sm px-4 py-1.5 text-center`}>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">{row.label}</div>
                  <div className="text-[10px] opacity-80 hidden sm:block">{row.blurb}</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 sm:gap-x-8 sm:gap-y-12">
                {row.items.map((c, i) => (
                  <div key={c.title} className="w-[calc(50%-10px)] sm:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] max-w-[300px]">
                    <Frame c={c} i={i} onOpen={() => setOpen(c)} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {open && <Viewer c={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
