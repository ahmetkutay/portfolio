"use client";

import { useMemo, useState } from "react";

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

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4efe7] text-[#1b1712]">
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#ffd7a5,transparent_68%)] blur-2xl opacity-70" />
      <div className="pointer-events-none absolute -right-32 top-64 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,#cde7ff,transparent_68%)] blur-2xl opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(27,23,18,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(27,23,18,0.06)_1px,transparent_1px)] bg-[size:120px_120px] opacity-50" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
              Portfolio
            </span>
            <span className="font-display text-2xl">Ahmet Kutay Karacair</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-2 rounded-full border border-[#1b1712]/20 p-1">
              <button
                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
                  lang === "tr"
                    ? "bg-[#1b1712] text-[#f4efe7]"
                    : "text-[#1b1712]"
                }`}
                onClick={() => setLang("tr")}
                aria-pressed={lang === "tr"}
                type="button"
              >
                TR
              </button>
              <button
                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] transition ${
                  lang === "en"
                    ? "bg-[#1b1712] text-[#f4efe7]"
                    : "text-[#1b1712]"
                }`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                type="button"
              >
                EN
              </button>
            </div>
            <a
              className="rounded-full border border-[#1b1712]/30 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-[#1b1712]"
              href="/resume/kutaykaracair_resume.pdf"
            >
              {t.nav.resume}
            </a>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#1b1712] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f4efe7]">
                {t.hero.tag}
              </span>
              <span className="text-sm text-[#5f5a53]">{t.hero.subtitle}</span>
            </div>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t.hero.headline}
            </h1>
            <div className="grid gap-4 rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.12)] backdrop-blur">
              <p className="text-lg leading-relaxed text-[#2f2a25]">
                {t.hero.about}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#f1642e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d85323]"
                href="/resume/kutaykaracair_resume.pdf"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                className="rounded-full border border-[#1b1712] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b1712] transition hover:bg-[#1b1712] hover:text-[#f4efe7]"
                href="mailto:kutaykaracair@gmail.com"
              >
                {t.hero.ctaSecondary}
              </a>
              <a
                className="rounded-full border border-[#1b1712]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b1712] transition hover:border-[#1b1712]"
                href="https://kutaykaracair.com"
              >
                {t.hero.ctaTertiary}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.3em] text-[#a16b2e]">
                {t.snapshot.title}
              </span>
              <span className="text-xs text-[#5f5a53]">{t.snapshot.subtitle}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-[#1b1712]/10 bg-[#f4efe7]/80 p-4"
                >
                  <div className="font-display text-3xl">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#5f5a53]">
                    {stat.label[lang]}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#2f2a25]">{t.snapshot.note}</p>
            <div className="grid gap-4">
              {highlights.map((item) => (
                <div key={item.title.en} className="rounded-2xl border border-[#1b1712]/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a16b2e]">
                    {item.title[lang]}
                  </p>
                  <p className="text-sm text-[#2f2a25]">
                    {lang === "tr" ? item.tr : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="grid gap-6">
          <h2 className="font-display text-3xl">{t.sections.approach}</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.approach.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-[#2f2a25]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">{t.sections.experience}</h2>
          </div>
          <div className="grid gap-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.location}`}
                className="grid gap-4 rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl">{item.company}</h3>
                    <p className="text-sm text-[#5f5a53]">{item.location}</p>
                  </div>
                </div>
                <div className="grid gap-6">
                  {item.roles.map((role) => (
                    <div
                      key={`${item.company}-${role.title}`}
                      className="rounded-2xl border border-[#1b1712]/10 bg-[#f4efe7]/60 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-display text-lg">{role.title}</h4>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#a16b2e]">
                          {role.period}
                        </span>
                      </div>
                      <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[#2f2a25]">
                        {(lang === "tr" ? role.tr : role.en).map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="grid gap-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">{t.sections.projects}</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
              02 Selected
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col gap-6 rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
                      {project.period}
                    </p>
                    <h3 className="font-display text-2xl">{project.name}</h3>
                    <p className="text-sm text-[#5f5a53]">
                      {project.title[lang]}
                    </p>
                  </div>
                  <a
                    className="text-xs uppercase tracking-[0.2em] text-[#1b1712]"
                    href={project.link}
                  >
                    Visit
                  </a>
                </div>
                <div className="grid gap-4 text-sm text-[#2f2a25]">
                  <p>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#a16b2e]">
                      {lang === "tr" ? "Problem" : "Problem"}
                    </span>
                    <span className="ml-2">
                      {lang === "tr" ? project.problem.tr : project.problem.en}
                    </span>
                  </p>
                  <p>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#a16b2e]">
                      {lang === "tr" ? "Cozum" : "Solution"}
                    </span>
                    <span className="ml-2">
                      {lang === "tr" ? project.solution.tr : project.solution.en}
                    </span>
                  </p>
                  <p>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#a16b2e]">
                      {lang === "tr" ? "Etki" : "Impact"}
                    </span>
                    <span className="ml-2">
                      {lang === "tr" ? project.impact.tr : project.impact.en}
                    </span>
                  </p>
                  <ul className="list-disc space-y-2 pl-4">
                    {(lang === "tr" ? project.details.tr : project.details.en).map(
                      (item) => (
                        <li key={item}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#1b1712]/20 px-3 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-6">
          <h2 className="font-display text-3xl">{t.sections.skills}</h2>
          <div className="rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-6">
                {[
                  { label: "Frontend", items: skills.frontend },
                  { label: "Backend", items: skills.backend },
                  { label: "Databases", items: skills.databases },
                  { label: "Cloud & Tools", items: skills.cloud },
                ].map((group) => (
                  <div key={group.label} className="rounded-2xl border border-[#1b1712]/10 bg-[#f4efe7]/60 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
                      {group.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#1b1712]/20 bg-white/80 px-3 py-1 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-[#1b1712]/10 bg-[#f4efe7]/80 p-5 text-[#1b1712]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
                  Focus
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.specialties.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#1b1712]/20 px-3 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-[#2f2a25]">
                  {lang === "tr"
                    ? "Sistem tasarimi, performans optimizasyonu ve bulut olceklenebilirligi uzerine calisiyorum."
                    : "I focus on system design, performance optimization, and scalable cloud architecture."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
              {t.sections.education}
            </p>
            <h3 className="mt-3 font-display text-2xl">Sakarya University</h3>
            <p className="text-sm text-[#5f5a53]">{t.education}</p>
          </div>
          <div className="rounded-3xl border border-[#1b1712]/15 bg-white/70 p-6 shadow-[0_20px_50px_rgba(27,23,18,0.08)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a16b2e]">
              {t.sections.hobbies}
            </p>
            <p className="mt-4 text-sm text-[#2f2a25]">{t.hobbies}</p>
          </div>
        </section>

        <section id="contact" className="grid gap-6">
          <div className="rounded-3xl border border-[#1b1712]/15 bg-[#f4efe7] p-8 text-[#1b1712] shadow-[0_20px_50px_rgba(27,23,18,0.2)]">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-4">
                <h2 className="font-display text-3xl">{t.contact.title}</h2>
                <p className="text-sm text-[#2f2a25]">{t.contact.text}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <a className="text-[#1b1712]" href="mailto:kutaykaracair@gmail.com">
                  kutaykaracair@gmail.com
                </a>
                <a className="text-[#1b1712]" href="https://www.linkedin.com/in/ahmetkutay">
                  linkedin.com/in/ahmetkutay
                </a>
                <a className="text-[#1b1712]" href="https://kutaykaracair.com">
                  kutaykaracair.com
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
