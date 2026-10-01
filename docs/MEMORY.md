# 🧠 Project Memory

## Papero — Context, Progress & Important Notes

This document keeps track of the current state of the project, important decisions, and things to remember. It helps maintain continuity across development sessions and for new contributors (human or AI).

---

## ℹ️ Project Snapshot

| 📅 **Last Updated** | 👤 **Current Phase** | 📈 **Overall Progress** |
| :---: | :---: | :---: |
| **Oct 1, 2026** | **Phase 6** | **97%** |
| 10:30 AM | Polish & Deployment | 35 / 36 tasks done |

**Project:** Papero (DistillAI) — AI-powered REST API that summarizes scientific papers (PubMed ID / PDF) into structured knowledge for pharmaceutical researchers.
**Stack:** Next.js 16 · TypeScript · Tailwind · Prisma + Neon PostgreSQL · Redis (Upstash) · NextAuth · Gemini AI · Vercel.

---

## 🎯 Current Status

- ✅ Project setup completed (Next.js, TypeScript, Tailwind, ESLint)
- ✅ Git repository initialized and pushed to GitHub
- ✅ Neon PostgreSQL project created and configured (Prisma + migrations)
- ✅ Authentication (signup, login, protected routes) completed
- ✅ RBAC (ADMIN / RESEARCHER / VIEWER) completed
- ✅ Core summarization engine completed (PubMed, PDF, Gemini, Redis cache)
- ✅ Researcher dashboard completed (summarize, library, API keys, feedback)
- ✅ Admin panel completed (users, keys, analytics, audit logs, settings)
- ✅ Deployed to Vercel (production build passing)
- 🔄 Working on automated tests (unit + API in progress)

---

## ✅ Completed Tasks

| #   | Task                                         | Completed On |
| --- | -------------------------------------------- | ------------ |
| 1.1 | Initialize Next.js project                   | Mar 13, 2026 |
| 1.2 | Configure Tailwind CSS + design tokens       | Mar 13, 2026 |
| 1.5 | Set up Prisma + Neon PostgreSQL              | Mar 13, 2026 |
| 2.1 | Configure NextAuth (credentials + JWT)       | Mar 13, 2026 |
| 2.2 | Implement signup / register                  | Mar 13, 2026 |
| 2.3 | Implement login page                         | Mar 13, 2026 |
| 2.4 | Protect dashboard routes + RBAC              | Mar 13, 2026 |
| 3.1 | Design Prisma schema (6 models)              | Mar 13, 2026 |
| 3.4 | Gemini summarization → structured JSON       | Mar 13, 2026 |
| 4.x | Researcher dashboard (all pages)             | Mar 13, 2026 |
| 5.x | Admin panel (all pages + APIs)               | Mar 13, 2026 |
| 6.5 | Vercel deployment                            | Sep 24, 2026 |
| 6.4 | Postman collection for all routes            | Sep 25, 2026 |

> ℹ️ Most feature work (phases 1–5) landed in the initial Mar 13, 2026 development sprint; Sep 2026 focused on fixes, deployment and API testing docs.

---

## 🔄 In Progress

| #   | Task                              | Started On   | Notes                                  |
| --- | --------------------------------- | ------------ | -------------------------------------- |
| 6.6 | Automated tests (unit + API)      | Sep 25, 2026 | Unit tests for `lib/` and API routes   |

---

## 📝 Important Notes & Gotchas

1. **NextAuth + PrismaAdapter → 401:** The credentials flow breaks with the Prisma adapter in this setup — it was removed intentionally (`0ebc112`). JWT sessions are the source of truth. **Do not re-add the adapter.**
2. **Hydration errors:** Never call `Math.random()` during server render — admin summaries page was fixed by moving it client-side (`6edc763`).
3. **SVG gotcha:** Every non-path SVG child (e.g. `<circle>`) must be wrapped properly inside `<svg>` or React throws hydration/element errors (`ebc1f41`, `41073a7`).
4. **Demo accounts:** The Prisma seed creates mock admin & researcher accounts for quick login (buttons on the login page).
5. **Postman first:** All API changes must be verified through the `/postman` collection before merge.
6. **Env vars required:** `DATABASE_URL`, `REDIS_URL`, `NEXTAUTH_SECRET`, `GEMINI_API_KEY` (see `.env.example`). Never commit real values.
7. **Dev server runs on port 3001** (`next dev -p 3001`), not the default 3000.
8. **Docs page exists in-app** (`/docs`) — keep it consistent with this documentation set.

---

## 🧭 Next Steps (Roadmap)

- Finish automated tests (task 6.6) and wire them into the build
- Add rate limiting on public-facing endpoints
- Explore batch summarization (list of PMIDs) — see PRD "Future Enhancements"

---

## 🔗 Key Resources

| Resource              | Location                        |
| --------------------- | ------------------------------- |
| Product requirements  | [docs/PRD.md](PRD.md)           |
| System architecture   | [docs/ARCHITECTURE.md](ARCHITECTURE.md) |
| Development rules     | [docs/RULES.md](RULES.md)       |
| Design system         | [docs/DESIGN.md](DESIGN.md)     |
| Task breakdown        | [docs/TASKS.md](TASKS.md)       |
| Postman collection    | `/postman`                      |
| Database schema       | `prisma/schema.prisma`          |
