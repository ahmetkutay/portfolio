import Image from "next/image";
import type { AppSlug, Lang } from "@/lib/content";
import { cn } from "@/lib/utils";

function Phone({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[14%/6.5%] bg-[#121212] p-[2.6%] shadow-[0_40px_80px_-20px_rgba(20,14,30,0.55)] ring-1 ring-white/10",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={598}
        height={1300}
        sizes="(min-width: 1024px) 18vw, 40vw"
        className="h-auto w-full rounded-[11.5%/5.3%]"
      />
    </div>
  );
}

const lift =
  "transition duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:-translate-y-3";

function OneliorVisual() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#fcdcc0_0%,#f7c6a6_38%,#c9b2df_100%)]">
      <div className="absolute left-[14%] top-[16%] h-[13%] aspect-square rounded-full bg-[#fbc46e]/80" />
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[62%] w-full"
      >
        <path d="M0 260 L120 170 L210 230 L330 120 L440 210 L560 140 L800 250 L800 400 L0 400Z" fill="#cdbbe2" />
        <path d="M0 330 L170 210 L300 280 L470 60 L560 150 L640 110 L800 260 L800 400 L0 400Z" fill="#8c74b6" />
        <path d="M470 60 L500 95 L486 90 L470 110 L456 92 L442 98Z" fill="#fff" />
        <path
          d="M180 360 L260 330 L330 300 L380 250 L430 200 L455 130 L470 70"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.85"
        />
      </svg>
      <Phone
        src="/apps/onelior/climb.jpg"
        alt="Onelior Climb screen showing progress up the mountain"
        className={cn("absolute bottom-[-22%] left-[10%] w-[36%] -rotate-[7deg]", lift)}
      />
      <Phone
        src="/apps/onelior/camp.jpg"
        alt="Onelior Camp screen with the week of sleep as stars"
        className={cn("absolute bottom-[-30%] right-[9%] w-[33%] rotate-[6deg] delay-75", lift)}
      />
    </div>
  );
}

function DawniaVisual() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#43305a_0%,#8c5370_34%,#e19a68_60%,#f0cd98_100%)]">
      {[
        [12, 10],
        [28, 18],
        [46, 8],
        [64, 15],
        [82, 9],
        [90, 22],
      ].map(([x, y]) => (
        <span
          key={`${x}-${y}`}
          className="absolute h-1 w-1 rounded-full bg-white/70"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}
      <div className="absolute right-[18%] top-[36%] h-[11%] aspect-square rounded-full bg-[#fde2a4] shadow-[0_0_80px_30px_rgba(253,226,164,0.35)]" />
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[58%] w-full"
      >
        <path d="M0 170 Q200 110 400 160 T800 140 L800 400 L0 400Z" fill="#e7b57a" />
        <path d="M0 240 Q240 170 480 230 T800 220 L800 400 L0 400Z" fill="#d79a5c" />
        <path
          d="M60 250 Q260 200 420 220 T760 170"
          fill="none"
          stroke="#7a4a2a"
          strokeWidth="3"
          strokeDasharray="6 10"
          opacity="0.6"
        />
        <g fill="#5a3520">
          <rect x="400" y="196" width="34" height="26" rx="3" />
          <rect x="680" y="160" width="26" height="22" rx="3" />
        </g>
      </svg>
      <Phone
        src="/apps/dawnia/today.jpg"
        alt="Dawnia Today screen with the day's inns on a caravan road"
        className={cn("absolute bottom-[-24%] left-[12%] w-[34%] -rotate-[5deg]", lift)}
      />
      <Phone
        src="/apps/dawnia/habits.jpg"
        alt="Dawnia Habits screen"
        className={cn("absolute bottom-[-32%] right-[10%] w-[32%] rotate-[7deg] delay-75", lift)}
      />
    </div>
  );
}

const cevixaCopy = {
  left: { en: "Left this month", tr: "Bu ay kalan" },
  spent: { en: "Spent", tr: "Harcanan" },
  bill: { en: "Electricity · confirm payment", tr: "Elektrik · ödemeyi onayla" },
  receipt: { en: "Receipt scanned", tr: "Fiş tarandı" },
};

