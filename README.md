# Bapita — Multi-Product SaaS Platform

**Master hub:** https://bapita.com  
**Account:** info.bapita@gmail.com  
**Brand doc:** [docs/bapita-v3.md](v3/docs/bapita-v3.md)

---

## Products & Repos

| Product | Subdomain | Status | GitHub | Vercel |
|---------|-----------|--------|--------|--------|
| **Master Hub** (marketing site) | bapita.com | ✅ Live | [info-bapita/bapita-v3](https://github.com/info-bapita/bapita-v3) | `v3` project |
| **Social** (social media mgmt) | social.bapita.com | 🚧 In dev | [info-bapita/dashboard](https://github.com/info-bapita/dashboard) | `social-ops-platform` |
| **Book HP** (booking landing) | book.bapita.com *(via bapita.com currently)* | ✅ Live | ⚠️ `ramikan96-collab/dashboard` → **migrate to info-bapita** | `dashboard` project |
| **Book Dashboard** (platform) | dashboard.bapita.com | ✅ Live | ⚠️ `DostiAziz/bapita-dashboard` → **migrate to info-bapita** | `bapita-dashboard` project |

### ⚠️ Migration Needed
2 repos on `ramikan96@gmail.com` + `DostiAziz` accounts must transfer to `info-bapita` GitHub org.

---

## Local Structure

```
/Users/admin/Desktop/
├── bapita/                  # git: info-bapita/bapita-v3 (marketing site repo)
│   ├── v3/                  ← Next.js app /src, /docs, /public
│   ├── v1/                  # historical: WhatsApp bot prototypes
│   ├── v2/                  # historical: booking platform docs
│   ├── competitor-profiles/ # competitor research
│   ├── shared/              # shared brand assets
│   └── README.md            ← this file
│
└── social-ops-platform/     # git: info-bapita/dashboard (social app repo)
    ├── app/                 ← Next.js app router
    ├── lib/                 # shared lib, supabase client, meta API
    ├── supabase/            # migrations, edge functions
    ├── tests/               # vitest suite
    └── docs/                # design docs, superpowers
```

---

## Master Hub (bapita.com - v3)

**Stack:** Next.js 16 (App Router), Tailwind CSS 4, Framer Motion, Three.js / React Three Fiber, Lenis  
**Deploy:** Vercel (`v3` project) — auto-deploys from `main` branch  
**Local:**

```bash
cd /Users/admin/Desktop/bapita/v3
npm install
npm run dev    # → http://localhost:3000
```

**Current pages:** Hero landing, waitlist API endpoint, robots.txt, sitemap.xml

---

## Social (social.bapita.com)

**Stack:** Next.js 16, Supabase (Postgres + Auth + Storage), Groq (AI captions), Meta Graph API v21  
**Deploy:** Vercel (`social-ops-platform` project) — https://social-ops-platform-rosy.vercel.app  
**Repo:** `info-bapita/dashboard` (private)  
**Local:**

```bash
cd /Users/admin/Desktop/social-ops-platform
cp .env.local.example .env.local  # fill in Supabase + Groq keys
npm install
npm run dev    # → http://localhost:3000
npm run test   # vitest
```

**Env vars needed:**

| Variable | Source |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Project Settings → API |
| `GROQ_API_KEY` | console.groq.com → API Keys |
| `META_GRAPH_VERSION` | `v21.0` (hardcoded, no secret) |

---

## Booking (book.bapita.com + dashboard.bapita.com)

These live on `ramikan96@gmail.com` + `DostiAziz` accounts. Need Vercel → GitHub transfer to `info-bapita`.

| App | Current GitHub | Vercel Domain | Status |
|-----|---------------|---------------|--------|
| Booking HP | `ramikan96-collab/dashboard` | bapita.com (via `dashboard` project) | ✅ Live |
| Dashboard | `DostiAziz/bapita-dashboard` | book.bapita.com, dashboard.bapita.com | ✅ Live |

**Supabase:** Separate Supabase project (on `ramikan96` account) — needs migration to `info.bapita@gmail.com` Supabase org.

---

## URL Plan (per v3 docs)

```
bapita.com              → Master hub (current v3 marketing site) 
book.bapita.com         → Booking landing page (currently on bapita.com)
social.bapita.com       → Social media app
dashboard.bapita.com    → Booking dashboard (already correct)
seo.bapita.com          → Planned
outreach.bapita.com     → Planned
bots.bapita.com         → Concept
```

---

## Auth

- `info.bapita@gmail.com` — master account for GitHub, Vercel, Supabase
- `ramikan96@gmail.com` — **legacy** — booking repos need migration





| Asset | Location |
|---|---|
| Local code | `/Users/admin/Desktop/social-ops-platform/` |
| GitHub | `https://github.com/info-bapita/dashboard.git` (main) |
| Live | `https://social-ops-platform-rosy.vercel.app` |
| Vercel project | `infobapita-4729s-projects/social-ops-platform` |
| Supabase ref | `hgvzskfmxlgjubjhnjlj` (info.bapita@gmail.com) |
| Supabase Edge Function | `publish-due-posts` (ACTIVE, v1) |
| Meta App ID | `1032747895966395` |
| FB Page "Bapita" | id `1200658073128639` |
| IG business account | ✅ linked — id `17841417534510869` (connected, token in Vault) |
| Tokens in Vault | yes — stored via `store_account_token` |
| `connected_accounts` in DB | yes — IG + FB rows, status `connected` |

**Build:** ✅ fixed (2026-06-30). `serverActions` must be nested under `experimental` in `next.config.ts` for Next 16; top-level fails type-check and silently breaks every deploy. Value unit must be `"15mb"` (not `"15m"`).

**GROQ_API_KEY:** ✅ set in Vercel prod (2026-06-30). AI captions work.

**Open blocker — Meta token expiry:** connected Meta access tokens are short-lived and expire (~hours). Publishing fails with `Error validating access token: Session has expired`. Need a **long-lived page token** (60d) or a **System User token** (no expiry) from Business Manager, re-stored via `store_account_token`. The connect flow should exchange short→long-lived (`grant_type=fb_exchange_token`) then pull the non-expiring page token from `/me/accounts`.

**Timezone:** ✅ fixed (2026-06-30). Compose now converts the `datetime-local` value to UTC in the browser before saving; previously the UTC Vercel server reinterpreted local wall-clock as UTC, scheduling posts hours late.
