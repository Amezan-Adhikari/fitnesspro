# NutriTrack — Implementation Plan

Personal calorie and nutrition tracking app. Next.js + Supabase.

## Milestones

- [x] **Milestone 1 — Project setup and design system**
- [ ] **Milestone 2 — Supabase setup and authentication**
- [ ] **Milestone 3 — Database schema + RLS**
- [ ] **Milestone 4 — Profile + TDEE calculator**
- [ ] **Milestone 5 — Daily log and calorie/macro calculations**
- [ ] **Milestone 6 — Food API integration**
- [ ] **Milestone 7 — Food search + Add Food flow**
- [ ] **Milestone 8 — History**
- [ ] **Milestone 9 — Daily weigh-ins**
- [ ] **Milestone 10 — Analytics**
- [ ] **Milestone 11 — Responsive/mobile polish**
- [ ] **Milestone 12 — Performance, accessibility and final cleanup**

---

## Milestone 1 — Project setup and design system

- [x] Create Next.js TypeScript application (App Router, Tailwind CSS v4)
- [x] Initialize shadcn/ui (new-york style, neutral base, OKLCH tokens)
- [x] Install Lucide icons, next-themes, clsx, tailwind-merge
- [x] Set up dark/light/system theme support
- [x] Fix the `--font-sans` self-reference in globals.css
- [x] Fix react-hooks set-state-in-effect lint error in `hooks/use-mobile.ts`
- [x] Application layout shell (SidebarProvider + SidebarInset)
- [x] Desktop sidebar navigation (collapsible, icons + labels)
- [x] Mobile bottom navigation (4 primary sections)
- [x] Placeholder pages: Today, History, Analytics, Profile
- [x] Root route redirects to `/today`
- [x] Design tokens via Tailwind v4 `@theme inline` in `globals.css`
- [x] Update README with project details and commands
- [x] Add `typecheck` and `test` npm scripts
- [x] Implement a check/do loop: typecheck → lint → build

### Files created (Milestone 1)

| File | Purpose |
| --- | --- |
| `app/layout.tsx` | Root layout with theme provider, sidebar, bottom nav |
| `app/page.tsx` | Redirects to `/today` |
| `app/today/page.tsx` | Today placeholder |
| `app/history/page.tsx` | History placeholder |
| `app/analytics/page.tsx` | Analytics placeholder |
| `app/profile/page.tsx` | Profile placeholder |
| `app/globals.css` | Tailwind v4 theme, OKLCH design tokens |
| `components/ui/*` | shadcn/ui primitives (button, sidebar, sheet, dialog, etc.) |
| `components/layout/app-sidebar.tsx` | Desktop sidebar nav + theme toggle |
| `components/layout/bottom-nav.tsx` | Mobile bottom nav |
| `components/layout/page-placeholder.tsx` | Shared placeholder scaffold |
| `components/theme-provider.tsx` | next-themes provider wrapper |
| `hooks/use-mobile.ts` | Mobile breakpoint hook (lint-clean) |
| `lib/utils.ts` | `cn()` helper |
| `IMPLEMENTATION_PLAN.md` | This document |

### Dependencies installed

- Runtime: `next`, `react`, `react-dom`, `lucide-react`, `next-themes`, `class-variance-authority`, `clsx`, `tailwind-merge`, `cn`, `tw-animate-css`, `@base-ui/react`, `shadcn`
- Dev: `typescript`, `tailwindcss`, `@tailwindcss/postcss`, `eslint`, `eslint-config-next`, `@types/*`

