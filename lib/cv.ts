import type { Lang, Text } from "./content";

/**
 * Hiring-first content, taken from the CV (Nov 2026). Every string is an
 * { en, tr } pair; the page picks one with useLang().
 */
export const me = {
  name: "Ahmet Kutay Karacair",
  first: "Ahmet Kutay",
  last: "Karacair",
  email: "kutaykaracair@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmetkutay",
  github: "https://github.com/ahmetkutay",
  cv: "/resume/kutaykaracair_resume.pdf",
  studio: "https://omniapotentia.com",
};

export const t = {
  nav: {
    impact: { en: "Impact", tr: "Etki" },
    experience: { en: "Experience", tr: "Deneyim" },
    work: { en: "Work", tr: "İşler" },
    contact: { en: "Contact", tr: "İletişim" },
  },
  open: { en: "Open to senior roles across Europe · relocation", tr: "Avrupa'da kıdemli rollere açığım · taşınabilirim" },
  title: { en: "Senior Software Engineer.", tr: "Senior Software Engineer." },
  pitch: {
    en: "Backend-heavy full-stack engineer. I build production AI platforms and native apps on Node.js, Python, PostgreSQL, Redis and AWS — and I ship them end to end, from the data model to the App Store.",
    tr: "Backend ağırlıklı full-stack mühendis. Node.js, Python, PostgreSQL, Redis ve AWS üzerinde canlı yapay zekâ platformları ve native uygulamalar geliştiriyor, veri modelinden App Store'a kadar uçtan uca yayınlıyorum.",
  },
  downloadCv: { en: "Download CV", tr: "CV'yi indir" },
  emailMe: { en: "Email me", tr: "E-posta gönder" },
  legend: {
    en: ["live: a production pipeline I run", "client → api → queue → 3 models → store"],
    tr: ["canlı: işlettiğim bir üretim hattı", "istemci → api → kuyruk → 3 model → depo"],
  },
  impactTitle: { en: "Numbers I moved in production.", tr: "Canlıda değiştirdiğim rakamlar." },
  experienceTitle: { en: "Five years of shipping and operating systems.", tr: "Beş yıldır sistem geliştirip işletiyorum." },
  current: { en: "current", tr: "şu an" },
  workTitle: { en: "Products I built and run myself.", tr: "Kendim geliştirip işlettiğim ürünler." },
  workLede: {
    en: "Independent products, designed, engineered and operated end to end. The engineering is the point.",
    tr: "Uçtan uca tasarlayıp geliştirdiğim ve işlettiğim bağımsız ürünler. Asıl mesele mühendislik.",
  },
  skillsTitle: { en: "Backend first, every layer when needed.", tr: "Önce backend, gerektiğinde her katman." },
  freelanceTitle: { en: "Also available for select freelance work.", tr: "Seçili freelance işlere de açığım." },
  freelanceBody: {
    en: "Through my studio, Omnia Potentia, I take on a few projects a year: backend and AI platforms, native iOS and Android apps, and the infrastructure behind them — designed, built and handed over properly.",
    tr: "Stüdyom Omnia Potentia üzerinden yılda birkaç proje alıyorum: backend ve yapay zekâ platformları, native iOS ve Android uygulamalar ve arkalarındaki altyapı — düzgünce tasarlanıp geliştirilip teslim edilir.",
  },
  contactTitle: { en: "Let's build something that stays up.", tr: "Ayakta kalan bir şey inşa edelim." },
  contactLede: {
    en: "Hiring for a senior backend or full-stack role in Europe, or have a project in mind? I reply within a day.",
    tr: "Avrupa'da kıdemli bir backend ya da full-stack rol için mi arıyorsunuz, yoksa aklınızda bir proje mi var? Bir gün içinde dönüyorum.",
  },
} satisfies Record<string, Text | { en: string[]; tr: string[] } | Record<string, Text>>;