function CevixaVisual({ lang }: { lang: Lang }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#192020]">
      <div className="absolute -right-[10%] top-1/2 h-[120%] aspect-square -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(203,220,78,0.35),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <Image
        src="/apps/cevixa/icon.svg"
        alt=""
        width={320}
        height={320}
        className={cn(
          "absolute left-1/2 top-[34%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[22%] sm:top-1/2 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)]",
          lift,
        )}
      />
      <div className="float-slow absolute bottom-[10%] left-[6%] w-[44%] max-w-60 rounded-2xl bg-[#f6f6ef] p-4 text-[#192020] shadow-2xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b7070]">
          {cevixaCopy.left[lang]}
        </p>
        <p className="mt-1 font-serif text-3xl tabular-nums">€737.20</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e3e4d8]">
          <div className="h-full w-[63%] rounded-full bg-[#cbdc4e]" />
        </div>
        <p className="mt-2 font-mono text-[10px] tabular-nums text-[#6b7070]">
          {cevixaCopy.spent[lang]} €1,262.80 / €2,000
        </p>
      </div>
      <div className="float-slow absolute right-[6%] top-[10%] rounded-2xl bg-[#f6f6ef]/95 px-4 py-3 text-sm text-[#192020] shadow-2xl [animation-delay:-3s] max-sm:hidden">
        <p className="flex items-baseline justify-between gap-6">
          <span>{cevixaCopy.bill[lang]}</span>
          <span className="font-serif text-lg">€61.40</span>
        </p>
      </div>
      <div className="float-slow absolute bottom-[14%] right-[6%] rounded-full bg-[#cbdc4e] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#192020] shadow-xl [animation-delay:-5s] max-sm:hidden">
        ✓ {cevixaCopy.receipt[lang]}
      </div>
    </div>
  );
}

const travelersCopy = {
  thread: { en: "Best ferry route at sunset?", tr: "Gün batımında en güzel vapur hattı?" },
  replies: { en: "42 replies · Istanbul", tr: "42 yanıt · İstanbul" },
  plan: { en: "AI plan ready · 3 days in Lisbon", tr: "AI planı hazır · Lizbon'da 3 gün" },
};

function TravelersVisual({ lang }: { lang: Lang }) {
  const pins = [
    { x: 18, y: 62, c: "#f6c873" },
    { x: 42, y: 38, c: "#ff8a5b" },
    { x: 66, y: 56, c: "#8be0c4" },
    { x: 84, y: 30, c: "#c8a8ff" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0f2433]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(140,200,255,0.18)_1.2px,transparent_1.2px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <path
          d="M18 62 C28 40 34 36 42 38 S58 62 66 56 S78 30 84 30"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.5"
          strokeDasharray="1.4 1.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {pins.map((pin) => (
        <span
          key={pin.x}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white/10"
          style={{ left: `${pin.x}%`, top: `${pin.y}%`, background: pin.c }}
        />
      ))}
      <div className="float-slow absolute left-[8%] top-[10%] max-w-[58%] rounded-2xl bg-white/95 px-4 py-3 text-[#0f2433] shadow-2xl">
        <p className="text-sm font-medium">{travelersCopy.thread[lang]}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5b6b76]">
          {travelersCopy.replies[lang]}
        </p>
      </div>
      <div className="float-slow absolute bottom-[10%] right-[7%] rounded-full bg-[#f6c873] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#0f2433] shadow-xl [animation-delay:-4s]">
        ✦ {travelersCopy.plan[lang]}
      </div>
    </div>
  );
}

export function AppVisual({ slug, lang }: { slug: AppSlug; lang: Lang }) {
  switch (slug) {
    case "onelior":
      return <OneliorVisual />;
    case "dawnia":
      return <DawniaVisual />;
    case "cevixa":
      return <CevixaVisual lang={lang} />;
    case "travelersbase":
      return <TravelersVisual lang={lang} />;
  }
}
