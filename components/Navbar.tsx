"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side: Name Placeholder */}
                <div className="text-2xl font-bold leading-tight">
                    <span className="block">Oscar</span>
                    <span className="block">Sanchez</span>
                </div>

                {/* Right Side: "Let's Connect" Button and Hamburger Menu */}
                <div className="flex items-center space-x-6">
                    {/* Let's Connect Button */}
                    <a
                        href="https://www.linkedin.com/in/oscarsanchez13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                    >
                        Let’s Connect!
                    </a>

                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-3xl focus:outline-none"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-gray-800 text-white text-center transition-all ${
                    menuOpen ? "block" : "hidden"
                }`}
            >
                <ul className="py-4 space-y-4">
                    <li>
                        <Link href="/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/certifications" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Certifications
                        </Link>
                    </li>
                    <li>
                        <Link href="/recommendations" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Recommendations
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
