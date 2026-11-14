// app/components/HomeSection.tsx
"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Typewriter from "./Typewriter";
import { hero } from "@/data/profile";

function Pitch({ size }: { size: "lg" | "sm" }) {
  const big = size === "lg";
  return (
    <>
      <p className={big ? "text-xl md:text-2xl mb-2" : "text-base sm:text-lg mb-1"}>
        <span className={`inline-block ${big ? "min-w-[320px] md:min-w-[420px]" : "min-w-[240px]"} text-emerald-400 font-semibold`} aria-live="polite" aria-atomic="true"><Typewriter /></span>
      </p>
      <p className={big ? "text-2xl md:text-3xl font-semibold mb-4" : "text-lg font-semibold mb-2"}>{hero.lead}</p>
      <p className={`${big ? "text-base md:text-lg" : "text-sm"} leading-relaxed text-slate-300`}>{hero.body}</p>
      <div className={`flex flex-wrap gap-2 ${big ? "mt-6" : "mt-3"}`}>
        {hero.keywords.map((k) => (
          <span key={k} className="keyword-highlight text-teal-200 border border-teal-200/30 rounded-full px-3 py-1 text-xs md:text-sm">{k}</span>
        ))}
      </div>
      <div className={`flex gap-3 ${big ? "mt-8" : "mt-4"}`}>
        <a href="#projects" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-5 rounded-lg text-sm">See my work</a>
        <a href="#contact" className="glass-strong border border-emerald-400/50 hover:border-emerald-400 text-white font-semibold py-2.5 px-5 rounded-lg text-sm">Get in touch</a>
      </div>
    </>
  );
}

/**
 * Mobile-only card to ensure contrast where text overlays the image.
 * Uses a simple semi-opaque background for maximum reliability.
 */
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        rounded-2xl px-4 py-3
        bg-black/60 ring-1 ring-white/15 shadow-xl
      "
    >
      {children}
    </div>
  );
}

export default function HomeSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [arrowBottom, setArrowBottom] = useState("2rem");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
      setArrowBottom(window.innerWidth < 768 ? "calc(2rem + -20px)" : "2rem");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden">
      {!isMobile ? (
        /* ===== DESKTOP ===== */
        <div className="flex h-full w-full">
          {/* Left Side */}
          <div className="flex-1 h-full bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center px-24">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I&apos;m Oscar.</h1>
              <Pitch size="lg" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 h-full relative">
            <Image src="/Reverce.jpg" alt="Portrait of Oscar Sanchez" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-700 to-black opacity-40" />
          </div>
        </div>
      ) : (
        /* ===== MOBILE ===== */
        <div className="relative w-full h-full">
          <Image src="/Reverce.jpg" alt="Portrait of Oscar Sanchez" fill className="object-cover object-[60%_20%]" priority />

          {/* Text overlay wrapped in a glass card for readability */}
          <div className="absolute inset-x-4 bottom-16 text-left text-white">
            <div className="max-w-md mx-auto">
              <GlassCard>
                <h1 className="text-3xl sm:text-4xl font-bold">Hi, I&apos;m Oscar.</h1>
                <div className="mt-2"><Pitch size="sm" /></div>
              </GlassCard>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Down Arrow */}
      <div
        className="absolute right-1/2 transform translate-x-1/2 text-white animate-bounce opacity-80 md:bottom-10 md:text-5xl text-4xl"
        style={{ bottom: arrowBottom }}
      >
        <FaChevronDown />
      </div>
    </section>
  );
}
