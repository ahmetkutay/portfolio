# kutaykaracair.com

Personal site of Ahmet Kutay Karacair — software engineer and founder of
[Omnia Potentia](https://omniapotentia.com). Bilingual (EN/TR), statically exported
Next.js served by nginx.

## Editing content

All copy lives in `lib/content.ts` (apps, experience, toolbox, UI strings — each as an
`{ en, tr }` pair). The "Expedition" design adds its own copy, camp altitudes, map peaks
and career waypoints in `lib/expedition.ts`. Components are in `components/expedition/`:

- `expedition.tsx` — page sections (base camp → summit)
- `topo-map.tsx` — generative contour map; apps are peaks, the cursor raises its own
- `altimeter.tsx` — maps scroll position to altitude between the camps
- `ascent-chart.tsx` — career elevation profile

Shared hooks (language preference, Istanbul clock, scroll reveal) live in `lib/hooks.ts`.
App screenshots and icons in `public/apps/` are copied from the Omnia Potentia site;
the CV served at `/resume/kutaykaracair_resume.pdf` lives in `public/resume/`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Docker

```bash
docker compose up -d --build
```

The image builds the static export and serves `out/` with nginx on port 80 inside the
external `web` network.
