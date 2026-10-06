"use client";

import { useEffect, useRef } from "react";
import type { Lang } from "@/lib/content";
import { SUMMIT, camps, formatMetres } from "@/lib/expedition";

/**
 * Maps scroll position to altitude. Each camp section reaches its fixed altitude
 * as it arrives near the top of the viewport; the bottom of the page is the summit.
 */
export function Altimeter({ lang }: { lang: Lang }) {
  const markerRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const campRef = useRef<HTMLSpanElement>(null);
  const mobileValueRef = useRef<HTMLSpanElement>(null);
  const mobileCampRef = useRef<HTMLSpanElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const langRef = useRef(lang);

  useEffect(() => {
    langRef.current = lang;
    window.dispatchEvent(new Event("scroll"));
  }, [lang]);

  useEffect(() => {
    let anchors: { scroll: number; altitude: number }[] = [];
    let frame = 0;

    const measure = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      let previous = 0;
      anchors = camps.map((camp, index) => {
        const section = document.getElementById(camp.id);
        let scroll = section ? section.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.35 : 0;
        if (index === 0) scroll = 0;
        if (index === camps.length - 1) scroll = max;
        scroll = Math.min(max, Math.max(previous, scroll));
        previous = scroll;
        return { scroll, altitude: camp.altitude };
      });
    };

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      let altitude = 0;
      let campIndex = 0;
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i];
        const b = anchors[i + 1];
        if (y >= a.scroll) campIndex = i;
        if (y >= a.scroll && y <= b.scroll) {
          const t = b.scroll === a.scroll ? 1 : (y - a.scroll) / (b.scroll - a.scroll);
          altitude = a.altitude + t * (b.altitude - a.altitude);
          break;
        }
        if (y > b.scroll) altitude = b.altitude;
      }
      if (anchors.length && y >= anchors[anchors.length - 1].scroll - 1) {
        altitude = SUMMIT;
        campIndex = anchors.length - 1;
      }
      const text = formatMetres(altitude);
      const camp = camps[campIndex].name[langRef.current];
      if (markerRef.current) markerRef.current.style.bottom = `${(altitude / SUMMIT) * 100}%`;
      for (const node of [valueRef.current, mobileValueRef.current]) if (node) node.textContent = text;
      for (const node of [campRef.current, mobileCampRef.current]) if (node) node.textContent = camp;
      // Stay out of the way at base camp, where the hero already shows 0 m.
      if (mobileRef.current) mobileRef.current.style.opacity = altitude < 50 ? "0" : "1";
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    const observer = new ResizeObserver(onResize);
    observer.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Altimeter"
        className="fixed right-6 top-1/2 z-40 hidden h-[58vh] -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.14em] xl:block"
      >
        <div className="relative h-full w-px bg-bone/20">
          {Array.from({ length: 18 }, (_, i) => (
            <span key={i} className="absolute right-0 h-px w-1.5 bg-bone/25" style={{ bottom: `${((i * 500) / SUMMIT) * 100}%` }} />
          ))}
          {camps.map((camp) => (
            <a
              key={camp.id}
              href={`#${camp.id}`}
              className="absolute left-3 translate-y-1/2 text-bone/40 transition hover:text-bone"
              style={{ bottom: `${(camp.altitude / SUMMIT) * 100}%` }}
            >
              {camp.short}
            </a>
          ))}
          <div ref={markerRef} className="absolute left-0 translate-y-1/2" style={{ bottom: 0 }}>
            <span className="absolute -left-[5px] -top-[5px] block h-[11px] w-[11px] rotate-45 bg-signal" />
            <span className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-end whitespace-nowrap">
              <span ref={valueRef} className="text-[12px] tabular-nums text-bone">
                0 m
              </span>
              <span ref={campRef} className="text-bone/45" />
            </span>
          </div>
        </div>
      </nav>

      <div ref={mobileRef} style={{ opacity: 0 }} className="pointer-events-none fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full transition-opacity bg-night/85 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] ring-1 ring-bone/15 backdrop-blur xl:hidden">
        <span className="h-2 w-2 rotate-45 bg-signal" />
        <span ref={mobileValueRef} className="tabular-nums text-bone">
          0 m
        </span>
        <span ref={mobileCampRef} className="text-bone/50" />
      </div>
    </>
  );
}
