"use client";

import { useState } from "react";
import type { Lang } from "@/lib/content";
import { SUMMIT, ex, formatMetres, waypoints } from "@/lib/expedition";
import { cn } from "@/lib/utils";

const W = 1000;
const H = 380;
const PAD = { top: 64, right: 28, bottom: 36, left: 64 };
const START = Date.UTC(2020, 10, 1);
const END = Date.UTC(2026, 11, 1);

const toTime = (date: string) => {
  const [year, month] = date.split("-").map(Number);
  return Date.UTC(year, month - 1, 1);
};
const x = (time: number) => PAD.left + ((time - START) / (END - START)) * (W - PAD.left - PAD.right);
const y = (altitude: number) => H - PAD.bottom - (altitude / SUMMIT) * (H - PAD.top - PAD.bottom);

/** Career as an elevation profile; one series, so no legend — the title names it. */
export function AscentChart({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<number | null>(null);

  const points = [
    ...waypoints.map((point) => ({
      x: x(toTime(point.date)),
      y: y(point.altitude),
      altitude: point.altitude,
      title: point.role,
      subtitle: point.company,
      period: point.period[lang],
      label: point.company.split(" ")[0],
    })),
    {
      x: x(toTime("2026-10")),
      y: y(8400),
      altitude: 8400,
      title: ex.ascent.nowRole[lang],
      subtitle: "Omnia Potentia",
      period: "10/2026",
      label: ex.ascent.now[lang],
    },
  ];
  const base = { x: x(toTime("2020-11")), y: y(0) };
  const line = [`M ${base.x} ${base.y}`, ...points.map((p) => `L ${p.x} ${p.y}`)].join(" ");
  const area = `${line} L ${points[points.length - 1].x} ${y(0)} Z`;
  const years = [2021, 2022, 2023, 2024, 2025, 2026];
  const current = active === null ? null : points[active];

  return (
    <figure className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ex.ascent.chartLabel[lang]} className="h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="ascent-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--color-signal)" stopOpacity="0.22" />
            <stop offset="1" stopColor="var(--color-signal)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[2000, 4000, 6000, 8000].map((altitude) => (
          <g key={altitude}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(altitude)} y2={y(altitude)} stroke="var(--color-bone)" strokeOpacity="0.08" />
            <text x={PAD.left - 12} y={y(altitude) + 4} textAnchor="end" className="fill-bone/40 font-mono text-[11px]">
              {formatMetres(altitude)}
            </text>
          </g>
        ))}
        <line x1={PAD.left} x2={W - PAD.right} y1={y(0)} y2={y(0)} stroke="var(--color-bone)" strokeOpacity="0.25" />
        {years.map((year) => (
          <text key={year} x={x(Date.UTC(year, 0, 1))} y={H - 10} textAnchor="middle" className="fill-bone/40 font-mono text-[11px]">
            {year}
          </text>
        ))}

        <path d={area} fill="url(#ascent-fill)" />
        <path d={line} fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinejoin="round" />

        {points.map((point, index) => (
          <g key={point.title + point.period}>
            <text
              lang={index === points.length - 1 ? lang : "en"}
              x={point.x}
              y={point.y - (index % 2 === 0 ? 18 : 34)}
              textAnchor="middle"
              className={cn(
                "pointer-events-none hidden font-mono text-[11px] uppercase tracking-[0.12em] transition sm:block",
                active === index ? "fill-bone" : "fill-bone/55",
              )}
            >
              {point.label}
            </text>
            <circle
              cx={point.x}
              cy={point.y}
              r={active === index ? 7 : 5}
              fill={index === points.length - 1 ? "var(--color-bone)" : "var(--color-signal)"}
              stroke="var(--color-night)"
              strokeWidth="2"
              className="pointer-events-none transition-all"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="22"
              fill="transparent"
              tabIndex={0}
              role="button"
              aria-label={`${point.title}, ${point.subtitle}, ${point.period}`}
              onPointerEnter={() => setActive(index)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(null)}
              className="cursor-pointer outline-none"
            />
          </g>
        ))}
      </svg>

      {current && (
        <div
          role="status"
          className={cn(
            "pointer-events-none absolute z-10 w-60 -translate-x-1/2 rounded-sm bg-bone px-4 py-3 text-night shadow-2xl",
            current.y < H / 2 ? "translate-y-[18px]" : "-translate-y-[calc(100%+18px)]",
          )}
          style={{
            left: `clamp(7.5rem, ${(current.x / W) * 100}%, calc(100% - 7.5rem))`,
            top: `${(current.y / H) * 100}%`,
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-night/55">
            {current.period} · {formatMetres(current.altitude)}
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug">{current.title}</p>
          <p className="text-sm text-night/70">{current.subtitle}</p>
        </div>
      )}
    </figure>
  );
}
