import "./globals.css";
import Layout from "./components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Oscar Sanchez - Full Stack Engineer & DevOps Specialist",
    description: "Modern portfolio showcasing full-stack development, DevOps expertise, cloud infrastructure, and scalable solutions. Built with Next.js, TypeScript, and cutting-edge technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
