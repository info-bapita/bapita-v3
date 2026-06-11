# Bapita — Platform Strategy & Masterplan
**Date:** 2026-06-11
**Purpose:** Single source of truth for confirmed decisions + every change to make (where + how). Barber-first.
**Legend:** ✅ CONFIRMED · 🟡 PROPOSED (needs Rami's ok) · ⚙️ DONE (already built/pushed)

---

## 1. Confirmed Strategy (the spine)

### 1.1 Target market ✅
- **First customers: barbers.** Easiest first doors, build momentum + proof here.
- But **the product and brand serve local service businesses broadly** (salons, nail/lash, trainers, clinics, shops). Barbers are the start, not the ceiling.
- **Rule:** acquire barbers first, but keep product, dashboard, and homepage generic for any local service business. Never box the brand into barbers only.
- **Homepage stays broad** (service businesses), never barber niche. See §4.

### 1.2 Product = 3 layers ✅
Each layer is its own separate "yes." No layer is forced.

| Layer | What it is | Who controls | Money |
|-------|-----------|--------------|-------|
| 1. Website | Done for you site + public booking page. Brings customers. Sends booking notification (email/SMS) with customer name + phone. Works 100% standalone. | Rami builds, hands over | One-time build fee |
| 2. Dashboard | Free optional tool. Barber uses it however they like — glance day/week, OR calendar, OR CRM. | Barber (optional) | Free (the hook) |
| 3. Add-ons | Payments, reminders, social, reviews, ads. Switch on for extra value. | Barber switches on | Recurring / extra |

**Core mechanic:** site earns trust → barber opens dashboard → dashboard shows what add-ons unlock → barber buys. Each layer makes the next an easier sale.

### 1.3 Money model ✅
- **One-time build fee**, sized per shop, **flexible / no fixed price.**
- **Add-ons** = extra, also flexible price.
- **No prices anywhere on bapita.com.** Pricing happens in conversation (door / call).
- Homepage CTA = WhatsApp / book a free call.

### 1.4 Dashboard purpose ✅
- Must be **genuinely useful with ZERO add-ons** (a barber who bought only a site still gets value).
- Gets **richer as add-ons turn on** (Financials comes alive with payments, etc.).
- Flexible use: day/week glance, full calendar, or lightweight CRM. Never forces a workflow.

### 1.5 Add-on catalog ✅
1. **Online payments** (Stripe) — deposits/payment links. Powers Financials.
2. **Booking reminders** — auto SMS/WhatsApp/email before appointments. Cuts no-shows.
3. **Social media automation** — auto-post / schedule content.
4. **Reviews & reputation** — auto-ask happy clients for Google reviews.
5. **Paid ads** — Google/Meta ad management.
6. WhatsApp chatbot — 🟡 PARKED for later.

### 1.6 Upsell style ✅ — "Clean + smart nudges"
- Dashboard stays clean and useful.
- **One dedicated Add-ons "store" page** (browse what exists).
- **PLUS one contextual nudge, only where relevant** (Financials → payments; Insights → ads). No nagware, no lock badges everywhere.
- **Enabling is manual:** barber sees an add-on, talks to Rami (WhatsApp/in person), Rami turns it on for them. No self-serve billing.

### 1.9 Content / copy rule ✅
- **Never use the dash character in any customer-facing content** (no `-`, no em dash). Use commas, periods, or rephrase. Applies to homepage, dashboard copy, emails, everywhere.

### 1.7 Navigation & shell ✅ (locked in competitors.md)
- **Mobile bottom nav: 4 tabs** — Calendar · Clients · Insights · Financials.
- **Hamburger drawer (☰, right edge):** Settings · Add-ons · Usage · Profile · Sign out.
- **Desktop:** left sidebar (Google Calendar model) on Calendar; top tab bar for the 4 sections.
- **Calendar = home screen.** FAB (amber +) + tap empty slot = new booking. Long-press = block time.
- **Public booking page:** service → date → time grid → name+phone → confirm. Guest booking, under 60s.

### 1.8 Visual style ✅
- Airbnb-clean + Google-Calendar-calm. Lots of whitespace, one clear action per screen.
- White cards on cream `#FAF5EC`; amber accent `#E8920A`; dark text `#1E1A14`; muted `#6B6052`.
- Heebo font. Stroke icons (1.5px, single consistent set). `rounded-2xl` cards, soft shadow.
- Status colors reuse `STATUS_COLOR` tokens.

---

## 2. Dashboard — page-by-page plan

Repo: `/Users/admin/Desktop/bapita-dashboard/` · pages in `src/app/(dashboard)/<page>/page.tsx`

| Page | Purpose | Shows | Primary action | Add-on nudge | Status |
|------|---------|-------|----------------|--------------|--------|
| **Calendar** | Daily home | Day/Week/Month grid, bookings, blocked time | New booking (FAB / tap slot) | none | ⚙️ layout fixed, Month view rebuilt |
| **Clients** | Lightweight CRM | Search + client cards (avatar, name, phone, last/next visit) | Add client | none | 🟡 re-skin |
| **Insights** | Show the business is growing | Revenue hero, 2×2 stat grid, amber bar chart, top services | Date-range chip | → **Paid ads** ("get more bookings") | 🟡 re-skin |
| **Financials** | Money | If payments OFF: premium "Get paid online" page (CTA). If ON: revenue + payouts + transactions | Connect / view | → **Online payments** (this IS the nudge) | 🟡 re-skin |
| **Add-ons** | The store | Card per add-on (icon, title, 1-line benefit, "I want this"). Enabled = amber border + check | "I want this" → WhatsApp to Rami | n/a (it's the store) | 🟡 build out |
| **Usage** | Prove add-on value | Read-only per-add-on stats (reminders sent, reviews collected, ad spend/results) with thin bars | none | soft "add more" | 🟡 build out |
| **Settings** | Configure | Tabs: Business · Services · Hours. Slug preview `slug.bapita.com` | Save | none | 🟡 re-skin |
| **Profile** | Account | Avatar, email, change password, sign out | Save / logout | none | 🟡 re-skin |

### Page detail — how each is built

**Clients** (`clients/page.tsx`, `clients/[id]/page.tsx`)
- Top: search pill (magnifier) + amber "Add" button. Segmented sort: Recent · A–Z · Most booked.
- Card: avatar circle (initial, amber bg), name bold, phone muted, right = next/last visit + chevron.
- Profile: header (avatar, name, phone, WhatsApp + call quick-buttons), 3 stat tiles (visits · total spent · last seen), booking history timeline, notes.
- Empty: warm illustration + "Add your first client."

**Insights** (`insights/page.tsx`)
- Hero: big this-month revenue + delta vs last month (green/red arrow).
- 2×2 stat tiles: bookings · completed · no-shows · avg ticket.
- One amber Recharts bar chart (revenue by week). Top-services ranked list with mini bars.
- Date-range chip top-right. **Nudge:** small card "Want more bookings? → Paid ads."

**Financials** (`financials/page.tsx`)
- Payments OFF (default): single premium screen — "Get paid online," 3 benefit rows + icons, one amber CTA (→ WhatsApp/connect). This page *is* the payments nudge.
- Payments ON: revenue hero + payouts list + transactions (date, client, amount, status pill).

**Add-ons** (`addons/page.tsx`)
- Grid of cards, one per catalog item (§1.5). Icon, title, one line benefit, "I want this" button.
- Enabled state: subtle amber border + check. "I want this" opens WhatsApp to Rami, who enables it. No self-serve billing, by design.

**Usage** (`usage/page.tsx`)
- Only shows add-ons that are ON. Read-only stat rows + thin progress bars.
- e.g. Reminders: "142 sent this month." Reviews: "9 new Google reviews." Ads: spend + clicks.

**Settings** (`settings/page.tsx`)
- Tabs: Business (logo, name, phone, address, slug preview) · Services (card list, add/edit/delete, name/duration/price) · Hours (7-day rows, open/closed toggle + time pickers, local day order).

**Profile** (`profile/page.tsx`)
- Minimal: avatar, email, change password, sign out.

### Cross-cutting polish (all pages)
- Consistent header: title left, primary action right.
- `rounded-2xl` cards, soft shadow `0 1px 2px + 0 2px 8px`.
- Reuse `LoadingSkeleton` for loading. Reuse `STATUS_COLOR` for pills.
- Shared shell already in `src/components/AppShell.tsx`.

---

## 3. Add-ons system — how it ties together
- **Add-ons page** = browse what exists (the store).
- **Usage page** = proof of value for what's ON.
- **Contextual nudges** = exactly two: Financials (payments), Insights (ads). Nowhere else.
- **Enabling is always manual:** barber taps "I want this" → opens WhatsApp to Rami → Rami enables it on their account. ✅ No self-serve billing, by design.

---

## 4. Homepage (bapita.com) — 🟡 PROPOSED structure
Lead-gen only. No pricing. **Speaks to local service businesses broadly, not barbers.** No dash character in any copy (§1.9). CTA everywhere = WhatsApp / free call.

1. **Hero:** headline like "Your business, fully online. Done for you." + phone mockup of a real site. CTA: "Book a free call" (WhatsApp).
2. **Proof:** real sites you built (portfolio strip) + client names and WhatsApp screenshots.
3. **What you get:** the 3 layers (Website, free Dashboard, Add-ons) as 3 simple cards.
4. **Add-ons teaser:** payments, reminders, social, reviews, ads. Icon row, "grow when you're ready."
5. **Why Bapita:** vs. WhatsApp chaos and DIY builders. Comparison cards.
6. **FAQ:** addresses "do I have to manage it?" (no), "what does it cost?" (custom, let's talk).
7. **Final CTA:** WhatsApp.

**Copy note:** keep language industry neutral ("your business," "your shop," "your customers"), so the same homepage works for a barber, a salon, or any local service.

---

## 5. Door / sales flow — ✅ (mostly confirmed)
1. There are **2 to 3 ready templates.** Rami shows them in person; the owner picks one.
2. Pre-build or show the chosen template **before** the real pitch.
3. Script: "I already made you this, want it live?" then ask what they need.
4. Close site (one-time fee). Hand over. Offer dashboard free.
5. Follow up later with add-ons (reminders and reviews are the easiest second sale).
6. When they want an add-on, they talk to Rami and he enables it (§3).

---

## 6. Already done ⚙️
- Calendar shell rebuilt as flex column — nav no longer overlaps sidebar/dates. (`AppShell.tsx`, commit `96ec267`)
- Calendar time labels readable, grid lines stronger. (`WeekView.tsx`, `DayView.tsx`, `grid.ts`)
- Month view rebuilt Google-style (full cells + event chips). (`MonthView.tsx`, commit `b08e607`)

---

## 7. Build order (recommended)
1. **Finish Calendar** polish (verify the layout fix live).
2. **Clients** (CRM — highest daily value).
3. **Insights** (+ ads nudge).
4. **Financials** (payments nudge / premium connect screen).
5. **Add-ons store** + **Usage**.
6. **Settings** + **Profile** re-skin.
7. **Homepage** rebuild (separate repo: `bapita/`).

Each page: plan → confirm → build → push → Rami checks live. One page at a time.

---

## 8. Open questions (still need decisions)
- 🟡 Homepage headline + exact copy (§4). Want 3 drafted options?
- 🟡 Exact sales script wording (§5).

**Resolved since v1:** add-on billing = manual via Rami (§3). Templates = 2 to 3 ready templates shown in person (§5). Target = service businesses broadly, barbers first (§1.1).
