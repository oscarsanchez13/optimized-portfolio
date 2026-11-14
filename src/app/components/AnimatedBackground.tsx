"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number };

const GRID = 50;
const LINK = 150;

/** Dot budget by viewport width — the link pass is O(n²), so phones get far fewer. */
const budget = (w: number) => (w < 640 ? 36 : w < 1024 ? 70 : 130);

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    let frame = 0;
    let tick = 0;

    const seed = () => {
      const n = budget(w);
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(52, 211, 153, 0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += GRID) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); }
      for (let y = 0; y < h; y += GRID) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
      ctx.stroke();
    };

    const drawStatic = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
      drawGrid();
    };

    const resize = (force = false) => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      // Phone URL bars change the height constantly; only re-seed on real changes.
      if (!force && nw === w && Math.abs(nh - h) < 120) return;
      w = nw;
      h = nh;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      drawStatic();
    };

    const step = () => {
      frame = requestAnimationFrame(step);
      // Phones run at ~30fps; nobody can tell on a background, the battery can.
      if (w < 640 && tick++ % 2) return;

      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, w, h);
      drawGrid();

      ctx.fillStyle = "rgba(52, 211, 153, 0.3)";
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            ctx.strokeStyle = `rgba(52, 211, 153, ${0.15 * (1 - Math.sqrt(d2) / LINK)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (motion.matches) { drawStatic(); return; }
      if (!document.hidden) frame = requestAnimationFrame(step);
    };
    const stop = () => cancelAnimationFrame(frame);

    const onVisibility = () => (document.hidden ? stop() : start());
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { resize(); if (motion.matches) drawStatic(); }, 150);
    };

    resize(true);
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", start);

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ opacity: 0.4 }} />;
}
