

# NU Communications Website — Updated Plan

## Overview
A responsive, bilingual (DE/EN) single-page website for NU Communications matching the PDF presentation style. Dark charcoal (#2D2D2D), white, and pink/crimson (#E91E63) color palette.

## Sections
1. **Hero / About Me** — Logo, portrait, bio (split layout)
2. **Mission** — Full-width image, quote in dark box
3. **Services (Mein Angebot)** — 2x2 icon grid
4. **Reference Projects** — 3-column cards
5. **Award** — Split layout with photos and description
6. **Contact** — Dark background, contact details, photo collage

## Features
- DE/EN language toggle via React context
- Smooth scroll navigation with fixed header
- Mobile-first responsive design
- Decorative pink dot grids and angular accents via CSS/SVG

---

## Technical Quality & Standards Breakdown

### Semantic HTML
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` for page structure
- Each section gets `<section>` with descriptive `id` and `aria-label`
- Use `<h1>` once (site name), `<h2>` per section, `<h3>` for sub-items — proper heading hierarchy
- Navigation uses `<nav>` with `<ul>`/`<li>` for link lists
- Contact info uses `<address>` element
- Images use `<figure>` and `<figcaption>` where appropriate

### Accessibility (a11y)
- **WCAG 2.1 AA** compliance target
- All images get descriptive `alt` text (bilingual, switching with language)
- Color contrast ratios verified: white on #2D2D2D (13.7:1 ✓), #E91E63 on white (4.6:1 — use only for large text/decorative, not body text)
- Language toggle button with `aria-label` and announces language change via `aria-live` region
- Skip-to-content link at top of page
- Focus-visible outlines on all interactive elements (not removed)
- Keyboard navigable: all links, buttons, and toggle reachable via Tab
- `lang` attribute on `<html>` updates dynamically with language switch
- Decorative elements (dot grids, corner shapes) use `aria-hidden="true"`

### Responsive Design
- **Breakpoints**: Tailwind defaults — `sm` (640px), `md` (768px), `lg` (1024px)
- Mobile: single column, stacked sections, hamburger nav
- Tablet: 2-column grids where applicable
- Desktop: full multi-column layouts as per PDF
- Images use `object-fit: cover` with aspect-ratio containers
- Font sizes scale with Tailwind responsive utilities (`text-lg md:text-xl lg:text-2xl`)
- Touch targets minimum 44x44px on mobile

### Code Quality
- **Component architecture**: One component per section, shared UI components for repeated patterns (e.g., `SectionHeading`, `ServiceCard`, `ProjectCard`)
- **TypeScript**: Strict typing for all props and translation keys; define `Translation` interface
- **Naming**: PascalCase components, camelCase functions/variables, kebab-case CSS classes
- **Linting**: ESLint config already in place — enforce no `any` types in new code
- **File structure**:

```text
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── sections/        # Hero, Mission, Services, Projects, Award, Contact
│   ├── ui/              # Shared shadcn components
│   └── common/          # SectionHeading, LanguageToggle, DecorativeDots
├── context/
│   └── LanguageContext.tsx
├── data/
│   └── translations.ts  # All DE/EN strings
├── assets/
│   └── images/          # Extracted PDF photos
├── hooks/
│   └── useLanguage.ts
└── pages/
    └── Index.tsx
```

- **No inline styles** — all styling via Tailwind utility classes
- **No magic strings** — all text from translations object, keyed by section
- **DRY**: Reusable card/heading components; shared Tailwind class compositions via `cn()` utility

### Documentation
- **README.md**: Updated with project overview, setup instructions, deployment steps, and architecture summary
- **ARCHITECTURE.md**: Component tree diagram, data flow (language context), file structure explanation
- **Inline JSDoc comments**: On all component props interfaces and the translation data structure
- **CONTRIBUTING.md**: Code style guidelines, component naming conventions, how to add a new language

### Testing Considerations
- Existing Vitest setup — add basic tests for:
  - Language context toggle behavior
  - Translation keys completeness (DE and EN have same keys)
  - Component render smoke tests

