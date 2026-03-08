# NU Communications Website

A responsive, bilingual (DE/EN) single-page website for **NU Communications**, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site.

## 📦 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** with semantic design tokens
- **Lucide React** for icons
- **Vitest** for testing

## 🌐 Features

- **Bilingual (DE/EN)** — Toggle between German and English via a button in the navigation. All text content is centralized in `src/data/translations.ts`.
- **Responsive** — Mobile-first design with Tailwind breakpoints. Hamburger navigation on mobile, multi-column layouts on desktop.
- **Accessible** — Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), skip-to-content link, ARIA labels, keyboard navigation, dynamic `lang` attribute on `<html>`.
- **SEO** — Proper `<title>`, meta description, Open Graph tags, canonical URL, single `<h1>`, semantic heading hierarchy.

## 📁 Project Structure

```
src/
├── assets/images/       # Photos extracted from presentation PDF
├── components/
│   ├── common/          # SectionHeading, DecorativeDots, LanguageToggle
│   ├── layout/          # Header, Footer
│   ├── sections/        # HeroSection, MissionSection, ServicesSection, etc.
│   └── ui/              # shadcn/ui components
├── context/             # LanguageContext (React context for DE/EN)
├── data/                # translations.ts (all bilingual content)
├── hooks/               # Custom hooks
├── lib/                 # Utilities (cn helper)
└── pages/               # Index, NotFound
```

## 🎨 Design System

Colors are defined as HSL CSS variables in `src/index.css` and mapped in `tailwind.config.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `--secondary` / `nu-charcoal` | `hsl(0 0% 18%)` | Dark sections, headings |
| `--primary` / `nu-pink` | `hsl(340 82% 52%)` | Accent color, icons, borders |
| `--background` | `hsl(0 0% 100%)` | Light sections |
| `--muted` | `hsl(0 0% 96%)` | Alternating section backgrounds |

Typography: **Playfair Display** (headings) + **Source Sans 3** (body).

## 🚢 Deployment

### Option 1: Lovable Publish

Click **Publish** in Lovable to deploy instantly — no configuration needed.

### Option 2: GitHub Pages (automated)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to `main`.

**Setup steps:**

1. Push this repository to GitHub (Lovable does this automatically when connected).
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The next push to `main` will trigger the workflow and deploy the site.

Your site will be available at `https://<username>.github.io/<repo-name>/`.

> **Custom domain:** To use a custom domain (e.g. `www.nucommunications.at`), go to **Settings → Pages → Custom domain** and add your domain. You'll also need to configure DNS (CNAME record pointing to `<username>.github.io`).

### Option 3: Manual / other hosting

```bash
bun install
bun run build
# Serve the `dist/` folder with any static file server (Netlify, Vercel, Cloudflare Pages, etc.)
```

## 🔧 CI Pipeline

The CI workflow (`.github/workflows/ci.yml`) runs on every push and PR to `main`:

| Step | Command | Description |
|------|---------|-------------|
| Lint | `bun run lint` | ESLint checks |
| Type Check | `bunx tsc --noEmit` | TypeScript validation |
| Tests | `bun test` | Vitest unit tests |
| Build | `bun run build` | Production build verification |

All four steps must pass before merging.

## 📄 Further Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — Component tree, data flow, design decisions
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Code style, adding languages, component guidelines
