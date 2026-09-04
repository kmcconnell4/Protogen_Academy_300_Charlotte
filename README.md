# 912 Days 🖍️

An interactive data story about the first 2.5 years of a life — told in the small numbers nobody stops to count. Built for **Protogen P302 — Interactive Data Story**.

> **The point of view:** The tiniest, most repetitive moments of raising a toddler — one diaper, one book, one mispronounced word — quietly add up to something staggering. This is 912 days told in the small numbers no one stops to count.

*Uses invented and estimated data. Contains no client- or Slalom-specific information.*

---

## What this is

A scroll-driven ("scrollytelling") narrative in **7 scenes**, with a **bold crayon / hand-drawn aesthetic**. Funny on the surface, quietly moving by the end. The audience is other parents (who'll feel seen) and non-parent friends (the "you have no idea" angle).

Full concept, data, and design direction live in **[BRIEF.md](./BRIEF.md)**. The step-by-step build checklist lives in **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)**.

---

## 🤖 Instructions for the AI (read this first)

You are helping build this project. Follow these rules every session:

1. **Read `BRIEF.md` and `IMPLEMENTATION_PLAN.md` before writing any code.** The brief is the source of truth. Do not add scenes, interactions, or scope that isn't in the brief.
2. **Work top-to-bottom through `IMPLEMENTATION_PLAN.md`.** Complete one phase before starting the next.
3. **Check items off as you finish them.** When a task is genuinely done (built, working, verified), edit `IMPLEMENTATION_PLAN.md` and change its checkbox from `- [ ]` to `- [x]`. Do **not** check a box until the task actually works.
4. **Commit after each completed task or logical group of tasks**, with a descriptive commit message (e.g. `feat: add book-stack scroll animation`, not `update`). The rubric explicitly checks for a commit history that shows real progress over time, not one big push at the end.
5. **Reuse before you build.** Use the single scene-wrapper component and existing styles/tokens for every scene. Do not introduce new patterns, libraries, or components unless the plan calls for it.
6. **Placeholders over perfection.** Leave `[PHOTO PLACEHOLDER]` markers and bracketed stats where noted; the owner fills those in last.
7. **If something is ambiguous, stop and ask** rather than inventing new scope.

---

## Rubric alignment (how this repo satisfies P302)

This project is reviewed on three dimensions — **Does it work? / Is the repo set up right? / Does it look right and show your thinking?** Here's where each requirement is handled:

| Rubric requirement | Where it's addressed |
|---|---|
| Site is live, accessible, password-protected | Deploy step in `IMPLEMENTATION_PLAN.md` (Phase 5) |
| Core flows work end-to-end | All 7 scenes scroll + 3 interactions (Phases 2–3) |
| Build reflects the industry/user in the brief | `BRIEF.md` subject + crayon direction |
| AI scaffolding present and organized | `BRIEF.md`, `README.md`, `IMPLEMENTATION_PLAN.md`, `/context` docs |
| README.md and LICENSE in repo root | This file + `LICENSE` |
| Sensible folder structure | See **Project structure** below |
| Commit history shows real progress | AI instruction #4 (commit per task) |
| Descriptive commit messages | AI instruction #4 |
| BRIEF.md present and matches the build | `BRIEF.md` written as a plan, kept in sync |
| Visual design fits the context | Bold crayon aesthetic (BRIEF §7) |

---

## Project structure

```
/
├── README.md                 ← you are here
├── LICENSE
├── BRIEF.md                  ← concept, data, design direction (source of truth)
├── IMPLEMENTATION_PLAN.md    ← phased build checklist (AI checks items off here)
├── /context                  ← AI scaffolding / working notes
│   └── decisions.md          ← running log of design + build decisions
├── /public
│   └── /photos               ← real photos of "Big Simba" (swapped in last)
└── /src
    ├── /components
    │   ├── Scene.jsx          ← the ONE reusable scene wrapper (reuse everywhere)
    │   └── BigNumber.jsx      ← reusable "big number" reveal
    ├── /scenes                ← the 7 scene contents
    ├── /styles                ← crayon design tokens (colors, type, textures)
    └── /data                  ← invented dataset (from BRIEF §6)
```

---

## The 7 scenes

1. **912 days ago, you were born** — birth stats + Pisces constellation
2. **Diaper City → Potty Trained** 🚽 — *interaction: animated high→zero chart*
3. **The sleep you didn't get** 😴 — ~1,200 hrs lost (the parent twist)
4. **The book stack** 📚 — *interaction: books stack as you scroll*
5. **48 tiny expeditions** 🦒 — zoo & outings tally
6. **The words** 🗣️ — *interaction: "then → now" pronunciation slider*
7. **The closer** 🦁 — everything rolls up to "one kid, 912 days"

---

## Getting started (local dev)

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Live site

The protected production deployment is available at [912 Days on Vercel](https://protogenacademy300charlotte-om3iosn8z-kmcconnell4s-projects.vercel.app).

---

## Tech notes

- Responsive web app (scroll-based). Keep interactions light — the story is the thing, interaction is icing.
- Primary interaction across the whole piece is **scroll progress**; the 3 named interactions are the only accents.
- See `BRIEF.md` §8 for scope guardrails (7 scenes hard cap, 3 interactions, reuse one scene pattern).

---

## License

Released under the MIT License — see [LICENSE](./LICENSE).
