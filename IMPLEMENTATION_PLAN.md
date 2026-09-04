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

- [x] Define crayon color tokens (~5 bold primaries: red, blue, yellow, green, orange) in `/src/styles`
- [x] Add hand-lettered display font + clean readable body font
- [x] Add paper / construction-paper background texture
- [x] Build the reusable **`Scene`** wrapper component (full-height, scroll-triggered reveal)
- [x] Build the reusable **`BigNumber`** reveal component (large hand-drawn stat callout)
- [x] Set up scroll-progress detection (e.g. IntersectionObserver) used by all scenes
- [x] Create `/src/data` file with all invented stats from BRIEF §6

## Phase 2 — Build the 7 scenes (story first, no fancy interaction yet)

- [x] Scene 1 — "912 days ago, you were born" (title slide: headline + big number + stacked Polaroid photo placeholders)
- [x] Scene 2 — Born under Pisces (birth stats + immersive starfield constellation moment, split out from Scene 1)
- [x] Scene 3 — Diaper City (static big number ~7,300 + chart container)
- [x] Scene 4 — The sleep you didn't get (~1,200 hrs / ~50 days, crayon moon)
- [x] Scene 5 — The book stack (books listed, oldest-favorite at bottom, `[PHOTO PLACEHOLDER]`)
- [x] Scene 6 — 48 tiny expeditions (Big Cat Falls + feeding the giraffes, `[PHOTO PLACEHOLDER]`)
- [x] Scene 7 — The closer (staggered build-up equation, keepsake ending, `[PHOTO PLACEHOLDER]`)
- [x] Verify all 7 scenes scroll cleanly end-to-end on desktop
- [x] Cut the words/vocabulary scene entirely (inaccurate to how much Big Simba actually talks now) — see `context/decisions.md`

## Phase 3 — The 2 playful interactions (the "icing")

- [x] **Diaper chart** — animate the hand-drawn line from "Diaper City" high → zero ("Potty trained!" flag) on scroll
- [x] **Book stack** — books progressively stack on top of each other as you scroll (Peekaboo Feelings bottom/first → Grumpy Monkey → Pout-Pout Fish → Fairy Tales → Cinderella on top/last)
- [x] Verify each interaction works and degrades gracefully if scrolled past quickly

## Phase 4 — Polish & responsiveness

- [x] "Draw themselves in" motion on hand-drawn elements (wobbly, playful easing)
- [x] Redesign the scene frame: replaced the two overlapping rotated-rectangle borders with a single hand-traced wobbly SVG outline (reused across all 7 scenes via the shared `Scene` wrapper)
- [x] Add CSS scroll-snapping (`scroll-snap-type: y mandatory` + per-scene `scroll-snap-align`/`stop`) so scenes lock into focus on scroll instead of scrolling past like a plain list
- [x] Responsive: verify story works on mobile / small screens (single-column scroll)
- [x] Handle empty/edge states (e.g. photos not yet added show a friendly placeholder)
- [x] Accessibility pass (readable contrast, alt text on drawn elements, reduced-motion fallback)
- [ ] Swap remaining `[PHOTO PLACEHOLDER]` markers for real photos of Big Simba (now 6 total, including the 3-photo title-slide stack and the giraffe-feeding photo)

## Phase 5 — Deploy & finalize

- [x] Deploy to a live host (Vercel/Netlify/etc.)
- [x] Password-protect the deployed site (per Protogen guidance)
- [ ] Confirm live site loads and all flows work end-to-end
- [ ] Final check: `BRIEF.md` still matches what was actually built (update if drifted)
- [x] Confirm README.md + LICENSE are in root and commit history reads cleanly

---

## Definition of done

- [ ] Live, password-protected, accessible site
- [ ] All 7 scenes scroll end-to-end
- [ ] Both playful interactions working
- [ ] Crayon aesthetic evident and intentional
- [ ] Real photos swapped in for placeholders
- [ ] BRIEF.md, README.md, LICENSE, IMPLEMENTATION_PLAN.md all in repo
- [ ] Commit history shows real progress over time with descriptive messages
