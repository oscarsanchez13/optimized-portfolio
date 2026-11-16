import { getImageProps } from "next/image";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import Typewriter from "./Typewriter";
import { hero } from "@/data/profile";

/**
 * One responsive tree (no JS viewport switching).
 * Phone: portrait fills the top of the screen and fades into the copy below.
 * Desktop (lg+): copy on the left, portrait on the right, full viewport height.
 */
const portraitSizes = "(min-width: 1024px) 50vw, 100vw";
const portraitBase = { alt: "", fill: true, priority: true, sizes: portraitSizes } as const;
const { props: phone } = getImageProps({ ...portraitBase, src: "/Reverce.jpg" });
const { srcSet: suit } = getImageProps({ ...portraitBase, src: "/hero.jpg" }).props;

export default function HomeSection() {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0a0a0a] lg:flex-row">
      {/* Portrait */}
      <div className="relative h-[48svh] min-h-[280px] max-h-[560px] w-full sm:h-[58svh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:max-h-none lg:w-1/2">
        {/* Phones: white-shirt portrait. Tablet and up: suit portrait. Only one is downloaded. */}
        <picture>
          <source media="(min-width: 768px)" srcSet={suit} sizes={portraitSizes} />
          <img {...phone} alt="Portrait of Oscar Sanchez" className="object-cover object-[50%_18%] lg:object-center" />
        </picture>
        {/* Fade into the copy: downward on phones, leftward on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-black/30 lg:bg-gradient-to-r lg:from-[#0a0a0a] lg:via-[#0a0a0a]/30 lg:to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(16,185,129,0.18),transparent_60%)] mix-blend-screen" aria-hidden />
      </div>

      {/* Copy */}
      <div className="relative z-10 -mt-32 flex flex-1 items-end px-5 pb-[max(3rem,env(safe-area-inset-bottom))] sm:-mt-40 sm:px-8 lg:mt-0 lg:w-1/2 lg:flex-none lg:items-center lg:bg-gradient-to-r lg:from-black lg:via-gray-900 lg:to-transparent lg:px-16 lg:pb-0 lg:pt-[4.5rem] xl:px-24">
        <div className="w-full max-w-xl text-white lg:max-w-2xl">
          <p className="eyebrow mb-3">{hero.eyebrow}</p>
          <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">{hero.greeting}</h1>

          <p className="mt-3 h-8 whitespace-nowrap text-lg sm:text-xl md:mt-4 md:text-2xl">
            <Typewriter />
          </p>

          <p className="mt-3 text-xl font-semibold leading-snug sm:text-2xl md:text-3xl">{hero.lead}</p>
          <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">{hero.body}</p>

          <ul className="mt-4 flex flex-wrap gap-2 md:mt-6" aria-label="Disciplines">
            {hero.keywords.map((k) => (
              <li key={k} className="keyword-highlight rounded-full border border-teal-200/30 bg-black/30 px-3 py-1 text-xs text-teal-200 md:text-sm">
                {k}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex md:mt-8">
            <a
              href="#projects"
              className="flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-emerald-500 px-4 font-semibold text-black shadow-[0_0_24px_rgba(16,185,129,0.35)] transition-colors hover:bg-emerald-400"
            >
              See my work <FiArrowRight aria-hidden />
            </a>
            <a
              href="#contact"
              className="glass-strong flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-xl border border-emerald-400/50 px-4 font-semibold text-white transition-colors hover:border-emerald-400"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue — desktop only, where the hero fits one screen */}
      {/* Full-width row so the arrow sits at the page centre; the bounce lives on the inner link
          because animate-bounce rewrites `transform` and would cancel any translate-x centring. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center lg:flex">
        <a href="#impact" aria-label="Scroll to content" className="pointer-events-auto animate-bounce text-4xl text-white/80">
          <FiChevronDown aria-hidden />
        </a>
      </div>
    </section>
  );
}
