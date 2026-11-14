"use client";

export default function Footer() {
    return (
        <footer className="glass-dark border-t border-emerald-400/20 text-white py-8 text-center relative z-10">
            <div className="container mx-auto px-6">
                <p className="italic text-gray-300 text-base mb-3 font-light">
                    &ldquo;It always seems impossible until it&apos;s done.&rdquo; — Nelson Mandela
                </p>
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Oscar Sanchez. All Rights Reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2 max-w-2xl mx-auto">
                    Views are my own. Work samples are illustrative recreations built with sample data and contain no employer information.
                </p>
                <p className="text-emerald-400/60 text-xs mt-2">
                    Built with Next.js, TypeScript & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}