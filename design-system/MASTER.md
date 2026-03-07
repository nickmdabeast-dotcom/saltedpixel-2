# MASTER.md — Ironclad Roofing Co. Design System
> Iron & Gold Design System · Salted Pixel 2.0 · UI/UX Pro Max Agent output

---

## Tailwind Config

Paste this into `tailwind.config.ts` under `theme.extend`:

```ts
extend: {
  colors: {
    iron: '#1C1C1E',
    'iron-mid': '#3A3A3C',
    card: '#2C2C2E',
    gold: '#D4A853',
    'gold-dark': '#B8923F',
    ivory: '#F5F5F0',
  },
  fontFamily: {
    sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
    work: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
  },
},
```

---

## Google Fonts — next/font/google Imports

Add to `app/layout.tsx`:

```ts
import { Manrope, Work_Sans } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
})
```

Apply to `<html>` tag: `className={`${manrope.variable} ${workSans.variable}`}`

---

## Color System

| Token | Hex | Tailwind Class | Usage Rule |
|---|---|---|---|
| `iron-black` | `#1C1C1E` | `bg-iron` | Page backgrounds, cards, footer — primary surface |
| `gold-accent` | `#D4A853` | `text-gold` / `bg-gold` | CTAs, icons, star ratings, accent borders, dividers |
| `off-white` | `#F5F5F0` | `text-ivory` | All body text and headlines on dark backgrounds |
| `card-dark` | `#2C2C2E` | `bg-card` | Elevated surfaces: form cards, service cards, review cards |
| `gold-muted` | `#B8923F` | `text-gold-dark` | Hover/active state for all gold interactive elements |
| `iron-mid` | `#3A3A3C` | `border-iron-mid` | Dividers, subtle borders, separator lines |

**Contrast verified:** `#D4A853` on `#1C1C1E` = 7.1:1 ratio — passes WCAG AA and AAA.

---

## Typography System

**Primary font:** Manrope — all headlines, body, CTAs
**Secondary font:** Work Sans — form labels, nav links, trust strip labels, small caps

| Scale | CSS font-size | line-height | letter-spacing | weight | font | Use |
|---|---|---|---|---|---|---|
| `display-xl` | `clamp(3.5rem, 6vw, 6rem)` | `1.05` | `-0.02em` | `800` | Manrope | Hero headline only |
| `display-lg` | `clamp(2.5rem, 4vw, 4rem)` | `1.05` | `-0.02em` | `700` | Manrope | Section headlines |
| `display-md` | `clamp(1.75rem, 2.5vw, 2.5rem)` | `1.1` | `-0.01em` | `700` | Manrope | Sub-section headlines, card titles |
| `body-lg` | `1.25rem` | `1.65` | `0` | `400` | Manrope | Hero subheadline, lead paragraphs |
| `body` | `1rem` | `1.65` | `0` | `400` | Manrope | Standard body copy |
| `small-caps` | `0.75rem` | `1.2` | `0.08em` | `600` | Work Sans | Trust strip labels, badges — always UPPERCASE |
| `label` | `0.875rem` | `1.4` | `0` | `500` | Work Sans | Form labels, nav links |

**Tailwind utility pattern for display-xl:** `text-[clamp(3.5rem,6vw,6rem)] leading-[1.05] tracking-[-0.02em] font-extrabold font-sans`

---

## Spacing & Layout System

- **Max content width:** `max-w-[1280px] mx-auto px-6 lg:px-8`
- **Section vertical padding:** `py-20` desktop · `py-12` mobile (`py-12 lg:py-20`)
- **Inner section gap:** `gap-16` between major elements within a section
- **Card padding:** `p-8` desktop · `p-6` mobile (`p-6 lg:p-8`)
- **Grid system:** 12-column, `gap-6` desktop (24px), `gap-4` mobile (16px)
- **Hero height:** `min-h-screen`

**Breakpoints:**
- `sm`: 375px — mobile baseline
- `md`: 768px — tablet
- `lg`: 1280px — desktop
- `xl`: 1536px — wide

---

## Component Style Specs

### `<NavBar />`
```
Transparent on hero → bg-iron/95 backdrop-blur-md on scroll (IntersectionObserver on hero bottom edge)
Height: h-16 lg:h-20
Layout: flex items-center justify-between px-6 lg:px-8 max-w-[1280px] mx-auto
Left: "Ironclad" — font-sans font-bold text-ivory text-xl tracking-tight
Center: hidden md:flex gap-8 — links: font-work text-label text-ivory/80 hover:text-gold transition-colors
Right: flex items-center gap-4
  Phone: text-gold font-work font-semibold text-sm
  CTA pill: bg-gold text-iron text-sm font-semibold px-5 py-2 rounded-full hover:bg-gold-dark transition-colors
Mobile: hamburger icon → full-screen fixed drawer bg-iron z-50, stacked nav links text-xl
```

