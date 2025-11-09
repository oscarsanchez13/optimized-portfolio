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
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-center leading-none text-center">
                    <span className="text-[2.5rem] md:text-[3rem] font-bold tracking-wide logo-outline neonGlow">&lt;OS/&gt;</span>
                    <span className="text-xs md:text-sm font-semibold tracking-widest text-white">OSCAR SANCHEZ</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-center items-center glass border-2 border-emerald-400/50 glow-hover rounded-lg py-3 px-8 mx-auto max-w-screen-lg w-full shadow-lg shadow-emerald-500/10">
                    <div className="flex space-x-10 text-lg font-bold">
                        <Link href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</Link>
                        <Link href="#skills" onClick={(e) => handleScroll(e, "#skills")}>Skills</Link>
                        <Link href="#certifications" onClick={(e) => handleScroll(e, "#certifications")}>Certifications</Link>
                        <Link href="#about-me" onClick={(e) => handleScroll(e, "#about-me")}>About Me</Link>
                        <Link href="#recommendations" onClick={(e) => handleScroll(e, "#recommendations")}>Recommendations</Link>
                        <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</Link>
                    </div>
                </div>

                {/* Let's Connect Button */}
                <a
                    href="https://www.linkedin.com/in/oscarsanchez13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex glass-strong border-2 border-emerald-400/50 hover:border-emerald-400 text-white py-3 px-6 rounded-xl transition-all duration-300 items-center space-x-2 text-base md:text-lg font-semibold glow-hover group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Let&apos;s Connect!</span>
                    <FaLinkedin className="text-xl md:text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </a>

                {/* Mobile Menu */}
                <div className="lg:hidden z-50">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>
                </div>
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