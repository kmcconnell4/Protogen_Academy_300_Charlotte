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

### 2026-09-04 — Scroll-snap, book-stack fix, outings rewrite, words cut, closer redesign
- **Scroll-snapping added:** `scroll-snap-type: y mandatory` on `html` + `scroll-snap-align: start` / `scroll-snap-stop: always` on every `.scene`. **Why:** the owner wanted scrolling between scenes to feel "heavier," with focus locking onto the next scene rather than scrolling past like a plain list — mandatory snap-stop is the standard technique for exactly that.
- **Book stack order fixed:** the visual stacking was inverted from the brief's own stated intent ("oldest-favorite at the bottom") — *Peekaboo Feelings* was rendering at the screen-top/first-painted position instead of the screen-bottom/buried position. Fixed by reversing the DOM render order in `BooksScene.jsx` while keeping each book's width/color/delay tied to its original data-array index (via `.map(...).reverse()` over indexed pairs), so *Peekaboo Feelings* now sits at the bottom and animates in first, *Cinderella* sits on top and animates in last. **Why:** this is a genuine bug fix, not a preference change — the code didn't match its own documented intent or the owner's mental model of "the first one dropped ends up buried."
- **Outings scene rewritten:** removed the repeated "two trips a month since six months old" phrase (it appeared in both the eyebrow label and the `BigNumber` detail); now appears once. Replaced generic "lion exhibit undefeated" copy with specific callouts — Big Cat Falls (first stop) and feeding the giraffes (~6 times, real photos available) — added as a new `favoriteOutings` export in `storyData.js`. Photo placeholder relabeled from generic "zoo day" to "feeding the giraffes" since real photos of that exist.
- **Words/vocabulary scene cut entirely:** removed `WordsScene.jsx`, its `App.jsx` render, and its now-unused data (`storyStats.words`, `wordPair`) and CSS (`.word-pair*`, `.word-curve*`, `curve-draw` keyframe). **Why:** the owner said Big Simba's real vocabulary has far outgrown the invented "0 → ~450 words" stat and the scene read as sad/inaccurate rather than triumphant. This drops the story from 8 scenes back to 7, and from 3 named interactions to 2 (diaper chart, book stack) — BRIEF.md/README.md/IMPLEMENTATION_PLAN.md updated to describe 7 scenes and 2 interactions rather than compensating with a replacement interaction elsewhere.
- **Closer scene redesigned for more impact:** the equation ("7,300 diapers + 340 books + 48 expeditions + a thousand mispronounced words") now builds one term at a time in a staggered reveal (each term in its own crayon color, reusing the same staggered-delay technique as the book stack) as the scene comes into view, landing on a delayed, scale-in reveal of "One kid. 912 days." **Why:** the owner felt the ending "just kinda feels lame" as a flat static equation; staggering the build mirrors the brief's own "compounding" theme and gives the final line more weight.

### 2026-09-04 — Opening scene split, frame redesign, night tone
- **Scope change (7 → 8 scenes):** Split the original Scene 1 ("912 days ago, you were born") into two: a clean title slide (headline, 912 big number, a stacked 3-photo Polaroid placeholder) and a new "Born under Pisces" scene carrying the birth date, birth stats, and the star sign as an immersive centerpiece. **Why:** the title moment and the birth-stats/star-sign moment were fighting each other on one screen; splitting them lets each land on its own terms. Updated the "7 scenes hard cap" guardrail in BRIEF §8 to 8 scenes, and synced README.md and IMPLEMENTATION_PLAN.md scene lists/counts to match.
- **Frame motif redesign:** Replaced the two overlapping, perfectly-rotated red/black rectangle borders (`.scene::before/::after`) with a single hand-traced wobbly SVG outline rendered inside the shared `Scene` component, using the same stroke-dasharray/dashoffset draw-in technique already used for the constellation, word curve, and diaper chart. **Why:** the crisp geometric double-rectangle read as generic/templated rather than genuinely hand-drawn; one deliberately imperfect line is more consistent with the rest of the piece's hand-drawn language and reads more childlike.
- **New "night" tone + starfield:** Added `--night` and `--night-star` tokens and a `.scene--night` background (deep navy + layered dot starfield) for the new star-sign scene, with text-contrast overrides mirroring the existing `.scene--red` pattern. The existing constellation SVG/animation is reused byte-for-byte, just re-themed (stroke → paper) for contrast against the dark ground.
- **Full birth chart — deferred:** A fuller astrology moment (all planets/houses, not just the sun-sign constellation) was discussed as a possible future addition to the star-sign scene, but is explicitly out of scope for now. Logged here as a backlog idea only — not reflected in BRIEF.md.

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
