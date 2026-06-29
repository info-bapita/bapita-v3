# Bapita v3 — Pricing & Go-To-Market

*The money + first-customer playbook. Paired with `docs/bapita-v3.md` (strategy) and
`docs/brand/bapita-v3-brand-system.md` (design).*

---

## 0. The hard truth this plan is built around

- **0 paying customers today.** Book is built and usable; nobody pays yet.
- **Solo founder, ~2–3 month runway.** No team to build or sell 5 products.
- **Reachable markets: Israel + Turkey SMBs** you can talk to directly.

Therefore the GTM is **founder-led sales first, self-serve later.** A polished signup flow is
worthless without an audience. The first dollars come from you selling, by hand, to people you
can reach — in their language. The SaaS is what you *deliver*; the sale is human.

---

## 1. Focus (what we actually sell)

| Tier | Products | GTM treatment |
|---|---|---|
| **Sell now** | **Book** (live), **Social** (finishing) | Real LP + working product + founder-led sales + onboarding |
| **Waitlist only** | SEO, Outreach, Bots | Hub card + "Get notified" → `waitlist` table. No build until demand proven. |

Don't build the waitlist three until a waitlist count or a paying customer demands it.

---

## 2. Pricing

### Principles
- **Per-product subscription. No bundle lock-in.** (Already the brand promise.)
- **Setup fee for the done-with-you motion.** It funds your time and filters tire-kickers.
- **Annual = 2 months free.** Pull cash forward (helps runway).
- **No free tier yet.** Use a short paid pilot or a trial instead — free plans need scale you
  don't have and attract non-payers.

### Recommended starting numbers (validate, then lock)

| Product | Monthly | Setup (one-time) | Founding offer |
|---|---|---|---|
| **Book** | $29 / mo | $99 setup | First 10 customers: setup waived, $19/mo for life |
| **Social** | $19–29 / mo | $79 setup | Waitlist → founding price $15/mo for 6 mo |
| SEO / Outreach / Bots | TBD at launch | — | Waitlist captures interest + price test |

Mirror locally at point of sale: **₪ for Israel, ₺ for Turkey.** Round to clean local numbers
(e.g. Book ₪99/mo, not a converted $29). Price to the local market, not the FX rate.

> **No prices are shown on the public page** (decided). `pricingNote` in `src/lib/products.ts`
> now shows status text ("Available now" / "Launching next" / "Coming soon"), not dollar amounts.
> Price is closed on the sales call, in local currency. The numbers above are your internal
> anchors only.

---

## 3. The first-customer engine (next 60 days)

**Goal: 3–5 paying pilots.** That's the whole near-term game. Pilots → testimonials + logos →
the hub stops being aspirational → self-serve becomes believable.

### 3.1 Lead product — **Social** ✅ (decided)
- Broad SMB need (everyone needs posts), **no rip-and-replace** of an existing system.
- Headline the suite with Social. Use Book opportunistically for warm barber/salon leads who feel
  booking pain right now — but Social is the spearhead.

### 3.2 Build the lead list (week 1)
20–30 reachable SMBs across IL + TR. For each: name, type, IG handle, how you know them, which
product fits, language. Template:

| Business | Market | Type | Channel | Product | Warmth (1-3) |
|---|---|---|---|---|---|
| … | IL/TR | salon / store / clinic | IG DM / WhatsApp / intro | Book/Social | 3 = warm intro |

Prioritise warmth 3 first. Bias to: salons, IG-active local shops, new barbers (per prior GTM
learnings — solo phone-happy barbers were the wrong segment; salons + IG-active won).

### 3.3 The offer (done-with-you)
"I'll set up [Book/Social] for your business this week — your account, your content, connected and
running. ₪/₺[setup], then ₪/₺[monthly]. Cancel anytime. You're one of my first, so you get the
founding price for life."

### 3.4 Sales motion
- **Channel:** WhatsApp / IG DM / in-person — not cold email. Warm, local, your face.
- **Cadence:** message → 15-min call/demo → set it up live with them → invoice → onboard.
- **Language:** Hebrew for IL, Turkish for TR. Product UI can be English; the *conversation,
  demo, and invoice* are in their language.
- **Track** in a simple sheet: lead → contacted → demo → pilot → paying.

### 3.5 Wedge angle
Lead with one painful, concrete outcome, not "a suite":
- Book → "stop the no-shows and the back-and-forth — clients book themselves 24/7."
- Social → "your IG posts itself for a month — you approve, we schedule."

---

## 4. Launch sequence

1. **Ship `bapita.com`** — premium dark hub, honest copy, waitlist live. (Done/in progress.)
2. **Sell the lead product by hand** to the IL/TR list → first 3–5 pilots.
3. **Finish Social to production** (`social.bapita.com`) → move warm leads onto it self-serve.
4. **Add real social proof** to the hub (logos, a metric, a quote) once pilots exist.
5. **Open the waitlist three** only when their signup counts justify a build.

## 5. Cross-sell (later, not now)
Once a base exists: Book dashboard → "Run your social too? Try Bapita Social," etc. Irrelevant
until there's a base. Don't build it yet.

## 6. What to ignore for now (anti-scope)
Product Hunt blitzes, paid ads, SEO content engine, multi-language product i18n, SSO across
products, the waitlist-three builds. All premature before 3–5 paying customers exist.

---

## 7. Open decisions (need founder input)
- [x] Lead product: **Social.**
- [x] Prices: **not shown on page**; closed on call. Internal anchors set in §2.
- [ ] Who are the first 10 names on the lead list? (IL + TR)
- [ ] Lock the actual ₪/₺ numbers you'll quote on calls.
