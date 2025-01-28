import { ReactNode } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4">{children}</main>
        </div>
    );
}
