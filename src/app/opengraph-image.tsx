import { ImageResponse } from "next/og";

export const alt = "Oscar Sanchez — Operator, Technologist, Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg, #000 0%, #0b1220 60%, #064e3b 100%)", color: "white", fontFamily: "sans-serif" }}>
                <div style={{ fontSize: 40, color: "#34d399", fontWeight: 700, marginBottom: 24 }}>&lt;OS/&gt;</div>
                <div style={{ fontSize: 76, fontWeight: 800, marginBottom: 16 }}>Oscar Sanchez</div>
                <div style={{ fontSize: 38, color: "#e2e8f0", marginBottom: 32 }}>I run the business and build the technology behind it.</div>
                <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#6ee7b7" }}>
                    <span>Operations</span><span>·</span><span>Finance</span><span>·</span><span>Marketing</span><span>·</span><span>AI</span>
                </div>
            </div>
        ),
        size,
    );
}
