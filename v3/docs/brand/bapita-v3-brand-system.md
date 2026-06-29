# Bapita v3 — Brand & Design System

**The single source of truth for how Bapita looks, sounds, and is built.**
*June 2026 · Supersedes scattered v2 brand notes for everything v3.*

---

## 0. The one idea

Bapita is a **family of professional digital tools for small businesses**. The parent brand is
**neutral and premium**. Each tool is a **bright, distinct color world**. Like Google, Adobe, or
Vercel: a calm, confident parent — colorful, characterful children.

Two surfaces, two moods:

| Surface | Mood | Theme |
|---|---|---|
| **Master hub** — `bapita.com` | Premium, professional, confident, quiet | **Dark** (near-black) |
| **Product subdomains** — `book.`, `social.`, etc. | Bright, focused, characterful | **Light**, each in its own color |

The contrast between the dark hub and the bright tools is intentional and is part of the brand.

---

## 1. Brand architecture

```
bapita.com              neutral premium DARK  · the hub, the story, all 5 tools
├── book.bapita.com     LIGHT · orange world   · Live (booking)
├── social.bapita.com   LIGHT · emerald world  · In build
├── seo.bapita.com      LIGHT · azure world    · Waitlist
├── outreach.bapita.com LIGHT · violet world   · Waitlist
└── bots.bapita.com     LIGHT · magenta world  · Waitlist
```

**One structural system, five skins.** Layout, type scale, spacing, components, and motion are
**identical everywhere**. A product only ever changes its **personality layer**:

1. **Accent color** (its hue)
2. **Icon / shape motif** (its visual signature)
3. **One hero spot-illustration** (abstract, on-brand)

Nothing else forks. This is what keeps a 5-product suite buildable by one person.

> **The warm terracotta is no longer the master brand color.** It is now **Book's** color.
> The master brand is neutral.

---

## 2. Color

### 2.1 Neutral system (the hub + all structural UI)

| Token | Hex | Use |
|---|---|---|
| `--ink-900` (hub bg) | `#0B0B0C` | Hub page background |
| `--ink-800` | `#141416` | Raised dark surfaces, nav |
| `--ink-700` | `#1E1E22` | Cards on dark, borders-on-dark base |
| `--ink-600` | `#2A2A30` | Hairlines on dark |
| `--paper-0` (product bg) | `#FFFFFF` | Product page surface |
| `--paper-50` | `#FAFAF8` | Product page background (warm white) |
| `--paper-100` | `#F2F2EE` | Light wash / muted surface |
| `--text-on-dark` | `#F4F4F2` | Body text on dark |
| `--text-on-dark-muted` | `#9A9AA2` | Secondary text on dark |
| `--text-on-light` | `#16161A` | Body text on light |
| `--text-on-light-muted` | `#5E5E66` | Secondary text on light |
| `--border-dark` | `rgba(255,255,255,0.10)` | Dividers on dark |
| `--border-light` | `rgba(16,16,20,0.10)` | Dividers on light |

Neutral is **slightly warm** (paper has a cream tint, ink has a hair of warmth) so the brand never
feels cold/corporate even at its most premium.

### 2.2 Product color wheel

Each tool owns one hue. Punchy on the dark hub, comfortable on the light product page.

| Product | Color | Base `#` | Tint (light bg) | Glow (on dark) |
|---|---|---|---|---|
| **Book** | Orange / terracotta | `#D4622A` | `#FBEDE4` | `#F0743A` |
| **Social** | Emerald | `#1FA971` | `#E4F5EE` | `#2BC487` |
| **SEO** | Azure | `#2D6CF0` | `#E6EEFE` | `#4E86FF` |
| **Outreach** | Violet | `#7C5CFC` | `#EDE9FF` | `#9277FF` |
| **Bots** | Magenta | `#E0457B` | `#FCE6EE` | `#F2628F` |

Rules:
- **Base** = buttons, links, key accents on the product's light page.
- **Tint** = section washes, hover backgrounds, badge backgrounds on light.
- **Glow** = the product's color when it sits on the dark hub (product cards, pills) — slightly
  lighter/more saturated so it reads against `#0B0B0C`.
- Never use two product colors together as decoration. One product = one color on its own surface.
- On the hub, all five colors appear together **only** in the product grid, where each card is a
  single color. Everywhere else the hub is neutral.

### 2.3 Status / semantic

| Token | Hex | Use |
|---|---|---|
| `--success` | `#1FA971` | (shares Social emerald) success states |
| `--warning` | `#E8920A` | amber warnings |
| `--danger` | `#D64545` | errors, destructive |

---

## 3. Typography

**Heebo** everywhere (next/font, weights 400/500/600/700/800/900). Hebrew-ready, clean, modern,
works on dark and light. One typeface across the whole suite — the skins never change the font.

