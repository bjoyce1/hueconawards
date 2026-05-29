## Goal

Add the 4 cinematic city/red-carpet images as a slowly crossfading backdrop behind the existing About page hero, without disturbing the typographic "Houston is the next stage." editorial layout.

## Changes — `src/pages/About.tsx` only

1. Import the 4 hero images already copied to `src/assets/hero/hero-1.jpg … hero-4.jpg` and define a `HERO_SLIDES` array.
2. Add a `useState` slide index + a `useEffect` interval that advances the slide every 4000 ms.
3. Inside the existing hero `<section>`, insert a new absolutely-positioned layer behind the existing CSS gradient backdrop and grid overlay:
   - Each image rendered as a stacked `<div>` with `background-image` cover/center.
   - Active slide: `opacity: 0.22` and a subtle `scale(1.04)` ken-burns push.
   - Inactive slides: `opacity: 0`.
   - `transition-property: opacity, transform`; opacity transition ~1800 ms `cubic-bezier(0.22,0.61,0.36,1)`; transform transition ~4500 ms for a slow filmic drift.
4. Keep the existing gold radial-gradient backdrop and architectural grid overlay layered **on top** of the slideshow so the editorial palette is preserved — the imagery reads as atmospheric texture, not a photo hero.
5. Add a stronger bottom-vignette gradient over the images so the masthead row, headline, and slate data row stay fully legible against the busier shots (especially #3 and #4 which have people and food).

## What stays untouched

- Masthead row (Issue 01 · 2026 / HUECONA / Houston, Texas)
- The big "Houston is the **next stage.**" serif headline
- Supporting paragraph
- Slate data row (Founded / Format / Disciplines / Inaugural Dates)
- Mission, Why Houston data grid, Production Team, Marblism ribbon — all untouched
- The Home page hero slideshow added previously — stays as-is

## Accessibility & motion

- All slide layers `aria-hidden="true"` (decorative).
- Respect reduced-motion: if `prefers-reduced-motion: reduce` is set, skip the interval (show slide 0 only) — handled inside the effect.

## Technical detail

- No new dependencies, no token changes.
- Image opacity capped at ~0.22 so the gold gradient + grid still dominate; this matches the "keep typographic, add images behind" choice.
- Slideshow lives in the JSX directly; no new component needed.
