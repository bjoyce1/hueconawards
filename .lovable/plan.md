# Become A Vendor — In-Site Popup Checkout

Open the TicketLeap vendor page inside a modal on hueconawards.com so visitors complete the process without leaving the site.

## Scope (this round)
- Only the **"Become A Vendor"** button on `src/pages/Sponsors.tsx`.
- The Get Tickets button will be handled in a follow-up once you share its link.

## What you'll see
- Click "Become A Vendor" → a large dark modal slides in over the page.
- The TicketLeap checkout (`https://events.ticketleap.com/tickets/riche/huecona-conference-and-awards`) loads inside the modal as an embedded frame.
- Close button (X) in the top right + click-outside-to-close + ESC key support.
- Mobile: modal goes full-screen so the checkout has room to breathe.
- Background page scroll is locked while open.

## Technical details
1. **New component** `src/components/CheckoutModal.tsx`
   - Built on the existing shadcn `Dialog` primitive (already in the project).
   - Props: `open`, `onOpenChange`, `url`, `title`.
   - Contains an `<iframe>` sized to ~90vh desktop / 100vh mobile, with `allow="payment"` and proper sandbox attributes so TicketLeap's payment flow works.
   - Loading spinner shown until the iframe `onLoad` fires.
   - Styled with existing dark theme tokens (no new colors).

2. **Edit** `src/pages/Sponsors.tsx`
   - Add `useState` for modal open state.
   - Replace the `<a href=...>` "Become A Vendor" button with a `<button>` that opens the modal.
   - Mount `<CheckoutModal>` with the TicketLeap URL.

## Caveats to know
- TicketLeap controls the iframe content; if they ever send an `X-Frame-Options: DENY` header the embed would break. Quick check during implementation — if blocked, fallback is opening in a new tab. (Most event/ticketing pages allow embedding.)
- The transaction itself still happens on TicketLeap's secure domain (required for PCI compliance) — visually it's seamless inside your site.

## Out of scope
- Get Tickets button (next round).
- Any changes to other pages, styling, or content.