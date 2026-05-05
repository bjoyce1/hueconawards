## Goal
Replace the placeholder map on `/contact` with a real embedded Google Map pinned to the event venue.

## Venue
**Blossom Hotel Houston** — 7611 Main Street, Houston, TX 77030

## Changes

**`src/pages/Contact.tsx`** — replace the placeholder `aspect-square` block (currently a centered MapPin icon + text + "Get Directions" button) with a live Google Maps embed:

- Use `<iframe>` pointed at `https://www.google.com/maps?q=Blossom+Hotel+Houston,+7611+Main+St,+Houston+TX+77030&output=embed`
- Container: keep `aspect-square` (or switch to `aspect-video` for better proportions — will use `aspect-square` to preserve current layout), `rounded-lg`, `border border-border`, `overflow-hidden`
- iframe attributes: `width="100%"`, `height="100%"`, `loading="lazy"`, `referrerPolicy="no-referrer-when-downgrade"`, `title="Blossom Hotel Houston map"`, no border
- Below the map, keep a small caption strip with venue name + a "Get Directions" link that opens Google Maps in a new tab using the full address (`https://www.google.com/maps/dir/?api=1&destination=Blossom+Hotel+Houston,+7611+Main+St,+Houston+TX+77030`)
- Update the existing "Venue" address block above to include the street address (currently just says "Houston, TX")

No new dependencies, no API key required (the `output=embed` URL works without one).
