# contact.md — Page Override: Contact
> Ironclad Roofing Co. · Iron & Gold Design System · UI/UX Pro Max Agent

---

## Section Order

1. `<NavBar />` — opaque `bg-iron/95 backdrop-blur-md` (no hero on this page, always solid)
2. `<PageHeader />` — "Let's Talk Roofing" headline + brief subtext
3. `<ContactForm />` — two-column layout (info left, form right)
4. `<ReviewCards />` — social proof strip (3 cards), reduced top margin
5. `<Footer />`

---

## Deviations from Base Design System

- **PageHeader:** `bg-iron pt-32 pb-12` (extra top padding to clear fixed NavBar). Gold accent bar `w-12 h-1 bg-gold mb-4`. Headline `display-lg text-ivory font-sans font-bold`. Subtext: "Free roof inspections, same-week availability. No pressure. No sales tactics." — `body-lg text-ivory/70 mt-3 max-w-xl`.
- **ContactForm layout:** Left info column includes: phone (text-gold font-semibold text-xl), business hours (font-work text-label text-ivory/60), service area list (bullet with gold dot `•`), and a Google Maps embed (`rounded-2xl overflow-hidden h-48 mt-6`). Right column is the form card per MASTER.md spec.
- **ReviewCards on Contact:** Display only 3 reviews in a `grid grid-cols-1 md:grid-cols-3 gap-6`. Add section label "What our clients say" in `font-work text-small-caps text-gold uppercase tracking-wider text-xs mb-6`. Reduced vertical padding: `py-12` instead of `py-20`.
- **No CTABand on Contact page.** The form IS the CTA. Adding a second CTA band creates confusion.

---

## Critical UX Notes

- **Form OWASP requirements (coordinate with Backend Agent):**
  - All fields must have server-side validation — do not rely on HTML5 `required` alone.
  - Phone field: validate format, reject non-numeric/non-standard inputs.
  - Message field: sanitize HTML entities, strip script tags.
  - CSRF token required on form submit.
  - Rate limiting: max 5 submissions per IP per hour.
- **Cal.com booking link:** Below the submit button — text "Or book a time that works for you →" in `font-work text-label text-ivory/50 hover:text-gold transition-colors`. Opens Cal.com in new tab (`target="_blank" rel="noopener"`).
- **Form success state:** Replace form with a confirmation block: gold checkmark icon, "We'll be in touch within 2 hours." headline in `display-md text-ivory`, sub-copy in `body text-ivory/70`. Do not redirect to a separate success page.
- **Service Type dropdown:** Options — "Storm Damage Assessment", "Roof Replacement", "Roof Repair", "Commercial Roofing", "General Inspection", "Other". Dropdown styled to match other fields (`bg-iron-mid` base, gold focus ring).
- **Mobile form at 375px:** Fields must be full-width. Label above each field (not placeholder-only labels). Submit button full-width and thumb-reachable. Form card `p-6` on mobile.
- **Left column on mobile:** Collapses above the form card. Phone number must remain prominent (`text-gold text-xl font-semibold`) at all breakpoints.
