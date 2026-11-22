"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/content";
import { facts, impact, me, roles, skills, t, work } from "@/lib/cv";
import { setLang, useLang } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Pipeline } from "./pipeline";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const btn = "inline-flex h-10 items-center gap-2 rounded-[10px] px-[18px] text-sm font-semibold transition active:scale-[0.97]";
const btnPrimary = cn(btn, "bg-ink text-bg hover:bg-white");
const btnGhost = cn(btn, "border border-line bg-white/[0.02] hover:border-ink/30");

/** Reveals [data-reveal] elements and counts up [data-count] numbers when they scroll in. */
function useReveal(lang: Lang) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = (el: HTMLElement) => {
      if (reduce || el.dataset.done) return;
      el.dataset.done = "1";
      const to = Number(el.dataset.count), dec = Number(el.dataset.dec ?? 0), pre = el.dataset.prefix ?? "", suf = el.dataset.suffix ?? "";
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / 1400), e = 1 - (1 - k) ** 3;
        el.textContent = pre + (to * e).toFixed(dec) + suf;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          e.target.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
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
  const nav = [["#impact", t.nav.impact], ["#experience", t.nav.experience], ["#work", t.nav.work], ["#contact", t.nav.contact]] as const;
  return (
    <header className={cn("fixed inset-x-0 top-0 z-30 flex h-[60px] items-center border-b border-transparent transition-colors", solid && "border-line bg-bg/70 backdrop-blur-xl")}>
      <div className="wrap flex w-full items-center justify-between">
        <a href="#" className="text-[15px] font-semibold tracking-tight">A. K. Karacair</a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          {nav.map(([href, label]) => (
            <a key={href} href={href} className="hidden transition hover:text-ink md:inline">{label[lang]}</a>
          ))}
          <div className="flex rounded-[8px] border border-line p-0.5 font-mono text-xs" role="group" aria-label="Language">
            {(["en", "tr"] as const).map((l) => (
              <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l} className={cn("rounded-[6px] px-2 py-1 uppercase transition", lang === l ? "bg-ink text-bg" : "hover:text-ink")}>
                {l}
              </button>
            ))}
          </div>
          <a href={me.cv} className={cn(btnGhost, "h-9 text-ink")}>CV</a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <Pipeline />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-bg" />
      <div className="wrap pointer-events-none relative z-10 w-full">
        <p className="ak-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pl-2.5 pr-3 text-[13px] text-muted">
          <i className="h-2 w-2 rounded-full bg-[#3ddc84] shadow-[0_0_0_4px_rgba(61,220,132,.15)]" />
          {t.open[lang]}
        </p>
        <h1 className="ak-rise mt-6 text-[clamp(48px,7vw,100px)] font-semibold leading-[0.95] tracking-[-0.045em] [animation-delay:80ms]">
          {me.first}
          <span className="block font-light text-muted">{me.last}</span>
        </h1>
        <p className="ak-rise mt-6 max-w-[520px] text-lg text-muted [animation-delay:160ms]">
          <b className="font-semibold text-ink">{t.title[lang]}</b> {t.pitch[lang]}
        </p>
        <div className="ak-rise pointer-events-auto mt-8 flex flex-wrap gap-2.5 [animation-delay:240ms]">
          <a className={btnPrimary} href={me.cv}>{t.downloadCv[lang]}</a>
          <a className={btnGhost} href={`mailto:${me.email}`}>{t.emailMe[lang]} <Arrow /></a>
        </div>
      </div>
      <p className="absolute bottom-9 right-[var(--gutter)] z-10 hidden text-right font-mono text-xs text-dim md:block">
        {t.legend[lang][0]}<br />{t.legend[lang][1]}
      </p>
    </section>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-[12.5px] text-signal">{`// ${children.toLowerCase()}`}</p>;
}

