"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const controlNavbar = () => {
            if (window.scrollY === 0) {
                setShowNavbar(true);
            } else if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Hide when scrolling down
            } else {
                setShowNavbar(true); // Show when scrolling up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return (
        <nav
            className={`bg-black text-white py-4 px-6 fixed w-full top-0 z-50 flex justify-between items-center transition-all duration-300 ${
                showNavbar || menuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="flex items-center justify-between w-full">
                {/* Left Side: Name */}
                <div className="text-2xl font-bold leading-tight">
                    <span className="block">Oscar</span>
                    <span className="block">Sanchez</span>
                </div>

                {/* Full Menu for large screens (1020px+) */}
                <div className="hidden md:flex md:w-full md:max-w-[1020px] space-x-10 justify-center">
                    <Link href="/" className="hover:text-emerald-400">Home</Link>
                    <Link href="#projects" className="hover:text-emerald-400">Projects</Link>
                    <Link href="#skills" className="hover:text-emerald-400">Skills</Link>
                    <Link href="#certifications" className="hover:text-emerald-400">Certifications</Link>
                    <Link href="#about" className="hover:text-emerald-400">Get To Know Me</Link>
                    <Link href="#recommendations" className="hover:text-emerald-400">Recommendations</Link>
                    <Link href="#contact" className="hover:text-emerald-400">Contact</Link>
                </div>

                {/* Right Side: "Let’s Connect" & Hamburger */}
                <div className="flex items-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/oscarsanchez13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 whitespace-nowrap"
                    >
                        <span>Let’s Connect</span>
                        <FaLinkedin className="text-2xl" />
                    </a>

                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-3xl focus:outline-none md:hidden"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Full-Screen Mobile Navigation Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-start justify-center text-3xl space-y-6 px-10 md:hidden">
                    {/* Close button (only one "X") */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-4xl text-white"
                    >
                        <FaTimes />
                    </button>

                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Home</Link>
                    <Link href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Projects</Link>
                    <Link href="#skills" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Skills</Link>
                    <Link href="#certifications" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Certifications</Link>
                    <Link href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Get To Know Me</Link>
                    <Link href="#recommendations" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Recommendations</Link>
                    <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-emerald-400">Contact</Link>
                </div>
            )}
        </nav>
    );
}
