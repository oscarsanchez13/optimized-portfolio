"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 flex justify-between items-center z-50">
            {/* Custom Logo Design */}
            <Link href="/" className="flex flex-col items-center leading-none text-center">
            {/* Outline Text for <OS/> */}
                <span className="text-[2.5rem] md:text-[3rem] font-bold tracking-wide logo-outline neonGlow">
                    &lt;OS/&gt;
                </span>
                {/* Solid Text for OSCAR SANCHEZ */}
                <span className="text-xs md:text-sm font-semibold tracking-widest text-white">
                    OSCAR SANCHEZ
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-grow justify-center border-2 border-emerald-400 rounded-lg py-3 px-16 mx-12">
                <div className="flex space-x-16 text-xl font-bold">
                    <Link href="#projects" className="hover:text-gray-400 transition">Projects</Link>
                    <Link href="#skills" className="hover:text-gray-400 transition">Skills</Link>
                    <Link href="#certifications" className="hover:text-gray-400 transition">Certifications</Link>
                    <Link href="#get-to-know-me" className="hover:text-gray-400 transition">Get To Know Me</Link>
                    <Link href="#recommendations" className="hover:text-gray-400 transition">Recommendations</Link>
                    <Link href="#contact" className="hover:text-gray-400 transition">Contact</Link>
                </div>
            </div>

            {/* "Let's Connect!" Button */}
            <a
                href="https://www.linkedin.com/in/oscarsanchez13"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition flex items-center space-x-2 text-base md:text-lg"
            >
                <span className="font-semibold">Let&apos;s Connect!</span>
                <FaLinkedin className="text-xl md:text-2xl" />
            </a>

            {/* Mobile Menu */}
            <div className="lg:hidden z-50">
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                </button>
            </div>
        </nav>
    );
}