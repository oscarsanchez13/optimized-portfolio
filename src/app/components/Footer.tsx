import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { site } from "@/data/profile";

/**
 * Two short rows instead of a tall centred stack.
 * Desktop: logo · quote · socials across the top, the fine print on one line below.
 * Phone: the same blocks stack and centre.
 */
export default function Footer() {
    const links = [
        { href: site.links.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
        { href: site.links.github, label: "GitHub", icon: <FaGithub /> },
        { href: site.links.x, label: "X", icon: <FaXTwitter /> },
    ];
    return (
        <footer
            className="glass-dark relative z-10 border-t border-emerald-400/20 px-5 pt-8 text-white sm:px-8 lg:px-12"
            style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
                    {/* Global smooth scrolling handles the glide back up */}
                    <a href="#home" aria-label="Back to top" className="logo-outline flex-shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                        &lt;OS/&gt;
                    </a>
                    <p className="text-base font-light italic text-gray-300 md:flex-1 md:text-center">
                        &ldquo;It always seems impossible until it&apos;s done.&rdquo; — Nelson Mandela
                    </p>
                    <ul className="flex flex-shrink-0 justify-center gap-3">
                        {links.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 text-lg text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-400/10">
                                    {l.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/5 pt-4 text-center text-xs text-gray-500 lg:flex-row lg:justify-between lg:gap-6 lg:text-left">
                    {site.holdings.show ? (
                        <a href={site.holdings.url} target="_blank" rel="noopener" className="flex-shrink-0 text-sm text-gray-400 hover:text-emerald-300">A {site.holdings.name} Product</a>
                    ) : (
                        <p className="flex-shrink-0 text-sm text-gray-400">&copy; {new Date().getFullYear()} {site.name}</p>
                    )}
                    <p className="max-w-3xl lg:text-center">
                        Views are my own. Work samples are illustrative recreations built with sample data and contain no employer information.
                    </p>
                    <p className="flex-shrink-0 text-emerald-400/60">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
