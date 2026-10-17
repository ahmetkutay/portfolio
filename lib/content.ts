export type Lang = "en" | "tr";
export type Text = Record<Lang, string>;

export const links = {
  email: "kutaykaracair@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmetkutay",
  github: "https://github.com/ahmetkutay",
  studio: "https://omniapotentia.com",
  studioGithub: "https://github.com/OmniaPotentia",
  resume: "/resume/kutaykaracair_resume.pdf",
};

export const ui = {
  nav: {
    work: { en: "Apps", tr: "Uygulamalar" },
    studio: { en: "Studio", tr: "Stüdyo" },
    experience: { en: "Experience", tr: "Deneyim" },
    contact: { en: "Contact", tr: "İletişim" },
  },
  resume: { en: "CV", tr: "CV" },
  hero: {
    eyebrow: {
      en: "Software engineer & founder — Istanbul",
      tr: "Yazılım mühendisi & kurucu — İstanbul",
    },
    lead: {
      en: "I design, build and run native apps for iPhone and Android — and the backends, infrastructure and AI behind them. Founder of Omnia Potentia, an independent app studio.",
      tr: "iPhone ve Android için native uygulamalar tasarlıyor, geliştiriyor ve işletiyorum — arkalarındaki backend, altyapı ve yapay zekâ dahil. Bağımsız bir uygulama stüdyosu olan Omnia Potentia'nın kurucusuyum.",
    },
    primary: { en: "See the apps", tr: "Uygulamaları gör" },
    secondary: { en: "Download CV", tr: "CV'yi indir" },
    available: { en: "Open to select projects", tr: "Seçili projelere açığım" },
    now: { en: "Now", tr: "Şu an" },
  },
  sections: {
    studio: { en: "The studio", tr: "Stüdyo" },
    work: { en: "Selected apps", tr: "Seçili uygulamalar" },
    experience: { en: "Experience", tr: "Deneyim" },
    toolbox: { en: "Toolbox", tr: "Araç kutusu" },
    principles: { en: "How I work", tr: "Nasıl çalışırım" },
    contact: { en: "Contact", tr: "İletişim" },
  },
  workTitle: { en: ["Apps I", "build & run."], tr: ["Geliştirip", "işlettiğim uygulamalar."] },
  workIntro: {
    en: "Every app here is designed, engineered and operated by me under Omnia Potentia — from the first sketch to the store listing and the servers behind it.",
    tr: "Buradaki her uygulamayı Omnia Potentia çatısı altında ben tasarladım, geliştirdim ve işletiyorum — ilk eskizden mağaza sayfasına ve arkasındaki sunuculara kadar.",
  },
  built: { en: "What I built", tr: "Neler geliştirdim" },
  visit: { en: "Website", tr: "Web sitesi" },
  appStore: { en: "App Store", tr: "App Store" },
  status: {
    live: { en: "On the App Store", tr: "App Store'da" },
    web: { en: "Live on the web", tr: "Web'de yayında" },
    soon: { en: "Coming soon", tr: "Yakında" },
    wip: { en: "In development", tr: "Geliştiriliyor" },
  },
  studio: {
    title: { en: ["Small studio.", "Full ownership."], tr: ["Küçük stüdyo.", "Tam sahiplik."] },
    body: {
      en: "I founded Omnia Potentia to build the kind of software I want to use myself: calm, focused apps with serious engineering underneath. I own every layer — product and interface design, native iOS and Android clients, APIs, infrastructure and security — and keep them running in production.",
      tr: "Omnia Potentia'yı kendi kullanmak isteyeceğim türden yazılımlar üretmek için kurdum: altında ciddi mühendislik olan sakin ve odaklı uygulamalar. Ürün ve arayüz tasarımından native iOS ve Android istemcilere, API'lerden altyapı ve güvenliğe kadar her katman bende — ve hepsini canlıda işletiyorum.",
    },
    role: { en: "Founder", tr: "Kurucu" },
    cta: { en: "Visit the studio", tr: "Stüdyoyu ziyaret et" },
  },
  experienceTitle: { en: ["Nearly six years", "of shipping systems."], tr: ["Altı yıla yakın", "sistem teslimi."] },
  education: { en: "Education", tr: "Eğitim" },
  hobbies: { en: "Off the keyboard", tr: "Klavye dışında" },
  contact: {
    title: { en: ["Have something", "worth building?"], tr: ["Üretmeye değer", "bir fikrin mi var?"] },
    body: {
      en: "I'm open to select freelance work, technical partnerships and good conversations about products. For studio projects, write to Omnia Potentia directly.",
      tr: "Seçili freelance işlere, teknik ortaklıklara ve ürünler üzerine iyi sohbetlere açığım. Stüdyo projeleri için doğrudan Omnia Potentia'ya yazabilirsin.",
    },
  },
  footer: { en: "Last updated 10/2026", tr: "Son güncelleme 10/2026" },
  istanbul: { en: "Istanbul", tr: "İstanbul" },
} as const;

