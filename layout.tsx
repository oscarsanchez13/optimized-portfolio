import "./globals.css";
import Layout from "./components/Layout";

export const metadata = {
    title: "Optimized Portfolio",
    description: "A modern portfolio for showcasing projects and skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