export const impact: { n: number; prefix?: string; suffix?: string; dec?: number; label: Text }[] = [
  { n: 99.8, suffix: "%", dec: 1, label: { en: "data integrity across a 6-server cross-region production migration", tr: "6 sunuculuk bölgeler arası canlı taşımada veri bütünlüğü" } },
  { n: 40, prefix: "−", suffix: "%", label: { en: "page load time on React and Next.js media platforms", tr: "React ve Next.js medya platformlarında sayfa yükleme süresi" } },
  { n: 32, prefix: "+", suffix: "%", label: { en: "faster responses after refactoring core logic and queries", tr: "çekirdek mantık ve sorgular yeniden yazıldıktan sonra daha hızlı yanıt" } },
  { n: 45, suffix: "+", label: { en: "components covered by a performance testing strategy I designed", tr: "tasarladığım performans test stratejisinin kapsadığı bileşen" } },
  { n: 3, label: { en: "AI providers in a production ensemble with confidence calibration", tr: "güven kalibrasyonlu canlı bir topluluk modelinde yapay zekâ sağlayıcısı" } },
  { n: 4, label: { en: "products live, built and operated end to end", tr: "uçtan uca geliştirip işlettiğim yayındaki ürün" } },
];

export const roles: { company: string; where: Text; title: string; period: Text; now?: boolean; points: Text[]; stack: string[] }[] = [
  {
    company: "Accenture", where: { en: "Remote", tr: "Uzaktan" }, title: "Senior Software Engineer", period: { en: "03/2025 — Present", tr: "03/2025 — Bugün" }, now: true,
    points: [
      { en: "Extending a Python MCP server that powers LLM document generation for a global pharmaceutical client: guidelines become structured prompts, documents are generated from templates and validated against source requirements, with Claude Skills and MCP agents.", tr: "Global bir ilaç müşterisi için LLM ile doküman üreten Python MCP sunucusunu genişletiyorum: yönergeler yapılandırılmış prompt'lara dönüşüyor, dokümanlar şablonlardan üretilip kaynak gereksinimlere göre doğrulanıyor; Claude Skills ve MCP agent'larıyla." },
      { en: "Built the backend of an AWS data platform: serverless REST APIs on Lambda and API Gateway, an SNS/SQS event layer, and Spark ETL in Glue feeding Athena; IAM, CloudWatch and Grafana.", tr: "Bir AWS veri platformunun backend'ini geliştirdim: Lambda ve API Gateway üzerinde serverless REST API'ler, SNS/SQS olay katmanı ve Athena'yı besleyen Glue Spark ETL'leri; IAM, CloudWatch ve Grafana." },
      { en: "Architected performance testing for a healthcare design system — user-flow tests for 45+ components in Lighthouse, Vitest and Playwright — and shipped 7 production components.", tr: "Sağlık sektöründe bir tasarım sistemi için performans test mimarisini kurdum — Lighthouse, Vitest ve Playwright ile 45+ bileşen için kullanıcı akışı testleri — ve 7 canlı bileşen teslim ettim." },
      { en: "Code reviews and mentoring on backend architecture, cloud services and testing.", tr: "Backend mimarisi, bulut servisleri ve test üzerine kod review ve mentorluk." },
    ],
    stack: ["Python", "MCP", "Claude", "Node.js", "AWS", "Angular", "Playwright"],
  },
  {
    company: "Karnaval Media Group", where: { en: "Istanbul", tr: "İstanbul" }, title: "Software Engineer", period: { en: "03/2024 — 01/2025", tr: "03/2024 — 01/2025" },
    points: [
      { en: "Cut page load by 40% by refactoring critical rendering paths and bundle size in React and Next.js.", tr: "React ve Next.js'te kritik render yollarını ve bundle boyutunu yeniden düzenleyerek sayfa yüklemeyi %40 kısalttım." },
      { en: "Built a reusable component library that set the frontend standards for new projects.", tr: "Yeni projelerin frontend standardını belirleyen yeniden kullanılabilir bir bileşen kütüphanesi kurdum." },
    ],
    stack: ["React", "Next.js", "Node.js", "PHP"],
  },
  {
    company: "Orion Innovation", where: { en: "Istanbul", tr: "İstanbul" }, title: "Software & DevOps Engineer", period: { en: "12/2021 — 03/2024", tr: "12/2021 — 03/2024" },
    points: [
      { en: "Led the migration of 6 production servers from Russia to Turkey: 99.8% data integrity and 40% less planned downtime through phased rollout and validation.", tr: "6 canlı sunucunun Rusya'dan Türkiye'ye taşınmasını yönettim: aşamalı geçiş ve doğrulamayla %99,8 veri bütünlüğü ve %40 daha az planlı kesinti." },
      { en: "Built monitoring, alerting and CI/CD with Prometheus and Grafana, and owned the incidents they raised.", tr: "Prometheus ve Grafana ile izleme, alarm ve CI/CD kurdum; tetiklenen olayları sahiplenip çözdüm." },
      { en: "Refactored core logic and queries: 32% faster responses, 25% less server load.", tr: "Çekirdek mantığı ve sorguları yeniden yazdım: %32 daha hızlı yanıt, %25 daha az sunucu yükü." },
      { en: "Scrum Master for a team of 5–6; mentored two interns end to end.", tr: "5–6 kişilik ekipte Scrum Master; iki stajyere uçtan uca mentorluk." },
    ],
    stack: ["Node.js", "Docker", "Prometheus", "Grafana", "CI/CD"],
  },
  {
    company: "Casemice Digital", where: { en: "Istanbul", tr: "İstanbul" }, title: "Software Engineer", period: { en: "01/2021 — 12/2021", tr: "01/2021 — 12/2021" },
    points: [
      { en: "Built a real-time 3D virtual conference space for medical professionals in React and Three.js on a WebSocket Node.js backend.", tr: "Sağlık profesyonelleri için WebSocket tabanlı Node.js backend üzerinde React ve Three.js ile gerçek zamanlı 3D sanal konferans alanı geliştirdim." },
    ],
    stack: ["React", "Three.js", "WebSockets"],
  },
];

