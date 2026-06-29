-- Waitlist capture for pre-launch products (Social/SEO/Outreach/Bots).
-- Run on the info.bapita Supabase project (via MCP apply_migration or SQL editor).

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  product     text,
  created_at  timestamptz not null default now(),
  unique (email, product)
);

-- RLS on. Public (anon) can INSERT only — no select policy, so emails are not readable
-- by anon. /api/waitlist uses the publishable anon key.
alter table public.waitlist enable row level security;

create policy "anon insert waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);
