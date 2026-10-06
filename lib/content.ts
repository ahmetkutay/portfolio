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
    lab: { en: "From the lab", tr: "Laboratuvardan" },
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
  labTitle: { en: ["Not everything", "ships."], tr: ["Her şey", "yayınlanmaz."] },
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
    detail: { en: "Cloud and web platforms", tr: "Bulut ve web platformları" },
  },
  {
    label: { en: "Shipping Onelior 2.0", tr: "Onelior 2.0 yayında" },
    detail: { en: "The Climb — every workout is altitude", tr: "Tırmanış — her antrenman bir irtifa" },
  },
];

export const stats: { value: string; label: Text }[] = [
  { value: "5+", label: { en: "years shipping to production", tr: "yıl canlıya teslim" } },
  { value: "4", label: { en: "studio apps", tr: "stüdyo uygulaması" } },
  { value: "3", label: { en: "platforms — iOS, Android, web", tr: "platform — iOS, Android, web" } },
];

export type AppStatus = "live" | "soon" | "wip";
export type AppSlug = "onelior" | "cevixa" | "dawnia" | "travelersbase";

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
    status: "soon",
    url: "https://appcevixa.com",
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
    status: "soon",
    url: "https://appdawnia.com",
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

export const lab = {
  name: "Moxakk Analyzer",
  summary: {
    en: "A research tool for football and basketball match analysis. A three-model AI ensemble (OpenAI, Anthropic, Cohere) turns multi-source match data into structured reports — with a native iOS app, a web app and an accuracy dashboard. Kept as an internal project.",
    tr: "Futbol ve basketbol maç analizi için bir araştırma aracı. Üç modelli bir AI topluluğu (OpenAI, Anthropic, Cohere) çok kaynaklı maç verisini yapılandırılmış raporlara dönüştürür — native iOS uygulaması, web uygulaması ve isabet panosuyla. İç proje olarak sürdürülüyor.",
  } satisfies Text,
  tags: ["Multi-model AI", "Data pipelines", "SwiftUI", "Next.js", "Docker · ARM64"],
};

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
        period: "08/2025 — Present",
        points: [
          {
            en: "Work with UX/UI designers to turn designs into polished, production interfaces.",
            tr: "UX/UI tasarımcılarıyla birlikte tasarımları canlıya hazır, özenli arayüzlere dönüştürüyorum.",
          },
          {
            en: "Mentor junior developers and run code reviews to keep quality and standards high.",
            tr: "Junior geliştiricilere mentorluk yapıyor, kod review'larla kaliteyi ve standartları yüksek tutuyorum.",
          },
        ],
      },
      {
        title: "Cloud Engineer",
        period: "03/2025 — 08/2025",
        points: [
          {
            en: "Architected and deployed AWS services with Node.js and Angular, improving scalability and cutting latency across distributed systems.",
            tr: "Node.js ve Angular ile AWS servisleri tasarlayıp yayına aldım; dağıtık sistemlerde ölçeklenebilirliği artırıp gecikmeyi düşürdüm.",
          },
          {
            en: "Championed DevOps practices and evaluated new cloud technologies for the platform roadmap.",
            tr: "DevOps pratiklerini yaygınlaştırdım ve platform yol haritası için yeni bulut teknolojilerini değerlendirdim.",
          },
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
            en: "Optimised and refactored the frontend for faster content delivery and better engagement.",
            tr: "Daha hızlı içerik sunumu ve daha iyi etkileşim için frontend'i optimize edip yeniden yapılandırdım.",
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
            en: "Led the full migration of production servers from Russia to Turkey with 40% less planned downtime.",
            tr: "Canlı sunucuların Rusya'dan Türkiye'ye taşınmasını uçtan uca yürüttüm; planlı kesintiyi %40 azalttım.",
          },
          {
            en: "Automated backup and disaster recovery, streamlined pipelines and introduced proactive monitoring.",
            tr: "Yedekleme ve felaket kurtarmayı otomatikleştirdim, pipeline'ları sadeleştirip proaktif izleme kurdum.",
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
            en: "Designed and shipped client features and folded user feedback into product iterations.",
            tr: "Müşteri ihtiyaçlarına göre özellikler tasarlayıp geliştirdim, kullanıcı geri bildirimlerini ürün döngüsüne kattım.",
          },
          {
            en: "Optimised code structure and queries for faster responses and lower server load.",
            tr: "Daha hızlı yanıt ve daha düşük sunucu yükü için kod yapısını ve sorguları optimize ettim.",
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
            en: "Helped build a real-time 3D web environment with React, Three.js and Node.js sockets.",
            tr: "React, Three.js ve Node.js socket'leriyle gerçek zamanlı bir 3D web ortamının geliştirilmesinde yer aldım.",
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
    items: ["TypeScript", "React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    group: { en: "Backend", tr: "Backend" },
    items: ["Node.js", "NestJS", "Express", "Python", "FastAPI", "PHP"],
  },
  {
    group: { en: "Data", tr: "Veri" },
    items: ["PostgreSQL", "Prisma", "Redis", "MongoDB", "MySQL"],
  },
  {
    group: { en: "Cloud & ops", tr: "Bulut & operasyon" },
    items: ["AWS", "Hetzner", "Docker", "nginx", "GitHub Actions", "CI/CD"],
  },
  {
    group: { en: "AI", tr: "Yapay zekâ" },
    items: ["OpenAI", "Anthropic", "Cohere", "Model ensembles", "On-device OCR"],
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
