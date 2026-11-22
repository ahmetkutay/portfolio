import type { AppSlug, Text } from "./content";

/**
 * The layers of a product, top to bottom. The whole site is drawn from this:
 * the exploded stack in the hero, each app's cross-section, and the toolbox.
 */
export type LayerId = "product" | "interface" | "ios" | "android" | "web" | "backend" | "infra" | "security";

export const layers: { id: LayerId; name: Text; color: string }[] = [
  { id: "product", name: { en: "Product", tr: "Ürün" }, color: "#E8501E" },
  { id: "interface", name: { en: "Interface design", tr: "Arayüz tasarımı" }, color: "#F0A030" },
  { id: "ios", name: { en: "iOS", tr: "iOS" }, color: "#3B78DE" },
  { id: "android", name: { en: "Android", tr: "Android" }, color: "#2F9A63" },
  { id: "web", name: { en: "Web", tr: "Web" }, color: "#7657DB" },
  { id: "backend", name: { en: "Backend & AI", tr: "Backend & yapay zekâ" }, color: "#13919B" },
  { id: "infra", name: { en: "Infrastructure", tr: "Altyapı" }, color: "#5B626C" },
  { id: "security", name: { en: "Security", tr: "Güvenlik" }, color: "#1B1F25" },
];

/** Which layers I built for each app. Dawnia has no server, so no backend or infrastructure. */
export const appLayers: Record<AppSlug, LayerId[]> = {
  onelior: ["product", "interface", "ios", "backend", "infra", "security"],
  moxakk: ["product", "interface", "web", "backend", "infra", "security"],
  cevixa: ["product", "interface", "ios", "android", "backend", "infra", "security"],
  dawnia: ["product", "interface", "ios", "security"],
  travelersbase: ["product", "interface", "ios", "web", "backend", "infra"],
};

/** Toolbox groups, each pinned to the layer it serves. */
export const toolboxLayer: Record<string, LayerId> = {
  Mobile: "ios",
  Web: "web",
  Backend: "backend",
  Data: "backend",
  "Cloud & ops": "infra",
  AI: "backend",
};

export const site = {
  every: { en: "One founder, every layer.", tr: "Tek kurucu, her katman." },
  hover: { en: "Point at a layer to see the apps it holds up.", tr: "Bir katmanın üzerine gel; hangi uygulamaları taşıdığını gör." },
  usedBy: { en: "Built for", tr: "Kullanan" },
  crossSection: { en: "Cross-section", tr: "Kesit" },
  layersOf: { en: "of 8 layers", tr: "/ 8 katman" },
  graph: {
    title: { en: ["Nearly six years,", "one history."], tr: ["Altı yıla yakın,", "tek bir geçmiş."] },
    intro: {
      en: "From the first commit at university to running a studio alongside a consulting role. Open any entry for the details.",
      tr: "Üniversitedeki ilk commit'ten, danışmanlık rolüyle yan yana yürüyen bir stüdyoya. Detaylar için herhangi bir kaydı aç.",
    },
    branch: { en: "Omnia Potentia branch", tr: "Omnia Potentia dalı" },
    main: { en: "main", tr: "main" },
    now: { en: "Now", tr: "Şu an" },
    studioRole: { en: "Founder", tr: "Kurucu" },
    studioDetail: {
      en: "Designing, building and running five apps end to end, in parallel with consulting.",
      tr: "Danışmanlıkla paralel olarak beş uygulamayı uçtan uca tasarlıyor, geliştiriyor ve işletiyorum.",
    },
    root: { en: "First commit", tr: "İlk commit" },
    details: { en: "Details", tr: "Detaylar" },
  },
  kit: { en: "Toolbox, by layer", tr: "Katmana göre araç kutusu" },
  local: { en: "Istanbul time", tr: "İstanbul saati" },
};
