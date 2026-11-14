import { experience, disciplines } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const label = (key: string) => disciplines.find((d) => d.key === key)?.title ?? key;

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900 py-14 text-white md:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="03 / Track record" title="Experience" />
        <ol className="relative ml-1.5 border-l border-emerald-400/30 sm:ml-3">
          {experience.map((r, i) => (
            <li
              key={`${r.company}-${r.start}`}
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="reveal relative mb-6 pl-5 last:mb-0 sm:mb-10 sm:pl-8"
            >
              <span className="absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] sm:-left-[9px] sm:h-4 sm:w-4" aria-hidden />
              <article className="glass-strong rounded-xl border border-emerald-400/20 p-5 sm:p-6">
                <p className="mb-2 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-xs text-emerald-300">
                  {r.start === r.end ? r.start : `${r.start} — ${r.end}`}
                </p>
                <h3 className="text-lg font-bold leading-snug sm:text-xl">{r.title}</h3>
                <p className="mb-3 text-sm font-semibold text-slate-300 sm:text-base">{r.company}</p>
                <p className="mb-3 text-sm leading-relaxed text-slate-300">{r.summary}</p>
                <ul className="mb-4 space-y-1.5 text-sm leading-relaxed text-slate-200">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-2"><span className="text-emerald-400" aria-hidden>▸</span><span>{h}</span></li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-1.5" aria-label="Disciplines">
                  {r.tags.map((t) => (
                    <li key={t} className="rounded-full border border-emerald-400/40 px-2 py-0.5 text-[11px] text-emerald-300">{label(t)}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
