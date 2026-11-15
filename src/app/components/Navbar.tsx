"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { site } from "@/data/profile";

const links = [
    { href: "#disciplines", label: "Expertise" },
    { href: "#ventures", label: "Ventures" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Stack" },
    { href: "#recommendations", label: "Recommendations" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const lastY = useRef(0);
    const menuButton = useRef<HTMLButtonElement>(null);
    const firstLink = useRef<HTMLAnchorElement>(null);

    // Hide on scroll down, show on scroll up — never while the menu is open.
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 8);
            if (y < 64) setNavVisible(true);
            else if (y > lastY.current + 8) setNavVisible(false);
            else if (y < lastY.current - 8) setNavVisible(true);
            lastY.current = y;
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const close = useCallback((restoreFocus = true) => {
        setIsOpen(false);
        if (restoreFocus) menuButton.current?.focus();
    }, []);

    // Scroll lock, Escape to close, focus the first link on open.
    useEffect(() => {
        if (!isOpen) return;
        const html = document.documentElement;
        html.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        firstLink.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        const onResize = () => {
            if (window.innerWidth >= 1024) close(false);
        };
        window.addEventListener("keydown", onKey);
        window.addEventListener("resize", onResize);
        return () => {
            html.style.overflow = "";
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("resize", onResize);
        };
    }, [isOpen, close]);

    const go = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        setIsOpen(false);
        // Wait a frame so the scroll lock is released before scrolling.
        requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", targetId);
        });
    };

    const shown = navVisible || isOpen;

    return (
        <>
            <nav
                aria-label="Primary"
                className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[transform,background-color,border-color] duration-300 ${
                    scrolled || isOpen ? "glass-dark border-emerald-500/20" : "border-transparent bg-gradient-to-b from-black/70 to-transparent"
                } ${shown ? "translate-y-0" : "-translate-y-full"}`}
                style={{ paddingTop: "env(safe-area-inset-top)" }}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(0.5rem,env(safe-area-inset-right))] lg:h-[4.5rem] lg:px-8">
                    <a href="#home" onClick={(e) => go(e, "#home")} className="flex flex-shrink-0 flex-col items-start leading-none" aria-label="Oscar Sanchez, back to top">
                        <span className="logo-outline neonGlow font-bold tracking-wide" aria-hidden>&lt;OS/&gt;</span>
                        <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-white/80 lg:text-xs" aria-hidden>OSCAR SANCHEZ</span>
                    </a>

                    <div className="hidden flex-1 justify-center lg:flex">
                        <ul className="glass flex items-center gap-1 rounded-xl border border-emerald-400/30 px-2 py-1.5">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} onClick={(e) => go(e, l.href)} className="block rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/5 hover:text-emerald-400 xl:px-4">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href={site.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-strong glow-hover group relative hidden flex-shrink-0 items-center gap-2 overflow-hidden rounded-xl border-2 border-emerald-400/50 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400 lg:flex"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10">Connect</span>
                        <FaLinkedin className="relative z-10 text-lg transition-transform duration-300 group-hover:scale-110" />
                    </a>

                    <button
                        ref={menuButton}
                        type="button"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="ml-auto flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 lg:hidden"
                    >
                        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Mobile sheet: a sibling of <nav> so the nav's blur and transform can't trap it */}
            <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" hidden={!isOpen} className="fixed inset-0 z-40 lg:hidden">
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => close(false)} aria-hidden />
                <div
                    className="relative flex h-full flex-col overflow-y-auto bg-[#070b09]/95 pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))]"
                    style={{ paddingTop: "calc(5.5rem + env(safe-area-inset-top))" }}
                >
                    <p className="eyebrow mb-4">Navigate</p>
                    <ul className="flex flex-col">
                        {links.map((l, i) => (
                            <li key={l.href} className="border-b border-white/10">
                                <a
                                    ref={i === 0 ? firstLink : undefined}
                                    href={l.href}
                                    onClick={(e) => go(e, l.href)}
                                    className="group flex min-h-[56px] items-center gap-4 py-3 text-2xl font-semibold text-white transition-colors hover:text-emerald-400 focus-visible:text-emerald-400 focus-visible:outline-none"
                                >
                                    <span className="w-6 font-mono text-xs text-emerald-400/70">{String(i + 1).padStart(2, "0")}</span>
                                    {l.label}
                                    <FiArrowUpRight className="ml-auto text-emerald-400/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
                        <a
                            href={site.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-emerald-500 font-semibold text-black transition-colors hover:bg-emerald-400"
                        >
                            <FaLinkedin className="text-xl" /> LinkedIn
                        </a>
                        <a
                            href={site.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-strong flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-emerald-400/50 font-semibold text-white"
                        >
                            <FaGithub className="text-xl" /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