function Impact({ lang }: { lang: Lang }) {
  return (
    <section id="impact" className="wrap scroll-mt-16 pt-[clamp(90px,11vw,140px)]">
      <div data-reveal><Eyebrow>{t.nav.impact.en}</Eyebrow><h2 className="h2">{t.impactTitle[lang]}</h2></div>
      <div data-reveal className="mt-12 grid overflow-hidden rounded-[18px] border border-line sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((x) => (
          <div key={x.label.en} className="border-b border-r border-line bg-gradient-to-b from-white/[0.02] to-transparent p-7">
            <b className="block text-[clamp(40px,4.4vw,60px)] font-semibold leading-none tracking-[-0.04em] tabular-nums" data-count={x.n} data-prefix={x.prefix ?? ""} data-suffix={x.suffix ?? ""} data-dec={x.dec ?? 0}>
              {x.prefix}{x.n}{x.suffix}
            </b>
            <span className="mt-3 block max-w-[28ch] text-[14.5px] text-muted">{x.label[lang]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="wrap scroll-mt-16 pt-[clamp(90px,11vw,140px)]">
      <div data-reveal><Eyebrow>{t.nav.experience.en}</Eyebrow><h2 className="h2">{t.experienceTitle[lang]}</h2></div>
      <div className="mt-12 border-t border-line">
        {roles.map((r) => (
          <article key={r.company} data-reveal className="grid gap-3.5 border-b border-line py-9 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">
            <div>
              <p className="font-mono text-[12.5px] text-dim">{r.period[lang]}</p>
              <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em]">{r.company}<small className="block text-sm font-normal tracking-normal text-muted">{r.where[lang]}</small></p>
              {r.now && <span className="mt-2.5 inline-block rounded-full border border-signal/35 px-2 py-0.5 font-mono text-[11px] text-signal">{t.current[lang]}</span>}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <ul className="mt-3 grid gap-2.5 text-[15.5px] text-[#c3c8cf]">
                {r.points.map((p) => (
                  <li key={p.en} className="relative pl-[18px] before:absolute before:left-0 before:top-[.72em] before:h-px before:w-1.5 before:bg-signal">{p[lang]}</li>
                ))}
              </ul>
              <Chips items={r.stack} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {items.map((s) => <span key={s} className="rounded-[6px] border border-line px-2 py-0.5 font-mono text-[11.5px] text-muted">{s}</span>)}
    </div>
  );
}

function Work({ lang }: { lang: Lang }) {
  return (
    <section id="work" className="wrap scroll-mt-16 pt-[clamp(90px,11vw,140px)]">
      <div data-reveal>
        <Eyebrow>{"Selected work"}</Eyebrow>
        <h2 className="h2">{t.workTitle[lang]}</h2>
        <p className="mt-4 max-w-[560px] text-[17px] text-muted">{t.workLede[lang]}</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {work.map((w, i) => <WorkCard key={w.slug} w={w} lang={lang} delay={(i % 2) * 90} />)}
      </div>
    </section>
  );
}

function WorkCard({ w, lang, delay }: { w: (typeof work)[number]; lang: Lang; delay: number }) {
  const ref = useRef<HTMLElement>(null);
  return (
    <article
      ref={ref}
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="ak-card group relative isolate flex flex-col gap-3.5 overflow-hidden rounded-[18px] border border-line bg-bg-2 p-7"
    >
      <p className="flex justify-between gap-3 font-mono text-xs text-dim"><span>{w.kind[lang]}</span><span>{w.status[lang]}</span></p>
      <h3 className="text-[28px] font-semibold tracking-[-0.03em]">{w.name}</h3>
      <p className="text-[17px]">{w.headline[lang]}</p>
      <ul className="grid gap-2 text-[14.5px] text-muted">
        {w.points.map((p) => <li key={p.en} className="relative pl-4 before:absolute before:left-0 before:top-[.7em] before:h-[5px] before:w-[5px] before:rounded-[1px] before:bg-dim">{p[lang]}</li>)}
      </ul>
      <Chips items={w.stack} />
      <a className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-signal" href={w.url} target="_blank" rel="noopener noreferrer">{new URL(w.url).hostname} <Arrow /></a>
      <div className={cn("-mx-7 -mb-7 mt-1.5 flex h-[260px] overflow-hidden border-t border-line bg-[#111318]", w.shape === "wide" ? "justify-start pl-7 pt-6" : "justify-center pt-6")}>
        <Image
          src={w.img}
          alt={`${w.name} screen`}
          width={w.shape === "wide" ? 1600 : 598}
          height={w.shape === "wide" ? 911 : 1300}
          className={cn("h-auto transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2", w.shape === "wide" ? "w-[140%] max-w-none rounded-tl-[10px]" : "w-[210px] rounded-t-[26px] shadow-[0_0_0_6px_#1b1e24]")}
        />
      </div>
    </article>
  );
}

function Skills({ lang }: { lang: Lang }) {
  return (
    <section className="wrap pt-[clamp(90px,11vw,140px)]">
      <div data-reveal><Eyebrow>{"Skills"}</Eyebrow><h2 className="h2">{t.skillsTitle[lang]}</h2></div>
      <dl data-reveal className="mt-10 grid gap-x-10 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group.en} className="grid gap-1 border-t border-line py-5 sm:grid-cols-[150px_1fr] sm:gap-4">
            <dt className="font-semibold">{s.group[lang]}</dt>
            <dd className="text-[15px] text-muted">{s.items}</dd>
          </div>
        ))}
      </dl>
      <div data-reveal className="mt-[clamp(90px,11vw,140px)] grid items-center gap-9 rounded-[22px] border border-line bg-bg-2 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(255,106,43,.1),transparent_60%)] p-[clamp(32px,5vw,56px)] md:grid-cols-[auto_1fr_auto]">
        <Image src="/brand/omnia-mark.svg" alt="Omnia Potentia" width={72} height={50} className="h-auto w-[90px]" />
        <div>
          <h3 className="text-[26px] font-semibold tracking-[-0.03em]">{t.freelanceTitle[lang]}</h3>
          <p className="mt-2 max-w-[560px] text-muted">{t.freelanceBody[lang]}</p>
        </div>
        <a className={btnGhost} href={me.studio} target="_blank" rel="noopener noreferrer">omniapotentia.com <Arrow /></a>
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="wrap scroll-mt-16 pt-[clamp(110px,13vw,170px)] text-center">
      <div data-reveal>
        <Eyebrow>{t.nav.contact.en}</Eyebrow>
        <h2 className="mx-auto mt-3 max-w-[14ch] text-[clamp(44px,7vw,96px)] font-semibold leading-none tracking-[-0.04em]">{t.contactTitle[lang]}</h2>
        <p className="mx-auto mt-[18px] max-w-[560px] text-[17px] text-muted">{t.contactLede[lang]}</p>
      </div>
      <a data-reveal href={`mailto:${me.email}`} className="mt-9 inline-block border-b border-signal pb-1 text-[clamp(20px,3vw,34px)] font-medium tracking-[-0.02em]">{me.email}</a>
      <div data-reveal className="mt-7 flex flex-wrap justify-center gap-2.5">
        <a className={btnPrimary} href={me.cv}>{t.downloadCv[lang]}</a>
        <a className={btnGhost} href={me.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
        <a className={btnGhost} href={me.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
      </div>
      <div data-reveal className="mt-24 grid gap-7 border-t border-line pt-7 text-left text-[14.5px] md:grid-cols-3">
        {facts.map((f) => (
          <div key={f.k.en}><h4 className="font-mono text-xs font-normal text-dim">{f.k[lang]}</h4><p className="mt-1.5 text-muted">{f.v[lang]}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Site() {
  const lang = useLang();
  useReveal(lang);
  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-ink">
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Impact lang={lang} />
        <Experience lang={lang} />
        <Work lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="mt-16 border-t border-line pb-10 pt-6 text-[13px] text-dim">
        <div className="wrap flex justify-between gap-3"><span>© {new Date().getFullYear()} {me.name}</span><span>kutaykaracair.com</span></div>
      </footer>
    </div>
  );
}
