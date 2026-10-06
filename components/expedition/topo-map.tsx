"use client";

import { useEffect, useRef } from "react";
import { apps, type Lang } from "@/lib/content";
import { SUMMIT, ex, formatMetres, peaks } from "@/lib/expedition";
import { cn } from "@/lib/utils";

const CELL = 11;
const LEVEL_STEP = 0.055;
const LEVEL_MIN = -0.12;
const LEVEL_MAX = 1.6;
const MOUSE_RADIUS = 0.14;

const statusCode = {
  live: { en: "Live", tr: "Canlı" },
  soon: { en: "Soon", tr: "Yakında" },
  wip: { en: "WIP", tr: "Yapımda" },
} as const;

/*
 * Corner bits: top-left 8, top-right 4, bottom-right 2, bottom-left 1.
 * Each case lists the cell edges its contour segments join (T, R, B, L).
 */
const SEGMENTS: [string, string][][] = [
  [],
  [["L", "B"]],
  [["B", "R"]],
  [["L", "R"]],
  [["T", "R"]],
  [["T", "R"], ["L", "B"]],
  [["T", "B"]],
  [["T", "L"]],
  [["T", "L"]],
  [["T", "B"]],
  [["T", "L"], ["B", "R"]],
  [["T", "R"]],
  [["L", "R"]],
  [["B", "R"]],
  [["L", "B"]],
  [],
];

