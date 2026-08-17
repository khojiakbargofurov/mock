-- ============================================================
-- German Mock Test — ma'lumotlar bazasi sxemasi
--
-- Muhim: bu loyihada Supabase Auth ishlatilmaydi. Foydalanuvchini
-- Telegram bot orqali biz o'zimiz taniymiz, shuning uchun bazaga
-- faqat bizning serverimiz `service_role` kaliti bilan kiradi.
-- Har jadvalda RLS yoqilgan va hech qanday siyosat berilmagan —
-- ya'ni anon/authenticated kalitlar hech nima ko'ra olmaydi.
--
-- Ishlatish: Supabase → SQL Editor → shu faylni to'liq nusxalab, Run.
-- ============================================================

-- ── Foydalanuvchilar ─────────────────────────────────────────
create table if not exists public.users (
  id            text primary key,            -- "tg:123456789"
  telegram_id   bigint unique not null,
  first_name    text not null,
  last_name     text,
  username      text,
  photo_url     text,
  created_at    timestamptz not null default now(),
  last_seen_at  timestamptz not null default now()
);

-- ── Kirish so'rovlari (deep-link oqimi) ──────────────────────
create table if not exists public.login_requests (
  token             text primary key,
  created_at        timestamptz not null default now(),
  approved_user_id  text references public.users(id) on delete cascade
);
create index if not exists login_requests_created_at_idx
  on public.login_requests (created_at);

-- ── Profil va sozlamalar ─────────────────────────────────────
create table if not exists public.profiles (
  user_id      text primary key references public.users(id) on delete cascade,
  first_name   text,
  last_name    text,
  email        text,
  target_level text,
  goal         text,
  exam_date    date,
  streak       integer not null default 0,
  settings     jsonb not null default '{}'::jsonb,
  updated_at   timestamptz not null default now()
);

-- ── Übung urinishlari (mavzuli mashq) ────────────────────────
create table if not exists public.attempts (
  id            text primary key,
  user_id       text not null references public.users(id) on delete cascade,
  level         text not null,
  skill         text,
  title         text not null,
  started_at    timestamptz,
  finished_at   timestamptz not null,
  duration_sec  integer not null default 0,
  score         integer not null,
  correct_count integer not null,
  total         integer not null,
  answers       jsonb not null default '[]'::jsonb
);
create index if not exists attempts_user_idx
  on public.attempts (user_id, finished_at desc);

-- ── Rasmiy imtihon modullari ─────────────────────────────────
create table if not exists public.exam_attempts (
  id            text primary key,
  user_id       text not null references public.users(id) on delete cascade,
  set_id        text not null,
  format        text not null,
  module_id     text not null,
  title         text not null,
  finished_at   timestamptz not null,
  duration_sec  integer not null default 0,
  raw           numeric not null,
  raw_max       numeric not null,
  weighted      numeric not null,
  weighted_max  numeric not null,
  percent       integer not null,
  self_assessed boolean not null default false
);
create index if not exists exam_attempts_user_idx
  on public.exam_attempts (user_id, finished_at desc);

-- ── Tugallanmagan imtihon (javoblar to'plami) ────────────────
create table if not exists public.exam_runs (
  user_id      text not null references public.users(id) on delete cascade,
  set_id       text not null,
  answers      jsonb not null default '{}'::jsonb,
  done_modules text[] not null default '{}',
  started_at   timestamptz not null default now(),
  finished_at  timestamptz,
  updated_at   timestamptz not null default now(),
  primary key (user_id, set_id)
);

-- ── Fehlerbuch ───────────────────────────────────────────────
create table if not exists public.mistakes (
  user_id          text not null references public.users(id) on delete cascade,
  item_id          text not null,              -- savol yoki imtihon elementi id si
  source           text not null default 'uebung',  -- 'uebung' | 'pruefung'
  set_id           text,
  wrong_count      integer not null default 1,
  last_wrong_at    timestamptz not null default now(),
  mastered         boolean not null default false,
  last_chosen_text text,
  primary key (user_id, item_id)
);
create index if not exists mistakes_open_idx
  on public.mistakes (user_id, mastered, last_wrong_at desc);

-- ── Wortschatz (Leitner qutilari) ────────────────────────────
create table if not exists public.vocab_state (
  user_id          text not null references public.users(id) on delete cascade,
  word_id          text not null,
  box              integer not null default 0,
  last_reviewed_at timestamptz not null default now(),
  correct          integer not null default 0,
  wrong            integer not null default 0,
  primary key (user_id, word_id)
);

-- ── Xavfsizlik: hamma jadvalga RLS, siyosatlarsiz ────────────
-- Natija: anon va authenticated kalitlar hech narsa o'qiy olmaydi.
-- Faqat serverdagi service_role kaliti (RLS'ni chetlab o'tadi) kiradi.
alter table public.users          enable row level security;
alter table public.login_requests enable row level security;
alter table public.profiles       enable row level security;
alter table public.attempts       enable row level security;
alter table public.exam_attempts  enable row level security;
alter table public.exam_runs      enable row level security;
alter table public.mistakes       enable row level security;
alter table public.vocab_state    enable row level security;
