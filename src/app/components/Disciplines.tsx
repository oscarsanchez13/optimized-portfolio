"use client";
import { motion } from "framer-motion";
import { FiUsers, FiSettings, FiTrendingUp, FiBookOpen, FiTarget, FiRadio, FiBriefcase, FiCpu } from "react-icons/fi";
import { disciplines } from "@/data/profile";

const icons: Record<string, React.ReactNode> = {
  leadership: <FiUsers />, operations: <FiSettings />, finance: <FiTrendingUp />, accounting: <FiBookOpen />,
  marketing: <FiTarget />, advertising: <FiRadio />, sales: <FiBriefcase />, technology: <FiCpu />,
};

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="section-title text-4xl font-bold text-center mb-3">The Full Stack of Business</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Most leaders go deep on one side of a company. I&apos;ve worked every side — and I build the software that ties them together.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-strong border border-emerald-400/30 p-6 rounded-xl glow-hover hover:scale-[1.03] transition-transform duration-300 ${i % 2 ? "-rotate-1" : "rotate-1"} hover:rotate-0`}
            >
              <div className="text-2xl text-emerald-400 mb-3">{icons[d.key]}</div>
              <h3 className="text-xl font-bold mb-2">{d.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{d.proof}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
