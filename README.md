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

Click **Publish** in Lovable to deploy instantly. For self-hosting:

```bash
npm run build
# Serve the `dist/` folder with any static file server
```

## 📄 Further Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — Component tree, data flow, design decisions
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Code style, adding languages, component guidelines