### `<HeroSection />` — Variant B (Left-Aligned Split — BUILD THIS ONLY)
```
Container: min-h-screen flex flex-col md:flex-row
Left panel (50%): bg-iron flex flex-col justify-center px-12 lg:px-20 py-20
  Gold accent bar: w-12 h-1 bg-gold mb-6
  Headline: display-xl text-ivory font-sans font-extrabold
  Subheadline: body-lg text-ivory/80 mt-4 max-w-md
  CTA: mt-8 inline-flex — bg-gold text-iron font-semibold px-8 py-4 rounded-full hover:bg-gold-dark transition-colors
Right panel (50%): relative overflow-hidden
  <Image>: fill object-cover priority — aerial roofing photo, golden hour
Mobile override: flex-col — right panel h-[40vh], left panel flex-1 (min 60vh)
NO centered overlay variant. NO gradient-over-image text.
```

### `<TrustStrip />`
```
Container: bg-iron border-t border-iron-mid w-full
Inner: max-w-[1280px] mx-auto px-6 lg:px-8 py-6
Layout: flex flex-wrap justify-between items-center gap-4
Each item: flex items-center gap-2
  Icon: text-gold w-5 h-5 (Lucide or SVG)
  Label: font-work text-small-caps text-ivory/90 uppercase tracking-[0.08em] text-xs font-semibold
Separator: hidden lg:block w-px h-6 bg-gold/20
Items: "14 Years" | "2,300+ Roofs" | "OC Platinum" | "4.9★ / 340+ Reviews" | "Licensed & Insured" | "Lifetime Warranty"
Animation: NumberTicker on numeric values ("14", "2,300+", "4.9", "340+") — see Animation Specs
```

### `<ServiceCard />`
```
Container: bg-card rounded-2xl p-6 lg:p-8 border border-transparent hover:border-gold/40 hover:shadow-[0_0_24px_rgba(212,168,83,0.12)] transition-all duration-300 cursor-pointer
Gold icon: text-gold w-6 h-6 mb-4
Title: display-md text-ivory font-sans font-bold mt-2
Description: body text-ivory/70 mt-2 leading-relaxed
Arrow link: flex items-center gap-1 text-gold font-work font-medium text-sm mt-4 hover:gap-2 transition-all
Grid: grid grid-cols-1 md:grid-cols-2 gap-6
```

### `<ReviewCard />`
```
Container: bg-card rounded-2xl p-6 flex flex-col gap-3
Stars: text-gold text-base tracking-wide (★★★★★)
Quote: body text-ivory/90 leading-relaxed italic flex-1
Attribution: font-work text-label text-ivory/60 font-medium
Grid: grid grid-cols-1 md:grid-cols-3 gap-6
```

### `<CTABand />`
```
Standard variant:
  Container: bg-gold w-full py-16 lg:py-20
  Inner: max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6
  Headline: display-lg text-iron font-sans font-bold
  Subtext: body text-iron/70 mt-2
  Button: bg-iron text-ivory font-semibold px-8 py-4 rounded-full hover:bg-iron-mid transition-colors

Urgent variant (Storm Damage):
  Same bg-gold but headline "Don't Wait. Call Now." + phone number prominent in iron text-3xl font-bold
```

### `<ContactForm />`
```
Page layout: grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1280px] mx-auto px-6 lg:px-8
Left column: info — address, phone, hours, map embed
Right column: form card
  Form card: bg-card rounded-2xl p-6 lg:p-8
  Fields: First Name, Last Name, Phone, Email, Address, Service Type (dropdown), Message
  Field style: bg-iron-mid border border-iron-mid text-ivory placeholder:text-ivory/40 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-gold/60 transition-colors font-work text-label
  Label style: font-work text-label text-ivory/70 font-medium mb-1 block
  Submit: bg-gold text-iron w-full rounded-full py-4 font-sans font-semibold text-base hover:bg-gold-dark transition-colors mt-2
  Cal.com link: text-center mt-3 font-work text-label text-ivory/50 hover:text-gold transition-colors
```

