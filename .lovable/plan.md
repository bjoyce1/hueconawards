## Plan: Integrate Uploaded HUECONA Media & Promo Assets

### 1. Copy assets into the project

Move from the upload zip into `src/assets/` and `public/`:

- `public/docs/HUECONA_Nominations_Terms_and_Conditions.pdf` — the downloadable one-sheet
- `public/docs/HUECONA_Press_Release.pdf` — converted from the .docx (or kept as .docx if preferred)
- `src/assets/huecona-mark-gold.jpeg` — new official gold "H" mark (used as accent only, current logo stays)
- `src/assets/vendor-flyer.jpg` — vendor flyer
- `src/assets/headshots/*.png` — all 16 headshots (Starletta, Kelsey Scott, Akia, Angela, Dr. Cam, Latanya, Andre, A.D., Kentrell, Eve, Krys, Phyllis, Anita, Nicole, Samiyah, Toni)

### 2. Wire up the downloadable one-sheet

The PDF (`HUECONA_Nominations_Terms_and_Conditions.pdf`) becomes the official downloadable. Hook it into the existing non-functional download buttons:

- `src/pages/Sponsors.tsx` — "Download Sponsorship Deck (PDF)" button → links to the PDF, opens in new tab
- `src/pages/Awards.tsx` — add a "Download Nomination T&Cs" button near the Nominate CTAs
- `src/pages/Schedule.tsx` — keep "Download Full Schedule" but point to the same PDF for now (or hide until a schedule PDF exists — please confirm)

### 3. Headshots → Featured Honorees / Speakers section

Add a new "Featured Honorees & Speakers" grid on the **About** page (or Index — see questions) using the 16 headshots with names underneath. Cards: square crop, gold ring on hover, name in uppercase Montserrat. Responsive grid (2 / 3 / 4 / 6 cols).

### 4. Vendor Flyer

Add a "Become a Vendor" callout block on the **Sponsors** page (below the tier cards) that displays the flyer image with a download link.

### 5. New gold "H" mark — accent usage only

Per your decision, the current `hue-logo.png` stays in nav/hero/footer. The new gold mark is used as a decorative accent in:

- Section dividers on the homepage (small gold mark above section titles)
- 404 page background watermark
- Loading placeholder where applicable

### 6. Promo video — "See the Vision"

Awaiting your YouTube/Vimeo URL. Once provided, embed an `<iframe>` in the existing "See the Vision" section on `Index.tsx` (autoplay muted, 16:9 responsive). Until then, leave the current placeholder.

### 7. Press release

Add a small "Press" link in the Footer pointing to `/docs/HUECONA_Press_Release.pdf` (opens in new tab). No dedicated press page.

### 8. Light schedule update (per your choice)

Keep current Schedule page structure; only fix metadata to match the official outline:

- Theme tagline added to hero: *"Houston Is A Magical Place!"*
- Note added: "VIP Pre-Dinner July 15 (pending) at Cocody's"
- Venue label updated to "Event Studios, Houston" (Host Hotel: Blossom)
- Award categories on Awards page: keep 8 (Lifetime Achievement remains)

### Files touched

- `src/pages/Sponsors.tsx` — sponsorship deck button + vendor flyer block
- `src/pages/Awards.tsx` — T&Cs download button
- `src/pages/Schedule.tsx` — venue + theme note, schedule download link
- `src/pages/About.tsx` (or `Index.tsx`) — honorees grid
- `src/pages/Index.tsx` — gold mark accents; video embed (when URL provided)
- `src/components/Footer.tsx` — Press link
- `public/docs/*` and `src/assets/headshots/*` — new asset files

### Questions before I implement

1. **Honorees grid placement** — About page or Homepage?
2. **Schedule download button** — point at the T&Cs PDF for now, or hide it until a real schedule PDF exists?
3. **Press release format** — convert the .docx to PDF, or host the .docx as-is?
