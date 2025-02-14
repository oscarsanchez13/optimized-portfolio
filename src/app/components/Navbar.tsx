"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (pathname === "/") {
            const handleScroll = () => {
                if (window.scrollY > lastScrollY) {
                    setNavVisible(false);
                } else {
                    setNavVisible(true);
                }
                setLastScrollY(window.scrollY);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setNavVisible(true);
        }
    }, [lastScrollY, pathname]);

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
        <nav className={`fixed top-0 left-0 w-full bg-black text-white py-4 px-6 flex justify-between items-center z-50 transition-transform duration-300 ${navVisible ? "translate-y-0" : "-translate-y-full"}`}>
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center leading-none text-center">
                <span className="text-[2.5rem] md:text-[3rem] font-bold tracking-wide logo-outline neonGlow">&lt;OS/&gt;</span>
                <span className="text-xs md:text-sm font-semibold tracking-widest text-white">OSCAR SANCHEZ</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-grow justify-center border-2 border-emerald-400 rounded-lg py-3 px-16 mx-12">
                <div className="flex space-x-16 text-xl font-bold">
                    <Link href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</Link>
                    <Link href="#skills" onClick={(e) => handleScroll(e, "#skills")}>Skills</Link>
                    <Link href="#certifications" onClick={(e) => handleScroll(e, "#certifications")}>Certifications</Link>
                    <Link href="#about-me" onClick={(e) => handleScroll(e, "#about-me")}>About Me</Link>
                    <Link href="#recommendations" onClick={(e) => handleScroll(e, "#recommendations")}>Recommendations</Link>
                    <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</Link>
                </div>
            </div>

            {/* "Let’s Connect" Button (Restored) */}
            <a
                href="https://www.linkedin.com/in/oscarsanchez13"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition items-center space-x-2 text-base md:text-lg"
            >
                <span className="font-semibold">Let&apos;s Connect!</span>
                <FaLinkedin className="text-xl md:text-2xl" />
            </a>

            {/* Mobile Menu */}
            <div className="lg:hidden z-50">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-4">
                    <Link href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</Link>
                    <Link href="#skills" onClick={(e) => handleScroll(e, "#skills")}>Skills</Link>
                    <Link href="#certifications" onClick={(e) => handleScroll(e, "#certifications")}>Certifications</Link>
                    <Link href="#about-me" onClick={(e) => handleScroll(e, "#about-me")}>About Me</Link>
                    <Link href="#recommendations" onClick={(e) => handleScroll(e, "#recommendations")}>Recommendations</Link>
                    <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</Link>
                    <a href="https://www.linkedin.com/in/oscarsanchez13" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition flex items-center space-x-2">
                        <span className="font-semibold">Let&apos;s Connect!</span>
                        <FaLinkedin className="text-xl" />
                    </a>
                </div>
            )}
        </nav>
    );
}