export const work: { slug: string; name: string; kind: Text; status: Text; url: string; img: string; shape: "wide" | "phone"; headline: Text; points: Text[]; stack: string[] }[] = [
  {
    slug: "moxakk", name: "Moxakk", kind: { en: "Multi-sport AI insights platform", tr: "Çok sporlu yapay zekâ analiz platformu" }, status: { en: "Live · web", tr: "Yayında · web" }, url: "https://moxakk.com",
    img: "/apps/moxakk/analysis.jpg", shape: "wide",
    headline: { en: "Three AI providers, one calibrated answer.", tr: "Üç yapay zekâ sağlayıcısı, kalibre edilmiş tek cevap." },
    points: [
      { en: "Aggregates fixtures, lineups, standings, H2H and weather into 16 derived signals and scenario narratives.", tr: "Fikstür, kadro, puan durumu, H2H ve hava durumunu 16 türetilmiş sinyale ve senaryo anlatılarına dönüştürür." },
      { en: "Weighted consensus across Claude, OpenAI and Gemini with confidence calibration; per-provider accuracy tracked over time.", tr: "Claude, OpenAI ve Gemini arasında güven kalibrasyonlu ağırlıklı uzlaşı; sağlayıcı bazında doğruluk zamanla izlenir." },
      { en: "BullMQ workers, a Redis-locked cron, a two-layer cache with singleflight dedup, and a custom per-host rate limiter.", tr: "BullMQ worker'ları, Redis kilitli cron, singleflight tekilleştirmeli iki katmanlı önbellek ve host bazlı özel hız sınırlayıcı." },
    ],
    stack: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Next.js 16"],
  },
  {
    slug: "onelior", name: "Onelior", kind: { en: "Gamified fitness app", tr: "Oyunlaştırılmış fitness uygulaması" }, status: { en: "iOS · App Store", tr: "iOS · App Store" }, url: "https://onelior.com",
    img: "/apps/onelior/climb.jpg", shape: "phone",
    headline: { en: "Server-authoritative progress you can't double-count.", tr: "İki kez sayılamayan, sunucu otoriteli ilerleme." },
    points: [
      { en: "SwiftUI app and NestJS backend; every reward goes through one ledger with per-user locks and minute-level de-duplication.", tr: "SwiftUI uygulama ve NestJS backend; her ödül kullanıcı kilitli tek bir defterden ve dakika düzeyinde tekilleştirmeden geçer." },
      { en: "Sign in with Apple/Google via a provider-bound nonce, rotating refresh-token families and Apple App Attest.", tr: "Sağlayıcıya bağlı nonce ile Apple/Google girişi, dönen refresh token aileleri ve Apple App Attest." },
      { en: "60+ test suites, OpenAPI docs, hardened non-root Docker images, and a marketing site with a zero-external-request CSP.", tr: "60+ test paketi, OpenAPI dokümantasyonu, root olmayan sıkılaştırılmış Docker imajları ve dışarıya hiç istek atmayan CSP'li bir tanıtım sitesi." },
    ],
    stack: ["SwiftUI", "HealthKit", "NestJS", "PostgreSQL 16", "Redis", "BullMQ"],
  },
  {
    slug: "cevixa", name: "Cevixa", kind: { en: "Personal & shared expense tracker", tr: "Kişisel ve ortak harcama takibi" }, status: { en: "iOS · App Store", tr: "iOS · App Store" }, url: "https://appcevixa.com",
    img: "/apps/cevixa/layers.jpg", shape: "phone",
    headline: { en: "Three codebases, one OpenAPI contract.", tr: "Üç kod tabanı, tek OpenAPI sözleşmesi." },
    points: [
      { en: "FastAPI backend, SwiftUI iOS and Kotlin/Compose Android sharing one contract and one set of test fixtures.", tr: "FastAPI backend, SwiftUI iOS ve Kotlin/Compose Android; tek bir sözleşme ve ortak test fixture'ları." },
      { en: "Retry-safe CSV bank import with mapping, duplicate review and partial-failure recovery; decimal-safe money in four currencies.", tr: "Eşleme, mükerrer kontrolü ve kısmi hata kurtarmalı, tekrar denemeye dayanıklı CSV banka aktarımı; dört para biriminde decimal güvenli para." },
      { en: "Versioned edits, a 30-day trash, durable account deletion; CI scans dependencies and full Git history.", tr: "Sürümlü düzenlemeler, 30 günlük çöp kutusu, kalıcı hesap silme; CI bağımlılıkları ve tüm Git geçmişini tarar." },
    ],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "SwiftUI", "Kotlin", "Compose"],
  },
  {
    slug: "dawnia", name: "Dawnia", kind: { en: "Medication & habit tracker", tr: "İlaç ve alışkanlık takibi" }, status: { en: "iOS · App Store", tr: "iOS · App Store" }, url: "https://appdawnia.com",
    img: "/apps/dawnia/today.jpg", shape: "phone",
    headline: { en: "Offline-first, with no account and no server.", tr: "Önce çevrimdışı; hesap yok, sunucu yok." },
    points: [
      { en: "A portable pure-Swift domain package: DST-safe scheduling, versioned rules, adherence and inventory.", tr: "Taşınabilir saf Swift alan paketi: yaz saatine dayanıklı planlama, sürümlü kurallar, uyum ve stok takibi." },
      { en: "A diff-based notification planner, widgets, Live Activities, Siri App Intents and doctor-ready PDF reports.", tr: "Fark tabanlı bildirim planlayıcı, widget'lar, Canlı Etkinlikler, Siri App Intents ve doktora hazır PDF raporlar." },
    ],
    stack: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "App Intents"],
  },
];

