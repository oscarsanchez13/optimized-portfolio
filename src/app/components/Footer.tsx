import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { site } from "@/data/profile";

export default function Footer() {
    const links = [
        { href: site.links.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
        { href: site.links.github, label: "GitHub", icon: <FaGithub /> },
        { href: site.links.x, label: "X", icon: <FaXTwitter /> },
    ];
    return (
        <footer
            className="glass-dark relative z-10 border-t border-emerald-400/20 px-5 pt-10 text-center text-white sm:px-8"
            style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
        >
            <div className="mx-auto max-w-3xl">
                <p className="logo-outline mb-4" aria-hidden>&lt;OS/&gt;</p>
                <ul className="mb-6 flex justify-center gap-3">
                    {links.map((l) => (
                        <li key={l.label}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 text-lg text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-400/10">
                                {l.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="mb-3 text-base font-light italic text-gray-300">
                    &ldquo;It always seems impossible until it&apos;s done.&rdquo; — Nelson Mandela
                </p>
                {site.holdings.show ? (
                    <p className="text-sm text-gray-400">
                        <a href={site.holdings.url} target="_blank" rel="noopener" className="hover:text-emerald-300">A {site.holdings.name} Product</a>
                    </p>
                ) : (
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} {site.name}</p>
                )}
                <p className="mx-auto mt-2 max-w-2xl text-xs text-gray-500">
                    Views are my own. Work samples are illustrative recreations built with sample data and contain no employer information.
                </p>
                <p className="mt-2 text-xs text-emerald-400/60">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
            </div>
        </footer>
    );
}
