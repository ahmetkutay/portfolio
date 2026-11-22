"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/content";
import { impact, me, roleBrief, roles, simple, t, work } from "@/lib/cv";
import { setLang, useLang } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Pipeline } from "./pipeline";

/*
 * Simple and elegant: one column of generous type, three numbers, a short
 * experience list, a work list with a quiet hover preview, and contact.
 * The only motion is a calm pipeline behind the hero and soft reveals.
 */

function useReveal(lang: Lang) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);
}

function Header({ lang }: { lang: Lang }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-30 transition-colors duration-500", solid && "bg-bg/80 backdrop-blur-xl")}>
      <div className="wrap flex h-16 items-center justify-between text-sm">
        <a href="#" className="font-medium tracking-tight">A. K. Karacair</a>
        <nav className="flex items-center gap-7 text-muted">
          <a href="#work" className="hidden transition hover:text-ink sm:inline">{t.nav.work[lang]}</a>
          <a href="#contact" className="hidden transition hover:text-ink sm:inline">{t.nav.contact[lang]}</a>
          <button type="button" onClick={() => setLang(lang === "en" ? "tr" : "en")} className="transition hover:text-ink" aria-label={lang === "en" ? "Türkçe" : "English"}>
            {lang === "en" ? "TR" : "EN"}
          </button>
          <a href={me.cv} className="text-ink transition hover:text-signal">CV</a>
        </nav>
      </div>
    </header>
  );
}

function Section({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="wrap scroll-mt-20 pt-[clamp(110px,14vw,190px)]">
      <div className="grid gap-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
        <p data-reveal className="text-sm text-dim">{label}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}

function Work({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  return (
    <div className="relative" onPointerMove={(e) => {
      const el = preview.current;
      if (el) el.style.transform = `translate(${e.clientX + 32}px, ${e.clientY - 120}px)`;
    }} onPointerLeave={() => setActive(null)}>
      <ul>
        {work.map((w, i) => (
          <li key={w.slug} data-reveal>
            <a
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              onPointerEnter={() => setActive(i)}
              className={cn("group flex items-baseline justify-between gap-6 py-6 transition-colors duration-300", active !== null && active !== i && "text-dim")}
            >
              <span>
                <span className="block text-[clamp(26px,3vw,38px)] font-medium tracking-[-0.03em]">{w.name}</span>
                <span className="mt-1 block text-[15px] text-muted">{w.headline[lang]}</span>
              </span>
              <span className="shrink-0 text-sm text-dim transition group-hover:text-signal">{w.status[lang]} ↗</span>
            </a>
          </li>
        ))}
      </ul>
      <div ref={preview} aria-hidden="true" style={{ transform: "translate(-9999px, 0)" }} className={cn("pointer-events-none fixed left-0 top-0 z-20 hidden h-[260px] w-[200px] overflow-hidden rounded-2xl bg-bg-2 opacity-0 transition-opacity duration-300 lg:block", active !== null && "opacity-100")}>
        {work.map((w, i) => (
          <Image key={w.slug} src={w.img} alt="" width={w.shape === "wide" ? 1600 : 598} height={w.shape === "wide" ? 911 : 1300} className={cn("absolute inset-0 h-full w-full object-cover object-left-top transition-opacity duration-300", active === i ? "opacity-100" : "opacity-0")} />
        ))}
      </div>
    </div>
  );
}

export function Site() {
  const lang = useLang();
  useReveal(lang);
  const top = impact.slice(0, 3);
  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-ink">
      <Header lang={lang} />
      <main>
        <section className="relative flex min-h-svh items-end overflow-hidden pb-[clamp(56px,10vh,110px)]">
          <Pipeline />
          <div className="wrap pointer-events-none relative z-10 w-full">
            <p className="ak-rise text-sm text-muted">{t.title[lang].replace(".", "")} · Istanbul</p>
            <h1 className="ak-rise mt-5 text-[clamp(44px,7vw,104px)] font-medium leading-[0.98] tracking-[-0.045em] [animation-delay:80ms]">
              {me.first}
              <br />
              <span className="text-muted">{me.last}</span>
            </h1>
            <p className="ak-rise mt-7 max-w-[34ch] text-[clamp(18px,1.6vw,21px)] leading-snug text-muted [animation-delay:160ms]">{simple.intro[lang]}</p>
            <div className="ak-rise pointer-events-auto mt-9 flex flex-wrap items-center gap-6 text-[15px] [animation-delay:240ms]">
              <a href={`mailto:${me.email}`} className="rounded-full bg-ink px-5 py-2.5 font-medium text-bg transition hover:bg-white">{t.emailMe[lang]}</a>
              <a href={me.cv} className="text-muted transition hover:text-ink">{t.downloadCv[lang]} →</a>
              <span className="flex items-center gap-2 text-sm text-dim"><i className="h-1.5 w-1.5 rounded-full bg-[#3ddc84]" />{t.open[lang]}</span>
            </div>
          </div>
        </section>

        <section className="wrap pt-[clamp(80px,10vw,140px)]">
          <dl className="grid gap-12 sm:grid-cols-3">
            {top.map((x) => (
              <div key={x.label.en} data-reveal>
                <dt className="text-[clamp(44px,5vw,68px)] font-light leading-none tracking-[-0.04em] tabular-nums">{x.prefix}{x.n}{x.suffix}</dt>
                <dd className="mt-4 max-w-[26ch] text-[15px] text-muted">{x.label[lang]}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="experience" label={simple.experience[lang]}>
          <ul>
            {roles.map((r) => (
              <li key={r.company} data-reveal className="grid gap-1 pb-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
                <div>
                  <h3 className="text-[19px] font-medium">{r.company} <span className="text-muted">— {r.title}</span></h3>
                  <p className="mt-1.5 max-w-[60ch] text-[15px] text-muted">{roleBrief[r.company][lang]}</p>
                </div>
                <p className="text-sm tabular-nums text-dim sm:pt-1">{r.period[lang]}</p>
              </li>
            ))}
          </ul>
          <p data-reveal className="text-sm text-dim">{simple.stack[lang]}</p>
        </Section>

        <Section id="work" label={simple.work[lang]}>
          <Work lang={lang} />
          <p data-reveal className="mt-10 max-w-[60ch] text-[15px] text-muted">
            {simple.studioLine[lang]}{" "}
            <a href={me.studio} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-line underline-offset-4 transition hover:decoration-signal">Omnia Potentia</a>.
          </p>
        </Section>

        <Section id="contact" label={simple.contact[lang]}>
          <h2 data-reveal className="text-[clamp(44px,7vw,96px)] font-medium leading-none tracking-[-0.045em]">{simple.contactTitle[lang]}</h2>
          <a data-reveal href={`mailto:${me.email}`} className="mt-8 inline-block text-[clamp(20px,2.6vw,30px)] tracking-[-0.02em] underline decoration-line decoration-1 underline-offset-[10px] transition hover:decoration-signal">{me.email}</a>
          <p data-reveal className="mt-10 flex flex-wrap gap-7 text-[15px] text-muted">
            <a href={me.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">LinkedIn</a>
            <a href={me.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">GitHub</a>
            <a href={me.cv} className="transition hover:text-ink">CV</a>
          </p>
        </Section>
      </main>
      <footer className="wrap flex justify-between pb-10 pt-[clamp(110px,14vw,190px)] text-[13px] text-dim">
        <span>© {new Date().getFullYear()} {me.name}</span>
        <span>Istanbul</span>
      </footer>
    </div>
  );
}