### Commands to run

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
pnpm build        # production build
```

### Complete (Milestone 1)

- Full App Router shell with persistent desktop sidebar and mobile bottom nav
- shadcn/ui design system wired into Tailwind v4 theme tokens
- Dark/light/system theme toggle
- Four primary sections routed and navigable
- TypeScript, ESLint, production build all passing

### Remains for Milestone 2

- Supabase project setup and client/server libraries
- Supabase Auth (sign up, sign in, sign out, session handling)
- Auth guard + redirect logic for unauthenticated users
- Auth-aware navigation (avatar, sign out)
- `.env.example` for Supabase variables
- Smoketest the full auth flow

---

## Milestone 2 — Supabase setup and authentication

- [ ] Install `@supabase/supabase-js` and `@supabase/ssr`
- [ ] Create `lib/supabase/client.ts` (browser client)
- [ ] Create `lib/supabase/server.ts` (server/RSC client)
- [ ] Create `lib/supabase/middleware.ts` (session refresh)
- [ ] Wire `middleware.ts` for route protection
- [ ] Sign up / sign in / sign out flows (email + password)
- [ ] Password reset
- [ ] Auth pages (`/login`, `/signup`)
- [ ] Auth guard — redirect unauthenticated users to `/login`
- [ ] Show authenticated user in Profile nav
- [ ] `.env.example` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Typecheck, lint, and run the app to verify flows

## Milestone 3 — Database schema + RLS

- [ ] SQL migration: `profiles`, `daily_logs`, `food_entries`, `weight_entries`, `saved_foods`
- [ ] Enum / lookup types (activity levels, goals, units)
- [ ] Indexes on user_id + date columns
- [ ] Unique constraints (weight per user/date, daily_log per user/date)
- [ ] Row Level Security enabled on all tables
- [ ] RLS policies: select/insert/update/delete own records only
- [ ] Document all RLS policies in `supabase/README.md` or SQL comments
- [ ] Seed script for development data

## Milestone 4 — Profile + TDEE calculator

- [ ] `lib/tdee/` functions: `calculateBMR()` (Mifflin-St Jeor), `calculateTDEE()`, `calculateTargetCalories()`
- [ ] Activity level multipliers (Sedentary → Extra Active)
- [ ] Profile form with React Hook Form + Zod
- [ ] Fields: name, sex, DOB, height, weight, activity, goal, deficit, macro targets, units
- [ ] Save profile via server action
- [ ] Profile view with TDEE summary (BMR, maintenance, target)
- [ ] Unit handling (kg/lb, cm/ft)
- [ ] Calculations tested

## Milestone 5 — Daily log and calorie/macro calculations

- [ ] `lib/nutrition/` functions: `calculateMacroPercent()`, `calculateRemainingMacros()`, `calculateDailyTotals()`, `calculateEstimatedDeficit()`
- [ ] Daily log creation (snapshot profile targets into `daily_logs`)
- [ ] Today page: date navigation (prev/next/today)
- [ ] Daily calorie summary (maintenance, deficit, limit, consumed, remaining)
- [ ] Macro tracking bars with under/near/at/over states
- [ ] Food log table with totals row
- [ ] Add/Edit/Delete/Duplicate food entries
- [ ] Quick Add Calories (manual entry)
- [ ] "Use profile TDEE" vs override per-day TDEE/target
- [ ] Calculations tested

## Milestone 6 — Food API integration

- [ ] `lib/food-api/` abstraction: `FoodProvider` interface
- [ ] `searchFoods()`, `getFood()`, `getServings()`
- [ ] `FatSecretFoodProvider` implementation
- [ ] Server-side OAuth 2.0 token handling (`FATSECRET_CLIENT_ID`, `FATSECRET_CLIENT_SECRET`)
- [ ] Server-side API routes `api/food/search`, `api/food/[id]`
- [ ] Response validation (Zod)
- [ ] Cache common searches to reduce API calls
- [ ] Errors handled gracefully (never expose secrets)

## Milestone 7 — Food search + Add Food flow

- [ ] Debounced search input (no per-keystroke API calls)
- [ ] Loading, empty, and error states
- [ ] Generic vs branded food display
- [ ] Serving selection + custom quantity in grams
- [ ] Live nutrition preview (quantity × per-100g)
- [ ] Add to today's log with snapshot values
- [ ] "Quick add" frequently used foods (from `saved_foods`)
- [ ] Enter key submits search

## Milestone 8 — History

- [ ] History list of past days with summaries
- [ ] Click a day to open its full food log
- [ ] Calendar/date picker navigation
- [ ] Recent days section
- [ ] Scan-friendly daily summary (cals, macros, weight, deficit)

## Milestone 9 — Daily weigh-ins

- [ ] Verify `weight_entries` upsert behavior (one per user/date)
- [ ] Weigh-in UI on Today + History
- [ ] Store weight + unit per entry

## Milestone 10 — Analytics

- [ ] Selectable ranges (7d, 14d, 30d, 90d, 6m, 1y, all)
- [ ] Summary stats: avg calories, protein, carbs, fat, weight, deficit, weight change
- [ ] Weight line chart
- [ ] Calories chart (consumed vs maintenance vs target)
- [ ] Macros chart (protein/carbs/fat)
- [ ] Calorie deficit over time chart
- [ ] Macro averages
- [ ] Empty states ("Keep tracking to see your trends")

## Milestone 11 — Responsive/mobile polish

- [ ] Today screen mobile priority ordering (calories → macros → add food → food list)
- [ ] Analytics charts resize/scroll on mobile
- [ ] Tables don't break mobile layout
- [ ] Dialog/sheet usability on mobile
- [ ] Final visual QA pass

## Milestone 12 — Performance, accessibility and final cleanup

- [ ] Skeleton loaders everywhere data loads
- [ ] Optimistic updates where safe
- [ ] Accessible buttons/inputs, keyboard navigation
- [ ] Review bundle size, lazy-load client components
- [ ] Final typecheck, lint, tests, build