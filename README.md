# os-portfolio.com

The source of **[os-portfolio.com](https://os-portfolio.com)** — the portfolio of Oscar Sanchez.

> I run the business and build the technology behind it.

Operations, finance, growth and technology in one place: experience, case studies, ventures ([Sancho Holdings](https://sanchoholdings.com) and a local services marketplace, established 2022), certifications and recommendations.

## Stack

| | |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion, Swiper |
| Contact form | EmailJS |
| Hosting | Vercel (with Vercel Analytics) |
| SEO | Generated Open Graph image, sitemap and robots |

## How it's organized

```
src/
├── app/            # App Router pages, layout, OG image, sitemap, robots
│   └── components/ # Section components (hero, metrics, experience, ventures…)
└── data/
    └── profile.ts  # Every word and number on the site lives here
```

All copy and figures come from one file, `src/data/profile.ts`, so the site, GitHub and LinkedIn tell the same story. Employer work is described by outcome and system type only.

## Run it locally

Requires Node.js 18+.

```bash
git clone https://github.com/oscarsanchez13/optimized-portfolio.git
cd optimized-portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

| Script | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Connect

[Portfolio](https://os-portfolio.com) · [Sancho Holdings](https://sanchoholdings.com) · [LinkedIn](https://www.linkedin.com/in/oscarsanchez13) · [X](https://x.com/Tech_Sancho) · [GitHub](https://github.com/oscarsanchez13)

If something here is useful to you, a ⭐ is appreciated.
