"use client";

import { useMemo, useState } from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Marquee } from "@/components/magicui/marquee";
import { Meteors } from "@/components/magicui/meteors";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const projects = [
  {
    name: "TravelersBase",
    title: {
      tr: "AI destekli seyahat planlayici",
      en: "AI-powered travel planner",
    },
    period: "05/2025 - Present",
    problem: {
      tr: "Kullanici girdilerine gore hizli ve akilli seyahat plani uretmek.",
      en: "Fast, intelligent itinerary generation from user inputs.",
    },
    solution: {
      tr: "AI servisleri + ölceklenebilir Node.js backend ve cache katmani.",
      en: "AI services with a scalable Node.js backend and cache layer.",
    },
    impact: {
      tr: "Hizli, resource-efficient ve genisletilebilir bir backend temeli.",
      en: "A fast, resource-efficient backend foundation built to scale.",
    },
    details: {
      tr: [
        "Kullanicilara itinerary, konaklama, restoran ve aktivite onerileri.",
        "Primary DB: AWS RDS (PostgreSQL), cache: AWS ElastiCache (Redis).",
        "AI servisleriyle entegrasyon, yanitlari isleyip normalize etme.",
        "Gelecek plan: chat gruplari ve community ozellikleri.",
      ],
      en: [
        "Itineraries with lodging, restaurant, and activity suggestions.",
        "Primary DB: AWS RDS (PostgreSQL), cache: AWS ElastiCache (Redis).",
        "AI service integrations with response processing and normalization.",
        "Roadmap: chat groups and community features.",
      ],
    },
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "AWS RDS",
      "AWS ElastiCache",
      "Figma",
    ],
    link: "https://travelersbase.com",
  },
  {
    name: "Moxakk Analyzer",
    title: {
      tr: "AI destekli spor analiz ve tahmin platformu",
      en: "AI-powered sports analysis and prediction platform",
    },
    period: "09/2024 - Present",
    problem: {
      tr: "Yakin maclar icin guvenilir analiz, guven skoru ve gerekce ihtiyaci.",
      en: "Reliable analysis with confidence scores and reasoning for upcoming matches.",
    },
    solution: {
      tr: "Frontend ve backend ayrimi ile analiz ve tahmin platformu.",
      en: "Separated frontend and backend for analysis and prediction delivery.",
    },
    impact: {
      tr: "Coklu AI sinyalleri ve mac verilerini birlestiren guncel analizler.",
      en: "Up-to-date analysis combining multi-AI signals with match data.",
    },
    details: {
      tr: [
        "moxakk-client: landing, auth ve dashboard/fixtures/analysis/profil.",
        "moxakk-server: auth, user, fixtures, analysis API endpoint'leri.",
        "Claude/OpenAI/Gemini sinyalleriyle ensemble tahmin uretiyor.",
        "API-Sports verisi, Prisma + Postgres, Redis cache ve e-posta bildirimleri.",
      ],
      en: [
        "moxakk-client: landing, auth, dashboard/fixtures/analysis/profile.",
        "moxakk-server: auth, user, fixtures, analysis API endpoints.",
        "Ensemble predictions from Claude/OpenAI/Gemini signals.",
        "API-Sports data, Prisma + Postgres, Redis cache, email notifications.",
      ],
    },
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AI Models",
    ],
    link: "https://moxakk.com",
  },
];

