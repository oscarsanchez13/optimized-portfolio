"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setNavVisible(true); // Always visible near the top
            } else if (window.scrollY > lastScrollY + 10) {
                setNavVisible(false); // Hide when scrolling down
            } else if (window.scrollY < lastScrollY - 10) {
                setNavVisible(true); // Show when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
            });
        }
        setIsOpen(false); // Close menu on mobile after clicking
    };

    return (
        <nav className={`sticky top-0 left-0 w-full glass-dark text-white py-4 px-6 z-50 transition-all duration-300 border-b border-emerald-500/20 ${navVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="container mx-auto flex items-center gap-8">
                {/* Logo - Left */}
                <Link href="/" className="flex flex-col items-start leading-none flex-shrink-0">
                    <span className="text-3xl lg:text-4xl font-bold tracking-wide logo-outline neonGlow">&lt;OS/&gt;</span>
                    <span className="text-[10px] lg:text-xs font-semibold tracking-widest text-white/80">OSCAR SANCHEZ</span>
                </Link>

                {/* Desktop Navigation - Center */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <div className="glass border border-emerald-400/30 rounded-xl py-3 px-6 flex items-center gap-8">
                        <Link href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="text-sm font-semibold hover:text-emerald-400 transition-colors">Projects</Link>
                        <Link href="#skills" onClick={(e) => handleScroll(e, "#skills")} className="text-sm font-semibold hover:text-emerald-400 transition-colors">Skills</Link>
                        <Link href="#certifications" onClick={(e) => handleScroll(e, "#certifications")} className="text-sm font-semibold hover:text-emerald-400 transition-colors">Certifications</Link>
                        <Link href="#about-me" onClick={(e) => handleScroll(e, "#about-me")} className="text-sm font-semibold hover:text-emerald-400 transition-colors">About</Link>
                        <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-sm font-semibold hover:text-emerald-400 transition-colors">Contact</Link>
                    </div>
                </div>

                {/* Let's Connect Button - Right */}
                <a
                    href="https://www.linkedin.com/in/oscarsanchez13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex glass-strong border-2 border-emerald-400/50 hover:border-emerald-400 text-white py-2.5 px-5 rounded-xl transition-all duration-300 items-center gap-2 text-sm font-semibold glow-hover group relative overflow-hidden flex-shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Connect</span>
                    <FaLinkedin className="text-lg relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </a>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} aria-label="Toggle Menu" className="lg:hidden ml-auto">
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden glass-strong border-t border-emerald-400/50">
                    <div className="flex flex-col space-y-4 px-6 py-4">
                        <Link href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="text-white hover:text-emerald-400 transition">Projects</Link>
                        <Link href="#skills" onClick={(e) => handleScroll(e, "#skills")} className="text-white hover:text-emerald-400 transition">Skills</Link>
                        <Link href="#certifications" onClick={(e) => handleScroll(e, "#certifications")} className="text-white hover:text-emerald-400 transition">Certifications</Link>
                        <Link href="#about-me" onClick={(e) => handleScroll(e, "#about-me")} className="text-white hover:text-emerald-400 transition">About Me</Link>
                        <Link href="#recommendations" onClick={(e) => handleScroll(e, "#recommendations")} className="text-white hover:text-emerald-400 transition">Recommendations</Link>
                        <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-white hover:text-emerald-400 transition">Contact</Link>
                        <a
                            href="https://www.linkedin.com/in/oscarsanchez13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-strong border-2 border-emerald-400/50 hover:border-emerald-400 text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold glow-hover group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">Let&apos;s Connect!</span>
                            <FaLinkedin className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}