# Contributing

## Code Style

- **TypeScript** — Strict mode. No `any` types.
- **Components** — PascalCase filenames and exports. One component per file.
- **Functions/variables** — camelCase.
- **Styling** — Tailwind utility classes only. Use semantic tokens (`bg-primary`, `text-secondary`) instead of raw colors (`bg-pink-500`). Use `cn()` for conditional classes.
- **No inline styles** — All styling via Tailwind.
- **No magic strings** — All user-facing text must come from `translations.ts`.

## File Organization

```
src/components/
├── common/     ← Reusable UI pieces (headings, toggles, decorative)
├── layout/     ← Page-level structure (Header, Footer)
├── sections/   ← One file per page section
└── ui/         ← shadcn/ui primitives (don't edit directly)
```

## Adding a New Language

1. Open `src/data/translations.ts`
2. Add a new key to the `translations` record (e.g., `"fr"`)
3. Copy the full `TranslationData` structure and translate all strings
4. Update the `Language` type in `src/context/LanguageContext.tsx` to include the new code
5. Update `LanguageToggle` to cycle through all available languages

## Adding a New Section

1. Create `src/components/sections/NewSection.tsx`
2. Use `useLanguage()` for text, `SectionHeading` for the title
3. Add a `<section id="new-id" aria-label={t.nav.newId}>` wrapper
4. Add the section to `src/pages/Index.tsx`
5. Add the nav link in `Header.tsx` (`navIds` array)
6. Add translations for the new section in `translations.ts` (both DE and EN)

## Commit Messages

Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`.

## Testing

```bash
npm run test        # Run Vitest
```

Add tests in `src/test/` for any new logic (context, utilities, translation completeness).