const experience = [
  {
    company: "Accenture",
    location: "Remote",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "08/2025 - Present",
        tr: [
          "UX/UI tasarimcilariyla kullanici deneyimini gelistiren arayuzler tasarladim.",
          "Junior gelistiricilere kod standartlari ve is akislarinda mentorluk yaptim.",
          "Kod review surecleriyle kaliteyi artirdim ve standartlari korudum.",
        ],
        en: [
          "Collaborated with UX/UI designers to enhance user experience.",
          "Mentored junior developers on best practices and workflows.",
          "Conducted code reviews to improve quality and standards.",
        ],
      },
      {
        title: "Cloud Engineer",
        period: "03/2025 - 08/2025",
        tr: [
          "AWS tabanli servisleri Node.js ve Angular ile kurarak latency dusurdum.",
          "Kod review surecleriyle kalite ve bilgi paylasimini artirdim.",
          "Ekiplerle teknik gereksinim ve spesifikasyonlari netlestirdim.",
          "DevOps kulturunu yayginlastirip gelistirme-operasyon is birligini guclendirdim.",
          "Yeni bulut teknolojilerini degerlendirip stratejik oneri sundum.",
        ],
        en: [
          "Architected AWS services with Node.js and Angular to reduce latency.",
          "Conducted code reviews to ensure quality and knowledge sharing.",
          "Aligned technical requirements with cross-functional teams.",
          "Championed DevOps adoption across the organization.",
          "Evaluated new cloud technologies for strategic improvements.",
        ],
      },
    ],
  },
  {
    company: "Karnaval Media Group",
    location: "Istanbul, Turkey",
    roles: [
      {
        title: "Mid-level Software Engineer",
        period: "03/2024 - 01/2025",
        tr: [
          "Kod optimizasyonu ve frontend refactor ile sayfa hizini %40 iyilestirdim.",
          "Reusable component kutuphanesi ve standartlarla gelistirme suresini %30 azalttim.",
          "Ekiplerle gereksinimleri netlestirip zamaninda teslimatlar yaptim.",
          "PHP, Node.js ve React ile olceklenebilir uygulamalar gelistirdim.",
        ],
        en: [
          "Reduced page load time by 40% via frontend optimization.",
          "Built reusable component libraries and standards, cutting dev time by 30%.",
          "Aligned requirements with cross-functional teams to deliver on time.",
          "Delivered scalable apps with PHP, Node.js, and React.",
        ],
      },
    ],
  },
  {
    company: "Orion Innovation",
    location: "Istanbul, Turkey",
    roles: [
      {
        title: "DevOps Engineer",
        period: "07/2023 - 03/2024",
        tr: [
          "Uretim sunucularini Rusya'dan Turkiye'ye tasiyip %99.8 veri butunlugu sagladim.",
          "Stajyer ve junior ekip uyelerine altyapi ve otomasyon mentorlugu yaptim.",
          "Backup ve disaster recovery otomasyonu ile toparlanma suresini %60 kestim.",
          "Deployment pipeline ve monitoring ile tespit ve cozum surelerini iyilestirdim.",
        ],
        en: [
          "Migrated production servers with 99.8% data integrity.",
          "Mentored interns and junior team members on automation practices.",
          "Automated backup and DR to cut recovery time by 60%.",
          "Streamlined pipelines and monitoring to improve resolution speed.",
        ],
      },
      {
        title: "Software Engineer",
        period: "12/2021 - 07/2023",
        tr: [
          "Kullanici geri bildirimlerini urun gelistirme sureclerine entegre ettim.",
          "Istemci ihtiyaclarina gore yeni ozellikler tasarlayip gelistirdim.",
          "Kod yapisi ve sorgulari optimize ederek yanit suresini %32 iyilestirdim.",
          "Ekiplerle gereksinimleri topladim ve sistem iyilestirmeleri tasarladim.",
        ],
        en: [
          "Integrated user feedback into product iterations.",
          "Designed and implemented new features based on client needs.",
          "Optimized code and queries, boosting response times by 32%.",
          "Collaborated on requirements and system enhancements.",
        ],
      },
    ],
  },
  {
    company: "Casemice Digital",
    location: "Istanbul, Turkey",
    roles: [
      {
        title: "Junior Software Engineer",
        period: "01/2021 - 12/2021",
        tr: [
          "Performans profilleme ve debug ile optimizasyon yaptim.",
          "React, Three.js ve Node.js sockets ile 3D web deneyimi olusturdum.",
          "JavaScript ve React ile web uygulamalarini gelistirdim.",
        ],
        en: [
          "Improved performance through profiling and debugging.",
          "Built a 3D web experience with React, Three.js, and Node.js sockets.",
          "Maintained web apps using JavaScript and React.",
        ],
      },
    ],
  },
];

