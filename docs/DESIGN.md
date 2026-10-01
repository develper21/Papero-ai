# 🎨 Design System

## Papero — Hand-Drawn. Warm. Scientific.

This document defines the visual design system, UI components, and user experience rules for Papero. The goal is a **Mid-Century Modern doodle aesthetic** — a warm, hand-drawn lab notebook feel that stays clean, minimal, and researcher-friendly with a consistent visual language.

---

## 1. Design Principles

|                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🧑‍🔬 **Researcher-First**<br><br>Simple and intuitive for busy scientists. Structure and clarity beat decoration — every screen answers "what do I do next?"                                                                                                                          |
| ✏️ **Hand-Crafted Warmth**<br><br>Hand-drawn doodles, notebook textures and wavy dividers reduce the sterility of research tooling without adding clutter.                                                                                                                            |
| 🧱 **Consistent**<br><br>Follow a unified design system. One palette, two fonts, shared Doodle components — no one-off styles.                                                                                                                                                 |

---

## 2. Color Palette

Primary colors used across the application (defined in `tailwind.config.ts`):

| Swatch | Token          | Hex       | Usage                                        |
| ------ | -------------- | --------- | -------------------------------------------- |
| 🟨     | **Cream**      | `#F5F0E8` | Page background (the "paper" of the app)     |
| ⬜     | **Paper**      | `#EDE8DC` | Cards, notepads, surfaces                    |
| ⬛     | **Ink**        | `#1A1A2E` | Headings & primary text                      |
| ⬛     | **Charcoal**   | `#2C2C2C` | Body text, outlines, wavy dividers           |
| 🫒     | **Olive**      | `#6B7C3A` | Main brand color — links, JSON keys, accents |
| 🟧     | **Terracotta** | `#C4622D` | CTAs, step numbers, emphasis, key highlights |
| 🟡     | **Mustard**    | `#E8B84B` | Stars, badges, small highlights              |
| 🟩     | **Sage**       | `#8FAF72` | Success states, positive annotations         |

**Semantic mapping:** success → `sage`, warning/highlight → `mustard`, destructive → `terracotta` (deep) or `charcoal`, disabled → `charcoal/30`.

> ⚠️ Use opacity variants (`charcoal/60`, `olive/[0.04]`) for hierarchy instead of introducing new greys.

---

## 3. Typography

We use **Caveat** for display and **DM Sans** for UI — a handwritten headline over a clean, highly readable body.

| Specimen | Font       | Role                    | Usage                                                              |
| -------- | ---------- | ----------------------- | ------------------------------------------------------------------ |
| **Aa** ✍️ | **Caveat** | Display / Handwriting   | Hero headline (48–80px), section titles, step numbers, annotations |
| **Aa**   | **DM Sans** | Primary UI / Body       | Body text (14–18px), buttons, labels, tables, inputs               |

- Headings are always `font-caveat`; body & UI are always `font-sans` (DM Sans).
- Landing hero: `text-5xl → lg:text-[80px]`, `leading-[1.1]`, `text-balance`.
- Never use Caveat for long paragraphs or data — readability first.

---

## 4. UI Components

Standard components to be used throughout the app (see `/src/components/ui`):

| Component        | Variants / Notes                                                                 |
| ---------------- | -------------------------------------------------------------------------------- |
| **DoodleButton** | `primary` (olive/terracotta fill), `ghost` (outline), destructive states         |
| **DoodleCard**   | Hand-drawn border card on `paper` background with slight rotation for note effect |
| **DoodleInput**  | Sketch-style input with charcoal outline focus ring                              |
| **DoodleTag**    | Small pill/badge for metadata, tags & statuses                                   |
| **PaperoLoader** | Branded loading state for pages & async actions                                  |
| **EmptyState**   | Doodle illustration + friendly message for empty lists                           |
| **ErrorBoundary**| Graceful crash states with doodle treatment                                      |
| **Navbar / Footer** | Global navigation with wavy divider between sections                          |
| **Sidebars**     | `RoleSidebar`, `ResearcherSidebar`, `AdminSidebar` — role-aware dashboard nav    |

### Button usage

| Variant       | When to use                                  |
| ------------- | -------------------------------------------- |
| Primary       | One per view — the main action (e.g. "Try the API →") |
| Ghost         | Secondary actions (e.g. "Login")             |
| Destructive   | Irreversible actions (delete key, remove user) |

---

## 5. Illustration & Iconography

- ✏️ All illustrations are **stroke-based hand-drawn SVGs** in `/src/components/illustrations` (molecules, flasks, clipboards, scientists, keys…).
- 🫥 Background doodles are decorative only: low opacity (`0.04–0.08`), `pointer-events-none`, `aria-hidden`.
- ➰ Use **wavy SVG dividers** between landing sections; dashed curved arrows connect steps.
- 🚫 No stock photos, no filled corporate icons, no drop shadows heavier than `shadow-sm`.

---

## 6. Layout & Spacing

| Token            | Value                                             |
| ---------------- | ------------------------------------------------- |
| Page container   | `max-w-7xl mx-auto px-6`                          |
| Section padding  | `py-20 md:py-28`                                  |
| Hero padding     | `pt-16 pb-24 md:pt-24 md:pb-32`                   |
| Card gaps        | `gap-8` (grids), `gap-4` (inline)                 |
| Borders          | `border-charcoal/[0.06]`, `rounded-lg`            |
| Notepad texture  | `repeating-linear-gradient` lines + red margin line |

---

## 7. Motion

- Subtle `page-transition` fade on route entry — no flashy animations.
- Hover states: gentle color/opacity shifts on buttons & cards.
- Decorative elements stay static; motion is reserved for feedback.

---

## 8. Do's & Don'ts

| ✅ Do                                              | ❌ Don't                                       |
| -------------------------------------------------- | --------------------------------------------- |
| Use design tokens (`text-ink`, `bg-cream`)          | Hard-code hex values in components            |
| Keep one primary CTA per view                       | Stack multiple filled buttons                 |
| Use opacity for hierarchy                           | Invent new grey colors                        |
| Add doodles as background flavor                    | Let doodles block clicks or reading           |
| Write body copy in DM Sans                          | Set paragraphs in Caveat                      |
