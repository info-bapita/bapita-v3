import { NextResponse } from "next/server";

// POST /api/waitlist  { email, product }
// Inserts into the `waitlist` table on Supabase via PostgREST.
// Uses the public (anon) key + an insert-only RLS policy — anon can add rows
// but cannot read anyone's data (no select policy).
// Env required (set in Vercel + .env.local):
//   NEXT_PUBLIC_SUPABASE_URL        e.g. https://xxxx.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY   publishable / anon key
// See docs/migrations/0001_waitlist.sql for the table + policy.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; product?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const product = (body.product ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Misconfigured: don't 500 the visitor, but make it loud in logs.
    console.error("[waitlist] Missing Supabase env vars");
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify({ email, product: product || null }),
  });

  if (!res.ok && res.status !== 409) {
    const detail = await res.text();
    console.error("[waitlist] Supabase insert failed", res.status, detail);
    return NextResponse.json({ error: "Could not save" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
