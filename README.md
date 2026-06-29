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

**IG publish container wait:** ✅ fixed (2026-06-30). `igPublish` now polls `status_code=FINISHED` before `media_publish`; without it IG threw `Media ID is not available`. Edge function also made per-platform resilient (one channel failing no longer drops the other).

---

## Social — Meta Token Runbook (publishing)

**Verified 2026-06-30:** IG publish works end-to-end (test post `instagram.com/p/18447138145187483`). FB blocked only by a missing permission. Pipeline (compose → cron `*/5` → edge fn → Meta Graph) is healthy.

### TODO to finish publishing
1. **FB needs `pages_manage_posts`.** The current token was generated without it, so FB photo posts fail with `(#200) ... pages_manage_posts are not available`. Regenerate the token (below) with that scope added.
2. **Make the token durable.** Current Page token derives from a *short-lived* user token (expires ~1-2h → `Session has expired`). Pick one:
   - **60-day:** exchange short→long-lived user token, then read the (non-expiring) Page token. Needs the **App Secret** (Meta → App → Settings → Basic).
   - **Permanent (preferred):** create a **System User** in Meta Business Suite → Business Settings → Users → System Users, assign the Bapita page + IG, generate a token that never expires.

### Required permissions (regenerating a token)
`pages_show_list`, `pages_read_engagement`, **`pages_manage_posts`**, `business_management`, `instagram_basic`, `instagram_content_publish`.

### Token generation + storage (manual, current process)
```bash
# 1. Get a User Token in Graph API Explorer (developers.facebook.com) with the scopes above.
# 2. (60-day) exchange short -> long-lived user token:
curl "https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=1032747895966395&client_secret=APP_SECRET&fb_exchange_token=SHORT_USER_TOKEN"
# 3. Pull the Page token (non-expiring if user token is long-lived) + IG id:
curl "https://graph.facebook.com/v21.0/me/accounts?fields=name,id,access_token,instagram_business_account&access_token=LONG_LIVED_USER_TOKEN"
#    -> Bapita page id 1200658073128639, IG business id 17841417534510869
# 4. Store the Page token into Vault for BOTH connected_accounts rows (IG + FB use the same page token):
#    via Supabase SQL (Management API or dashboard SQL editor):
#    select vault.update_secret(token_secret_id, 'PAGE_TOKEN') from connected_accounts where status='connected';
```

### How to test publishing without waiting for the 5-min cron
```bash
SR_JWT=<service_role JWT>   # from cron.job command, or Supabase dashboard -> API
REF=hgvzskfmxlgjubjhnjlj
# Make a pending post due now (replace <POST_ID>):
#   update posts set status='pending', error=null, run_at=now()-interval '1 minute' where id='<POST_ID>';
# Invoke the edge function directly:
curl -X POST "https://$REF.supabase.co/functions/v1/publish-due-posts" \
  -H "Authorization: Bearer $SR_JWT" -H "Content-Type: application/json" -d '{}'
# Then read result:
#   select status, error, result_link from posts where id='<POST_ID>';
# status 'posted' + result_link = success. 'failed' -> error column has the exact Meta message.
```

### Querying this Supabase project (MCP can't reach it — wrong account)
Use the Management API with the CLI's PAT (macOS keychain): `security find-generic-password -s "Supabase CLI" -w` → strip `go-keyring-base64:` prefix → base64 -d → Bearer token for `POST https://api.supabase.com/v1/projects/hgvzskfmxlgjubjhnjlj/database/query`.

### Timezone — TWO separate concerns (both fixed 2026-06-30)
- **Input/storage:** `datetime-local` has no zone; the UTC Vercel server was storing wall-clock as UTC. Fixed in `compose-form.tsx` by converting to UTC ISO in the browser before submit.
- **Output/display:** dashboard + posts are **Server Components** rendered on Vercel (UTC), so `toLocaleString(undefined)` printed UTC. Fixed with a client `components/local-time.tsx` (`<LocalTime iso=… />`) that formats in the browser's zone (`suppressHydrationWarning` for the expected server/client text diff). **If you add any new place that shows a post time, use `<LocalTime>` — never format dates in a Server Component.** (Calendar grid grouping in `lib/calendar.ts` still uses server-local date math; low priority, but it can mis-bucket near midnight — convert there too if it matters.)

### Architecture notes / future improvements (read before extending)
- **Edge function deploy is separate from Vercel.** `git push` deploys the Next app (Vercel). The Supabase edge function deploys only via `supabase functions deploy publish-due-posts --project-ref hgvzskfmxlgjubjhnjlj`. Forgetting this = stale function in prod.
- **Token refresh is manual today.** No UI re-auth/exchange flow. Next build: a connect flow that does short→long-lived exchange + stores the page token automatically, plus a daily cron to refresh before expiry. Until then, tokens must be re-stored by hand (see runbook above).
- **Image upload streams through the Server Action** (15MB limit). Fine for now; if posts get heavy, move to direct browser→Storage upload (signed URL) and pass only the URL to the action.
- **No status feedback after scheduling.** A failed publish only shows on the Posts page (`error` column). Consider surfacing failures on the dashboard / a notification.
- **`processed` count in the edge function** counts due rows, not successes. A row can be `processed` yet `failed` — check the `posts.status`/`error`, not the function's return.
