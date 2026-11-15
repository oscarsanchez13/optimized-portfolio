import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import RevealObserver from "./RevealObserver";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="relative flex min-h-[100svh] flex-col">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-3 focus:font-semibold focus:text-black"
            >
                Skip to content
            </a>
            <AnimatedBackground />
            <Navbar />
            <main id="main" className="relative z-10 w-full flex-grow">{children}</main>
            <Footer />
            <RevealObserver />
            <Analytics />
        </div>
    );
}
