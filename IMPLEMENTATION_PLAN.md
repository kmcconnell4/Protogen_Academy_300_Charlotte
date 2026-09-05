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
- [x] Swap all `[PHOTO PLACEHOLDER]` markers for real photos/videos: birth (2), diaper duty (video), reading time (video), feeding the giraffes (2), closer (2) — every placeholder on the site now shows real content.

## Phase 5 — Deploy & finalize

- [x] Deploy to a live host (Vercel/Netlify/etc.)
- [x] Password-protect the deployed site (per Protogen guidance)
- [ ] Confirm live site loads and all flows work end-to-end
- [ ] Final check: `BRIEF.md` still matches what was actually built (update if drifted)
- [x] Confirm README.md + LICENSE are in root and commit history reads cleanly

## Phase 6 — Flat/cartoony visual pivot

The owner independently prototyped the story in Figma Make and preferred that direction over the original crayon/hand-drawn build — see `context/decisions.md` for the full rationale. This phase replaces the crayon system, not the story itself.

- [x] Swap display font to Nunito Sans (heavy weight, uppercase headlines); drop Gaegu
- [x] Add flat-shadow/card design tokens (`--card-radius`, `--shadow-flat`, `--ease-flat`)
- [x] Build the new shared component set: `Card`, `Polaroid`, `BarChart`, `RankedBarList`, `TallyTable`, `SiteHeader`, `Modal`, `StarChartModal`, `PlacementCard`
- [x] Remove the hand-drawn `.scene-frame` SVG outline and the heading underline squiggle from `Scene.jsx`/`App.css`
- [x] Cut the Sleep scene entirely (`SleepScene.jsx` deleted, `storyStats.sleep` removed) — confirmed intentional, not a restyle
- [x] Move the star-sign content out of the scroll flow into an accessible modal Easter egg (`StarChartModal`), expanded from 1 to 3 placements (Sun/Rising/Moon), triggered by a Pisces icon on the title scene
- [x] Rebuild all 5 scenes in the flat/cartoony system (two-column layout, phase-numbered eyebrows, inline stat lines)
- [x] Add real content: Charlotte's real name (alongside "Big Simba"), penguins as a third favorite animal, per-book read counts, animal sighting tally, diaper rate-per-period data
- [x] Verify modal keyboard accessibility (focus trap, Escape, click-outside, focus restored on close)
- [x] Responsive check at existing breakpoints for every new component
- [x] `npm run lint` and `npm run build` clean
- [x] Sync all four docs to the new 5-scene/flat-system reality (this pass)

## Phase 7 — Adventure map rework (Scene 4)

The outings scene became a large illustrated map with 5 clickable pins (Philadelphia Zoo, Adventure Aquarium, Please Touch Museum, Mom Mom & Grandpop's House, PG & Pappy's House), each opening a pop-up with a story and real photos. The old scene body (Big Cat Falls/giraffe-feeding copy, the animal tally) folded into the zoo pin rather than being dropped.

- [x] Add `locations` dataset to `storyData.js`, folding in `favoriteOutings`/`animalTally`/`storyStats.expeditions` for the zoo entry
- [x] Build `AdventureMap.jsx` (hand-drawn SVG landmass/river/road + data-driven pin buttons)
- [x] Build `LocationModal.jsx` (reuses `Modal.jsx`) + `PhotoCarousel.jsx` (swipeable, 3-at-a-time, replaced the original static `PhotoGrid.jsx`)
- [x] Rewrite `OutingsScene.jsx`: new headline, full-width map, removed old TallyTable/photo-stack usage
- [x] Add `#outings .scene__content` layout override + map/pin/modal CSS to `App.css`
- [x] Verify all 5 pins render, open correct pop-up content, zoo pin shows folded-in content correctly
- [x] Fix: `TallyTable` text was invisible inside the dark modal (inherited white-on-cream) — added explicit ink color
- [x] Keyboard accessibility pass (pin tab order, modal focus trap/restore, Escape) — verified
- [x] Responsive check at mobile width — fixed overlapping pin tags by respacing the southern 3-pin cluster
- [x] `npm run lint` and `npm run build` clean
- [x] Mom Mom & Grandpop's House photos added (`MomMom_Christmas/Thanksgiving/easter.jpeg`) — all 5 locations now have real photos
- [ ] Owner to confirm/replace remaining confidence-flagged photo guesses (see `context/decisions.md`)

## Phase 8 — Growth scene (new Phase 01) + smaller fixes

A new "Growth" scene lands right after the title scene, showing Charlotte's real height growth (10 logged pediatric check-ins) via a hover-to-inspect chart + 4-card stat sidebar. This becomes the new **Phase 01**, bumping every existing phase-labeled scene up by one. Docs (`BRIEF.md`, `README.md`, this file, `context/decisions.md`) were updated first, per the owner's explicit instruction, before any of the code below.

