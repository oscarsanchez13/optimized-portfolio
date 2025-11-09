import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col relative">
            <AnimatedBackground />
            <Navbar />
            <main className="flex-grow w-full relative z-10">{children}</main>
            <Footer />
            <Analytics />
        </div>
    );
}
