"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side: Name */}
                <div className="text-2xl font-bold leading-tight">
                    <span className="block">Oscar</span>
                    <span className="block">Sanchez</span>
                </div>

                {/* Full Menu for larger screens */}
                <div className="hidden lg:flex space-x-8">
                    <Link href="/" className="hover:text-emerald-400">Home</Link>
                    <Link href="#projects" className="hover:text-emerald-400">Projects</Link>
                    <Link href="#skills" className="hover:text-emerald-400">Skills</Link>
                    <Link href="#certifications" className="hover:text-emerald-400">Certifications</Link>
                    <Link href="#about" className="hover:text-emerald-400">More About Me</Link>
                    <Link href="#recommendations" className="hover:text-emerald-400">Recommendations</Link>
                    <Link href="#contact" className="hover:text-emerald-400">Contact</Link>
                </div>

                {/* Right Side: "Let's Connect" & Hamburger */}
                <div className="flex items-center space-x-6">
                <a
                    href="https://www.linkedin.com/in/YOUR-LINKEDIN-HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 
                            lg:inline-block w-full lg:w-auto text-center justify-center"
                >
                    <span>Let’s Connect</span>
                    <FaLinkedin />
                </a>


                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-3xl focus:outline-none lg:hidden"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Takes up full page except for navbar) */}
            <div
                className={`fixed top-16 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-start justify-center text-4xl space-y-8 px-10 transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                } lg:hidden`}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-4xl"
                >
                    <FaTimes />
                </button>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                <Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                <Link href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</Link>
                <Link href="#about" onClick={() => setMenuOpen(false)}>More About Me</Link>
                <Link href="#recommendations" onClick={() => setMenuOpen(false)}>Recommendations</Link>
                <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}
