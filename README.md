# NutriTrack

A personal calorie and nutrition tracking web application. Track calories, protein, carbohydrates, fats, body weight, and estimated maintenance calories.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** + **Lucide icons**
- **Supabase** (PostgreSQL + Auth)
- React Hook Form + Zod, Recharts, TanStack Query

## Getting Started

```bash
pnpm install
# copy .env.example to .env.local and fill in Supabase + FatSecret credentials
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm lint      # eslint
pnpm typecheck # TypeScript (tsc --noEmit)
pnpm test      # run tests
```

## Design

Clean, minimal, compact, typography-focused. Server Components by default; client components only where interactivity is required.

See `IMPLEMENTATION_PLAN.md` for the roadmap.