/** Generative contour map: the studio's apps are peaks, and the cursor raises its own. */
export function TopoMap({ lang }: { lang: Lang }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    const readout = readoutRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let unit = 1;
    let cols = 0;
    let rows = 0;
    let grid = new Float32Array(0);
    let frame = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, target: 0 };

    const elevation = (x: number, y: number) => {
      const X = x / unit;
      const Y = y / unit;
      let value =
        0.09 * Math.sin(6.1 * X + 1.9 * Y) * Math.cos(4.7 * Y - 2.3 * X) +
        0.04 * Math.sin(13.7 * X - 9.1 * Y + 0.7) +
        0.18 * Math.exp(-((X - 0.15 * width / unit) ** 2 + (Y - 0.12 * height / unit) ** 2) / 0.09) +
        0.14 * Math.exp(-((X - 0.3 * width / unit) ** 2 + (Y - 0.92 * height / unit) ** 2) / 0.12);
      for (const peak of peaks) {
        const dx = X - (peak.u * width) / unit;
        const dy = Y - (peak.v * height) / unit;
        value += peak.height * Math.exp(-(dx * dx + dy * dy) / (peak.radius * peak.radius));
      }
      if (mouse.strength > 0.001) {
        const dx = (x - mouse.x) / unit;
        const dy = (y - mouse.y) / unit;
        value += 0.9 * mouse.strength * Math.exp(-(dx * dx + dy * dy) / (MOUSE_RADIUS * MOUSE_RADIUS));
      }
      return value;
    };

    const draw = () => {
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          grid[j * (cols + 1) + i] = elevation(i * CELL, j * CELL);
        }
      }
      ctx.clearRect(0, 0, width, height);
      const minor = new Path2D();
      const major = new Path2D();
      const hot = new Path2D();
      const hotRadius = MOUSE_RADIUS * unit * 1.5;
      const heating = mouse.strength > 0.01;
      let levelIndex = 0;
      for (let level = LEVEL_MIN; level <= LEVEL_MAX; level += LEVEL_STEP, levelIndex++) {
        const path = levelIndex % 5 === 0 ? major : minor;
        for (let j = 0; j < rows; j++) {
          for (let i = 0; i < cols; i++) {
            const a = grid[j * (cols + 1) + i];
            const b = grid[j * (cols + 1) + i + 1];
            const c = grid[(j + 1) * (cols + 1) + i + 1];
            const d = grid[(j + 1) * (cols + 1) + i];
            const index = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
            if (index === 0 || index === 15) continue;
            const x0 = i * CELL;
            const y0 = j * CELL;
            const point = (edge: string): [number, number] => {
              switch (edge) {
                case "T":
                  return [x0 + ((level - a) / (b - a)) * CELL, y0];
                case "R":
                  return [x0 + CELL, y0 + ((level - b) / (c - b)) * CELL];
                case "B":
                  return [x0 + ((level - d) / (c - d)) * CELL, y0 + CELL];
                default:
                  return [x0, y0 + ((level - a) / (d - a)) * CELL];
              }
            };
            for (const [from, to] of SEGMENTS[index]) {
              const p = point(from);
              const q = point(to);
              const near =
                heating && Math.hypot((p[0] + q[0]) / 2 - mouse.x, (p[1] + q[1]) / 2 - mouse.y) < hotRadius;
              const target = near ? hot : path;
              target.moveTo(p[0], p[1]);
              target.lineTo(q[0], q[1]);
            }
          }
        }
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(233, 228, 216, 0.11)";
      ctx.stroke(minor);
      ctx.strokeStyle = "rgba(233, 228, 216, 0.28)";
      ctx.stroke(major);
      if (heating) {
        ctx.strokeStyle = `rgba(242, 92, 31, ${0.7 * mouse.strength})`;
        ctx.stroke(hot);
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      unit = Math.max(width * 0.75, height);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      grid = new Float32Array((cols + 1) * (rows + 1));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const tick = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.18;
      mouse.y += (mouse.ty - mouse.y) * 0.18;
      mouse.strength += (mouse.target - mouse.strength) * 0.08;
      draw();
      const settled =
        Math.abs(mouse.target - mouse.strength) < 0.002 &&
        Math.abs(mouse.tx - mouse.x) < 0.5 &&
        Math.abs(mouse.ty - mouse.y) < 0.5;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const metres = Math.max(0, Math.min(1, elevation(x, y) / 1.35)) * SUMMIT;
      const lat = (41.12 - (y / height) * 0.24).toFixed(3);
      const lon = (28.82 + (x / width) * 0.32).toFixed(3);
      readout.style.opacity = "1";
      readout.style.transform = `translate(${x + 18}px, ${y + 18}px)`;
      readout.querySelector("[data-elev]")!.textContent = formatMetres(metres);
      readout.querySelector("[data-coord]")!.textContent = `${lat}°N ${lon}°E`;
      if (reduceMotion) return;
      if (mouse.target === 0) {
        mouse.x = x;
        mouse.y = y;
      }
      mouse.tx = x;
      mouse.ty = y;
      mouse.target = 1;
      wake();
    };

    const onLeave = () => {
      readout.style.opacity = "0";
      mouse.target = 0;
      wake();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      observer.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  const route = ["M 4 96", ...peaks.map((p) => `L ${p.u * 100} ${p.v * 100}`)].join(" ");

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full md:block">
        <path
          d={route}
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
        />
      </svg>
      {peaks.map((peak) => {
        const app = apps.find((item) => item.slug === peak.slug)!;
        return (
          <a
            key={peak.slug}
            href={`#route-${peak.slug}`}
            className="group absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            style={{ left: `${peak.u * 100}%`, top: `${peak.v * 100}%` }}
          >
            <span className="block h-3 w-3 rotate-45 border-2 border-signal bg-night transition group-hover:bg-signal" />
            <span
              className={cn(
                "absolute top-1/2 flex -translate-y-1/2 items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em]",
                peak.u > 0.8 ? "right-5 flex-row-reverse" : "left-5",
              )}
            >
              <span lang="en" className="text-bone">
                {app.name}
              </span>
              <span className="text-bone/45">{statusCode[app.status][lang]}</span>
            </span>
          </a>
        );
      })}
      <div
        ref={readoutRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden rounded-sm bg-bone px-2.5 py-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-night opacity-0 transition-opacity md:block"
      >
        <span className="text-night/55">{ex.hero.elevation[lang]}</span> <span data-elev>0 m</span>
        <br />
        <span data-coord className="text-night/55" />
      </div>
    </div>
  );
}
