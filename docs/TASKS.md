# ✅ Project Tasks

## Papero — Task Breakdown & Development Plan

This document contains the complete list of tasks for building the Papero application. Tasks are divided into phases with clear deliverables, priorities and status tracking.

---

## 📊 Overview

| 🗂️ **Total Tasks** | ✅ **Completed** | 🔄 **In Progress** |
| :---: | :---: | :---: |
| **36** | **35** | **1** |
| — | ▓▓▓▓▓▓▓▓▓░ 97% | ▓░░░░░░░░░ 3% |

---

## ✅ Phase 1: Project Setup

Set up the development environment, repository and core configuration.

| #   | Task                                        | Priority   | Status          | Notes                                    |
| --- | ------------------------------------------- | ---------- | --------------- | ---------------------------------------- |
| 1.1 | Initialize Next.js project (App Router)     | 🔴 High    | ✅ Completed    | Next.js 16 + TypeScript                  |
| 1.2 | Configure Tailwind CSS with design tokens   | 🔴 High    | ✅ Completed    | Cream/olive/terracotta palette (DESIGN.md) |
| 1.3 | Set up Git repository & push to GitHub      | 🔴 High    | ✅ Completed    | Public repo, `main` branch               |
| 1.4 | Configure ESLint                            | 🟠 Medium  | ✅ Completed    | `eslint-config-next`                     |
| 1.5 | Set up Prisma + Neon PostgreSQL             | 🔴 High    | ✅ Completed    | Schema + migrations committed            |
| 1.6 | Environment configuration (`.env.example`)  | 🟠 Medium  | ✅ Completed    | DB, Redis, NextAuth, Gemini keys         |

## ✅ Phase 2: Authentication & RBAC

Implement user authentication, roles and protected routes.

| #   | Task                                        | Priority   | Status          | Notes                                    |
| --- | ------------------------------------------- | ---------- | --------------- | ---------------------------------------- |
| 2.1 | Configure NextAuth (Credentials + JWT)      | 🔴 High    | ✅ Completed    | Removed PrismaAdapter to fix 401         |
| 2.2 | Create register page + `/api/register`      | 🔴 High    | ✅ Completed    | bcryptjs hashing, Zod validation         |
| 2.3 | Create login page                           | 🔴 High    | ✅ Completed    | Quick-access demo credentials            |
| 2.4 | Implement RBAC (ADMIN/RESEARCHER/VIEWER)    | 🔴 High    | ✅ Completed    | Role-aware sidebars & route guards       |
| 2.5 | Protect dashboard routes                    | 🔴 High    | ✅ Completed    | Session checks in layouts + APIs         |
| 2.6 | Seed script with demo accounts              | 🟠 Medium  | ✅ Completed    | Admin + researcher mock users            |

## ✅ Phase 3: Core Summarization Engine

Build the AI pipeline that turns papers into structured knowledge.

| #   | Task                                        | Priority   | Status          | Notes                                    |
| --- | ------------------------------------------- | ---------- | --------------- | ---------------------------------------- |
| 3.1 | Design Prisma schema (all 6 models)         | 🔴 High    | ✅ Completed    | User, ApiKey, Paper, Summary, Feedback, AuditLog |
| 3.2 | PubMed integration (NCBI E-utilities)       | 🔴 High    | ✅ Completed    | Fetch abstract & metadata by PMID        |
| 3.3 | PDF parsing with `pdf2json`                 | 🔴 High    | ✅ Completed    | `/api/parse-pdf` full-text extraction    |
| 3.4 | Gemini summarization → structured JSON      | 🔴 High    | ✅ Completed    | Findings, methodology, conclusions, limitations |
| 3.5 | Redis caching layer (Upstash)               | 🔴 High    | ✅ Completed    | Cache-first reads for repeat papers      |
| 3.6 | Feedback-aware prompting (smart loop)       | 🟠 Medium  | ✅ Completed    | Past feedback injected into prompts      |

## ✅ Phase 4: Researcher Dashboard

Build the researcher-facing UI for summarization and library.

| #   | Task                                        | Priority   | Status          | Notes                                    |
| --- | ------------------------------------------- | ---------- | --------------- | ---------------------------------------- |
| 4.1 | Dashboard layout + role sidebars            | 🔴 High    | ✅ Completed    | PaperoLoader for loading states          |
| 4.2 | Summarize page (PubMed ID / PDF tabs)       | 🔴 High    | ✅ Completed    | Wave decorations, step guidance          |
| 4.3 | Summaries library (research history)        | 🔴 High    | ✅ Completed    | Structured sections per summary          |
| 4.4 | API keys management page                    | 🔴 High    | ✅ Completed    | Create, view usage, revoke keys          |
| 4.5 | Feedback page (rate summaries)              | 🟠 Medium  | ✅ Completed    | Accuracy / coherence / overall ratings   |
| 4.6 | Dashboard stats endpoint + overview         | 🟠 Medium  | ✅ Completed    | `/api/dashboard/stats`                   |

## ✅ Phase 5: Admin Panel

Give admins control over users, keys and platform health.

| #   | Task                                        | Priority   | Status          | Notes                                    |
| --- | ------------------------------------------- | ---------- | --------------- | ---------------------------------------- |
| 5.1 | Admin layout + ADMIN-only guard             | 🔴 High    | ✅ Completed    | Dedicated AdminSidebar                   |
| 5.2 | User management (list, edit, deactivate)    | 🔴 High    | ✅ Completed    | `/api/admin/users`, password reset       |
| 5.3 | API keys administration                     | 🔴 High    | ✅ Completed    | `/api/admin/keys` — approve/revoke       |
| 5.4 | Analytics dashboard (usage + feedback)      | 🟠 Medium  | ✅ Completed    | `/api/admin/analytics`                   |
| 5.5 | All-summaries view + audit logs             | 🟠 Medium  | ✅ Completed    | Hydration fix: Math.random() client-side |
| 5.6 | Admin settings page                         | 🟠 Medium  | ✅ Completed    | Platform configuration                   |

## 🔄 Phase 6: Polish & Deployment

Doodle illustration system, docs, testing and production deployment.

| #   | Task                                        | Priority   | Status          | Notes                                    |
| --- | ------------------------------------------- | ---------- | --------------- | ---------------------------------------- |
| 6.1 | Doodle illustration system (30+ SVGs)       | 🟠 Medium  | ✅ Completed    | Molecules, flasks, clipboards, scientists |
| 6.2 | Landing page (hero, how-it-works, output)   | 🔴 High    | ✅ Completed    | "30-page papers → 30-second insights"    |
| 6.3 | In-app docs page                            | 🟠 Medium  | ✅ Completed    | API documentation for researchers        |
| 6.4 | Postman collection for all routes           | 🟢 Low     | ✅ Completed    | `/postman` — test every endpoint         |
| 6.5 | Vercel deployment (`vercel-build`)          | 🔴 High    | ✅ Completed    | `prisma generate && npm run build`       |
| 6.6 | Automated tests (unit + API)                | 🟠 Medium  | 🔄 In Progress  | Started — unit tests for lib & API routes |

---

## 📌 Status Legend

| Icon | Meaning     |
| ---- | ----------- |
| ✅   | Completed   |
| 🔄   | In Progress |
| 🔲   | Not Started |