export const now: { label: Text; detail: Text }[] = [
  {
    label: { en: "Founder, Omnia Potentia", tr: "Kurucu, Omnia Potentia" },
    detail: { en: "Building and running our own apps", tr: "Kendi uygulamalarımızı geliştirip işletiyoruz" },
  },
  {
    label: { en: "Senior Software Engineer, Accenture", tr: "Senior Software Engineer, Accenture" },
    detail: { en: "LLM document pipelines on MCP", tr: "MCP üzerinde LLM doküman pipeline'ları" },
  },
  {
    label: { en: "Four apps live", tr: "Dört uygulama yayında" },
    detail: { en: "Onelior, Cevixa, Dawnia on the App Store · Moxakk on the web", tr: "Onelior, Cevixa, Dawnia App Store'da · Moxakk web'de" },
  },
];

export const stats: { value: string; label: Text }[] = [
  { value: "5+", label: { en: "years shipping to production", tr: "yıl canlıya teslim" } },
  { value: "5", label: { en: "studio apps", tr: "stüdyo uygulaması" } },
  { value: "3", label: { en: "platforms — iOS, Android, web", tr: "platform — iOS, Android, web" } },
];

export type AppStatus = "live" | "soon" | "wip";
export type AppSlug = "onelior" | "moxakk" | "cevixa" | "dawnia" | "travelersbase";

export type App = {
  slug: AppSlug;
  name: string;
  icon?: string;
  category: Text;
  tagline: Text;
  summary: Text;
  built: Text[];
  stack: string[];
  platforms: string[];
  status: AppStatus;
  url?: string;
  appStoreUrl?: string;
};