const skills = {
  frontend: ["Angular", "Next.js", "React", "TypeScript"],
  backend: ["Node.js", "Express", "PHP", "Python"],
  databases: ["PostgreSQL", "Redis", "MongoDB", "MySQL"],
  cloud: ["AWS", "Docker", "GitHub Actions", "Lambda", "RDS", "S3"],
  specialties: [
    "API Architecture",
    "Cloud Scalability",
    "Performance Optimization",
    "System Design",
  ],
};

const stats = [
  { label: { tr: "Yil", en: "Years" }, value: "5+" },
  { label: { tr: "Urun", en: "Products" }, value: "2" },
  { label: { tr: "Sirket", en: "Companies" }, value: "4" },
];

const highlights = [
  {
    title: { tr: "Performans", en: "Performance" },
    tr: "Sayfa yuklenme surelerini %40 ve backend yanit surelerini %32 iyilestirdim.",
    en: "Improved page load times by 40% and backend response times by 32%.",
  },
  {
    title: { tr: "Guvenilirlik", en: "Reliability" },
    tr: "Kritik sistem migrasyonlarini %99.8 veri butunluguyle teslim ettim.",
    en: "Delivered critical system migrations with 99.8% data integrity.",
  },
  {
    title: { tr: "Teslimat", en: "Delivery" },
    tr: "Daha hizli, tutarli ve guvenilir cikislar icin CI/CD pipeline'lari kurdum.",
    en: "Built CI/CD pipelines for faster, more consistent, and reliable releases.",
  },
];

