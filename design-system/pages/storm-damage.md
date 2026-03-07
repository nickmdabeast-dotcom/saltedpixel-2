# storm-damage.md — Page Override: Storm Damage
> Ironclad Roofing Co. · Iron & Gold Design System · UI/UX Pro Max Agent

---

## Section Order

1. `<NavBar />` — dark (opaque `bg-iron/95 backdrop-blur-md`, NOT transparent — urgency mode, no hero bleed)
2. `<HeroSection variant="urgent" />` — dual CTAs above fold, storm damage photo
3. `<ProblemSection />` — "What Hail and Wind Do to Your Roof" + 3 columns
4. `<ProcessSteps />` — "How Ironclad Handles Storm Claims" — 4 steps: Inspect → Document → Coordinate → Repair
5. `<ProofSection />` — before/after image pair + `<StatsBar />` (500+ claims, 100% insurance coordination, 48hr response)
6. `<CTABand variant="urgent" />` — "Don't Wait. Call Now." with phone number
7. `<Footer />`
8. `<StickyCallBar />` — mobile only (`md:hidden`), persistent bottom bar with phone CTA

---

## Deviations from Base Design System

- **NavBar:** Always opaque on this page. Never transparent. The hero does not use full-bleed split panel. This is a paid ads landing page — trust must be established immediately.
- **HeroSection variant="urgent":** Full-bleed storm damage photo with gradient overlay `bg-gradient-to-b from-iron/50 via-transparent to-iron/80`. Headline left-aligned. TWO CTAs side by side: primary `bg-gold text-iron` pill ("Get Free Inspection") + secondary `border border-ivory/40 text-ivory` pill ("Call Now: (512) 555-1234"). This is the ONLY page with a dual-CTA hero.
- **CTABand variant="urgent":** Headline "Don't Wait. Call Now." Phone number displayed large (`text-3xl font-bold text-iron`) directly below headline. Same `bg-gold` background.
- **StickyCallBar:** `fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gold py-4 px-6 flex items-center justify-between` — Left: "Free Storm Inspection" label. Right: `bg-iron text-ivory rounded-full px-6 py-2 font-semibold text-sm` button with phone number.
- **ProblemSection:** Uses `grid grid-cols-1 md:grid-cols-3 gap-6`. Each column: `bg-card rounded-2xl p-6`. Gold icon top, title in `display-md` text-ivory, description in `body` text-ivory/70. Problems: "Hidden Decking Damage" | "Flashing Failures" | "Insurance Claim Complexity".

---

## Critical UX Notes

- **CTA above fold at 375px is mandatory.** At 375×667, both hero CTAs (inspection + call) must be visible without any scroll. This is a paid ads landing page — CTA visibility above fold directly affects conversion rate. If text is too long, truncate subheadline, not CTAs.
- **StickyCallBar:** Must not overlap the footer on scroll. Use `pb-20 md:pb-0` on `<Footer />` to account for bar height. Dismiss option: none — it stays persistent.
- **StatsBar numbers:** All three (500+, 100%, 48hr) use NumberTicker animation on scroll into view.
- **Before/after images:** Side-by-side at `md+`, stacked at mobile. Each with a label tag: `bg-iron-mid text-ivory/70 text-xs font-work px-3 py-1 rounded-full` positioned `absolute bottom-3 left-3`.
- **ProcessSteps on mobile:** Stack vertically with left gold border (`border-l-2 border-gold pl-4`). Numbers must remain visible and prominent in `text-gold text-4xl font-bold`.
- **SEO note:** H1 must contain "storm damage roof repair Austin" — coordinate with Content Agent.
- **Page intent:** Problem → Solution → Proof → CTA. Do not add brand story, service overviews, or unrelated content. Keep the funnel tight.
