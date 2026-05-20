# Hybrid Checkout — Native "Become A Vendor"

Build a native, on-site checkout for the single "Become A Vendor" SKU using Lovable's built-in Stripe payments. Keep TicketLeap untouched for all other tickets.

## What the visitor will experience
- Clicks "Become A Vendor" on `/sponsors` → an in-site modal opens.
- Modal shows: booth summary, price ($350 + $8 service fee = **$358**), and a "Proceed to Checkout" button.
- Clicking proceed redirects to a Stripe-hosted checkout (still feels seamless, no third-party branding, returns to a success page on hueconawards.com).
- After success, they land on `/sponsors/vendor-success` with a confirmation message and an order reference.

## Why Stripe (not Paddle)
Vendor booths are an in-person event service tied to a physical venue — outside Paddle's digital-products policy. Stripe handles this cleanly.

## Setup steps (in order)
1. **Confirm prerequisites** — Project already has Lovable Cloud ✅. Payments requires a **Pro plan** — please confirm you're on Pro (or willing to upgrade) before I proceed.
2. **Run eligibility check** (`recommend_payment_provider`) for the record.
3. **Enable Stripe payments** (`enable_stripe_payments`) — sets up a test environment immediately so we can verify end-to-end before going live. Accepting real money later requires claiming the Stripe account (quick form, your info).
4. **Tax handling decision** — I'll ask you to choose between:
   - Full compliance handling (Stripe files taxes for you, +3.5% fee)
   - Tax calculation only (+0.5%, you file)
   - No tax automation (you handle it)
   For a single domestic Texas vendor SKU, **"no tax automation"** is usually fine — but your call.
5. **Create the product** in Stripe: "HUECONA 2026 Vendor Booth" — $358 one-time.
6. **Build the checkout flow:**
   - Edge function `create-vendor-checkout` → creates a Stripe Checkout Session.
   - Edge function `vendor-webhook` → records successful payments in a new `vendor_orders` table (email, name, business name, amount, Stripe session id, created_at).
   - Update `CheckoutModal` usage on `/sponsors` to show the summary card instead of an iframe, with a "Proceed to Checkout" button calling the edge function.
   - New page `/sponsors/vendor-success` to confirm purchase.
7. **Test in sandbox** with Stripe's test card `4242 4242 4242 4242`.

## Out of scope
- All other tickets stay on TicketLeap (Get Tickets button still opens TicketLeap in a new tab — we revert it from the iframe modal since that won't work either).
- No changes to other pages, branding, or content.

## What I need from you before starting
1. Confirm you're on the **Pro plan** (required for payments).
2. Confirm the vendor price is **$358 total** ($350 booth + $8 fee), or give me the exact amount you want to charge on-site.
3. Tax handling choice (or "default to no automation").
4. Should the "Get Tickets" buttons sitewide be reverted to open TicketLeap in a new tab? (Currently they don't use the broken iframe modal — only "Become A Vendor" does — but worth confirming.)