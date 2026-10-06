# kutaykaracair.com

Personal site of Ahmet Kutay Karacair — software engineer and founder of
[Omnia Potentia](https://omniapotentia.com). Bilingual (EN/TR), statically exported
Next.js served by nginx.

## Editing content

All copy lives in `lib/content.ts` (apps, experience, toolbox, UI strings — each as an
`{ en, tr }` pair). Components are in `components/site/`:

- `portfolio.tsx` — page sections
- `app-visuals.tsx` — the per-app illustrated panels
- `hooks.ts` — language preference, Istanbul clock, scroll reveal

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
