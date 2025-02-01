"use client"; // Ensures it runs only on the client side

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // Toggle menu function
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Close menu when clicking outside
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
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
                Oscar Sanchez
            </Link>

            {/* Desktop Navigation - Properly Spaced with More Padding to Prevent Touching Logo/Button */}
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

            {/* "Let's Connect!" Button - Always Visible (Desktop & Mobile) */}
            <div className="flex items-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition flex items-center space-x-2 text-base md:text-lg"
                >
                    <span className="font-semibold">Let&apos;s Connect!</span>
                    <FaLinkedin className="text-xl md:text-2xl" />
                </a>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden z-50">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Full-Screen, Large Text */}
            <div
                ref={navRef}
                className={`fixed inset-0 bg-black text-white flex flex-col items-end pr-16 pt-20 transform ${
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                } transition-all duration-300 ease-in-out lg:hidden`}
            >
                <div className="flex flex-col w-full items-start pl-10 space-y-10 text-4xl font-bold">
                    {/* Home Link (Newly Added at the Top) */}
                    <Link href="/" onClick={() => setIsOpen(false)} className="underline underline-offset-4 decoration-emerald-400">Home</Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)} className="underline underline-offset-4 decoration-emerald-400">Projects</Link>
                    <Link href="#skills" onClick={() => setIsOpen(false)} className="underline underline-offset-4 decoration-emerald-400">Skills</Link>
                    <Link href="#certifications" onClick={() => setIsOpen(false)} className="underline underline-offset-4 decoration-emerald-400">Certifications</Link>
                    <Link href="#get-to-know-me" onClick={() => setIsOpen(false)} className="underline underline-offset-4 decoration-emerald-400">Get To Know Me</Link>
                    <Link href="#recommendations" onClick={() => setIsOpen(false)} className="underline underline-offset-4 decoration-emerald-400">Recommendations</Link>

                    {/* Custom Contact Section with Border */}
                    <div className="mt-12 w-full border-2 border-emerald-400 rounded-lg p-6">
                        <p className="text-white text-3xl font-extrabold">WANT TO CONTACT ME?</p>
                        <div className="flex flex-col space-y-4 mt-4">
                            {/* LinkedIn Link */}
                            <a 
                                href="https://www.linkedin.com/in/yourprofile" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-white text-2xl hover:text-emerald-400 transition"
                            >
                                <FaLinkedin className="mr-3 text-3xl" />
                                LinkedIn
                            </a>

                            {/* Email Link */}
                            <a 
                                href="mailto:youremail@example.com" 
                                className="flex items-center text-white text-2xl hover:text-emerald-400 transition"
                            >
                                <FaEnvelope className="mr-3 text-3xl" />
                                Email Me
                            </a>

                            {/* Resume Link */}
                            <a 
                                href="https://www.canva.com/design/your-resume-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-white text-2xl hover:text-emerald-400 transition"
                            >
                                <FaFileAlt className="mr-3 text-3xl" />
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
