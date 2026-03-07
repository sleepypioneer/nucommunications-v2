# Architecture

## Component Tree

```
App
├── LanguageProvider          ← React Context (DE/EN state)
│   ├── Header                ← Fixed nav + LanguageToggle + mobile hamburger
│   ├── main
│   │   ├── HeroSection       ← Portrait + bio (split layout)
│   │   ├── MissionSection    ← Full-width image + quote overlay
│   │   ├── ServicesSection   ← 2×2 icon grid
│   │   ├── ProjectsSection   ← 3-column card layout
│   │   ├── AwardSection      ← Split layout (image + text)
│   │   └── ContactSection    ← Dark section with contact details
│   └── Footer                ← Copyright
```

## Data Flow

1. `LanguageProvider` holds `lang` state (`"de"` | `"en"`) and exposes it via React Context.
2. All section components call `useLanguage()` to get `t` (current translations) and render accordingly.
3. Translations live in `src/data/translations.ts` — a typed `Record<"de" | "en", TranslationData>`.
4. The `lang` attribute on `<html>` is updated via `useEffect` whenever the language changes.

## Shared Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `SectionHeading` | `common/` | Consistent `<h2>` with pink underline accent |
| `DecorativeDots` | `common/` | CSS dot grid matching PDF decorative elements |
| `LanguageToggle` | `common/` | Accessible button with `aria-live` announcement |

## Design Decisions

- **No dark mode** — The PDF uses a specific light/dark palette per section, not a global toggle.
- **Single-page layout** — Matches the PDF's sequential presentation format.
- **CSS variables over Tailwind colors** — All colors defined as HSL variables in `index.css` for easy theming.
- **No external CMS** — Content is static and lives in `translations.ts` for simplicity and fast deployment.

## Accessibility

- Skip-to-content link (visible on focus)
- `aria-label` on each `<section>` element
- Decorative elements marked `aria-hidden="true"`
- `aria-live="polite"` region announces language changes to screen readers
- Minimum 44×44px touch targets on all interactive elements
- Proper heading hierarchy: single `<h1>` (logo), `<h2>` per section, `<h3>` for sub-items
