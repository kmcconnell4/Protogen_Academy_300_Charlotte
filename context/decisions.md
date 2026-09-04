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

### 2026-09-04 — Adventure map polish: emoji tally, tagline renames, owner-confirmed photo set
- **Animal tally now shows real emoji, not hearts:** `TallyTable` repeats each animal's own emoji (🦁×17, 🦒×12, 🐧×7) instead of a generic ❤ ×N count — `animalTally` entries gained an `icon` field, the row layout changed from a single line to a wrapped icon row beneath the animal name so 17 emoji can flow onto multiple lines.
- **Removed the redundant "~48 tiny expeditions" stat line** from the zoo pin's pop-up — it already appears once inline in the story paragraph; `LocationModal`'s `stats` field/branch was removed entirely since nothing uses it anymore.
- **Pin taglines renamed** for warmth: "Newtown, PA" → "Mom Mom's House", "Beach Lake, PA" → "PG's House" (the modal title still says the full "Mom Mom and Grandpop's House" / "PG & Pappy's House").
- **Owner renamed more photos with location prefixes, superseding earlier guesses** — this is now the authoritative photo set per location:
  - **Please Touch Museum**: `PleaseTouch1-4.jpeg`, `PleaseTouch_Carousel_Pappy.jpeg` (renamed from `Carousel_Pappy.jpeg`, confirming the earlier correction).
  - **Philadelphia Zoo**: `ZOO_Giraffes_1/2.jpeg`, `Zoo_Mommom.jpeg`, `ZOO_Gorilla.jpeg`, `ZOO_Tiger.jpeg`, plus two new ones — `ZOO_Halloween.jpeg` and `ZOO_Lion_carousel.jpeg`. **Correction to a correction:** `Lion_carousel.jpeg` was reassigned to Please Touch Museum in the previous session based on visually matching its carousel to the museum's — the owner's explicit `ZOO_` rename overrides that guess; the zoo apparently has its own carousel too. Trust explicit owner tags over visual inference when they conflict.
  - **Adventure Aquarium**: `Aquarium.jpeg`, `AQUARIUM_Sea_Turtle.jpeg`, `Seal.jpeg`, and `AQUARIUM_Hippo.JPG` (moved here from the zoo guess — Adventure Aquarium has its own hippo exhibit).
  - **PG & Pappy's House**: `PGs_Dad_Lake.jpeg`, `PGs_Baby_Goat.jpeg`, plus four new ones — `PGs_Dad_Snow.jpeg`, `PGs_Horse.jpeg`, `PGs_Doody.jpeg`, `PGs_Silly.jpeg`.
  - **Mom Mom and Grandpop's House**: still nothing — no owner rename for this location yet.
- **Why the images briefly broke:** the owner renamed the underlying files mid-session while the previous round's `storyData.js` still pointed at the old filenames — not a code bug, just stale paths after a rename. Caught immediately because the images failed to render (`naturalWidth: 0` despite `complete: true`) even though the network requests returned 200 OK.

