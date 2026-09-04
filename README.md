# 912 Days ✨

An interactive data story about the first 2.5 years of a life — told in the small numbers nobody stops to count. Built for **Protogen P302 — Interactive Data Story**.

> **The point of view:** The tiniest, most repetitive moments of raising a toddler — one diaper, one book, one mispronounced word — quietly add up to something staggering. This is 912 days told in the small numbers no one stops to count.

*Uses invented and estimated data. Contains no client- or Slalom-specific information.*

---

## What this is

A scroll-driven ("scrollytelling") narrative in **5 scenes** (plus a bonus modal Easter egg), with a **flat, bold & cartoony aesthetic**. Funny on the surface, quietly moving by the end. The audience is other parents (who'll feel seen) and non-parent friends (the "you have no idea" angle).

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
| Core flows work end-to-end | All 5 scenes scroll + 2 interactions + the star-chart modal (Phases 2–3, Phase 6) |
| Build reflects the industry/user in the brief | `BRIEF.md` subject + flat/cartoony direction |
| AI scaffolding present and organized | `BRIEF.md`, `README.md`, `IMPLEMENTATION_PLAN.md`, `/context` docs |
| README.md and LICENSE in repo root | This file + `LICENSE` |
| Sensible folder structure | See **Project structure** below |
| Commit history shows real progress | AI instruction #4 (commit per task) |
| Descriptive commit messages | AI instruction #4 |
| BRIEF.md present and matches the build | `BRIEF.md` written as a plan, kept in sync |
| Visual design fits the context | Flat/cartoony aesthetic (BRIEF §7) |

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
│   └── /photos               ← real photos of Charlotte / "Big Simba" (swapped in last)
└── /src
    ├── /components
    │   ├── Scene.jsx          ← the ONE reusable scene wrapper (reuse everywhere)
    │   ├── BigNumber.jsx      ← reusable "big number" / inline stat-line reveal
    │   ├── Card.jsx           ← flat card primitive (pills, quotes, recap card, mentions)
    │   ├── Polaroid.jsx       ← flat-shadow Polaroid photo placeholder
    │   ├── BarChart.jsx       ← diaper-scene bar chart
    │   ├── RankedBarList.jsx  ← books-scene ranked bar list
    │   ├── TallyTable.jsx     ← outings-scene animal tally
    │   ├── SiteHeader.jsx     ← persistent sticky header
    │   ├── Modal.jsx          ← accessible modal shell (focus trap, Escape, restore)
    │   ├── StarChartModal.jsx ← the star-chart Easter egg
    │   └── PlacementCard.jsx  ← one Sun/Rising/Moon card inside the star-chart modal
    ├── /scenes                ← the 5 scroll-scene contents
    ├── /styles                ← design tokens (colors, type, flat-shadow/card system)
    └── /data                  ← invented dataset (from BRIEF §6)
```

---

## The 5 scenes (+ 1 modal Easter egg)

1. **912 days ago, you were born** — title slide: headline, birth stats pill (with the Pisces Easter-egg trigger), big number, Polaroid photo
2. **Diaper City → Potty Trained** 🚽 — *interaction: bar chart tapering to zero*
3. **The book stack** 📚 — *interaction: ranked bars fill in as you scroll*
4. **48 tiny expeditions** 🦒 — Big Cat Falls + feeding the giraffes + animal tally (lions, giraffes, penguins)
5. **The closer** 🦁 — recap card rolling up to "912 days of wonder"
6. **✨ Easter egg:** Written in the Stars — click the Pisces icon on scene 1 for a modal star chart (Sun/Rising/Moon)

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

- Responsive web app (scroll-based, with CSS scroll-snapping so each scene locks into focus). Keep interactions light — the story is the thing, interaction is icing.
- Primary interaction across the whole piece is **scroll progress**; the 2 named interactions are the only accents.
- The star-chart modal is fully keyboard-accessible: `role="dialog"` + `aria-modal`, a focus trap while open, Escape/click-outside to close, and focus restored to the trigger button on close.
- See `BRIEF.md` §8 for scope guardrails (5 scroll scenes + 1 modal Easter egg, 2 interactions, reuse one scene pattern).

---

## License

Released under the MIT License — see [LICENSE](./LICENSE).
