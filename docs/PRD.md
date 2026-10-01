# 📋 Product Requirements Document (PRD)

## Papero (DistillAI) — Your AI Research Companion

|                |                        |
| -------------- | ---------------------- |
| **Version:**   | 1.0                    |
| **Date:**      | Oct 1, 2026            |
| **Author:**    | Team Papero            |
| **Status:**    | Draft                  |
| **Target Launch:** | MVP (v1.0)         |

---

## 1. Product Overview

Papero is a scalable, AI-powered web platform and REST API designed for pharmaceutical researchers. It automates the extraction and summarization of complex scientific literature — transforming lengthy academic papers into concise, structured knowledge. Researchers send a **PubMed ID** or upload a **PDF**, and receive a structured JSON summary covering key findings, methodology, conclusions, limitations, and future directions — drastically reducing manual review time and accelerating drug discovery.

---

## 2. Problem Statement

Researchers in the pharmaceutical industry spend significant time manually summarizing scientific papers to identify relevant studies for drug discovery. This process is:

- ⏱️ **Time-consuming** — a single paper can take hours to review.
- ⚖️ **Prone to bias** — manual summaries vary by reader.
- 🧩 **Fragmented** — existing tools lack the sophistication to handle complex scientific language and don't integrate into research workflows.

There is no simple, centralized, API-first solution for structured paper intelligence.

---

## 3. Goals

- Provide a **simple, reliable REST API** that summarizes scientific publications.
- Return **structured, typed JSON** — key findings, methodology, conclusions, limitations, future directions.
- Deliver a **clean, distraction-free dashboard** for submitting papers and browsing the research library.
- Ensure **scalability** under high load using caching (Redis) and serverless architecture.
- Continuously **learn from user feedback** to improve summary quality.

---

## 4. Target Users

- 💊 **Pharmaceutical researchers** (R&D, drug discovery teams)
- 🔬 **Biotech & life-science analysts** reviewing literature
- 🎓 **Academic & clinical researchers** in medicine/pharmacy
- 🏢 **Research organizations** needing API access at team scale
- 🧑‍💻 **Developers** integrating paper intelligence into pipelines

**User persona notes:** Tech-savvy, works on laptops daily, values speed and structure over decoration, needs trusted summaries with traceable sources.

---

## 5. Core Features (MVP)

1. **User Authentication** — Sign up / Login with email + password.
2. **Role-Based Access Control (RBAC)** — `ADMIN`, `RESEARCHER`, `VIEWER` roles with different access levels.
3. **Paper Summarization** — Submit a **PubMed ID** or upload a **PDF**; the AI returns a structured summary.
4. **Research Library** — Browse, search, and revisit all past summaries with full metadata.
5. **Feedback Loop** — Rate summaries (accuracy / coherence / overall); past feedback improves future prompts.
6. **API Key Management** — Generate, track usage, and respect per-user call limits (`apiCallsLimit`).
7. **Admin Panel** — Manage users & API keys, view analytics, audit logs, and platform settings.
8. **Caching Layer** — Redis-backed caching for fast repeated lookups under load.

---

## 6. User Stories

| #   | As a…      | I want to…                                              | So that…                                     |
| --- | ---------- | ------------------------------------------------------- | -------------------------------------------- |
| 1   | Researcher | submit a PubMed ID and get a summary in seconds         | I can screen papers faster                   |
| 2   | Researcher | upload a PDF of any paper                               | I'm not limited to PubMed-indexed papers     |
| 3   | Researcher | see key findings, methodology & conclusions separately  | I can jump to the section I care about       |
| 4   | Researcher | rate a summary's accuracy                               | the system learns my quality bar             |
| 5   | Researcher | track my API usage against my limit                     | I never silently run out of calls            |
| 6   | Viewer     | read summaries without submitting papers                | I can stay informed without write access     |
| 7   | Admin      | approve/revoke API keys and manage users                | I can control platform access centrally      |
| 8   | Admin      | see usage analytics and audit logs                      | I understand platform health and abuse       |

---

## 7. Success Metrics

- ✅ **Summary accuracy** — consistently structured JSON (findings / methodology / conclusions) via Gemini.
- ✅ **Speed** — cached lookups served in milliseconds; new summaries dominated by AI latency only.
- ✅ **Scalability** — support 100+ concurrent requests with Redis caching.
- ✅ **Adoption** — researchers return weekly; feedback ratings ≥ 4/5 average.
- ✅ **Reliability** — graceful failure states (FAILED summaries surface actionable errors).

---

## 8. Out of Scope (v1.0)

- ❌ Team workspaces & multi-tenant organizations
- ❌ Payment / subscription billing
- ❌ Mobile native apps
- ❌ Non-English paper support
- ❌ Citation graph / reference-network analysis

---

## 9. Future Enhancements

- 🔮 Batch summarization (upload a list of PMIDs)
- 🔮 Export to BibTeX / reference managers
- 🔮 Comparison view across multiple papers
- 🔮 Webhooks for pipeline integrations
- 🔮 Custom summary templates per research team