export const skills: { group: Text; items: string }[] = [
  { group: { en: "Backend", tr: "Backend" }, items: "Node.js, TypeScript, Python, Express, NestJS, FastAPI, PostgreSQL, Redis, Prisma, SQLAlchemy, BullMQ, REST & system design" },
  { group: { en: "AI", tr: "Yapay zekâ" }, items: "Anthropic, OpenAI and Gemini APIs, MCP servers & agents, Claude Skills, model ensembles" },
  { group: { en: "Cloud & DevOps", tr: "Bulut & DevOps" }, items: "AWS (Lambda, API Gateway, SQS/SNS, Glue, Athena, RDS, ElastiCache, IAM, CloudWatch), Docker, Nginx, GitHub Actions, Prometheus, Grafana" },
  { group: { en: "Frontend", tr: "Frontend" }, items: "React, Next.js (App Router), Angular, Tailwind, Lighthouse, Vitest, Playwright" },
  { group: { en: "Mobile", tr: "Mobil" }, items: "Swift, SwiftUI, SwiftData, HealthKit, WidgetKit, App Intents, App Attest, Kotlin, Jetpack Compose" },
];

export const facts: { k: Text; v: Text }[] = [
  { k: { en: "Education", tr: "Eğitim" }, v: { en: "B.Sc. Computer Engineering, Sakarya University, 2017 — 2021", tr: "Bilgisayar Mühendisliği Lisans, Sakarya Üniversitesi, 2017 — 2021" } },
  { k: { en: "Languages", tr: "Diller" }, v: { en: "Turkish (native), English (professional working proficiency)", tr: "Türkçe (ana dil), İngilizce (profesyonel çalışma yetkinliği)" } },
  { k: { en: "Based in", tr: "Konum" }, v: { en: "Istanbul — open to relocation across Europe", tr: "İstanbul — Avrupa'ya taşınmaya açık" } },
];

export const pick = <T,>(x: Record<Lang, T>, lang: Lang) => x[lang];
