-- Waitlist capture for pre-launch products (Social/SEO/Outreach/Bots).
-- Run on the info.bapita Supabase project (via MCP apply_migration or SQL editor).

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  product     text,
  created_at  timestamptz not null default now(),
  unique (email, product)
);

-- RLS on; only the service role (used by /api/waitlist) can write/read.
alter table public.waitlist enable row level security;
-- No public policies => anon/auth clients cannot read or write. Service role bypasses RLS.