### 2026-09-04 — Outings scene reworked into an interactive adventure map
- **The rework:** replaced the outings scene's static copy/tally/photos with a large, cartoony hand-drawn SVG map (landmass, river, dashed road) carrying 5 pins for real places — Philadelphia Zoo, Adventure Aquarium, Please Touch Museum, Mom Mom and Grandpop's House (Newtown, PA), PG & Pappy's House (Beach Lake, PA). Pins are real `<button>`s positioned by percentage; clicking one opens `LocationModal.jsx` (reusing `Modal.jsx` untouched) with a story and a `PhotoGrid.jsx` of real photos. Positions loosely mirror real relative geography (Philly/Camden cluster south, Newtown mid, Beach Lake far north) without being a literal map — no map library added, consistent with every other chart in this project being hand-rolled SVG.
- **Old content folded into the zoo pin, not dropped:** the "~48 tiny expeditions" stat, Big Cat Falls/giraffe-feeding copy, and the animal tally (reusing the existing `favoriteOutings`/`animalTally`/`storyStats.expeditions` exports, not duplicated) now live in the Philadelphia Zoo pin's story instead of the main scene body.
- **Interaction-count guardrail:** the pin/pop-up pattern is *not* counted as a 3rd named interaction — same treatment as the star-chart modal. It's the scene's core content-delivery mechanism, not a bonus flourish layered on an already-complete scene. BRIEF §4/§5 say so explicitly.
- **Photo-to-location matching — filename guesses corrected after actually viewing the images**, not just trusting filenames: `Carousel_Pappy.jpeg` and `Lion_carousel.jpeg` turned out to show the *same* ornate indoor carousel as the owner's freshly-uploaded `PleaseTouch1-4.jpeg` — that's Please Touch Museum's historic carousel, not Pappy's house ("Pappy" in the filename just means he's in that particular photo, not the location). `Baby_Goat.jpeg`'s rural wooded, wire-fence farm setting reads as Beach Lake, not the Philadelphia Zoo, so it moved there alongside `Dad_Lake.jpeg`. Final assignment:
  - **Please Touch Museum**: `PleaseTouch1-4.jpeg` (owner-confirmed, just uploaded), plus `Carousel_Pappy.jpeg`, `Lion_carousel.jpeg` (reattributed after viewing).
  - **Philadelphia Zoo**: `Giraffes_1.jpeg`, `Giraffes_2.jpeg` (reused from the old scene), `Zoo_Mommom.jpeg`, `Gorilla.jpeg`, `Hippo.JPG`, `Tiger.jpeg`.
  - **Adventure Aquarium**: `Aquarium.jpeg`, `Sea_Turtle.jpeg`, `Seal.jpeg` — high confidence, filenames alone were clear.
  - **PG & Pappy's House**: `Dad_Lake.jpeg`, `Baby_Goat.jpeg` — medium confidence, worth the owner's confirmation.
  - **Mom Mom and Grandpop's House**: no photos — nothing in `public/photos/` matched, ships with a "Photos coming soon!" empty state until the owner supplies some.
- **Bug fixed in passing:** `TallyTable`'s animal-name text was invisible when reused inside the dark `Modal` — it had never set its own text color, relying on ambient inheritance that happened to be dark ink on every light scene background it had previously appeared on. Fixed by giving `.tally-table` an explicit `color: var(--ink)`.
- **Mobile fix:** the 3-pin southern cluster (Please Touch, Zoo, Aquarium) had overlapping tag labels at narrow widths — respaced the pins further apart and added a mobile-only tag font-size reduction.

### 2026-09-04 — Real photos/videos swapped in for 6 of 8 placeholders
- **`Polaroid.jsx` extended** to accept `src`/`alt`/`video` props — renders a real `<img>` or `<video controls>` in place of the placeholder text when provided, styled to fill the Polaroid frame edge-to-edge (`object-fit: cover`) instead of the padded dashed-box look.
- **Swapped:** title scene (`BIRTH1_newborn1.JPG`, `Birth2_Slide.PNG` — a playground slide photo, not a birth/hospital one, so its caption was rewritten from "hospital hello" to "watch me go! 🛝" to match what's actually in the photo), diaper scene (`DIAPERDUTY_Diaper_Baby.MOV`, a video), books scene (`READING_poutpout.MOV`, a video), outings scene (`Giraffes_1.jpeg`, `Giraffes_2.jpeg`).
- **Not swapped:** the closer scene's 2 placeholders — no file in `public/photos/` was renamed with a "closer"-style prefix to match them, unlike the others. `newborn2.JPG` also exists but isn't tagged to a specific placeholder slot, so it wasn't used. Both flagged to the owner rather than guessed.

### 2026-09-04 — Full pivot to flat/cartoony visual system
- **The pivot:** replaced the entire "bold crayon / hand-drawn sketchbook" visual system built earlier this session with a flat, cartoony, card-based system — bold Nunito Sans headlines (uppercase, heavy weight, no more Gaegu hand-lettering), literal axis-labeled charts, flat hard-shadow Polaroids, phase-numbered eyebrow labels, a persistent sticky header, and left-aligned two-column scene layouts. **Why:** the owner independently prompted a different AI tool (Figma Make) with their own description of the story and preferred the result over this project's original crayon direction. This is a preference-driven pivot based on the owner's own prototype, not a correction of a flaw in the original build — the crayon system worked as designed, it just wasn't the look they wanted once they saw an alternative.
- **Sleep scene cut entirely** (not restyled) — the reference the owner is matching has no sleep section, and they confirmed this was intentional, not an oversight. `SleepScene.jsx` deleted, `storyStats.sleep` removed, `.moon` CSS removed.
- **Star-sign content moved out of the scroll flow into a modal Easter egg.** `StarSignScene.jsx` deleted; its content (birth date, constellation) migrated into a new `StarChartModal.jsx`, expanded from 1 placement (Sun/Pisces) to 3 (Sun/Rising/Moon — Rising=Leo, Moon=Aquarius invented for this pass), triggered by clicking a Pisces icon on the title scene. Built as an accessible modal (`Modal.jsx`): `role="dialog"` + `aria-modal`, focus trap, Escape/click-outside to close, focus restored to the trigger on close, scroll-locked while open. Explicitly framed as a bonus, not one of the 5 scroll scenes or 2 named interactions — keeps the interaction-count guardrail honest.
- **Net scene count: 5 scroll scenes + 1 modal Easter egg** (down from 7, since star-sign left the scroll flow and Sleep was cut). Full history now spans 7 → 8 (opening split) → 7 (words cut) → 5 + 1 modal (this pass) — each step logged with its own reasoning in this file.
- **Charlotte is her real name, used intentionally** alongside the "Big Simba" nickname (mirroring the reference's own mixed usage in photo captions) — added to BRIEF §3. Not a privacy concern to guard against here; explicitly confirmed by the owner.
- **Penguins added as a third real favorite animal**, alongside lions and giraffes, in the outings animal-tally card — confirmed by the owner, added to BRIEF §3 and `storyData.js`.
- **New invented-but-consistent data added:** per-book read counts (reconciled to sum to the existing `~340 books` headline stat: 200+60+45+25+10), a 5-period diaper rate breakdown for the bar chart, an animal sighting tally (lions ×17, giraffes ×12, penguins ×7), and Rising/Moon sign placements for the star-chart modal.
- **The hand-drawn constellation SVG is the one deliberate exception** kept from the old system — reused inside the star-chart modal (×3, one per placement) with its original draw-in animation, framed as an intentional "interlude" accent rather than the site's default visual language.
- **Bug fixed in passing:** `RankedBarList.jsx` initially referenced `item.value` while `storyData.js`'s `favoriteBooks` objects used `reads` — caught via browser verification (bars rendered with no visible read-count numbers), fixed to reference `item.reads` throughout.

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