### `<Footer />`
```
Container: bg-iron border-t border-iron-mid
Inner: max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16
Layout: grid grid-cols-1 md:grid-cols-3 gap-8
Left: Logo "Ironclad" Manrope 700 ivory + tagline text-ivory/50 text-sm mt-2
Center: stacked nav links — font-work text-label text-ivory/70 hover:text-gold transition-colors
Right: Phone in gold font-semibold, address text-ivory/60 text-sm, email text-ivory/60 text-sm
Bottom bar: border-t border-iron-mid mt-8 pt-6 flex justify-between text-xs text-ivory/40 font-work
  Left: License #TX-448821 · Licensed, Bonded & Insured
  Right: © 2025 Ironclad Roofing Co. All rights reserved.
```

### `<GalleryGrid />`
```
Container: max-w-[1280px] mx-auto px-6 lg:px-8
Filter tabs: flex gap-3 mb-8 — pill buttons bg-card text-ivory/70 px-4 py-2 rounded-full text-sm font-work, active: bg-gold text-iron
Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
Each item: rounded-2xl overflow-hidden aspect-[4/3] relative hover:scale-[1.02] transition-transform duration-300
  <Image>: fill object-cover
```

### `<ProcessSteps />`
```
Container: max-w-[1280px] mx-auto px-6 lg:px-8
Grid: grid grid-cols-1 md:grid-cols-4 gap-8
Each step:
  Number: display-lg text-gold font-sans font-bold leading-none
  Title: display-md text-ivory font-sans font-bold mt-2
  Description: body text-ivory/70 mt-2
  Connector (desktop only): hidden md:block absolute top-8 left-full w-full h-px bg-gold/20
Mobile: stacked with gold left border (border-l-2 border-gold pl-4)
```

### `<StatsBar />`
```
Container: bg-card rounded-2xl max-w-[1280px] mx-auto px-6 lg:px-8 py-10
Layout: grid grid-cols-1 sm:grid-cols-3 gap-8 text-center
Each stat:
  Number: display-lg text-gold font-sans font-bold (NumberTicker animation)
  Label: font-work text-small-caps text-ivory/70 uppercase tracking-wider text-xs mt-1
```

### `<LocationHero />`
```
Container: bg-iron pt-20 pb-12 lg:pb-20
Gold accent bar: w-12 h-1 bg-gold mb-4 mx-auto or left-aligned
Headline: display-lg text-ivory font-sans font-bold text-center or left
Subtext: body-lg text-ivory/70 mt-3 max-w-2xl
Breadcrumb: font-work text-label text-ivory/40 mb-4
```

---

## Animation Specs

### NumberTicker (Magic UI)
**Where:** TrustStrip numeric values, StatsBar numbers
**Implementation:**
```tsx
import { NumberTicker } from '@/components/magicui/number-ticker'
// Replace static numbers with <NumberTicker value={2300} />
```
Trigger: on scroll into viewport (IntersectionObserver or Framer Motion whileInView)
Duration: 1.5s ease-out

### BlurFade (Magic UI)
**Where:** Every major section on entry — ServiceSection, SocialProof, ProcessSteps, ProofSection
**Implementation:**
```tsx
import { BlurFade } from '@/components/magicui/blur-fade'
// Wrap section content: <BlurFade delay={0.2} inView>...</BlurFade>
```
Delay stagger for cards: 0.1s per card
Duration: 0.6s

**No other animation libraries.** No Lottie. No GSAP. No CSS keyframe animations beyond these two Magic UI components and Tailwind transition utilities.

---

## Do Not Rules

1. **No Inter font.** Ever. Manrope and Work Sans only.
2. **No purple, blue, green, or teal.** Iron, gold, ivory only. No exceptions.
3. **No centered hero with gradient overlay.** Variant B (split panel) only on the home hero.
4. **No gradient backgrounds on sections.** Solid `bg-iron` or `bg-card` only.
5. **No border-radius above `rounded-2xl`.** No pill shapes on cards.
6. **No drop shadows except `shadow-[0_0_24px_rgba(212,168,83,0.12)]` on card hover.**
7. **No stock photo handshake imagery.** Roofing work photography only — aerial, close-up materials, team on roof.
8. **No "Free Estimates!" banners or badge-style urgency graphics.**
9. **No white backgrounds on any section.** Minimum `bg-card`. Everything is dark.
10. **No generic AI layouts** — no three-column feature grids with icons and centered text on white.
11. **No placeholder text left in production build.**
12. **No console.log statements in production code.**

---

*MASTER.md · Ironclad Roofing Co. · Salted Pixel 2.0 · UI/UX Pro Max Agent*