export const apps: App[] = [
  {
    slug: "onelior",
    name: "Onelior",
    icon: "/apps/onelior/icon.jpg",
    category: { en: "Health & Fitness", tr: "Sağlık & Fitness" },
    tagline: { en: "Every workout is altitude.", tr: "Her antrenman bir irtifa." },
    summary: {
      en: "Workouts, sleep and study flow in from Apple Health and become metres on the way up Everest — then the rest of the Seven Summits. Eight stats form a compass of the athlete you are becoming.",
      tr: "Antrenman, uyku ve çalışma Apple Health'ten gelir; Everest'e, ardından Yedi Zirve'ye uzanan yolda metreye dönüşür. Sekiz istatistik, dönüştüğün sporcunun pusulasını çizer.",
    },
    built: [
      {
        en: "Native SwiftUI app with HealthKit sync, Sign in with Apple and Google, and App Attest device integrity.",
        tr: "HealthKit senkronizasyonu, Apple ve Google ile giriş ve App Attest cihaz doğrulaması olan native SwiftUI uygulaması.",
      },
      {
        en: "Server-authoritative progression on a NestJS, Prisma and PostgreSQL backend, with Redis for queues and distributed throttling.",
        tr: "NestJS, Prisma ve PostgreSQL üzerinde sunucu otoriteli ilerleme modeli; kuyruklar ve dağıtık hız sınırlama için Redis.",
      },
      {
        en: "Rotating refresh sessions, a one-time nonce sign-in flow and native account deletion.",
        tr: "Dönen refresh oturumları, tek kullanımlık nonce ile giriş akışı ve uygulama içi hesap silme.",
      },
    ],
    stack: ["SwiftUI", "HealthKit", "NestJS", "Prisma", "PostgreSQL", "Redis", "Docker"],
    platforms: ["iOS", "iPadOS"],
    status: "live",
    url: "https://onelior.com",
    appStoreUrl: "https://apps.apple.com/app/onelior/id6789689297",
  },
  {
    slug: "moxakk",
    name: "Moxakk",
    icon: "/apps/moxakk/icon.svg",
    category: { en: "Sports · AI", tr: "Spor · Yapay zekâ" },
    tagline: { en: "Read the game before kick-off.", tr: "Maçı başlama düdüğünden önce oku." },
    summary: {
      en: "Three AI models — Claude, OpenAI and Gemini — read every football match from licensed data: form, lineups, team news and the market. You get one clear answer: what's likely, why, and how sure we are. Every read is scored against the result.",
      tr: "Üç yapay zekâ modeli — Claude, OpenAI ve Gemini — her futbol maçını lisanslı veriden okur: form, kadrolar, takım haberleri ve piyasa. Sonuçta tek bir net cevap: ne olası, neden ve ne kadar eminiz. Her tahmin maç sonucuyla puanlanır.",
    },
    built: [
      {
        en: "Express, Prisma and PostgreSQL API that gathers licensed API-Football and odds data in parallel behind a quota-aware, two-layer cache.",
        tr: "Lisanslı API-Football ve oran verisini, kota farkındalıklı iki katmanlı bir önbellek arkasında paralel toplayan Express, Prisma ve PostgreSQL API'si.",
      },
      {
        en: "Three-model ensemble on BullMQ workers: each model's output is schema-validated, reconciled into one read and compared with the market.",
        tr: "BullMQ worker'ları üzerinde üç modelli topluluk: her modelin çıktısı şema ile doğrulanır, tek bir okumada birleştirilir ve piyasayla karşılaştırılır.",
      },
      {
        en: "Next.js 16 web app with lineup refreshes, shareable analyses and a public track record, tested with Playwright and axe for WCAG 2.1 AA.",
        tr: "Kadro yenileme, paylaşılabilir analizler ve herkese açık başarı geçmişi olan Next.js 16 web uygulaması; Playwright ve axe ile WCAG 2.1 AA testleri.",
      },
    ],
    stack: ["Next.js", "React", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Claude", "OpenAI", "Gemini"],
    platforms: ["Web"],
    status: "live",
    url: "https://moxakk.com",
  },
  {
    slug: "cevixa",
    name: "Cevixa",
    icon: "/apps/cevixa/icon.svg",
    category: { en: "Finance", tr: "Finans" },
    tagline: { en: "Every expense, a grain of sand.", tr: "Her harcama bir kum tanesi." },
    summary: {
      en: "Personal and shared expense tracking. Your monthly limit sits in an hourglass — as you spend, sand falls. Bills, receipts, bank CSVs and four currencies in one calm app.",
      tr: "Kişisel ve ortak harcama takibi. Aylık limitin bir kum saatinde durur; harcadıkça kum akar. Faturalar, fişler, banka CSV'leri ve dört para birimi tek bir sakin uygulamada.",
    },
    built: [
      {
        en: "Two fully native clients — SwiftUI on iOS, Kotlin and Jetpack Compose on Android — sharing one OpenAPI contract and test fixtures.",
        tr: "Tek bir OpenAPI sözleşmesini ve test fixture'larını paylaşan iki tamamen native istemci: iOS'ta SwiftUI, Android'de Kotlin ve Jetpack Compose.",
      },
      {
        en: "FastAPI and PostgreSQL backend; money as decimal strings end to end and ECB-referenced FX for TRY, EUR, USD and GBP.",
        tr: "FastAPI ve PostgreSQL backend; uçtan uca decimal string para ve TRY, EUR, USD, GBP için ECB referanslı kur.",
      },
      {
        en: "Shared spaces with roles, CSV import with duplicate review, on-device receipt OCR and APNs/FCM reminders.",
        tr: "Rollü ortak alanlar, mükerrer kontrollü CSV içe aktarma, cihaz üzerinde fiş OCR'ı ve APNs/FCM hatırlatmaları.",
      },
    ],
    stack: ["SwiftUI", "Kotlin", "Jetpack Compose", "FastAPI", "PostgreSQL", "OpenAPI"],
    platforms: ["iOS", "Android"],
    status: "live",
    url: "https://appcevixa.com",
    appStoreUrl: "https://apps.apple.com/app/cevixa-expense-tracker/id6818992503",
  },
  {
    slug: "dawnia",
    name: "Dawnia",
    icon: "/apps/dawnia/icon.png",
    category: { en: "Health & Habits", tr: "Sağlık & Alışkanlık" },
    tagline: { en: "Every dose, an inn on the day's road.", tr: "Her doz, günün yolunda bir han." },
    summary: {
      en: "A calm medication, habit and task tracker. Doses, habits and to-dos line up on the day's road while a caravan moves from inn to inn. No account, no server — everything stays on the phone.",
      tr: "Sakin bir ilaç, alışkanlık ve görev takipçisi. Dozlar, alışkanlıklar ve yapılacaklar günün yolunda sıralanır; kervan handan hana ilerler. Hesap yok, sunucu yok — her şey telefonda kalır.",
    },
    built: [
      {
        en: "SwiftUI and SwiftData on top of a pure-Swift domain package with no UI dependencies, ready to port to Android.",
        tr: "UI bağımlılığı olmayan, Android'e taşınmaya hazır saf Swift alan paketi üzerinde SwiftUI ve SwiftData.",
      },
      {
        en: "DST-safe scheduling, versioned rules and a sliding-window notification planner with deterministic IDs.",
        tr: "Yaz saatine dayanıklı planlama, sürümlü kurallar ve deterministik kimlikli kayan pencere bildirim planlayıcısı.",
      },
      {
        en: "Widgets, Live Activities, Siri Shortcuts through App Intents, and a doctor-ready PDF report.",
        tr: "Widget'lar, Canlı Etkinlikler, App Intents ile Siri Kestirmeleri ve doktora hazır PDF rapor.",
      },
    ],
    stack: ["SwiftUI", "SwiftData", "WidgetKit", "ActivityKit", "App Intents"],
    platforms: ["iOS"],
    status: "live",
    url: "https://appdawnia.com",
    appStoreUrl: "https://apps.apple.com/app/dawnia/id6819712758",
  },
  {
    slug: "travelersbase",
    name: "TravelersBase",
    category: { en: "Travel · Community", tr: "Seyahat · Topluluk" },
    tagline: { en: "A home base for travelers, in the making.", tr: "Gezginler için bir üs, yapım aşamasında." },
    summary: {
      en: "A community hub for travelers — threads, posts and conversations with people on the road, with AI-powered trip planning built in.",
      tr: "Gezginler için bir topluluk merkezi — yoldaki insanlarla başlıklar, gönderiler ve sohbetler; içine yerleşik AI destekli seyahat planlama.",
    },
    built: [
      {
        en: "Dual-database architecture: Redis on ElastiCache for low-latency reads, PostgreSQL for persistence.",
        tr: "Çift veritabanı mimarisi: düşük gecikmeli okumalar için ElastiCache üzerinde Redis, kalıcılık için PostgreSQL.",
      },
      {
        en: "Node.js REST APIs with query optimisation for sub-second itinerary generation.",
        tr: "Saniyenin altında rota üretimi için sorgu optimizasyonlu Node.js REST API'leri.",
      },
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS", "AI"],
    platforms: ["iOS", "Web"],
    status: "wip",
  },
];

export type Role = {
  title: string;
  period: string;
  points: Text[];
  metrics?: Text[];
};

export const experience: { company: string; location: Text; roles: Role[] }[] = [
  {
    company: "Accenture",
    location: { en: "Remote", tr: "Uzaktan" },
    roles: [
      {
        title: "Senior Software Engineer",
        period: "03/2025 — Present",
        points: [
          {
            en: "Consulting across three client engagements — an AI document generation platform for a global pharmaceutical client, an AWS data platform and an enterprise component library for a healthcare B2B client — with the role shifting to what each project needs.",
            tr: "Danışmanlık tarafında üç müşteri projesinde çalışıyorum — global bir ilaç müşterisi için yapay zekâ ile doküman üretim platformu, bir AWS veri platformu ve sağlık sektöründe B2B bir müşteri için kurumsal bileşen kütüphanesi; rolüm her projenin ihtiyacına göre şekillendi.",
          },
          {
            en: "Now — AI document generation for a global pharmaceutical client: extending a Python MCP server with new rules and capabilities that power LLM pipelines — client guidelines and annotations become structured prompts, documents are generated from templates and reference files, then validated against the source requirements, with Claude Skills and MCP-based agents.",
            tr: "Şu an — global bir ilaç müşterisi için yapay zekâ ile doküman üretimi: Python ile yazılmış bir MCP sunucusunu, LLM pipeline'larını besleyen yeni kurallar ve yeteneklerle genişletiyorum — müşteri yönergeleri ve notları yapılandırılmış prompt'lara dönüşüyor, dokümanlar şablon ve referans dosyalardan üretiliyor ve kaynak gereksinimlere göre doğrulanıyor; Claude Skills ve MCP tabanlı agent'larla.",
          },
          {
            en: "Enterprise component library for a healthcare B2B client: architected the performance testing strategy with user-flow tests for 45+ components in Lighthouse, Vitest and Playwright, and contributed 7 production components within the design system.",
            tr: "Sağlık sektöründe B2B bir müşterinin kurumsal bileşen kütüphanesi: performans test stratejisini kurdum; Lighthouse, Vitest ve Playwright ile 45+ bileşen için kullanıcı akışı bazlı testler yazdım ve tasarım sistemine 7 canlı bileşen kattım.",
          },
          {
            en: "AWS data platform: built the backend of a full-stack data platform on Node.js and AWS — serverless REST APIs on Lambda and API Gateway, an event-driven messaging layer on SNS and SQS, and Spark ETL pipelines in AWS Glue feeding Athena for SQL over managed tables.",
            tr: "AWS veri platformu: Node.js ve AWS üzerinde full-stack bir veri platformunun backend'ini geliştirdim — Lambda ve API Gateway ile serverless REST API'ler, SNS ve SQS ile olay güdümlü mesajlaşma katmanı ve yönetilen tablolar üzerinde SQL için Athena'yı besleyen AWS Glue Spark ETL pipeline'ları.",
          },
          {
            en: "Managed IAM-based access control, used CloudWatch for monitoring and incident investigation, set up Grafana dashboards and delivered the Angular frontend that surfaces the data.",
            tr: "IAM tabanlı erişim kontrolünü yönettim, izleme ve olay incelemesi için CloudWatch kullandım, Grafana panoları kurdum ve veriyi gösteren Angular arayüzünü teslim ettim.",
          },
          {
            en: "Run code reviews and mentor teammates on backend architecture, cloud services and testing.",
            tr: "Kod review'ları yapıyor; ekip arkadaşlarıma backend mimarisi, bulut servisleri ve test yöntemleri konusunda mentorluk ediyorum.",
          },
        ],
        metrics: [
          { en: "45+ components perf-tested", tr: "45+ bileşen performans testi" },
          { en: "7 production components", tr: "7 canlı bileşen" },
        ],
      },
    ],
  },
  {
    company: "Karnaval Media Group",
    location: { en: "Istanbul", tr: "İstanbul" },
    roles: [
      {
        title: "Mid-level Software Engineer",
        period: "03/2024 — 01/2025",
        points: [
          {
            en: "Refactored critical rendering paths and trimmed bundle size in React and Next.js apps, cutting page load by 40% and lifting content engagement across the platform.",
            tr: "React ve Next.js uygulamalarında kritik render yollarını yeniden yapılandırıp bundle boyutunu küçülttüm; sayfa yüklemeyi %40 kısaltıp platform genelinde içerik etkileşimini artırdım.",
          },
          {
            en: "Established reusable component libraries and modern standards across PHP, Node.js and React apps.",
            tr: "PHP, Node.js ve React uygulamalarında yeniden kullanılabilir bileşen kütüphaneleri ve modern standartlar kurdum.",
          },
        ],
        metrics: [
          { en: "−40% page load", tr: "−%40 sayfa yükleme" },
          { en: "−30% dev time", tr: "−%30 geliştirme süresi" },
        ],
      },
    ],
  },
  {
    company: "Orion Innovation",
    location: { en: "Istanbul", tr: "İstanbul" },
    roles: [
      {
        title: "DevOps Engineer",
        period: "07/2023 — 03/2024",
        points: [
          {
            en: "Led the cross-region migration of 6 production servers from Russia to Turkey; a phased rollout with validation at every step kept 99.8% data integrity and cut planned downtime by 40%.",
            tr: "6 canlı sunucunun Rusya'dan Türkiye'ye bölgeler arası taşınmasını yönettim; her adımda doğrulamalı, aşamalı geçişle %99,8 veri bütünlüğü korundu ve planlı kesinti %40 azaldı.",
          },
          {
            en: "Built monitoring, alerting and CI/CD with Prometheus and Grafana — alert thresholds, on-call procedures and quality gates — and investigated and resolved the incidents they raised.",
            tr: "Prometheus ve Grafana ile izleme, alarm ve CI/CD kurdum — alarm eşikleri, nöbet prosedürleri ve kalite kontrolleri — ve tetiklenen olayları inceleyip çözdüm.",
          },
          {
            en: "Automated backup and disaster recovery and streamlined the delivery pipelines.",
            tr: "Yedekleme ve felaket kurtarmayı otomatikleştirdim, teslimat pipeline'larını sadeleştirdim.",
          },
        ],
        metrics: [
          { en: "99.8% data integrity", tr: "%99,8 veri bütünlüğü" },
          { en: "−60% recovery time", tr: "−%60 kurtarma süresi" },
          { en: "+45% faster detection", tr: "+%45 hızlı tespit" },
        ],
      },
      {
        title: "Software Engineer",
        period: "12/2021 — 07/2023",
        points: [
          {
            en: "Refactored core application logic and optimised database queries: 32% faster responses and 25% less server load, lowering infrastructure costs.",
            tr: "Çekirdek uygulama mantığını yeniden yapılandırıp veritabanı sorgularını optimize ettim: yanıtlar %32 hızlandı, sunucu yükü %25 azaldı ve altyapı maliyeti düştü.",
          },
          {
            en: "Served as Scrum Master for a team of 5–6 and mentored 2 interns end to end on an internal tool — from sprint ceremonies to code quality and the full development lifecycle.",
            tr: "5–6 kişilik bir ekipte Scrum Master oldum; 2 stajyere bir iç araç projesinde uçtan uca mentorluk ettim — sprint seremonilerinden kod kalitesine ve tüm geliştirme döngüsüne kadar.",
          },
          {
            en: "Designed and shipped client features and folded user feedback into product iterations.",
            tr: "Müşteri ihtiyaçlarına göre özellikler tasarlayıp geliştirdim, kullanıcı geri bildirimlerini ürün döngüsüne kattım.",
          },
        ],
        metrics: [
          { en: "+32% response time", tr: "+%32 yanıt süresi" },
          { en: "−25% server resources", tr: "−%25 sunucu kaynağı" },
        ],
      },
    ],
  },
  {
    company: "Casemice Digital",
    location: { en: "Istanbul", tr: "İstanbul" },
    roles: [
      {
        title: "Junior Software Engineer",
        period: "01/2021 — 12/2021",
        points: [
          {
            en: "Built a real-time 3D virtual environment where medical professionals attend conferences and discuss presentations together on a shared big screen — React and Three.js on a WebSocket-based Node.js backend.",
            tr: "Sağlık profesyonellerinin konferanslara katılıp sunumları ortak büyük bir ekranda birlikte tartıştığı gerçek zamanlı bir 3D sanal ortam geliştirdim — WebSocket tabanlı Node.js backend üzerinde React ve Three.js.",
          },
          {
            en: "Profiled and debugged JavaScript and React apps for better performance.",
            tr: "JavaScript ve React uygulamalarını profilleyip debug ederek performanslarını iyileştirdim.",
          },
        ],
      },
    ],
  },
];

export const toolbox: { group: Text; items: string[] }[] = [
  {
    group: { en: "Mobile", tr: "Mobil" },
    items: ["Swift", "SwiftUI", "SwiftData", "HealthKit", "WidgetKit", "Kotlin", "Jetpack Compose"],
  },
  {
    group: { en: "Web", tr: "Web" },
    items: ["TypeScript", "React", "Next.js", "Angular", "Tailwind CSS", "Playwright", "Vitest"],
  },
  {
    group: { en: "Backend", tr: "Backend" },
    items: ["Node.js", "NestJS", "Express", "Python", "FastAPI", "PHP"],
  },
  {
    group: { en: "Data", tr: "Veri" },
    items: ["PostgreSQL", "Prisma", "SQLAlchemy", "Redis", "BullMQ", "MongoDB", "MySQL"],
  },
  {
    group: { en: "Cloud & ops", tr: "Bulut & operasyon" },
    items: ["AWS", "Lambda", "SQS · SNS", "Glue · Athena", "Hetzner", "Docker", "nginx", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    group: { en: "AI", tr: "Yapay zekâ" },
    items: ["Anthropic", "OpenAI", "Gemini", "MCP servers & agents", "Claude Skills", "Model ensembles", "n8n"],
  },
];

export const principles: { title: Text; text: Text }[] = [
  {
    title: { en: "Own the whole thing", tr: "Bütünü sahiplen" },
    text: {
      en: "Design, client, API, database and servers. Fewer hand-offs means fewer gaps — and someone who answers for every layer.",
      tr: "Tasarım, istemci, API, veritabanı ve sunucular. Daha az el değiştirme, daha az boşluk demek — ve her katmandan sorumlu biri.",
    },
  },
  {
    title: { en: "Security from day one", tr: "İlk günden güvenlik" },
    text: {
      en: "Threat models, secret scanning and hardening reviews are part of the build, not a checklist before launch.",
      tr: "Tehdit modelleri, secret taraması ve sıkılaştırma incelemeleri geliştirmenin parçası; yayın öncesi bir kontrol listesi değil.",
    },
  },
  {
    title: { en: "Calm by design", tr: "Tasarımdan gelen sakinlik" },
    text: {
      en: "Software should earn attention, not demand it. Clear metaphors, honest data and AI only where it actually helps.",
      tr: "Yazılım dikkati talep etmemeli, hak etmeli. Net metaforlar, dürüst veri ve yalnızca gerçekten işe yaradığı yerde yapay zekâ.",
    },
  },
];

export const education = {
  school: "Sakarya University",
  degree: { en: "BSc, Computer Engineering · 2017 — 2021", tr: "Bilgisayar Mühendisliği, Lisans · 2017 — 2021" } satisfies Text,
};

export const hobbies: Text = {
  en: "Cooking, chess and Go, language exchange and meeting people from other cultures.",
  tr: "Yemek yapmak, satranç ve Go, dil değişimi ve farklı kültürlerden insanlarla tanışmak.",
};
