# Decisions Log — "912 Days"

A running record of design and build decisions. **Append a new dated entry each working session** — don't overwrite old ones. This is the project's memory: when a choice is made (or reversed), log *what* was decided and *why*.

**Format:** newest entries at the top. Each entry = date, what changed, and the reasoning.

---

## How to use this file (AI + owner)

- Add an entry whenever you make a real decision: a design direction, a scope call, a data assumption, a tradeoff, a reversal.
- Keep entries short — a sentence or two of *what* and *why* is enough.
- Note reversals explicitly (e.g. "Changed from X to Y because…") so the history stays honest.
- Reference the relevant scene/phase where useful (e.g. "Scene 4," "Phase 1").

---

## Decisions

### 2026-09-04 — Phase 5 production host: Vercel
- The GitHub-connected Vercel project deployed commit `c612a4c` successfully to the protected production URL listed in the README. Unauthenticated access redirects to Vercel login.
- The authenticated live-flow check remains open until the owner verifies the protected experience. Real photos and Scene 5's final animal visuals remain explicit brief-alignment follow-up.

### 2026-09-04 — Phase 4 motion, accessibility & placeholders
- Added one coordinated draw-in language for scene frames, heading underlines, constellation lines, stars, and the vocabulary curve. Content remains visible before motion, and the existing reduced-motion rule collapses animation and transitions.
- Photo markers remain explicit, friendly sketchbook frames until real Big Simba images are supplied; the final photo-swap task stays open by design.

### 2026-09-04 — Phase 3 interactions latch on exposure
- The diaper chart and five-book stack are triggered by the shared scene visibility signal and retain their completed state after a reader scrolls past. The word comparison is one semantic pressed toggle.
- **Why:** this keeps the three brief-defined accents light and ensures readers who scroll quickly see the finished story state instead of an empty chart or stack.

### 2026-09-04 — Phase 2 story before interaction
- Built all seven scenes as static scroll spreads before adding the diaper line animation, progressive book stack, or word control.
- **Why:** the brief calls interaction "icing" and Phase 2 explicitly prioritizes an end-to-end readable story; each later interaction now has a clear, working static fallback.

### 2026-09-04 — Phase 1 crayon system & type
- **Colors:** Use a full five-color primary crayon system (red, blue, yellow, green, orange) on a bright paper ground, with navy ink for text. The colors have distinct semantic roles rather than decorative one-off accents.
- **Typography:** Use Gaegu for hand-lettered display moments and Nunito Sans for long-form body copy. This protects readability while keeping the headlines recognizably kid-made.
- **Why:** The combination honors the brief's gleeful sketchbook direction while avoiding a generic children's-site palette or decorative type that becomes difficult to read.

### 2026-09-04 — Phase 0 stack: Vite + React
- **Decision:** Use Vite + React for the responsive, scroll-driven story, with the README folder structure created at scaffold time.
- **Why:** It is the brief's suggested lightweight stack and supports the single-page storytelling experience without adding framework or library scope.

### 2026-09-04 — Project kickoff & concept locked
- **Concept:** "912 Days" — an interactive data story about the first 2.5 years of a life, told in small cumulative numbers. Chosen over dashboard/mobile options because the invented-data + personal-narrative fit P302 best (story over dataset).
- **Point of view:** small repetitive moments compound into something staggering; funny on top, quietly moving underneath.
- **Audience:** other parents + non-parent friends.
- **Why:** gives the story a clear "so what" and a specific voice, which the rubric rewards over generic builds.

### 2026-09-04 — Structure: 7 scenes, hard cap
- Locked to 7 scenes (birth → diapers → sleep → book stack → zoo → words → closer) to stay finishable ASAP and avoid scope creep.
- **Why:** brief emphasizes story clarity; more scenes risk overstaying the narrative.

### 2026-09-04 — Interactions limited to 3
- Only 3 playful interactions: diaper high→zero chart, progressive book stack, "then → now" word slider. Everything else is scroll-progress only.
- **Why:** brief states interaction is "icing," not the point — keeping it light protects the timeline.

### 2026-09-04 — Visual direction: bold crayon / gleeful chaos
- Sketchbook/crayon aesthetic, ~5 curated primary crayon colors, hand-lettered display font + clean body font, "draw themselves in" motion.
- **Why:** medium matches subject (a toddler's life); an intentional childlike look reads as a deliberate design decision, not a generic template.

### 2026-09-04 — Data approach: invented but internally consistent
- All stats estimated with a documented derivation (see BRIEF §6). Key figures: ~7,300 diapers, ~340 books (200 reads of Peekaboo Feelings), ~48 zoo trips, ~1,200 hrs sleep lost, ~1,500 naps, 0→~450 words, ~250 miles carried, ~350 "why"s/day.
- **Why:** P302 calls for invented/simplified data; showing the math keeps it defensible and reads as intentional planning.

### 2026-09-04 — Photos deferred to placeholders
- Using `[PHOTO PLACEHOLDER]` markers throughout; real photos of "Big Simba" swapped in during Phase 4.
- **Why:** placeholders-over-perfection keeps the build moving; content can land last.

---

<!-- Add new session entries above this line -->