| Level | Size | Weight | Leading | Tracking |
|---|---|---|---|---|
| Display (hub hero) | clamp(2.75rem, 6vw, 4.5rem) | 800 | 1.05 | -0.02em |
| H1 | clamp(2.25rem, 4.5vw, 3.5rem) | 800 | 1.1 | -0.02em |
| H2 (section) | clamp(1.75rem, 3.5vw, 2.5rem) | 700 | 1.15 | -0.01em |
| H3 (card title) | clamp(1.2rem, 2vw, 1.5rem) | 700 | 1.25 | -0.01em |
| Body large | 1.125rem | 400 | 1.6 | 0 |
| Body | 1rem | 400 | 1.6 | 0 |
| Body small | 0.875rem | 400 | 1.5 | 0 |
| Label / eyebrow | 0.75rem | 600 | 1.3 | 0.08em (UPPERCASE) |

Premium typographic feel comes from: tight tracking on big weights, generous leading on body,
and **lots of whitespace** — not from extra fonts.

---

## 4. Motif & illustration system

**No mascots. No recurring characters.** (Old IFTTT had them and dropped them — a consistent
character set is unmaintainable solo, and AI generation can't hold a character across many scenes.)

Instead, each product gets:

1. **A shape motif** — a simple, abstract visual signature reused as iconography, section
   accents, and background texture. Think n8n's node/connector language, not a cartoon.
   - Book → rounded calendar/slot blocks
   - Social → overlapping speech/post cards
   - SEO → ascending bars / organic node graph
   - Outreach → radiating links / connection lines
   - Bots → chat bubbles / circuit dots
2. **One hero spot-illustration per product** — abstract, AI-generated, in the product's color on
   a clean background. Used once (the product hero). Not a scene library.
3. **Icons** — Lucide React, single-weight, colored in the product accent. Consistent stroke.

This gives each product a clear "character" at near-zero ongoing cost.

---

## 5. Components (shared, themeable)

Every component is built once and accepts the active surface (dark/light) + accent. No per-product
component forks.

| Component | Spec |
|---|---|
| **Button — primary** | Filled accent (or near-white on dark hub), Heebo 700, 14px+ y-padding, radius `--radius-md`, subtle shadow. Hover: slight lift + accent glow. |
| **Button — secondary** | Outline or low-contrast fill; text in accent on light, near-white on dark. |
| **Card** | Radius `--radius-lg`. On dark: `--ink-700` fill, `--border-dark` hairline. On light: white fill, soft warm shadow. Hover: translateY(-4px) + shadow/glow. |
| **Product card (hub)** | Dark card, accent **glow** color for icon + motif + "Learn more →", status badge top-right. The single place the 5 colors coexist. |
| **Badge / status** | Rounded-full, 0.75rem 600. `Live` = emerald, `In build` = amber, `Coming soon` = neutral muted. |
| **Pill / tag** | Rounded-full, thin border, accent text on hover. |
| **Input** | Clean, no inner shadow, clear focus ring in the active accent. Works on dark + light. |
| **Divider** | 1px, `--border-dark` or `--border-light`. |

### Radius / shadow / spacing tokens

```
--radius-sm: 8px   --radius-md: 12px   --radius-lg: 16px   --radius-pill: 9999px

--shadow-sm: 0 1px 3px rgba(10,10,12,0.18)      /* tuned for dark + light */
--shadow-md: 0 6px 18px rgba(10,10,12,0.22)
--shadow-lg: 0 14px 40px rgba(10,10,12,0.28)

--section-pad: clamp(4rem, 8vw, 8rem)
--card-pad: 1.5rem
--grid-gap: 1.5rem
--stack-gap: 1rem
```

---

## 6. Motion

- Purposeful, restrained. Premium = calm, not busy.
- Scroll reveal: fade + translateY(12–18px), 300ms ease-out. Stagger children 80–100ms.
- Hover: card lift translateY(-4px) + shadow/glow, 200ms.
- Hero: up to 500ms, one accent gradient drift max.
- Always respect `prefers-reduced-motion`.

---

## 7. Voice (carried from v2, widened to SMBs)

1. **Speak to any small business**, not just barbers. "Your business," not "your barbershop."
2. **Direct, warm, peer-to-peer.** Never "platform," "solution," "leverage," "empower."
3. **Short sentences.** Headlines ≤ 12 words.
4. **Loss-frame when true.** "Every hour on social is an hour off your business."
5. **"You" and "we."** A relationship, not a vendor.
6. **AI is the engine, not the headline.** Sell the human outcome, not "AI-powered."
7. **Safe to say yes.** "Pick what you need. Pay for what you use. No lock-in."

The premium *look* is balanced by a warm, plain-spoken *voice*. That contrast is the brand.

---

## 8. Do / Don't

**Do**
- Keep the hub neutral and dark; let product color appear only in the product grid.
- Give each product exactly one color + one motif + one hero illustration.
- Use whitespace and type weight for premium feel.
- Reuse one component set across every surface.

**Don't**
- Make the master brand orange/warm again — that's Book's identity now.
- Combine two product colors as decoration.
- Build bespoke mascots or per-product illustration libraries.
- Fork layout, type, or components per product.
- Say "AI-powered" in a headline.

---

## 9. Token reference (implementation)

These map directly to `src/app/globals.css`. See that file for the live `@theme` block. Product
accents live as `--color-book / -social / -seo / -outreach / -bots` (+ `-tint`, `-glow` variants).
Surfaces are driven by a `data-theme="dark|light"` (or per-subdomain root) so one component set
renders on both.