const content = {
  tr: {
    nav: {
      resume: "CV indir",
      projects: "Projeler",
      experience: "Deneyim",
      contact: "Iletisim",
    },
    hero: {
      tag: "Senior Software Engineer",
      subtitle: "Scalable Systems, Cloud Architecture, AI-Integrated Apps",
      headline: "Modern, olceklenebilir ve performans odakli yazilim cozumleri.",
      about:
        "Olceklenebilir bulut sistemleri ve AI entegre uygulamalar gelistiriyorum. Performans, guvenilirlik ve temiz mimari odagim.",
      ctaPrimary: "CV indir",
      ctaSecondary: "Iletisim",
      ctaTertiary: "Website",
    },
    snapshot: {
      title: "Snapshot",
      subtitle: "Istanbul",
      note: "Uctan uca olceklenebilir, yuksek performansli ve AI destekli urunler insa ediyorum.",
    },
    sections: {
      projects: "Projeler",
      experience: "Deneyim",
      skills: "Yetkinlikler",
      approach: "Calisma Yaklasimi",
      highlights: "One Cikanlar",
      education: "Egitim",
      hobbies: "Hobiler",
      contact: "Iletisim",
    },
    approach: [
      {
        title: "Kesif",
        text: "Is hedeflerini, kullanici ihtiyaclarini ve teknik kisitlari erken netlestiririm; dogru problemi cozeriz, kolay olani degil.",
      },
      {
        title: "Mimari",
        text: "Olceklenebilir ve maliyet bilinci olan sistemleri; performans ve guvenilirlik stratejileriyle tasarlarim.",
      },
      {
        title: "Teslim",
        text: "Otomasyon, test ve hizli geri bildirimle iteratif teslimatlar yaparim; fikirden etkiye hizla gideriz.",
      },
    ],
    contact: {
      title: "Birlikte uretebiliriz",
      text: "Yeni projeler, is birlikleri ve urun fikirleri icin her zaman acigim.",
    },
    education: "BSc in Computer Engineering · 09/2017 - 07/2021",
    hobbies:
      "Cooking, language exchange, cultural networking, playing chess and go.",
    footer: "Son guncelleme: 12/2025",
  },
  en: {
    nav: {
      resume: "Download CV",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      tag: "Senior Software Engineer",
      subtitle: "Scalable Systems, Cloud Architecture, AI-Integrated Apps",
      headline: "Modern, scalable, and performance-driven software solutions.",
      about:
        "I build scalable cloud systems and AI-integrated applications. My focus is performance, reliability, and clean architecture.",
      ctaPrimary: "Download CV",
      ctaSecondary: "Contact",
      ctaTertiary: "Website",
    },
    snapshot: {
      title: "Snapshot",
      subtitle: "Istanbul",
      note: "Building scalable, high-performance, and AI-driven products end to end.",
    },
    sections: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      approach: "How I Work",
      highlights: "Highlights",
      education: "Education",
      hobbies: "Hobbies",
      contact: "Contact",
    },
    approach: [
      {
        title: "Discovery",
        text: "Align on goals, user needs, and technical constraints early so we solve the right problem, not just the easy one.",
      },
      {
        title: "Architecture",
        text: "Design scalable, cost-aware systems with clear performance and reliability strategies.",
      },
      {
        title: "Delivery",
        text: "Ship iteratively with automation, testing, and fast feedback loops to move from idea to impact.",
      },
    ],
    contact: {
      title: "Let us build together",
      text: "Open to new projects, collaborations, and product ideas.",
    },
    education: "BSc in Computer Engineering · 09/2017 - 07/2021",
    hobbies:
      "Cooking, language exchange, cultural networking, playing chess and go.",
    footer: "Last updated: 12/2025",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const t = useMemo(() => content[lang], [lang]);
  const navItems = [
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.sections.skills },
    { id: "contact", label: t.nav.contact },
  ];
  const skillRows = [
    [...skills.frontend, ...skills.backend],
    [...skills.databases, ...skills.cloud],
    [...skills.specialties],
  ];

  const openResume = () => {
    window.open("/resume/kutaykaracair_resume.pdf", "_blank", "noopener,noreferrer");
  };

  const openMail = () => {
    window.location.href = "mailto:kutaykaracair@gmail.com";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 -top-48 h-[560px] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_68%)] blur-2xl" />
      <RetroGrid cellSize={72} opacity={0.45} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.35)_0%,rgba(248,251,255,0.94)_75%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-6 sm:px-10">
        <header className="sticky top-4 z-50 rounded-2xl border border-slate-200/80 bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-700/80">
                Portfolio
              </span>
              <span className="font-display text-lg sm:text-xl">Ahmet Kutay Karacair</span>
            </div>

            <nav className="hidden items-center gap-4 text-xs uppercase tracking-[0.18em] text-slate-500 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="transition hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-full border border-slate-300 bg-white p-1 text-xs">
                <button
                  className={`rounded-full px-3 py-1 uppercase tracking-[0.2em] transition ${
                    lang === "tr" ? "bg-slate-900 text-white" : "text-slate-600"
                  }`}
                  onClick={() => setLang("tr")}
                  type="button"
                  aria-pressed={lang === "tr"}
                >
                  TR
                </button>
                <button
                  className={`rounded-full px-3 py-1 uppercase tracking-[0.2em] transition ${
                    lang === "en" ? "bg-slate-900 text-white" : "text-slate-600"
                  }`}
                  onClick={() => setLang("en")}
                  type="button"
                  aria-pressed={lang === "en"}
                >
                  EN
                </button>
              </div>
              <a
                className="rounded-full border border-slate-300 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-600 hover:text-slate-900"
                href="/resume/kutaykaracair_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.resume}
              </a>
            </div>
          </div>
        </header>

        <section className="relative grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Meteors number={14} className="hidden md:block" />

          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-full border border-cyan-200 bg-cyan-50/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-700">
              <AnimatedGradientText speed={1.1} colorFrom="#0ea5e9" colorTo="#f97316">
                {t.hero.subtitle}
              </AnimatedGradientText>
            </div>

            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t.hero.headline}
            </h1>

            <AnimatedShinyText className="max-w-2xl text-lg leading-relaxed text-slate-700" shimmerWidth={180}>
              {t.hero.about}
            </AnimatedShinyText>

            <div className="flex flex-wrap items-center gap-3">
              <ShimmerButton
                type="button"
                onClick={openResume}
                background="#0f172a"
                shimmerColor="#67e8f9"
              >
                {t.hero.ctaPrimary}
              </ShimmerButton>
              <button
                type="button"
                onClick={openMail}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={`${stat.label.en}-${stat.value}`}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
                >
                  <p className="font-display text-3xl">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/75 p-6 shadow-[0_24px_60px_rgba(14,165,233,0.1)] backdrop-blur">
            <ShineBorder
              borderWidth={1.4}
              duration={13}
              shineColor={["#22d3ee", "#f97316", "#38bdf8"]}
            />
            <GridPattern
              width={48}
              height={48}
              x={-2}
              y={-2}
              className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{t.snapshot.title}</p>
                <p className="text-xs text-slate-500">{t.snapshot.subtitle}</p>
              </div>

              <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full border border-slate-200 bg-slate-50/80">
                <OrbitingCircles radius={118} iconSize={42} className="bg-white text-xs font-semibold text-slate-700 shadow-sm">
                  {["AWS", "AI", "Node", "React", "Redis", "API"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </OrbitingCircles>
                <OrbitingCircles
                  radius={74}
                  iconSize={34}
                  reverse
                  speed={1.35}
                  className="bg-cyan-50 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-800"
                >
                  {["Scale", "Cloud", "Perf", "CI/CD"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </OrbitingCircles>
                <div className="relative z-20 rounded-full border border-slate-200 bg-white px-6 py-5 text-center shadow-[0_10px_25px_rgba(15,23,42,0.1)]">
                  <p className="font-display text-xl">{t.hero.tag}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600">{t.snapshot.note}</p>
              <div className="grid gap-3">
                {highlights.map((item) => (
                  <div key={item.title.en} className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-700">
                      {item.title[lang]}
                    </p>
                    <p className="text-sm text-slate-700">{lang === "tr" ? item.tr : item.en}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="grid gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl">{t.sections.approach}</h2>
            <AnimatedGradientText className="text-sm uppercase tracking-[0.18em]">
              Product + Engineering Mindset
            </AnimatedGradientText>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {t.approach.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.07)]"
              >
                <ShineBorder borderWidth={1.2} duration={11 + index * 2} shineColor={["#06b6d4", "#fb7185", "#f59e0b"]} />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="grid gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl">{t.sections.projects}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(2,6,23,0.08)]"
              >
                <ShineBorder borderWidth={1.2} duration={10 + index * 2} shineColor={["#22d3ee", "#f97316", "#38bdf8"]} />
                <GridPattern
                  width={56}
                  height={56}
                  className="[mask-image:radial-gradient(320px_circle_at_top,white,transparent)] opacity-60"
                />

                <div className="relative z-10 flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{project.period}</p>
                      <h3 className="font-display text-2xl">{project.name}</h3>
                      <p className="text-sm text-slate-600">{project.title[lang]}</p>
                    </div>
                    <a
                      className="rounded-full border border-slate-300 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  </div>

                  <div className="grid gap-3 text-sm text-slate-700">
                    <p>
                      <span className="text-xs uppercase tracking-[0.2em] text-cyan-700">
                        {lang === "tr" ? "Problem" : "Problem"}
                      </span>
                      <span className="ml-2">{lang === "tr" ? project.problem.tr : project.problem.en}</span>
                    </p>
                    <p>
                      <span className="text-xs uppercase tracking-[0.2em] text-cyan-700">
                        {lang === "tr" ? "Cozum" : "Solution"}
                      </span>
                      <span className="ml-2">{lang === "tr" ? project.solution.tr : project.solution.en}</span>
                    </p>
                    <p>
                      <span className="text-xs uppercase tracking-[0.2em] text-cyan-700">
                        {lang === "tr" ? "Etki" : "Impact"}
                      </span>
                      <span className="ml-2">{lang === "tr" ? project.impact.tr : project.impact.en}</span>
                    </p>
                    <ul className="list-disc space-y-1.5 pl-4">
                      {(lang === "tr" ? project.details.tr : project.details.en).map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-300 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl">{t.sections.experience}</h2>
            <AnimatedShinyText className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Shipping Reliable Systems Since 2021
            </AnimatedShinyText>
          </div>

          <div className="grid gap-6">
            {experience.map((item, companyIndex) => (
              <article
                key={`${item.company}-${item.location}`}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
              >
                <ShineBorder borderWidth={1.1} duration={12 + companyIndex} shineColor={["#22d3ee", "#0ea5e9", "#fb923c"]} />
                <div className="relative z-10 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl">{item.company}</h3>
                      <p className="text-sm text-slate-500">{item.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4 border-l border-slate-200 pl-4">
                    {item.roles.map((role) => (
                      <div key={`${item.company}-${role.title}`} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display text-lg">{role.title}</h4>
                          <span className="text-xs uppercase tracking-[0.18em] text-cyan-700">{role.period}</span>
                        </div>
                        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-slate-700">
                          {(lang === "tr" ? role.tr : role.en).map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl">{t.sections.skills}</h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.07)]">
            <Marquee pauseOnHover className="[--duration:32s]">
              {skillRows[0].map((item) => (
                <span
                  key={`row-0-${item}`}
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-sky-800"
                >
                  {item}
                </span>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
              {skillRows[1].map((item) => (
                <span
                  key={`row-1-${item}`}
                  className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-amber-800"
                >
                  {item}
                </span>
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:36s]">
              {skillRows[2].map((item) => (
                <span
                  key={`row-2-${item}`}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-emerald-800"
                >
                  {item}
                </span>
              ))}
            </Marquee>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{t.sections.education}</p>
            <h3 className="mt-3 font-display text-2xl">Sakarya University</h3>
            <p className="mt-2 text-sm text-slate-600">{t.education}</p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{t.sections.hobbies}</p>
            <p className="mt-3 text-sm text-slate-600">{t.hobbies}</p>
          </article>
        </section>

        <section id="contact" className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-8 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <GridPattern
            width={64}
            height={64}
            className="fill-cyan-300/20 stroke-slate-300/35 [mask-image:radial-gradient(500px_circle_at_right,white,transparent)]"
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-display text-4xl">{t.contact.title}</h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600">{t.contact.text}</p>
              <div className="pt-2">
                <ShimmerButton
                  type="button"
                  onClick={openMail}
                  background="#0f172a"
                  shimmerColor="#22d3ee"
                >
                  {lang === "tr" ? "E-posta Gonder" : "Send Email"}
                </ShimmerButton>
              </div>
            </div>

            <div className="grid gap-3 text-sm">
              <a className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:border-slate-900 hover:text-slate-900" href="mailto:kutaykaracair@gmail.com">
                kutaykaracair@gmail.com
              </a>
              <a
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                href="https://www.linkedin.com/in/ahmetkutay"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ahmetkutay
              </a>
              <a
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                href="https://kutaykaracair.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kutaykaracair.com
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-2 text-xs uppercase tracking-[0.18em] text-slate-500">
          <span>Ahmet Kutay Karacair</span>
          <span>{t.footer}</span>
        </footer>
      </div>
    </div>
  );
}
