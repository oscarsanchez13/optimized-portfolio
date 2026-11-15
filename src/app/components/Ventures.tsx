import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { ventures, type Venture } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const accent = {
  silver: {
    ring: "border-slate-300/30 hover:border-slate-200/60",
    glow: "from-slate-200/10",
    text: "text-slate-200",
    chip: "border-slate-300/40 text-slate-200",
  },
  emerald: {
    ring: "border-emerald-400/30 hover:border-emerald-400/60",
    glow: "from-emerald-400/15",
    text: "text-emerald-300",
    chip: "border-emerald-400/40 text-emerald-300",
  },
} as const;

function Mark({ v }: { v: Venture }) {
  if (v.logo) {
    return (
      <Image src={v.logo} alt={`${v.name} seal`} width={72} height={72} className="h-16 w-16 rounded-full shadow-lg shadow-black/60 sm:h-[72px] sm:w-[72px]" />
    );
  }
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10 text-3xl font-bold text-emerald-300 sm:h-[72px] sm:w-[72px]" aria-hidden>
      {v.name[0]}
    </div>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="bg-gray-950 py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 / Ventures"
          title="What I'm Building"
          lead="Companies built to put people to work and keep opportunity close to home."
        />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {ventures.map((v, i) => {
            const a = accent[v.accent];
            return (
              <li key={v.name} className="reveal" style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener"
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-black/60 p-6 transition-colors sm:p-8 ${a.ring}`}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent`} aria-hidden />
                  <div className="relative flex items-start gap-4">
                    <Mark v={v} />
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${a.chip}`}>{v.role}</span>
                        <span className="text-xs text-slate-400">{v.status}{v.since ? ` · since ${v.since}` : ""}</span>
                      </div>
                      <h3 className="text-2xl font-bold sm:text-3xl">{v.name}</h3>
                      <p className={`mt-1 font-semibold ${a.text}`}>{v.tagline}</p>
                    </div>
                  </div>
                  <p className="relative mt-5 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">{v.body}</p>
                  {v.url && (
                    <span className={`relative mt-6 inline-flex items-center gap-1 text-sm font-semibold ${a.text}`}>
                      {v.url.replace("https://", "")}
                      <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
