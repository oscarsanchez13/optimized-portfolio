// app/components/HomeSection.tsx
"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Typewriter from "./Typewriter";

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
              <p className="text-base md:text-lg leading-relaxed">
                I&apos;m a passionate <span className="inline-block min-w-[320px] md:min-w-[420px] text-xl md:text-2xl"><Typewriter /></span>
                <br />
                with an{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">entrepreneurial</span>{" "}
                mindset, scaling{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">multi-unit</span>{" "}
                businesses, integrating{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">cloud</span>,{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">AI</span>, and{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">Machine Learning</span>, as well as building{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">customer-first</span>{" "}
                platforms that drastically transform{" "}
                <span className="text-teal-200 font-semibold text-lg md:text-xl keyword-highlight">operations</span>.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 h-full relative">
            <Image src="/Reverce.jpg" alt="Oscar Sanchez" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-700 to-black opacity-40" />
          </div>
        </div>
      ) : (
        /* ===== MOBILE ===== */
        <div className="relative w-full h-full">
          <Image src="/Reverce.jpg" alt="Oscar Sanchez" fill className="object-cover -translate-x-8" priority />

          {/* Text overlay wrapped in a glass card for readability */}
          <div className="absolute bottom-12 right-1/2 transform -translate-x-1 text-left text-white px-4">
            <div className="max-w-[92vw] sm:max-w-md">
              <GlassCard>
                <h1 className="text-3xl sm:text-4xl font-bold">Hi, I&apos;m Oscar.</h1>
                <p className="text-sm sm:text-base leading-relaxed mt-2">
                  I&apos;m a passionate <span aria-live="polite" aria-atomic="true" className="inline-block min-w-[240px] text-base sm:text-lg">
                    <Typewriter />
                  </span>
                  <br />
                  with an{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">entrepreneurial</span>{" "}
                  mindset, scaling{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">multi-unit</span>{" "}
                  businesses, integrating{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">cloud</span>,{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">AI</span>, and{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">Machine Learning</span>, as well as building{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">customer-first</span>{" "}
                  platforms that drastically transform{" "}
                  <span className="text-teal-200 font-semibold text-base sm:text-lg keyword-highlight">operations</span>.
                </p>
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