- [x] Add `growthChart` (10 real logged measurements: age, length, percentile, date), `growthStats`, `bornISO`, and `getDaysSinceBirth()` to `storyData.js`
- [x] Build `GrowthChart.jsx` (hand-rolled SVG, generic scale functions driven by real ages in months, gridlines every 2" from 18–36; hover or focus any point to reveal its age/length/percentile in a callout)
- [x] Build `ThenNowCard.jsx` (shared shoe-size/wardrobe then→now pattern)
- [x] Build `GrowthScene.jsx` (`id="growth"`, `tone="orange"` — a dedicated background so it doesn't read as a continuation of the title scene right before it — "Phase 01: The Growing" eyebrow, plain `h2` headline "You've grown a ton." + `BigNumber` inline stat line matching Diaper/Books' headline pattern, weight-check bars + percentile badge as bespoke scene-local markup)
- [x] Add `#growth .scene__content` scoped layout override to `App.css` (`grid-template-areas` so the sidebar top-aligns with the intro/headline, not the chart, with intro spanning row 1 and chart+sidebar as row 2)
- [x] Insert `GrowthScene` between `BirthScene` and `DiaperScene` in `App.jsx`
- [x] Bump phase-eyebrow numbers: Diaper City 01→02, book stack 02→03, adventure map 03→04
- [x] Fix: center the outings-scene subtitle (`margin-inline: auto` on `.scene-copy--map .scene-copy__body`); tightened the gap between the subtitle and the map below it
- [x] Make the day count live: `BirthScene.jsx` headline, `CloserScene.jsx` headline, `SiteHeader.jsx` brand text, and `document.title` (via a new `useEffect` in `App.jsx`) all compute from `getDaysSinceBirth()` instead of a static "912"
- [x] Map pin hover/focus now scales the pin ~10% (`.adventure-map__pin:hover`/`:focus-visible` transform)
- [x] Diaper bar chart restyled to match the book scene's bordered/shadowed bars (`.bar-chart__bar` gets a border, full rounded corners, flat hard-offset shadow)
- [x] Flip the book scene's layout (video left, copy right) as a deliberate one-off
- [x] Removed the zoo pop-up's animal-sighting tally card (`TallyTable.jsx`, `animalTally` data) for feeling out of place next to the story/photos
- [x] Diaper bar chart: hover/focus a bar for a tooltip with its exact rate (e.g. "10/day")
- [x] Verify chart renders the real 10-point series with working hover/keyboard inspection on every point; all 4 sidebar cards render; headline accent doesn't affect `BigNumber`'s other 2 callers
- [ ] Responsive check at existing breakpoints; reduced-motion check
- [ ] `npm run lint` and `npm run build` clean

## Phase 9 — Sitewide "Wrapped" motion upgrade

Broader "elements drop in as you scroll into a scene" motion across every scene (headline/body/stat/chart/photo staggered entrance, count-up numbers, a self-drawing growth-chart line), on top of the handful of bespoke animations that already existed. Docs updated first per the established convention.

- [x] Add `--ease-bounce` overshoot easing token to `src/styles/tokens.css`; swap existing bespoke animations (`.bar-chart__bar`, `.ranked-bars__row`, `.recap-card__row`, `.adventure-map__pin`) from `var(--ease-flat)` to `var(--ease-bounce)`
- [x] Add generic staggered entrance CSS for `.scene-copy > *` (nth-child delays) and `.polaroid`/`.photo-stack` children, gated on `.scene[data-visible='true']` — no JSX changes needed in existing scenes
- [x] `GrowthChart.jsx`: `pathLength="1"` + `stroke-dasharray`/`stroke-dashoffset` transition so the height line draws itself in on scroll; points fade/pop in with per-index stagger
- [x] New `src/hooks/useCountUp.js` (own `IntersectionObserver`, one-shot, parses/reformats `~7,300` / `~340` / `15.5 inches`-style values, checks `prefers-reduced-motion` and skips straight to final value if set)
- [x] Wire `useCountUp` into `BigNumber.jsx` for both variants — verified all 3 existing callers (Diaper, Books, Growth) count up correctly with no prop changes (spot-checked the diaper counter mid-animation: `~0 → ~451 → ~1,003 → ... → ~4,764` before settling)
- [x] Verify: every scene's content staggers in once per scroll (not on every re-scroll, matching `Scene.jsx`'s existing monotonic visibility); reduced-motion check done by code review (`useCountUp` checks `prefers-reduced-motion` before animating) — not live-tested against a real OS setting, since this browser environment has no way to toggle it
- [x] Responsive check at `60rem`/`34rem`; `npm run lint` and `npm run build` clean

## Phase 10 — The Firsts (milestones timeline scene, new Phase 02)

A new scene right after Growth showing 11 real, owner-tracked milestones on a vertical timeline. Becomes the new **Phase 02**, bumping Diaper City/book stack/adventure map up one each. Docs updated first.

Revised mid-phase after the owner reviewed the first pass: dropped the modal in favor of an in-place expand (the marker itself grows into a large circle showing the photo/video), removed the COVID milestone, and wired in the real photos/videos the owner added (filenames prefixed `TIMELINE_`) — see `context/decisions.md`.

- [x] Add `milestones` export to `storyData.js` (11 curated entries: `id`, `ageMonths`, `ageLabel`, `title`, `description`, and either a `media: { type, src, alt }` or an `emoji` fallback)
- [x] Build `MilestoneTimeline.jsx` (CSS `::before` vertical line, alternating left/right marker buttons on desktop, single column below `60rem`, per-index `--milestone-delay` stagger matching `AdventureMap.jsx`'s pin technique)
- [x] Markers show a real photo/video thumbnail when `media` exists, else the milestone's `emoji`; clicking toggles an in-place expanded state (own React state in `MilestoneTimeline.jsx`, no modal) growing the circle to a large photo/playable-video view with age/title/description revealed beneath it, plus a small collapse button
- [x] Build `MilestoneScene.jsx` (`id="milestones"`, `tone="blue"`, "Phase 02: The Firsts" eyebrow, headline "We've hit all the firsts.", scoped `#milestones .scene__content` single-column override matching `#outings`'s pattern)
- [x] Insert `MilestoneScene` between `GrowthScene` and `DiaperScene` in `App.jsx`; bump phase-eyebrow numbers: Diaper City 02→03, book stack 03→04, adventure map 04→05
- [x] Verify all 11 markers render staggered with correct media/emoji; expand-in-place works for video, photo, and emoji entries (spot-checked "Peekaboo," "First bite of real food," and "First tooth"); collapse button returns to compact view; fixed a real bug where the collapse button was clipped by the marker's own `overflow: hidden` (moved the circular clip to an inner wrapper)
- [x] Responsive check at `60rem`/`34rem` and full desktop width (verified single-column mobile layout, desktop alternating layout, and the expand interaction all render correctly); fixed a real CSS Grid auto-placement bug only reproducible above `60rem` where left-side labels were silently pushed into an implicit second row (added explicit `grid-row: 1` to the marker and both label rules); added an opaque background card behind the expanded state's text so the timeline's connecting line no longer shows through it; `npm run lint` and `npm run build` clean

## Phase 11 — Texture/favicon polish + a real bug fix

Smaller follow-up round: per-scene background doodle textures (replacing the sitewide polka-dot pattern), a real favicon, a milestone-timeline layout tweak, and a genuine bug fix found while verifying the above.

- [x] Replace the single sitewide polka-dot `.scene::before` texture with a distinct small inline-SVG doodle motif per scene id (`#born` dots+triangles, `#growth` chevrons, `#milestones` spirals, `#diapers` cubes, `#books` dashes, `#outings` mountains+dashed route, `#closer` hearts+sparkles), Rugrats-title-card inspired; tuned opacity down to 0.1 after an initial pass read too heavy
- [x] Replace the leftover generic placeholder favicon with a small flat lion-face mark (nods to "Big Simba")
- [x] Milestone timeline's compact card: stack age above title on two lines (new `.milestone-timeline__card-title` span) instead of "AGE — Title" on one line, matching the expanded view's layout
- [x] Fixed a real bug in `Scene.jsx`: `updateProgress()` divided by `window.innerHeight` with no guard, so a single `0`-height read poisoned `progress` to `NaN` permanently (`Math.max(current, NaN)` never recovers), leaving that scene's entrance animation stuck invisible forever. Added early-returns for a falsy viewport height or a non-finite ratio.
- [x] Verified `getDaysSinceBirth()` is a live computation (`Date.now()` minus `bornISO`), not a hardcoded figure — confirmed it matches the expected day count for the current date
- [x] `npm run lint` and `npm run build` clean

---

## Definition of done

- [ ] Live, password-protected, accessible site
- [ ] All 7 scenes scroll end-to-end, plus the star-chart modal and adventure-map pins open/close accessibly
- [ ] Both playful interactions working
- [ ] Flat/cartoony aesthetic evident and intentional
- [x] Real photos swapped in for all placeholders
- [ ] BRIEF.md, README.md, LICENSE, IMPLEMENTATION_PLAN.md all in repo
- [ ] Commit history shows real progress over time with descriptive messages
