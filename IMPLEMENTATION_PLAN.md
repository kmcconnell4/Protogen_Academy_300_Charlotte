# IMPLEMENTATION_PLAN.md — "912 Days"

Phased build checklist for the P302 interactive data story.

**How to use this file (AI):** Work top-to-bottom. Complete one phase before starting the next. When a task is genuinely done and working, change its checkbox from `- [ ]` to `- [x]` and commit with a descriptive message. Do **not** check a box until the task actually works. Reuse the single `Scene` wrapper and existing style tokens for every scene — do not introduce new patterns unless a task says to.

---

## Phase 0 — Repo & scaffolding setup

- [x] Initialize project (Vite + React, or framework of choice) and commit the scaffold
- [x] Add `README.md`, `LICENSE`, `BRIEF.md`, and this file to the repo root
- [x] Create `/context/decisions.md` to log design + build decisions as you go
- [x] Set up folder structure per README (`/src/components`, `/src/scenes`, `/src/styles`, `/src/data`, `/public/photos`)
- [x] Confirm dev server runs locally (`npm run dev`)

## Phase 1 — Design foundation (crayon system)

- [ ] Define crayon color tokens (~5 bold primaries: red, blue, yellow, green, orange) in `/src/styles`
- [ ] Add hand-lettered display font + clean readable body font
- [ ] Add paper / construction-paper background texture
- [ ] Build the reusable **`Scene`** wrapper component (full-height, scroll-triggered reveal)
- [ ] Build the reusable **`BigNumber`** reveal component (large hand-drawn stat callout)
- [ ] Set up scroll-progress detection (e.g. IntersectionObserver) used by all scenes
- [ ] Create `/src/data` file with all invented stats from BRIEF §6

## Phase 2 — Build the 7 scenes (story first, no fancy interaction yet)

- [ ] Scene 1 — "912 days ago, you were born" (birth stats + Pisces constellation, `[PHOTO PLACEHOLDER]`)
- [ ] Scene 2 — Diaper City (static big number ~7,300 + chart container)
- [ ] Scene 3 — The sleep you didn't get (~1,200 hrs / ~50 days, crayon moon)
- [ ] Scene 4 — The book stack (books listed, oldest-favorite at bottom, `[PHOTO PLACEHOLDER]`)
- [ ] Scene 5 — 48 tiny expeditions (zoo/outings tally, lions + giraffes)
- [ ] Scene 6 — The words (vocab curve 0 → ~450, `[PHOTO PLACEHOLDER]`)
- [ ] Scene 7 — The closer (roll-up of all totals, keepsake ending, `[PHOTO PLACEHOLDER]`)
- [ ] Verify all 7 scenes scroll cleanly end-to-end on desktop

## Phase 3 — The 3 playful interactions (the "icing")

- [ ] **Diaper chart** — animate the hand-drawn line from "Diaper City" high → zero ("Potty trained!" flag) on scroll
- [ ] **Book stack** — books progressively stack on top of each other as you scroll (Peekaboo Feelings bottom → Grumpy Monkey → Pout-Pout Fish → Fairy Tales → Cinderella)
- [ ] **Word slider** — "then → now" toggle that morphs a word from last year's pronunciation to today's
- [ ] Verify each interaction works and degrades gracefully if scrolled past quickly

## Phase 4 — Polish & responsiveness

- [ ] "Draw themselves in" motion on hand-drawn elements (wobbly, playful easing)
- [ ] Responsive: verify story works on mobile / small screens (single-column scroll)
- [ ] Handle empty/edge states (e.g. photos not yet added show a friendly placeholder)
- [ ] Accessibility pass (readable contrast, alt text on drawn elements, reduced-motion fallback)
- [ ] Swap remaining `[PHOTO PLACEHOLDER]` markers for real photos of Big Simba

## Phase 5 — Deploy & finalize

- [ ] Deploy to a live host (Vercel/Netlify/etc.)
- [ ] Password-protect the deployed site (per Protogen guidance)
- [ ] Confirm live site loads and all flows work end-to-end
- [ ] Final check: `BRIEF.md` still matches what was actually built (update if drifted)
- [ ] Confirm README.md + LICENSE are in root and commit history reads cleanly

---

## Definition of done

- [ ] Live, password-protected, accessible site
- [ ] All 7 scenes scroll end-to-end
- [ ] All 3 playful interactions working
- [ ] Crayon aesthetic evident and intentional
- [ ] Real photos swapped in for placeholders
- [ ] BRIEF.md, README.md, LICENSE, IMPLEMENTATION_PLAN.md all in repo
- [ ] Commit history shows real progress over time with descriptive messages
