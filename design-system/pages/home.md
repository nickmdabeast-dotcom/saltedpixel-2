# home.md — Page Override: Home
> Ironclad Roofing Co. · Iron & Gold Design System · UI/UX Pro Max Agent

---

## Section Order

1. `<NavBar />` — transparent on load, transitions to `bg-iron/95 backdrop-blur-md` on scroll past hero
2. `<HeroSection />` — Variant B: Left-Aligned Split (non-negotiable, see MASTER.md)
3. `<TrustStrip />` — 6 trust signals with NumberTicker on numeric values
4. `<ServiceSection />` — "What We Do" heading + 4 `<ServiceCard />` components in 2-col grid
5. `<SocialProof />` — "What Austin Homeowners Say" + 3 `<ReviewCard />` + OC Platinum Preferred badge
6. `<CTABand />` — standard variant: "Your Roof. Protected."
7. `<Footer />`

---

## Deviations from Base Design System

- **HeroSection:** Only page that uses the split-panel hero. All other pages use `<PageHeader />` or `variant="service"` hero. Do not apply split-panel to any other page.
- **NavBar:** Starts transparent (hero is full-bleed). All other pages start with opaque `bg-iron/95`.
- **ServiceSection headline:** `display-lg` text-ivory, left-aligned with a `w-12 h-1 bg-gold` accent bar above it — same treatment as hero. Not centered.

---

## Critical UX Notes

- **Above fold at 375px:** The left panel of the split hero must fully show the gold accent bar, headline, subheadline, and CTA button without scrolling. Verify at 375×667 viewport. If anything is cut, reduce `pt-20` to `pt-16` on mobile.
- **TrustStrip:** Must stack to 2 columns at `sm` (375px), 3 columns at `md` (768px), full row at `lg` (1280px). Items must never overflow or cause horizontal scroll.
- **ServiceSection CTA:** Each `<ServiceCard />` arrow link must be reachable via keyboard tab order.
- **SocialProof OC badge:** Place to the right of the review grid headline. Size: `h-16 w-auto`. Do not center it or make it a focal point — supporting proof element only.
- **Hero image:** Must use `priority` loading. Largest Contentful Paint target for this page.
- **Conversion priority:** Phone number in NavBar must be `href="tel:+15125551234"` (click-to-call). Test on mobile Safari.
