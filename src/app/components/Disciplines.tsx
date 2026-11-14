import { FiUsers, FiSettings, FiTrendingUp, FiBookOpen, FiTarget, FiRadio, FiBriefcase, FiCpu } from "react-icons/fi";
import { disciplines } from "@/data/profile";
import SectionHeading from "./SectionHeading";

const icons: Record<string, React.ReactNode> = {
  leadership: <FiUsers />, operations: <FiSettings />, finance: <FiTrendingUp />, accounting: <FiBookOpen />,
  marketing: <FiTarget />, advertising: <FiRadio />, sales: <FiBriefcase />, technology: <FiCpu />,
};

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-black py-14 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="01 / Expertise"
          title="The Full Stack of Business"
          lead={<>Most leaders go deep on one side of a company. I&apos;ve worked every side — and I build the software that ties them together.</>}
        />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {disciplines.map((d, i) => (
            <li
              key={d.key}
              style={{ "--reveal-delay": `${(i % 4) * 60}ms` } as React.CSSProperties}
              className={`reveal glass-strong glow-hover flex gap-4 rounded-xl border border-emerald-400/30 p-5 transition-transform duration-300 sm:block lg:p-6 lg:hover:scale-[1.03] ${i % 2 ? "lg:-rotate-1" : "lg:rotate-1"} lg:hover:rotate-0`}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-xl text-emerald-400 sm:mb-4" aria-hidden>
                {icons[d.key]}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold sm:mb-2 sm:text-xl">{d.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{d.proof}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
