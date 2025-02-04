import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow w-full px-4">{children}</main>
            <Analytics />
        </div>
    );
}
