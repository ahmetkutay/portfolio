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
import { cn } from "@/lib/utils";
import { AppVisual } from "./app-visuals";
import { setLang, useIstanbulTime, useLang, useReveal } from "./hooks";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

function Label({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3", className)}>
      {index && <span className="mr-3 text-accent">{index}</span>}
      {children}
    </p>
  );
}

function SplitTitle({ lines, className }: { lines: readonly string[]; className?: string }) {
  return (
    <h2 className={cn("font-serif text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.95] tracking-[-0.02em]", className)}>
      {lines[0]}
      <br />
      <em className="text-ink-2">{lines[1]}</em>
    </h2>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("inline-block transition-transform duration-300", className)}>
      →
    </span>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  return (
    <div className="flex rounded-full bg-ink/5 p-0.5 font-mono text-[11px] ring-1 ring-line" role="group" aria-label="Language">
      {(["en", "tr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-[0.14em] transition",
            lang === code ? "bg-ink text-paper" : "text-ink-3 hover:text-ink",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function Header({ lang }: { lang: Lang }) {
  const nav = [
    { href: "#work", label: ui.nav.work[lang] },
    { href: "#studio", label: ui.nav.studio[lang] },
    { href: "#experience", label: ui.nav.experience[lang] },
    { href: "#contact", label: ui.nav.contact[lang] },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-[15px] italic text-paper">
            k
          </span>
          <span className="text-sm font-medium tracking-tight">Kutay Karacair</span>
        </a>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3.5 py-2 text-ink-2 transition hover:bg-ink/5 hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle lang={lang} />
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-paper transition hover:bg-accent"
          >
            {ui.resume[lang]} ↓
          </a>
        </div>
      </div>
    </header>
  );
}

function FounderBadge({ lang }: { lang: Lang }) {
  const text =
    lang === "tr"
      ? "KURUCU · OMNIA POTENTIA · YAZILIM MÜHENDİSİ · "
      : "FOUNDER · OMNIA POTENTIA · SOFTWARE ENGINEER · ";
  return (
    <a
      href="#studio"
      aria-label="Omnia Potentia"
      className="fade-in group absolute right-8 top-56 hidden h-48 w-48 [animation-delay:700ms] lg:block"
    >
      <svg viewBox="0 0 200 200" aria-hidden="true" className="spin-slow h-full w-full">
        <defs>
          <path id="badge-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text className="fill-ink-2 font-mono text-[12px]">
          <textPath href="#badge-circle" textLength="500" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-28 w-28 items-center justify-center rounded-full bg-ink transition duration-500 group-hover:scale-105">
        <Image src="/brand/omnia-mark.png" alt="" width={256} height={141} className="h-auto w-16" />
      </span>
    </a>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const time = useIstanbulTime();
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div className="fade-in flex flex-wrap items-center justify-between gap-4">
        <Label>{ui.hero.eyebrow[lang]}</Label>
        <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4caf6a] opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4caf6a]" />
          </span>
          {ui.hero.available[lang]}
        </p>
      </div>

      <FounderBadge lang={lang} />

      <h1 className="mt-10 font-serif text-[clamp(3.5rem,15vw,12.5rem)] leading-[0.86] tracking-[-0.035em]">
        <span className="line-mask">
          <span style={{ animationDelay: "120ms" }}>Ahmet Kutay</span>
        </span>
        <span className="line-mask">
          <span style={{ animationDelay: "240ms" }}>
            <em>Karacair</em>
            <span className="text-accent">.</span>
          </span>
        </span>
      </h1>

      <div className="fade-in mt-14 grid gap-12 [animation-delay:500ms] lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="max-w-xl text-xl leading-relaxed text-ink-2 sm:text-[1.4rem]">{ui.hero.lead[lang]}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-accent"
            >
              {ui.hero.primary[lang]}
              <Arrow className="group-hover:translate-x-1" />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3.5 text-sm font-medium ring-1 ring-ink/20 transition hover:ring-ink"
            >
              {ui.hero.secondary[lang]}
            </a>
            <a href={`mailto:${links.email}`} className="link-underline px-2 text-sm text-ink-2 hover:text-ink">
              {links.email}
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-paper-2/70 p-6 ring-1 ring-line sm:p-7">
          <div className="flex items-center justify-between">
            <Label>{ui.hero.now[lang]}</Label>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              {ui.istanbul[lang]} {time && `· ${time}`}
            </p>
          </div>
          <ul className="mt-5 divide-y divide-line">
            {now.map((item) => (
              <li key={item.label.en} className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="font-medium">{item.label[lang]}</span>
                <span className="text-sm text-ink-3 sm:text-right">{item.detail[lang]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3 border-t border-line pt-5">
            <div className="flex -space-x-2.5">
              {apps
                .filter((app) => app.icon)
                .map((app) => (
                  <Image
                    key={app.slug}
                    src={app.icon!}
                    alt={app.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-[24%] ring-4 ring-paper-2"
                  />
                ))}
            </div>
            <a href="#work" className="group text-sm text-ink-2 hover:text-ink">
              Onelior · Cevixa · Dawnia <Arrow className="group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label.en}
            data-reveal
            style={delay(index * 90)}
            className="flex items-baseline gap-4 border-b border-line py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
          >
            <dt className="font-serif text-6xl tracking-tight">{stat.value}</dt>
            <dd className="text-sm text-ink-3">{stat.label[lang]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Studio({ lang }: { lang: Lang }) {
  return (
    <section id="studio" className="scroll-mt-20 px-3 sm:px-5">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-paper sm:px-12 sm:py-28 lg:px-20">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#8b4fd8]/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-48 right-0 h-[30rem] w-[30rem] rounded-full bg-[#f08a24]/20 blur-[120px]" />
        <div className="relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div data-reveal>
            <Label index="01" className="text-paper/50">
              {ui.sections.studio[lang]}
            </Label>
            <div className="mt-8 flex items-center gap-4">
              <Image src="/brand/omnia-mark.png" alt="" width={256} height={141} className="h-10 w-auto" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
                <span lang="en">Omnia Potentia</span> · {ui.studio.role[lang]}
              </span>
            </div>
            <h2 className="mt-8 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em]">
              {ui.studio.title[lang][0]}
              <br />
              <em className="bg-[linear-gradient(100deg,#c9a7ff_10%,#f3a865_90%)] bg-clip-text pr-2 text-transparent">
                {ui.studio.title[lang][1]}
              </em>
            </h2>
          </div>
          <div data-reveal style={delay(120)}>
            <p className="text-lg leading-relaxed text-paper/70">{ui.studio.body[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={links.studio}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-white"
              >
                {ui.studio.cta[lang]} <Arrow className="group-hover:translate-x-1" />
              </a>
              <a
                href={links.studioGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3.5 text-sm ring-1 ring-paper/25 transition hover:ring-paper"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ app, lang }: { app: App; lang: Lang }) {
  const dot = { live: "bg-[#4caf6a]", soon: "bg-[#e0a43a]", wip: "bg-ink-3" }[app.status];
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-2 ring-1 ring-line">
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {ui.status[app.status][lang]}
    </span>
  );
}

function AppCase({ app, index, lang }: { app: App; index: number; lang: Lang }) {
  const flip = index % 2 === 1;
  return (
    <article data-reveal className="group grid gap-8 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16 lg:pt-14">
      <div className={cn("flex flex-col", flip && "lg:order-2")}>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-ink-3">{String(index + 1).padStart(2, "0")} / {String(apps.length).padStart(2, "0")}</span>
          <StatusPill app={app} lang={lang} />
        </div>
        <div className="mt-8 flex items-center gap-5">
          {app.icon ? (
            <Image src={app.icon} alt="" width={72} height={72} className="h-16 w-16 rounded-[24%] shadow-lg sm:h-[4.5rem] sm:w-[4.5rem]" />
          ) : (
            <span className="flex h-16 w-16 items-center justify-center rounded-[24%] bg-[#0f2433] font-serif text-3xl italic text-[#f6c873] sm:h-[4.5rem] sm:w-[4.5rem]">
              T
            </span>
          )}
          <div>
            <h3 className="font-serif text-5xl tracking-[-0.02em] sm:text-6xl">{app.name}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              {app.category[lang]} · <span lang="en">{app.platforms.join(" · ")}</span>
            </p>
          </div>
        </div>
        <p className="mt-8 font-serif text-2xl italic text-ink-2 sm:text-3xl">{app.tagline[lang]}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-ink-2">{app.summary[lang]}</p>

        <div className="mt-8">
          <Label>{ui.built[lang]}</Label>
          <ul className="mt-4 space-y-3">
            {app.built.map((item) => (
              <li key={item.en} className="flex gap-3 text-[15px] leading-6 text-ink-2">
                <span className="mt-[11px] h-0.5 w-4 shrink-0 bg-accent" />
                {item[lang]}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-1.5">
          {app.stack.map((tech) => (
            <span key={tech} className="rounded-full px-3 py-1 text-xs text-ink-2 ring-1 ring-line">
              {tech}
            </span>
          ))}
        </div>

        {(app.url || app.appStoreUrl) && (
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
            {app.appStoreUrl && (
              <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2">
                <span className="link-underline">{ui.appStore[lang]}</span>
                <Arrow className="-rotate-45 group-hover/link:rotate-0" />
              </a>
            )}
            {app.url && (
              <a href={app.url} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2">
                <span className="link-underline">{app.url.replace("https://", "")}</span>
                <Arrow className="-rotate-45 group-hover/link:rotate-0" />
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] ring-1 ring-line",
          app.status === "wip" ? "aspect-[16/10]" : "aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[36rem]",
          flip && "lg:order-1",
        )}
      >
        <AppVisual slug={app.slug} lang={lang} />
      </div>
    </article>
  );
}

function Work({ lang }: { lang: Lang }) {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mb-16 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div data-reveal>
          <Label index="02">{ui.sections.work[lang]}</Label>
          <SplitTitle lines={ui.workTitle[lang]} className="mt-6" />
        </div>
        <p data-reveal style={delay(120)} className="max-w-sm text-ink-2 lg:justify-self-end">
          {ui.workIntro[lang]}
        </p>
      </div>
      <div className="space-y-20 lg:space-y-28">
        {apps.map((app, index) => (
          <AppCase key={app.slug} app={app} index={index} lang={lang} />
        ))}
      </div>

      <div data-reveal className="mt-28 grid gap-8 rounded-[2rem] bg-paper-2/70 p-8 ring-1 ring-line sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <Label>{ui.sections.lab[lang]}</Label>
          <h3 className="mt-5 font-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl">
            {ui.labTitle[lang][0]} <em className="text-ink-2">{ui.labTitle[lang][1]}</em>
          </h3>
        </div>
        <div>
          <p className="font-serif text-3xl">{lab.name}</p>
          <p className="mt-3 leading-relaxed text-ink-2">{lab.summary[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {lab.tags.map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-xs text-ink-2 ring-1 ring-line">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-16 px-5 pb-28 sm:px-8 sm:pb-36">
      <div data-reveal className="mb-16">
        <Label index="03">{ui.sections.experience[lang]}</Label>
        <SplitTitle lines={ui.experienceTitle[lang]} className="mt-6" />
      </div>

      <ol className="border-b border-line">
        {experience.map((job) => (
          <li key={job.company} data-reveal className="grid gap-6 border-t border-line py-10 md:grid-cols-[16rem_1fr] md:gap-12">
            <div>
              <h3 className="font-serif text-3xl tracking-[-0.01em]">{job.company}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">{job.location[lang]}</p>
            </div>
            <div className="space-y-8">
              {job.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h4 className="text-lg font-medium">{role.title}</h4>
                    <span className="font-mono text-xs tabular-nums text-ink-3">
                      {role.period.replace("Present", lang === "tr" ? "Günümüz" : "Present")}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((point) => (
                      <li key={point.en} className="flex gap-3 text-[15px] leading-6 text-ink-2">
                        <span className="mt-[11px] h-0.5 w-4 shrink-0 bg-ink/20" />
                        {point[lang]}
                      </li>
                    ))}
                  </ul>
                  {role.metrics && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.metrics.map((metric) => (
                        <span key={metric.en} className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                          {metric[lang]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div data-reveal className="rounded-3xl p-7 ring-1 ring-line">
          <Label>{ui.education[lang]}</Label>
          <p className="mt-4 font-serif text-2xl">{education.school}</p>
          <p className="mt-1 text-sm text-ink-3">{education.degree[lang]}</p>
        </div>
        <div data-reveal style={delay(100)} className="rounded-3xl p-7 ring-1 ring-line">
          <Label>{ui.hobbies[lang]}</Label>
          <p className="mt-4 leading-relaxed text-ink-2">{hobbies[lang]}</p>
        </div>
      </div>
    </section>
  );
}

function Toolbox({ lang }: { lang: Lang }) {
  return (
    <section className="border-y border-line bg-paper-2/50">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 lg:grid-cols-2">
        <div>
          <Label index="04">{ui.sections.principles[lang]}</Label>
          <ol className="mt-10 space-y-10">
            {principles.map((item, index) => (
              <li key={item.title.en} data-reveal style={delay(index * 100)} className="grid grid-cols-[3rem_1fr] gap-2">
                <span className="font-serif text-3xl italic text-ink-3">{index + 1}.</span>
                <div>
                  <h3 className="font-serif text-3xl tracking-[-0.01em]">{item.title[lang]}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-ink-2">{item.text[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <Label index="05">{ui.sections.toolbox[lang]}</Label>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {toolbox.map((row, index) => (
              <div key={row.group.en} data-reveal style={delay(index * 60)} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 sm:pt-1">{row.group[lang]}</dt>
                <dd className="flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
                  {row.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const channels = [
    { label: "LinkedIn", value: "in/ahmetkutay", href: links.linkedin },
    { label: "GitHub", value: "ahmetkutay", href: links.github },
    { label: "Omnia Potentia", value: "omniapotentia.com", href: links.studio },
  ];
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-28 sm:px-8 sm:py-36">
      <div data-reveal>
        <Label index="06">{ui.sections.contact[lang]}</Label>
        <h2 className="mt-8 font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.03em]">
          {ui.contact.title[lang][0]}
          <br />
          <em className="text-ink-2">{ui.contact.title[lang][1]}</em>
        </h2>
      </div>
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div data-reveal style={delay(100)}>
          <p className="max-w-lg text-lg leading-relaxed text-ink-2">{ui.contact.body[lang]}</p>
          <a
            href={`mailto:${links.email}`}
            className="group mt-10 inline-flex items-center gap-5 font-serif text-[clamp(1.75rem,4vw,3.25rem)] tracking-[-0.01em]"
          >
            <span className="link-underline pb-1">{links.email}</span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-sans text-xl text-paper transition duration-500 group-hover:-rotate-45 group-hover:bg-accent sm:h-14 sm:w-14">
              →
            </span>
          </a>
        </div>
        <ul data-reveal style={delay(180)} className="divide-y divide-line border-y border-line">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 transition hover:pl-2"
              >
                <span lang="en" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                  {channel.label}
                </span>
                <span className="flex items-center gap-3">
                  {channel.value}
                  <Arrow className="-rotate-45 group-hover:rotate-0" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Portfolio() {
  const lang = useLang();
  useReveal();

  return (
    <div className="paper min-h-screen overflow-x-clip">
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Studio lang={lang} />
        <Work lang={lang} />
        <Experience lang={lang} />
        <Toolbox lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 sm:px-8">
          <span>
            © {new Date().getFullYear()} <span lang="en">Ahmet Kutay Karacair</span> · {ui.istanbul[lang]}
          </span>
          <span>{ui.footer[lang]}</span>
        </div>
      </footer>
    </div>
  );
}
