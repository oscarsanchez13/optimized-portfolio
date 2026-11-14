import "./globals.css";
import type { Metadata, Viewport } from "next";
import Layout from "./components/Layout";
import { Inter } from "next/font/google";
import { site } from "@/data/profile";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    alternates: { canonical: "/" },
    authors: [{ name: site.name, url: site.url }],
    openGraph: {
        type: "profile",
        url: site.url,
        title: site.title,
        description: site.description,
        siteName: site.name,
    },
    twitter: {
        card: "summary_large_image",
        creator: "@Tech_Sancho",
        title: site.title,
        description: site.description,
    },
};

export const viewport: Viewport = {
    themeColor: "#0a0a0a",
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover", // lets safe-area insets reach the fixed nav, sheets and footer
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Technology and Operations Leader",
    knowsLanguage: ["English", "Spanish"],
    sameAs: [site.links.linkedin, site.links.github, site.links.x],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
