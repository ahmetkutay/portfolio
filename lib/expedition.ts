import type { AppSlug, Text } from "./content";

export const SUMMIT = 8849;

export const formatMetres = (metres: number) =>
  `${Math.round(metres).toLocaleString("de-DE")} m`;

export type CampId = "base" | "studio" | "routes" | "ascent" | "kit" | "summit";

/** Each section is a camp at a fixed altitude; the altimeter interpolates between them. */
export const camps: { id: CampId; altitude: number; short: string; name: Text; nav: Text }[] = [
  { id: "base", altitude: 0, short: "BC", name: { en: "Base camp", tr: "Ana kamp" }, nav: { en: "Base", tr: "Kamp" } },
  { id: "studio", altitude: 2100, short: "C1", name: { en: "Camp I", tr: "Kamp I" }, nav: { en: "Studio", tr: "Stüdyo" } },
  { id: "routes", altitude: 4400, short: "C2", name: { en: "Camp II", tr: "Kamp II" }, nav: { en: "Routes", tr: "Rotalar" } },
  { id: "ascent", altitude: 6400, short: "C3", name: { en: "Camp III", tr: "Kamp III" }, nav: { en: "Ascent", tr: "Tırmanış" } },
  { id: "kit", altitude: 7900, short: "C4", name: { en: "Camp IV", tr: "Kamp IV" }, nav: { en: "Kit", tr: "Ekipman" } },
  { id: "summit", altitude: SUMMIT, short: "S", name: { en: "Summit", tr: "Zirve" }, nav: { en: "Summit", tr: "Zirve" } },
];

export const campById = (id: CampId) => camps.find((camp) => camp.id === id)!;

/** Peaks on the hero map, in fractions of the map's width and height. */
export const peaks: { slug: AppSlug; u: number; v: number; height: number; radius: number }[] = [
  { slug: "dawnia", u: 0.5, v: 0.2, height: 0.62, radius: 0.12 },
  { slug: "onelior", u: 0.7, v: 0.32, height: 1, radius: 0.17 },
  { slug: "travelersbase", u: 0.9, v: 0.17, height: 0.5, radius: 0.1 },
  { slug: "cevixa", u: 0.84, v: 0.64, height: 0.72, radius: 0.13 },
];

export const ex = {
  log: { en: "Field log", tr: "Saha günlüğü" },
  coords: "41°00′N 28°58′E",
  hero: {
    role: {
      en: "Software engineer & founder of Omnia Potentia. I treat every product as an expedition — from the first sketch at base camp to the summit of the App Store, and the servers that keep it standing.",
      tr: "Yazılım mühendisi ve Omnia Potentia'nın kurucusu. Her ürüne bir keşif gibi yaklaşıyorum — ana kamptaki ilk eskizden App Store zirvesine ve onu ayakta tutan sunuculara kadar.",
    },
    hint: { en: "Move across the map to raise the terrain", tr: "Araziyi yükseltmek için haritada gezin" },
    scroll: { en: "Scroll to ascend", tr: "Tırmanmak için kaydır" },
    elevation: { en: "Elev", tr: "Rakım" },
  },
  studio: {
    kicker: { en: "Expedition company", tr: "Keşif şirketi" },
    roster: { en: "Roster", tr: "Ekip" },
    roles: {
      en: ["Product", "Interface design", "iOS", "Android", "Backend", "Infrastructure", "Security"],
      tr: ["Ürün", "Arayüz tasarımı", "iOS", "Android", "Backend", "Altyapı", "Güvenlik"],
    },
    one: { en: "One founder, every layer.", tr: "Tek kurucu, her katman." },
  },
  routes: {
    title: { en: ["Routes", "opened."], tr: ["Açılan", "rotalar."] },
    intro: {
      en: "Four products, each with its own terrain. Designed, built and operated end to end under Omnia Potentia.",
      tr: "Her biri kendi arazisine sahip dört ürün. Omnia Potentia çatısı altında uçtan uca tasarlandı, geliştirildi ve işletiliyor.",
    },
    route: { en: "Route", tr: "Rota" },
    grade: { en: "Grade", tr: "Derece" },
    notes: { en: "Route notes", tr: "Rota notları" },
    category: { en: "Terrain", tr: "Arazi" },
    platforms: { en: "Platforms", tr: "Platformlar" },
    stack: { en: "Gear", tr: "Ekipman" },
    unmarked: { en: "Unmarked route · internal", tr: "İşaretsiz rota · iç proje" },
  },
  ascent: {
    title: { en: ["The", "ascent."], tr: ["Tırmanış", "hikâyesi."] },
    intro: {
      en: "Nearly six years of production systems, one camp at a time. Hover a waypoint for the details; the full log follows below.",
      tr: "Altı yıla yakın canlı sistem tecrübesi, her seferinde bir kamp. Detaylar için bir noktanın üzerine gel; tam günlük aşağıda.",
    },
    chartLabel: {
      en: "Career ascent from 2021 to today, one waypoint per role",
      tr: "2021'den bugüne kariyer tırmanışı, her rol için bir nokta",
    },
    now: { en: "Now", tr: "Bugün" },
    nowRole: { en: "Founder, Omnia Potentia · Senior SWE, Accenture", tr: "Kurucu, Omnia Potentia · Senior SWE, Accenture" },
  },
  kit: {
    rules: { en: "Rules of the mountain", tr: "Dağın kuralları" },
    pack: { en: "Pack list", tr: "Ekipman listesi" },
  },
  summit: {
    title: { en: ["Let's climb", "the next one together."], tr: ["Bir sonraki zirveye", "birlikte çıkalım."] },
    reached: { en: "Summit reached", tr: "Zirveye ulaşıldı" },
  },
  end: { en: "End of log", tr: "Günlüğün sonu" },
};

/** Career waypoints for the ascent profile; altitude is narrative, not data. */
export const waypoints: { date: string; altitude: number; role: string; company: string; period: Text }[] = [
  { date: "2021-01", altitude: 900, role: "Junior Software Engineer", company: "Casemice Digital", period: { en: "01/2021 — 12/2021", tr: "01/2021 — 12/2021" } },
  { date: "2021-12", altitude: 2500, role: "Software Engineer", company: "Orion Innovation", period: { en: "12/2021 — 07/2023", tr: "12/2021 — 07/2023" } },
  { date: "2023-07", altitude: 4100, role: "DevOps Engineer", company: "Orion Innovation", period: { en: "07/2023 — 03/2024", tr: "07/2023 — 03/2024" } },
  { date: "2024-03", altitude: 5300, role: "Mid-level Software Engineer", company: "Karnaval Media Group", period: { en: "03/2024 — 01/2025", tr: "03/2024 — 01/2025" } },
  { date: "2025-03", altitude: 6700, role: "Cloud Engineer", company: "Accenture", period: { en: "03/2025 — 08/2025", tr: "03/2025 — 08/2025" } },
  { date: "2025-08", altitude: 7700, role: "Senior Software Engineer", company: "Accenture", period: { en: "08/2025 — Present", tr: "08/2025 — Günümüz" } },
];
