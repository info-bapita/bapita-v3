# HANDOVER — Bapita v3 Master Homepage Rebuild

You are the lead frontend engineer building the Bapita v3 master homepage. This is a fresh session continuing approved work. Read this fully, then read the spec, then build.

## What this is
A full section-by-section rebuild of the `bapita.com` master homepage (the neutral premium **dark** hub) to Gemini/Scale-tier quality, with a branded interactive 3D hero. Design + all decisions are already locked with the owner (Rami). Your job: implement, commit, push. Owner tests on the live Vercel preview.

## READ FIRST (the source of truth)
- **Spec:** `v3/docs/superpowers/specs/2026-06-29-bapita-v3-master-hp-design.md` — full design. Follow it exactly.
- **Brand system:** `v3/docs/brand/bapita-v3-brand-system.md` — tokens, color wheel, type, motion, voice.
- Existing site is the baseline you improve (last built commit `8ad62a6`).

## Repo / environment
- **Git root:** `/Users/admin/Desktop/bapita` (one repo). App lives in `v3/`.
- **Remote:** `origin` → `https://github.com/info-bapita/bapita-v3.git`
- **Branch:** currently `main`. **Create a feature branch before editing** (e.g. `feat/master-hp-rebuild`). Do not commit straight to main.
- **Vercel:** project linked (`v3/.vercel`), auto-deploys preview per branch/PR. Owner verifies there.
- **Supabase:** waitlist already wired — `v3/src/app/api/waitlist/route.ts` + `NotifyForm` in pricing. Don't break it.
- **Stack:** Next 16.2.9 (App Router) · React 19.2.4 · Tailwind v4 (`@theme` in `src/app/globals.css`) · Heebo (`next/font`) · lucide-react.

## Locked decisions (do not re-litigate)
| Item | Decision |
|---|---|
| Hero headline | **"Built for you. Run it your way."** Sub: "Some tools run themselves. Some you run in one tap. None need setup, none need an agency." |
| Hero engine | **react-three-fiber 3D + rapier physics** — the **"Pita Catch"** scene (spec §3.3). 5 product-hue orbs drift + follow cursor; click/flick drops an orb into the central white pita bowl; drag field → bg parallax; collect all 5 → bowl pulses; auto-demo after ~3s idle. Fixed hue per product. |
| Motion | **framer-motion + Lenis** (inertial smooth-scroll). |
| AI assets | **None.** Higgsfield dropped entirely. Pure code. Bento = CSS motifs + Lucide. |
| Logo | **Neutral white bowl** icon (recreate the bowl/smile as SVG, strip the cream card) + white `bapita` wordmark, both `#F4F4F2`. Replaces the current 5-dot constellation in `ui/brand-mark.tsx`. |
| Scope | **Full section-by-section rebuild.** |
| Bento | All **5 products**, status badge only (Live / Coming soon), short desc. **No** per-product control-mode tags. |
| WhatsApp | **Dropped.** CTAs stay internal (`#products`, `book.bapita.com`, waitlist, `mailto:hello@bapita.com`). |

## Hard guardrails (from brand system)
- Hub is **neutral dark** (`#0B0B0C`). **Terracotta `#D4622A` is BOOK's color only** — never the master brand color. The 5 product hues appear together **only** in the bento grid. Hub is neutral everywhere else.
- Heebo only. Premium feel from whitespace + type weight + restraint.
- Motion is calm/purposeful. **Always respect `prefers-reduced-motion`** — disable Lenis/3D/parallax, show static states.
- Hero canvas is **client-only** (`dynamic(..., { ssr:false })`), lazy, never blocks first paint. Headline + CTA render server-side over it. Keep the three.js stack in the hero chunk, not the global bundle.

## Messaging rewrite (important — current copy is wrong)
v2 copy leans **hands-off** ("no logins to a complicated dashboard," "you focus on customers, we handle the software," "run your business not your tools"). v3 truth is a **spectrum**: Book runs itself (dashboard optional), Social you run trivially (one button, one inbox, post in a tap), others in between. Rewrite:
- **Hero** → new headline/sub above.
- **HowItWorks** → steps become **Call → We Build → Simple daily control** (step 3 = "Schedule, post, check stats in one tap. Or let it run itself. Your call." — NOT "run your business not your tools").
- **FAQ Q1 + Q2** → drop "no dashboard / no logins" framing; reframe to "simple controls you actually use, not a system you fight."
- Recurring theme: **"Zero technical setup. Total daily simplicity."** Never imply "you never touch it." Owners have full, easy daily control.

## Build order
1. **Branch** off main.
2. **Install deps:** `framer-motion`, `lenis`, `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`. **Verify compat with React 19 / Next 16 at install.** If r3f/rapier fights the toolchain, fall back to a **matter.js 2D canvas** variant of the same Pita Catch interaction — do not ship a broken hero.
3. **Foundations:** complete `globals.css` tokens (spec §3.2) + keyframes; new white-bowl `brand-mark.tsx`; framer-motion `reveal.tsx` (same API + stagger + reduced-motion); `lenis-provider.tsx` wired in `layout.tsx`.
4. **Hero scene** (`components/hero-scene/`) — the Pita Catch (spec §3.3) + static fallback.
5. **Sections top→bottom** (spec §4): Nav, Hero, Social proof, Bento grid, How-it-works timeline, Who-it's-for, Pricing, FAQ, CTA+Footer. Restyle + copy edits per spec.
6. **Verify:** `npm run build` + `eslint` clean. Local Playwright screenshots desktop + mobile of each fold. Check reduced-motion (3D/Lenis off, statics show). Don't break the waitlist API.
7. **Commit** in logical chunks, **push** the branch to origin. Tell Rami the preview URL is ready; he tests/verifies on the live page.

## Working style
- Use the project's frontend-design guidance/skill for the visual craft.
- This is visual/UX work — manual screenshot verification over unit tests, but the build + lint must pass and the hero must degrade gracefully.
- Don't add scope (no product subdomain pages, no analytics/Stripe, no region migration).

Start by reading the spec file, then proceed.
