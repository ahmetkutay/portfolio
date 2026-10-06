"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  apps,
  education,
  experience,
  hobbies,
  lab,
  links,
  now,
  principles,
  stats,
  toolbox,
  ui,
  type App,
  type Lang,
} from "@/lib/content";
import { SUMMIT, campById, camps, ex, formatMetres, type CampId } from "@/lib/expedition";
import { setLang, useIstanbulTime, useLang, useReveal } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Altimeter } from "./altimeter";
import { AscentChart } from "./ascent-chart";
import { TopoMap } from "./topo-map";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("font-mono text-[11px] uppercase tracking-[0.16em]", className)}>{children}</span>;
}

function CropMarks() {
  const corner = "pointer-events-none absolute h-3 w-3 border-bone/40";
  return (
    <>
      <span className={cn(corner, "-left-px -top-px border-l border-t")} />
      <span className={cn(corner, "-right-px -top-px border-r border-t")} />
      <span className={cn(corner, "-bottom-px -left-px border-b border-l")} />
      <span className={cn(corner, "-bottom-px -right-px border-b border-r")} />
    </>
  );
}

function CampHeader({ id, lang, title }: { id: CampId; lang: Lang; title?: readonly string[] }) {
  const camp = campById(id);
  const index = camps.indexOf(camp);
  return (
    <div data-reveal className="mb-14 sm:mb-20">
      <div className="flex items-center gap-4 text-bone/50">
        <Mono className="text-signal">{String(index).padStart(2, "0")}</Mono>
        <Mono>{camp.name[lang]}</Mono>
        <span className="tick-rule h-2 flex-1" />
        <Mono className="tabular-nums text-bone">{formatMetres(camp.altitude)}</Mono>
      </div>
      {title && (
        <h2 className="font-wide mt-8 text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]">
          {title[0]}
          <br />
          <span className="text-bone/35">{title[1]}</span>
        </h2>
      )}
    </div>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  return (
    <div className="flex font-mono text-[11px]" role="group" aria-label="Language">
      {(["en", "tr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "px-2 py-1 uppercase tracking-[0.14em] transition",
            lang === code ? "text-bone underline decoration-signal decoration-2 underline-offset-4" : "text-bone/40 hover:text-bone",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function Header({ lang }: { lang: Lang }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-night/75 backdrop-blur-xl">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <a href="#base" className="flex items-baseline gap-3">
          <span className="font-wide text-sm font-extrabold tracking-tight">A.K.K.</span>
          <Mono className="hidden text-bone/45 sm:inline">{ex.log[lang]} — 2026</Mono>
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {camps.slice(1).map((camp, index) => (
            <a key={camp.id} href={`#${camp.id}`} className="group flex items-baseline gap-1.5">
              <Mono className="text-signal/80">{String(index + 1).padStart(2, "0")}</Mono>
              <Mono className="text-bone/60 transition group-hover:text-bone">{camp.nav[lang]}</Mono>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} />
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-signal px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-night transition hover:bg-bone"
          >
            {ui.resume[lang]} ↓
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const time = useIstanbulTime();
  return (
    <section id="base" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-14">
      <TopoMap lang={lang} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_0%_100%,var(--color-night)_35%,transparent_100%)]" />

      <div className="wrap pointer-events-none relative mt-8 flex flex-wrap items-start justify-between gap-4 text-bone/55">
        <div className="fade-in flex flex-col gap-1">
          <Mono className="text-bone">{campById("base").name[lang]} · 0 m</Mono>
          <Mono>{ex.coords} · {ui.istanbul[lang]} {time && `· ${time}`}</Mono>
        </div>
        <Mono className="fade-in hidden items-center gap-2 [animation-delay:200ms] md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#7bd88f] motion-reduce:animate-none" />
          {ui.hero.available[lang]}
        </Mono>
      </div>

      <div className="wrap pointer-events-none relative mt-auto pb-10 pt-24">
        <h1 lang="en" className="font-wide text-[clamp(2.9rem,10vw,10rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]">
          <span className="line-mask">
            <span style={{ animationDelay: "100ms" }}>Ahmet Kutay</span>
          </span>
          <span className="line-mask">
            <span style={{ animationDelay: "220ms" }}>
              Karacair<span className="text-signal">.</span>
            </span>
          </span>
        </h1>

        <div className="fade-in mt-10 grid gap-10 [animation-delay:450ms] lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-bone/75">{ex.hero.role[lang]}</p>
            <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
              <a href="#routes" className="group inline-flex items-center gap-3 bg-bone px-5 py-3 text-sm font-semibold text-night transition hover:bg-signal">
                {ui.hero.primary[lang]}
                <span aria-hidden="true" className="transition group-hover:translate-y-0.5">↓</span>
              </a>
              <a href={`mailto:${links.email}`} className="link-underline py-1 text-sm text-bone/80 hover:text-bone">
                {links.email}
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-3 border-t border-line pt-5">
            {stats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="font-wide text-4xl font-extrabold">{stat.value}</dt>
                <dd className="mt-1 pr-3 text-xs leading-snug text-bone/50">{stat.label[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 hidden items-center justify-between text-bone/40 md:flex">
          <Mono>↓ {ex.hero.scroll[lang]}</Mono>
          <Mono>{ex.hero.hint[lang]}</Mono>
        </div>
      </div>
    </section>
  );
}

function Studio({ lang }: { lang: Lang }) {
  return (
    <section id="studio" className="wrap scroll-mt-14 py-20 sm:py-28">
      <CampHeader id="studio" lang={lang} />
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div data-reveal>
          <Mono className="text-bone/50">{ex.studio.kicker[lang]}</Mono>
          <div className="mt-6 flex items-center gap-5">
            <Image src="/brand/omnia-mark.png" alt="" width={256} height={141} className="h-12 w-auto sm:h-16" />
          </div>
          <h2 lang="en" className="font-wide mt-6 text-[clamp(2.75rem,7.5vw,7rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]">
            Omnia
            <br />
            Potentia
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/70">{ui.studio.body[lang]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.studio} target="_blank" rel="noopener noreferrer" className="bg-bone px-5 py-3 text-sm font-semibold text-night transition hover:bg-signal">
              omniapotentia.com ↗
            </a>
            <a href={links.studioGithub} target="_blank" rel="noopener noreferrer" className="px-5 py-3 text-sm ring-1 ring-bone/25 transition hover:ring-bone">
              GitHub ↗
            </a>
          </div>
        </div>

        <div data-reveal style={delay(120)} className="relative self-end border border-line bg-night-2 p-6 sm:p-8">
          <CropMarks />
          <div className="flex items-center justify-between text-bone/50">
            <Mono>{ex.studio.roster[lang]}</Mono>
            <Mono>01 / 01</Mono>
          </div>
          <p lang="en" className="font-wide mt-6 text-2xl font-bold uppercase">
            A. K. Karacair
          </p>
          <Mono className="text-signal">{ui.studio.role[lang]}</Mono>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-6">
            {ex.studio.roles[lang].map((role) => (
              <li key={role} className="flex items-center gap-2.5 text-sm text-bone/80">
                <span className="flex h-4 w-4 items-center justify-center bg-signal text-[10px] font-bold text-night">✓</span>
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm text-bone/55">{ex.studio.one[lang]}</p>
          <div className="mt-5 border-t border-line pt-5">
            <Mono className="text-bone/45">{ui.hero.now[lang]}</Mono>
            <ul className="mt-3 space-y-3">
              {now.map((item) => (
                <li key={item.label.en} className="text-sm">
                  <span className="text-bone">{item.label[lang]}</span>
                  <span className="block text-bone/50">{item.detail[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const panelStyle: Record<App["slug"], string> = {
  onelior:
    "bg-[repeating-radial-gradient(circle_at_72%_22%,transparent_0_26px,rgba(255,255,255,0.28)_26px_27px),linear-gradient(165deg,#fcd9bc_0%,#e6c0c4_45%,#9a82c2_100%)]",
  cevixa:
    "bg-[repeating-radial-gradient(circle_at_30%_70%,transparent_0_26px,rgba(203,220,78,0.16)_26px_27px),#192020]",
  dawnia:
    "bg-[repeating-radial-gradient(circle_at_80%_35%,transparent_0_26px,rgba(255,255,255,0.16)_26px_27px),linear-gradient(180deg,#46325c_0%,#a9637a_45%,#e7a46e_75%,#f0cd98_100%)]",
  travelersbase:
    "bg-[repeating-radial-gradient(circle_at_60%_50%,transparent_0_26px,rgba(140,200,255,0.13)_26px_27px),#0f2433]",
};

function Phone({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("rounded-[14%/6.5%] bg-[#111] p-[2.6%] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10", className)}>
      <Image src={src} alt={alt} width={598} height={1300} sizes="(min-width: 1024px) 16vw, 40vw" className="h-auto w-full rounded-[11.5%/5.3%]" />
    </div>
  );
}

const lift = "transition duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:-translate-y-3";

function RoutePanel({ app, lang }: { app: App; lang: Lang }) {
  switch (app.slug) {
    case "onelior":
      return (
        <>
          <Phone src="/apps/onelior/climb.jpg" alt="Onelior Climb screen" className={cn("absolute left-[14%] top-[16%] w-[34%] -rotate-[6deg] max-lg:top-[12%]", lift)} />
          <Phone src="/apps/onelior/activity.jpg" alt="Onelior Activity screen with the stat compass" className={cn("absolute right-[12%] top-[26%] w-[32%] rotate-[5deg] delay-75 max-lg:top-[22%]", lift)} />
        </>
      );
    case "dawnia":
      return (
        <>
          <Phone src="/apps/dawnia/today.jpg" alt="Dawnia Today screen" className={cn("absolute left-[14%] top-[16%] w-[33%] -rotate-[5deg] max-lg:top-[12%]", lift)} />
          <Phone src="/apps/dawnia/habits.jpg" alt="Dawnia Habits screen" className={cn("absolute right-[13%] top-[26%] w-[31%] rotate-[6deg] delay-75 max-lg:top-[22%]", lift)} />
        </>
      );
    case "cevixa":
      return (
        <>
          <Image
            src="/apps/cevixa/icon.svg"
            alt=""
            width={320}
            height={320}
            className={cn("absolute left-1/2 top-[40%] w-[36%] max-w-64 -translate-x-1/2 -translate-y-1/2 rounded-[22%] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)]", lift)}
          />
          <div className="absolute bottom-[8%] left-1/2 w-[70%] max-w-80 -translate-x-1/2 bg-[#f6f6ef] p-4 text-[#192020]">
            <div className="flex items-baseline justify-between">
              <Mono className="text-[#6b7070]">{lang === "tr" ? "Bu ay kalan" : "Left this month"}</Mono>
              <span className="text-xl font-semibold tabular-nums">€737.20</span>
            </div>
            <div className="mt-3 h-1.5 bg-[#e3e4d8]">
              <div className="h-full w-[63%] bg-[#cbdc4e]" />
            </div>
          </div>
        </>
      );
    case "travelersbase":
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-wide text-[clamp(3rem,8vw,6rem)] font-extrabold uppercase leading-none text-[#f6c873]">WIP</span>
          <Mono className="text-white/60">{lang === "tr" ? "Patika yapım aşamasında" : "Trail under construction"}</Mono>
        </div>
      );
  }
}

function RouteCard({ app, index, lang }: { app: App; index: number; lang: Lang }) {
  const rows = [
    { label: ex.routes.category[lang], value: app.category[lang] },
    { label: ex.routes.platforms[lang], value: <span lang="en">{app.platforms.join(" · ")}</span> },
    { label: ex.routes.grade[lang], value: ui.status[app.status][lang] },
  ];
  return (
    <article id={`route-${app.slug}`} data-reveal className="group relative scroll-mt-20 border border-line bg-night-2">
      <CropMarks />
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 text-bone/50 sm:px-7">
        <Mono>
          <span className="text-signal">{ex.routes.route[lang]} {String(index + 1).padStart(2, "0")}</span> — <span lang="en">{app.name}</span>
        </Mono>
        <Mono className="flex items-center gap-2">
          <span className={cn("h-2 w-2 rotate-45", app.status === "live" ? "bg-[#7bd88f]" : app.status === "soon" ? "bg-[#f2c14e]" : "bg-bone/40")} />
          {ui.status[app.status][lang]}
        </Mono>
      </div>

      <div className="grid lg:grid-cols-12">
        <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:col-span-5 lg:p-10">
          <div className="flex flex-wrap items-center gap-4">
            {app.icon && <Image src={app.icon} alt="" width={56} height={56} className="h-14 w-14 rounded-[24%]" />}
            <h3 lang="en" className="font-wide text-[clamp(1.5rem,6.5vw,3.75rem)] lg:text-[clamp(2.25rem,3.6vw,3.75rem)] font-extrabold uppercase leading-none tracking-[-0.02em]">
              {app.name}
            </h3>
          </div>
          <p className="mt-6 text-xl font-medium text-bone">{app.tagline[lang]}</p>
          <p className="mt-3 leading-relaxed text-bone/65">{app.summary[lang]}</p>

          <dl className="mt-8 border-t border-line">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line py-2.5 text-sm">
                <dt>
                  <Mono className="text-bone/40">{row.label}</Mono>
                </dt>
                <dd className="text-bone/85">{row.value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line py-2.5 text-sm">
              <dt>
                <Mono className="text-bone/40">{ex.routes.stack[lang]}</Mono>
              </dt>
              <dd className="text-bone/85">{app.stack.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <Mono className="text-bone/40">{ex.routes.notes[lang]}</Mono>
            <ol className="mt-4 space-y-3">
              {app.built.map((note, noteIndex) => (
                <li key={note.en} className="grid grid-cols-[2rem_1fr] text-[15px] leading-relaxed text-bone/75">
                  <span className="font-mono text-xs leading-relaxed text-signal">{String(noteIndex + 1).padStart(2, "0")}</span>
                  {note[lang]}
                </li>
              ))}
            </ol>
          </div>

          {(app.url || app.appStoreUrl) && (
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8 text-sm font-medium">
              {app.appStoreUrl && (
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {ui.appStore[lang]} ↗
                </a>
              )}
              {app.url && (
                <a href={app.url} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {app.url.replace("https://", "")} ↗
                </a>
              )}
            </div>
          )}
        </div>

        <div
          className={cn(
            "relative overflow-hidden border-t border-line lg:col-span-7 lg:border-l lg:border-t-0",
            app.status === "wip" ? "aspect-[16/9] lg:aspect-auto" : "aspect-[5/4] lg:aspect-auto lg:min-h-[38rem]",
            panelStyle[app.slug],
          )}
        >
          <RoutePanel app={app} lang={lang} />
        </div>
      </div>
    </article>
  );
}

function Routes({ lang }: { lang: Lang }) {
  return (
    <section id="routes" className="wrap scroll-mt-14 py-20 sm:py-28">
      <CampHeader id="routes" lang={lang} title={ex.routes.title[lang]} />
      <p data-reveal className="-mt-6 mb-16 max-w-xl text-lg leading-relaxed text-bone/65">
        {ex.routes.intro[lang]}
      </p>
      <div className="space-y-10 lg:space-y-14">
        {apps.map((app, index) => (
          <RouteCard key={app.slug} app={app} index={index} lang={lang} />
        ))}
      </div>

      <div data-reveal className="mt-14 grid gap-6 border border-dashed border-bone/25 p-6 sm:p-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Mono className="text-bone/45">{ex.routes.unmarked[lang]}</Mono>
          <p lang="en" className="font-wide mt-4 text-3xl font-extrabold uppercase">
            {lab.name}
          </p>
        </div>
        <div className="lg:col-span-7">
          <p className="leading-relaxed text-bone/65">{lab.summary[lang]}</p>
          <p className="mt-4 font-mono text-xs text-bone/45">{lab.tags.join(" / ")}</p>
        </div>
      </div>
    </section>
  );
}

function Ascent({ lang }: { lang: Lang }) {
  const log = experience.flatMap((job) => job.roles.map((role) => ({ ...role, company: job.company, location: job.location })));
  return (
    <section id="ascent" className="wrap scroll-mt-14 py-20 sm:py-28">
      <CampHeader id="ascent" lang={lang} title={ex.ascent.title[lang]} />
      <p data-reveal className="-mt-6 mb-14 max-w-xl text-lg leading-relaxed text-bone/65">
        {ex.ascent.intro[lang]}
      </p>
      <div data-reveal className="relative border border-line bg-night-2 px-3 pb-4 pt-6 sm:px-6">
        <CropMarks />
        <div className="overflow-x-auto">
          <div className="min-w-[720px]">
            <AscentChart lang={lang} />
          </div>
        </div>
      </div>

      <ol className="mt-16 border-t border-line">
        {log.map((entry) => (
          <li key={entry.title + entry.period} data-reveal className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <Mono className="tabular-nums text-signal">
                {entry.period.replace("Present", lang === "tr" ? "Günümüz" : "Present")}
              </Mono>
              <p className="mt-2 text-sm text-bone/50">
                {entry.company} · {entry.location[lang]}
              </p>
            </div>
            <div className="md:col-span-9">
              <h3 lang="en" className="font-wide text-xl font-bold uppercase">
                {entry.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {entry.points.map((point) => (
                  <li key={point.en} className="text-[15px] leading-relaxed text-bone/70">
                    {point[lang]}
                  </li>
                ))}
              </ul>
              {entry.metrics && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.metrics.map((metric) => (
                    <span key={metric.en} className="border border-signal/40 px-2.5 py-1 font-mono text-[11px] text-signal">
                      {metric[lang]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Kit({ lang }: { lang: Lang }) {
  return (
    <section id="kit" className="wrap scroll-mt-14 py-20 sm:py-28">
      <CampHeader id="kit" lang={lang} />
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h2 data-reveal className="font-wide text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            {ex.kit.rules[lang]}
          </h2>
          <ol className="mt-10 space-y-8">
            {principles.map((rule, index) => (
              <li key={rule.title.en} data-reveal style={delay(index * 90)} className="grid grid-cols-[3rem_1fr]">
                <span className="font-mono text-sm text-signal">R{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{rule.title[lang]}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-bone/65">{rule.text[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <div data-reveal className="border border-line p-5">
              <Mono className="text-bone/45">{ui.education[lang]}</Mono>
              <p className="mt-3 font-semibold">{education.school}</p>
              <p className="mt-1 text-sm text-bone/55">{education.degree[lang]}</p>
            </div>
            <div data-reveal style={delay(90)} className="border border-line p-5">
              <Mono className="text-bone/45">{ui.hobbies[lang]}</Mono>
              <p className="mt-3 text-sm leading-relaxed text-bone/70">{hobbies[lang]}</p>
            </div>
          </div>
        </div>

        <div data-reveal style={delay(120)} className="relative self-start border border-line bg-night-2 p-6 sm:p-8">
          <CropMarks />
          <div className="flex items-center justify-between text-bone/50">
            <Mono>{ex.kit.pack[lang]}</Mono>
            <Mono>{toolbox.reduce((sum, group) => sum + group.items.length, 0)} items</Mono>
          </div>
          <div className="mt-6 space-y-7">
            {toolbox.map((group, index) => (
              <div key={group.group.en}>
                <Mono className="text-signal">
                  {String(index + 1).padStart(2, "0")} · {group.group[lang]}
                </Mono>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-bone/80">
                      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center border border-bone/35 text-[9px] leading-none text-signal">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Summit({ lang }: { lang: Lang }) {
  const channels = [
    { label: "LinkedIn", value: "in/ahmetkutay", href: links.linkedin },
    { label: "GitHub", value: "ahmetkutay", href: links.github },
    { label: "Omnia Potentia", value: "omniapotentia.com", href: links.studio },
    { label: "CV", value: "PDF ↓", href: links.resume },
  ];
  return (
    <section id="summit" className="relative overflow-hidden border-t border-line">
      <span
        aria-hidden="true"
        className="font-wide pointer-events-none absolute -right-[4vw] top-40 select-none text-[24vw] font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_rgba(233,228,216,0.09)]"
      >
        {SUMMIT.toLocaleString("de-DE")}
      </span>
      <div className="wrap relative py-20 sm:py-28">
        <CampHeader id="summit" lang={lang} />
        <div data-reveal className="flex items-center gap-3">
          <span className="h-3 w-3 rotate-45 bg-signal" />
          <Mono className="text-bone/60">{ex.summit.reached[lang]}</Mono>
        </div>
        <h2 data-reveal className="font-wide mt-8 text-[clamp(2.5rem,7.5vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em]">
          {ex.summit.title[lang][0]}
          <br />
          <span className="text-signal">{ex.summit.title[lang][1]}</span>
        </h2>
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div data-reveal className="lg:col-span-7">
            <p className="max-w-lg text-lg leading-relaxed text-bone/65">{ui.contact.body[lang]}</p>
            <a href={`mailto:${links.email}`} className="group mt-10 inline-flex flex-wrap items-center gap-4 text-[clamp(1.5rem,3.6vw,3rem)] font-semibold tracking-[-0.01em]">
              <span className="link-underline pb-1">{links.email}</span>
              <span className="flex h-12 w-12 items-center justify-center bg-signal text-xl text-night transition duration-500 group-hover:rotate-45">↗</span>
            </a>
          </div>
          <ul data-reveal style={delay(120)} className="border-t border-line lg:col-span-5">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-line py-4 transition hover:pl-2 hover:text-signal"
                >
                  <Mono className="text-bone/45">
                    <span lang="en">{channel.label}</span>
                  </Mono>
                  <span>{channel.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Expedition() {
  const lang = useLang();
  useReveal();

  return (
    <div className="grain min-h-screen overflow-x-clip">
      <Header lang={lang} />
      <Altimeter lang={lang} />
      <main>
        <Hero lang={lang} />
        <Studio lang={lang} />
        <Routes lang={lang} />
        <Ascent lang={lang} />
        <Kit lang={lang} />
        <Summit lang={lang} />
      </main>
      <footer className="border-t border-line">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-7 text-bone/40">
          <Mono>
            {ex.end[lang]} · © {new Date().getFullYear()} <span lang="en">Ahmet Kutay Karacair</span>
          </Mono>
          <Mono>{ui.footer[lang]}</Mono>
        </div>
      </footer>
    </div>
  );
}
