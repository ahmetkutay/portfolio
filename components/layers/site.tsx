"use client";

import Image from "next/image";
import { apps, education, experience, hobbies, links, now, principles, toolbox, ui, type App, type Lang } from "@/lib/content";
import { setLang, useIstanbulTime, useLang, useReveal } from "@/lib/hooks";
import { appLayers, layers, site, toolboxLayer } from "@/lib/stack";
import { cn } from "@/lib/utils";
import { StackDiagram } from "./stack-diagram";

const ids = { work: "apps", studio: "studio", experience: "experience", contact: "contact" } as const;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.9em] w-[0.9em]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Header({ lang }: { lang: Lang }) {
  const nav = [
    [ids.work, ui.nav.work],
    [ids.studio, ui.nav.studio],
    [ids.experience, ui.nav.experience],
    [ids.contact, ui.nav.contact],
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <a href="#" className="text-[15px] font-bold tracking-tight">
          A. K. Karacair
        </a>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hidden rounded-full px-3 py-1.5 text-muted transition hover:text-ink md:inline-block">
              {label[lang]}
            </a>
          ))}
          <div className="ml-2 flex rounded-full border border-line p-0.5 text-xs font-semibold" role="group" aria-label="Language">
            {(["en", "tr"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn("rounded-full px-2.5 py-1 uppercase transition", lang === l ? "bg-ink text-paper" : "text-muted hover:text-ink")}
              >
                {l}
              </button>
            ))}
          </div>
          <a href={links.resume} className="ml-2 rounded-full bg-signal px-4 py-1.5 font-semibold text-white transition hover:bg-ink">
            {ui.resume[lang]}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="wrap grid gap-12 pb-20 pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
      <div>
        <p className="ak-rise text-sm font-semibold text-signal">{ui.hero.eyebrow[lang]}</p>
        <h1 className="ak-rise font-wide mt-5 text-[clamp(3rem,7.4vw,6.6rem)] font-extrabold leading-[0.9] tracking-[-0.035em] [animation-delay:80ms]">
          Ahmet Kutay
          <br />
          Karacair
        </h1>
        <p className="ak-rise mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:160ms]">{ui.hero.lead[lang]}</p>
        <div className="ak-rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
          <a href={`#${ids.work}`} className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-signal">
            {ui.hero.primary[lang]}
          </a>
          <a href={links.resume} className="rounded-full border border-ink/25 px-5 py-3 text-sm font-semibold transition hover:border-ink">
            {ui.hero.secondary[lang]}
          </a>
        </div>
        <dl className="ak-rise mt-12 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-3 [animation-delay:320ms]">
          {now.map((item) => (
            <div key={item.label.en}>
              <dt className="font-semibold">{item.label[lang]}</dt>
              <dd className="mt-1 text-muted">{item.detail[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="lg:pl-4">
        <p className="mb-2 text-sm font-semibold">{site.every[lang]}</p>
        <StackDiagram lang={lang} />
      </div>
    </section>
  );
}

/** One app's slice through the stack: the layers I built for it, filled. */
function CrossSection({ app, lang }: { app: App; lang: Lang }) {
  const used = appLayers[app.slug];
  return (
    <figure className="ak-section" aria-label={`${site.crossSection[lang]}: ${used.length} ${site.layersOf[lang]}`}>
      <figcaption className="mb-3 flex items-baseline justify-between text-xs text-muted">
        <span>{site.crossSection[lang]}</span>
        <span className="tabular-nums">
          {used.length} {site.layersOf[lang]}
        </span>
      </figcaption>
      <ul className="grid gap-1.5">
        {layers.map((layer, i) => {
          const on = used.includes(layer.id);
          return (
            <li key={layer.id} className="flex items-center gap-3 text-[13px]">
              <span className="relative h-3 flex-1 overflow-hidden rounded-[3px] bg-ink/[0.06]">
                {on && (
                  <span
                    className="ak-fill absolute inset-0 origin-left rounded-[3px]"
                    style={{ background: layer.color, "--i": i } as React.CSSProperties}
                  />
                )}
              </span>
              <span className={cn("w-32 shrink-0", on ? "font-medium" : "text-muted/60 line-through decoration-ink/20")}>{layer.name[lang]}</span>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

function Shot({ app }: { app: App }) {
  if (app.slug === "moxakk") {
    return (
      <div className="aspect-[16/9] overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-30px_rgba(20,23,27,0.45)] ring-1 ring-ink/10">
        <Image src="/apps/moxakk/analysis.jpg" alt="Moxakk analysis of Arsenal against Liverpool: the analysts against the market" width={1600} height={911} sizes="(min-width: 1024px) 34vw, 90vw" className="h-[190%] w-[190%] max-w-none object-cover object-left-top" />
      </div>
    );
  }
  const src = { onelior: "/apps/onelior/climb.jpg", cevixa: "/apps/cevixa/layers.jpg", dawnia: "/apps/dawnia/today.jpg" }[app.slug as "onelior" | "cevixa" | "dawnia"];
  if (!src) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-dashed border-ink/20 text-center text-sm text-muted">
        <b className="font-wide text-4xl font-extrabold text-ink/20">{app.name}</b>
      </div>
    );
  }
  return (
    <div className="mx-auto w-[62%] rounded-[14%/6.5%] bg-ink p-[2.6%] shadow-[0_30px_60px_-30px_rgba(20,23,27,0.5)]">
      <Image src={src} alt={`${app.name} screen`} width={598} height={1300} sizes="(min-width: 1024px) 20vw, 55vw" className="h-auto w-full rounded-[11.5%/5.3%]" />
    </div>
  );
}

function AppRow({ app, lang }: { app: App; lang: Lang }) {
  const webOnly = app.platforms.every((p) => p === "Web");
  const status = app.status === "live" ? (webOnly ? ui.status.web : ui.status.live) : ui.status[app.status];
  return (
    <article data-reveal className="grid gap-10 border-t border-line py-14 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-12">
      <div>
        <div className="flex items-center gap-4">
          {app.icon ? (
            <Image src={app.icon} alt="" width={56} height={56} className="h-12 w-12 rounded-[24%] ring-1 ring-ink/10" />
          ) : (
            <span className="flex h-12 w-12 items-center justify-center rounded-[24%] bg-ink text-lg font-bold text-paper">{app.name[0]}</span>
          )}
          <div>
            <h3 className="font-wide text-3xl font-extrabold tracking-[-0.02em]">{app.name}</h3>
            <p className="text-sm text-muted">
              {app.category[lang]} · {status[lang]}
            </p>
          </div>
        </div>
        <p className="mt-6 text-xl font-semibold leading-snug tracking-[-0.01em]">{app.tagline[lang]}</p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{app.summary[lang]}</p>
        <details className="ak-details mt-6 max-w-xl">
          <summary className="cursor-pointer text-sm font-semibold">{ui.built[lang]}</summary>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
            {app.built.map((b) => (
              <li key={b.en} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-signal">
                {b[lang]}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">{app.stack.join(", ")}</p>
        </details>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          {app.appStoreUrl && (
            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-signal hover:underline">
              {ui.appStore[lang]} <Arrow />
            </a>
          )}
          {app.url && (
            <a href={app.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              {new URL(app.url).hostname} <Arrow />
            </a>
          )}
        </div>
      </div>
      <CrossSection app={app} lang={lang} />
      <Shot app={app} />
    </article>
  );
}

function Apps({ lang }: { lang: Lang }) {
  return (
    <section id={ids.work} className="wrap scroll-mt-16 py-20">
      <div data-reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <h2 className="font-wide text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
          {ui.workTitle[lang][0]}
          <br />
          {ui.workTitle[lang][1]}
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end">{ui.workIntro[lang]}</p>
      </div>
      <div className="mt-14">
        {apps.map((app) => (
          <AppRow key={app.slug} app={app} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function Studio({ lang }: { lang: Lang }) {
  return (
    <section id={ids.studio} className="scroll-mt-16 bg-ink py-24 text-paper">
      <div data-reveal className="wrap grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
        <Image src="/brand/omnia-mark.svg" alt="Omnia Potentia" width={144} height={100} className="h-20 w-auto sm:h-28" />
        <div>
          <h2 className="font-wide text-[clamp(2.2rem,4.6vw,3.8rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            {ui.studio.title[lang][0]} {ui.studio.title[lang][1]}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/70">{ui.studio.body[lang]}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
            <a href={links.studio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-paper px-5 py-2.5 text-ink transition hover:bg-signal hover:text-white">
              omniapotentia.com <Arrow />
            </a>
            <a href={links.studioGithub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-paper/25 px-5 py-2.5 transition hover:border-paper">
              GitHub <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type Commit = { key: string; lane: 0 | 1; when: string; title: string; org: string; points?: { en: string; tr: string }[]; metrics?: { en: string; tr: string }[]; root?: boolean };

function History({ lang }: { lang: Lang }) {
  const commits: Commit[] = [
    { key: "omnia", lane: 1, when: site.graph.now[lang], title: site.graph.studioRole[lang], org: "Omnia Potentia", points: [site.graph.studioDetail] },
    ...experience.flatMap((job) =>
      job.roles.map((role) => ({
        key: `${job.company}-${role.title}`,
        lane: 0 as const,
        when: role.period.replace("Present", lang === "tr" ? "Bugün" : "Present"),
        title: role.title,
        org: `${job.company} · ${job.location[lang]}`,
        points: role.points,
        metrics: role.metrics,
      })),
    ),
    { key: "edu", lane: 0, when: education.degree[lang].split("·")[1]?.trim() ?? "", title: education.degree[lang].split("·")[0].trim(), org: `${education.school} · ${site.graph.root[lang]}`, root: true },
  ];

  return (
    <section id={ids.experience} className="wrap scroll-mt-16 py-24">
      <div data-reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <h2 className="font-wide text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
          {site.graph.title[lang][0]}
          <br />
          {site.graph.title[lang][1]}
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted lg:justify-self-end">{site.graph.intro[lang]}</p>
      </div>

      <ol className="ak-graph relative mt-16">
        {commits.map((c, i) => (
          <li key={c.key} data-reveal className="relative grid grid-cols-[64px_1fr] gap-4 pb-10 sm:grid-cols-[72px_1fr]">
            {/* Lanes: main on the left, the studio branch beside it, merging into Accenture's era. */}
            <svg className="absolute left-0 top-0 h-full w-16 overflow-visible" aria-hidden="true">
              {!c.root && <line x1="14" y1={i === 0 ? 0 : 0} x2="14" y2="100%" className="stroke-ink/25" strokeWidth="2" />}
              {c.root && <line x1="14" y1="0" x2="14" y2="14" className="stroke-ink/25" strokeWidth="2" />}
              {i === 0 && <line x1="44" y1="14" x2="44" y2="100%" className="stroke-signal" strokeWidth="2" />}
              {i === 1 && <path d="M44 0 C44 10 14 6 14 18" fill="none" className="stroke-signal" strokeWidth="2" />}
              <circle
                cx={c.lane ? 44 : 14}
                cy="14"
                r="6"
                className={cn(c.lane ? "fill-signal" : c.root ? "fill-paper stroke-ink" : "fill-ink", "stroke-[2]")}
                stroke={c.root ? undefined : "var(--color-paper)"}
              />
            </svg>
            <div className="col-start-2">
              <p className="text-sm tabular-nums text-muted">
                {c.when}
                {i === 0 && <span className="ml-2 rounded-full bg-signal/10 px-2 py-0.5 text-xs font-semibold text-signal">{site.graph.branch[lang]}</span>}
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-[-0.01em] sm:text-2xl">{c.title}</h3>
              <p className="text-muted">{c.org}</p>
              {c.metrics && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <li key={m.en} className="rounded-full border border-line px-3 py-1 text-xs font-semibold tabular-nums">
                      {m[lang]}
                    </li>
                  ))}
                </ul>
              )}
              {c.points && c.points.length > 1 ? (
                <details className="ak-details mt-3 max-w-3xl">
                  <summary className="cursor-pointer text-sm font-semibold">{site.graph.details[lang]}</summary>
                  <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                    {c.points.map((p) => (
                      <li key={p.en} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-ink/40">
                        {p[lang]}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                c.points && <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">{c.points[0][lang]}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Toolbox({ lang }: { lang: Lang }) {
  return (
    <section className="border-t border-line py-24">
      <div className="wrap grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div data-reveal>
          <h2 className="text-2xl font-bold tracking-[-0.01em]">{site.kit[lang]}</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {toolbox.map((g) => {
              const layer = layers.find((l) => l.id === toolboxLayer[g.group.en]);
              return (
                <div key={g.group.en} className="border-t border-line pt-4">
                  <dt className="flex items-center gap-2 text-sm font-semibold">
                    <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: layer?.color }} aria-hidden="true" />
                    {g.group[lang]}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-muted">{g.items.join(", ")}</dd>
                </div>
              );
            })}
          </dl>
        </div>
        <div data-reveal>
          <h2 className="text-2xl font-bold tracking-[-0.01em]">{ui.sections.principles[lang]}</h2>
          <ol className="mt-8 grid gap-6">
            {principles.map((p, i) => (
              <li key={p.title.en} className="grid grid-cols-[28px_1fr] gap-3 border-t border-line pt-4">
                <span className="text-sm font-semibold tabular-nums text-signal">{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{p.title[lang]}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const time = useIstanbulTime();
  return (
    <section id={ids.contact} className="scroll-mt-16 border-t border-line py-24">
      <div className="wrap">
        <h2 data-reveal className="font-wide text-[clamp(2.6rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.035em]">
          {ui.contact.title[lang][0]}
          <br />
          {ui.contact.title[lang][1]}
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{ui.contact.body[lang]}</p>
        <a data-reveal href={`mailto:${links.email}`} className="group mt-10 inline-flex max-w-full items-center gap-3 text-[clamp(1.3rem,3.4vw,2.6rem)] font-bold tracking-[-0.02em]">
          <span className="truncate underline decoration-signal decoration-[3px] underline-offset-[6px] transition group-hover:text-signal">{links.email}</span>
          <span className="text-signal transition group-hover:translate-x-1 group-hover:-translate-y-1">
            <Arrow />
          </span>
        </a>
        <div data-reveal className="mt-16 grid gap-8 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold">{ui.nav.contact[lang]}</h3>
            <ul className="mt-2 space-y-1 text-muted">
              <li><a className="hover:text-ink" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="hover:text-ink" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a className="hover:text-ink" href={links.resume}>{ui.resume[lang]} (PDF)</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">{ui.istanbul[lang]}</h3>
            <p className="mt-2 tabular-nums text-muted">{site.local[lang]} {time}</p>
          </div>
          <div>
            <h3 className="font-semibold">{ui.education[lang]}</h3>
            <p className="mt-2 text-muted">{education.school}<br />{education.degree[lang]}</p>
          </div>
          <div>
            <h3 className="font-semibold">{ui.hobbies[lang]}</h3>
            <p className="mt-2 text-muted">{hobbies[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Site() {
  const lang = useLang();
  useReveal();
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Apps lang={lang} />
        <Studio lang={lang} />
        <History lang={lang} />
        <Toolbox lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-line py-6">
        <div className="wrap flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Ahmet Kutay Karacair</p>
          <p>{ui.footer[lang]}</p>
        </div>
      </footer>
    </div>
  );
}
