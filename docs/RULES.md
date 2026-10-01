# 📄 Development Rules

## Papero — Project Guidelines for AI & Human Collaboration

This document defines the development rules, coding standards, and best practices for the Papero application. These rules ensure consistency, maintainability, security, and quality. **Both AI assistants and human contributors must follow these guidelines.**

---

## 1️⃣ General Principles

These rules apply to the entire project.

- ✅ Follow the project documentation (PRD, ARCHITECTURE, DESIGN) before writing any code.
- ✅ Keep the code clean, readable and well-structured.
- ✅ Prioritize simplicity and maintainability.
- ✅ Do not duplicate logic. Reuse existing components, utilities or services.
- ✅ Make small, focused changes instead of large, risky edits.
- ✅ Do not modify unrelated files.
- ✅ Write self-explanatory code with meaningful variable and function names.

---

## 2️⃣ Technology & Coding Standards

Rules related to the tech stack and coding style.

| Rule             | Standard                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------- |
| 🔤 **Language**      | Use TypeScript. Avoid `any` unless absolutely necessary.                                     |
| ⚙️ **Framework**     | Follow Next.js best practices (App Router; server components by default, `"use client"` only when needed). |
| 🎨 **Styling**       | Use Tailwind CSS and follow the design tokens defined in DESIGN.md — no arbitrary hex values. |
| ✅ **Linting**       | Follow ESLint (`next lint`) — the project must lint clean before merge.                       |
| 💅 **Formatting**    | Consistent formatting and imports; keep diffs small and reviewable.                           |
| 📦 **Dependencies**  | Use stable, well-maintained packages. Check `package.json` before adding anything new.        |
| 📁 **File Naming**   | PascalCase for components (`DoodleButton.tsx`), kebab-case for utilities/routes, clear & descriptive names. |
| 🧩 **Validation**    | Validate all external input with **Zod** schemas before touching the database.               |

---

## 3️⃣ Project Structure

Follow the defined folder structure in ARCHITECTURE.md to keep the codebase organized.

- ✅ Place reusable UI components in `/src/components` (design-system pieces in `/src/components/ui`).
- ✅ Keep hand-drawn SVGs in `/src/components/illustrations` — never inline large SVGs in pages.
- ✅ API logic belongs in `/src/app/api/**/route.ts` route handlers only.
- ✅ Database & external service clients stay in `/src/lib` (`prisma.ts`, `redis.ts`, `fetchWithAuth.ts`).
- ✅ Define types near usage; promote to a shared file only when reused across features.
- ✅ Schema changes go through Prisma migrations — never edit the generated client.
- ✅ Do not create new folders without a clear purpose aligned with the structure.

---

## 4️⃣ Git & Workflow Rules

- ✅ One branch per feature/fix; small, focused commits with imperative messages.
- ✅ Never commit `.env`, `.env.local`, or any secrets.
- ✅ Test API changes with the Postman collection (`/postman`) before pushing.
- ✅ Run `npm run lint` and `npm run build` before opening a PR.
- ✅ Update TASKS.md and MEMORY.md status after completing a milestone.

---

## 5️⃣ Security & API Rules

- ✅ Hash passwords with **bcryptjs** — plain-text passwords must never exist or be logged.
- ✅ Enforce RBAC (`ADMIN` / `RESEARCHER` / `VIEWER`) on every protected API route — never trust the client.
- ✅ Respect `apiCallsLimit` / API key tiers; reject calls over quota with a clear 4xx response.
- ✅ Write an `AuditLog` entry for sensitive actions (user management, key changes, admin operations).
- ✅ Never expose `GEMINI_API_KEY`, database URLs, or Redis credentials to the client bundle.
- ✅ Sanitize and rate-check user-provided PMIDs, DOIs and uploaded PDFs before processing.

---

## 6️⃣ Documentation Rules

- ✅ Update `docs/PRD.md` when scope or features change.
- ✅ Keep `docs/ARCHITECTURE.md` in sync with the actual folder structure and stack.
- ✅ Mark task status in `docs/TASKS.md` in real time (✅ / 🔄 / 🔲).
- ✅ Record important decisions, gotchas and fixes in `docs/MEMORY.md` so any developer or AI can pick up context instantly.
