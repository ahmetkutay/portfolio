"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Lang } from "@/lib/content";

const LANG_KEY = "lang";
const langListeners = new Set<() => void>();

function subscribeLang(listener: () => void) {
  langListeners.add(listener);
  return () => {
    langListeners.delete(listener);
  };
}

function readLang(): Lang {
  const stored = window.localStorage.getItem(LANG_KEY);
  if (stored === "en" || stored === "tr") return stored;
  return navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
}

export function setLang(lang: Lang) {
  window.localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  langListeners.forEach((listener) => listener());
}

/** Visitor language: stored choice, then browser language, then English (static HTML). */
export function useLang(): Lang {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => "en" as Lang);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return lang;
}

const clock = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Istanbul",
});

function subscribeClock(listener: () => void) {
  const id = window.setInterval(listener, 15_000);
  return () => window.clearInterval(id);
}

/** Current time in Istanbul, empty during static render. */
export function useIstanbulTime() {
  return useSyncExternalStore(
    subscribeClock,
    () => clock.format(new Date()),
    () => "",
  );
}

/** Fades `[data-reveal]` elements in as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
