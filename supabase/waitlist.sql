-- Run this in Supabase SQL Editor before accepting waitlist registrations.
create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null unique,
  interest text not null,
  role text not null,
  organization text,
  consent boolean not null check (consent = true),
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

drop policy if exists "Allow consented waitlist registrations" on public.waitlist;
create policy "Allow consented waitlist registrations"
  on public.waitlist for insert to anon
  with check (consent = true);

grant insert on table public.waitlist to anon;

-- Return only the aggregate count. Do not grant anonymous access to signup rows,
-- names, email addresses, organizations or other personal information.
create or replace function public.get_waitlist_count()
returns bigint
language sql
security definer
set search_path = ''
as $$
  select count(*)::bigint from public.waitlist;
$$;

revoke all on function public.get_waitlist_count() from public, anon, authenticated;
grant execute on function public.get_waitlist_count() to anon;
