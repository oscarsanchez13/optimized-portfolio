"use client";
import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="section-title text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="glass-strong border-2 border-emerald-400/50 rounded-xl p-8 w-full sm:w-80 transition-all duration-300 hover:scale-105 glow-hover">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-4xl mb-2" aria-hidden>🎓</div>
                <h3 className="text-xl font-bold text-emerald-400">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.provider}</p>
                <p className="text-xs italic text-emerald-300">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
