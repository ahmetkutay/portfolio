"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { apps, type Lang } from "@/lib/content";
import { appLayers, layers, site, type LayerId } from "@/lib/stack";

/*
 * The hero: every layer of a product as an exploded isometric stack. The plates
 * settle into place on load; scrolling past the hero pulls them apart, and
 * pointing at one lifts it and names the apps it holds up.
 */
const W = 220; // plate width (x)
const D = 150; // plate depth (y)
const T = 7; // plate thickness
const COS = Math.cos(Math.PI / 6);
const SIN = Math.sin(Math.PI / 6);
const iso = (x: number, y: number, z: number): [number, number] => [(x - y) * COS, (x + y) * SIN - z];
const pts = (list: [number, number][]) => list.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

const query = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useReducedMotion = () => useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);

export function StackDiagram({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const [spread, setSpread] = useState(0);
  const [active, setActive] = useState<LayerId | null>(null);

  useEffect(() => {
    if (still) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // 0 while the stack sits in view, 1 once it has scrolled half a screen up.
      setSpread(Math.min(1, Math.max(0, -rect.top / (window.innerHeight * 0.55))));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, [still]);

  const gap = 30 + spread * 26;
  const n = layers.length;
  // Top layer first in the data; draw from the bottom up so upper plates cover lower ones.
  const drawn = layers.map((layer, i) => ({ layer, z: (n - 1 - i) * gap })).reverse();
  const top = (n - 1) * gap + 18;
  const [minX, maxX] = [iso(0, D, 0)[0], iso(W, 0, 0)[0]];
  const vb = { x: minX - 12, y: -top - 16, w: maxX - minX + 190, h: top + (W + D) * SIN + T + 32 };

  const activeApps = active ? apps.filter((a) => appLayers[a.slug].includes(active)) : [];
  const activeLayer = layers.find((l) => l.id === active);

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label={`${site.every[lang]} ${layers.map((l) => l.name[lang]).join(", ")}`}
        onMouseLeave={() => setActive(null)}
      >
        {drawn.map(({ layer, z }) => {
          const i = layers.indexOf(layer);
          const on = active === layer.id;
          const dim = active && !on;
          const lift = on ? 10 : 0;
          const zz = z + lift;
          const topFace = pts([iso(0, 0, zz), iso(W, 0, zz), iso(W, D, zz), iso(0, D, zz)]);
          const right = pts([iso(W, 0, zz), iso(W, D, zz), iso(W, D, zz - T), iso(W, 0, zz - T)]);
          const front = pts([iso(0, D, zz), iso(W, D, zz), iso(W, D, zz - T), iso(0, D, zz - T)]);
          const [lx, ly] = iso(W, 0, zz);
          return (
            <g
              key={layer.id}
              className="ak-plate cursor-pointer"
              style={{ "--i": n - 1 - i, opacity: dim ? 0.28 : 1 } as React.CSSProperties}
              onMouseEnter={() => setActive(layer.id)}
              onFocus={() => setActive(layer.id)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              role="button"
              aria-label={layer.name[lang]}
            >
              <polygon points={front} fill={layer.color} style={{ filter: "brightness(0.72)" }} />
              <polygon points={right} fill={layer.color} style={{ filter: "brightness(0.55)" }} />
              <polygon points={topFace} fill={layer.color} stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
              {/* Leader line and label to the right of the plate's back corner. */}
              <line x1={lx + 4} y1={ly} x2={lx + 34} y2={ly} stroke="currentColor" strokeOpacity={on ? 0.9 : 0.35} strokeWidth="0.8" />
              <text x={lx + 40} y={ly + 4} className="fill-current text-[13px]" fontWeight={on ? 700 : 500}>
                {layer.name[lang]}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-2 min-h-[3em] text-sm text-muted" aria-live="polite">
        {activeLayer ? (
          <>
            <b className="font-semibold text-ink">{activeLayer.name[lang]}</b> · {site.usedBy[lang]}{" "}
            {activeApps.map((a) => a.name).join(", ")}
          </>
        ) : (
          site.hover[lang]
        )}
      </p>
    </div>
  );
}
