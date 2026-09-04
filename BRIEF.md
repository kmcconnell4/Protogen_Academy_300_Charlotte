# BRIEF.md — "912 Days"
### An interactive data story about the first 2.5 years of a life, told in the small numbers nobody stops to count

> **Protogen P302 — Interactive Data Story**
> Note: This project uses invented and estimated data. It contains no client- or Slalom-specific information.

---

## 1. The point of view (the spine)

**The tiniest, most repetitive moments of raising a toddler — one diaper, one book, one mispronounced word — quietly add up to something staggering. This is 912 days told in the small numbers no one stops to count.**

The whole story compounds toward a single realization: *all of these overwhelming totals equal just one kid, in what feels like no time at all.*

**Tone:** A blend. Funny and irreverent on the surface ("7,300 diapers — send help"), quietly moving by the end. The humor earns the emotional landing.

---

## 2. The audience

Written for **other parents** (who will feel deeply seen) and **non-parent friends** (the "you genuinely have no idea" angle). The comedy speaks to the friend; the compounding totals land the gut-punch for the parent.

**By the end, the reader should walk away understanding:** how the invisible, thankless, repetitive daily grind of raising a toddler compounds into something enormous — and how fast 912 days actually goes.

---

## 3. The subject

**Charlotte** — nicknamed "Big Simba" — a 2.5-year-old force of nature.

| Detail | Value |
|---|---|
| Real name | Charlotte |
| Nickname | "Big Simba" — used throughout, real name used occasionally for warmth |
| Born | March 8, 2024, 2:40 PM |
| Birth stats | 6 lbs 0 oz, 19.5" long |
| Star sign | Pisces ♓ (dreamy, dramatic, deeply feeling — checks out) |
| Favorite animals | Lions (obviously), giraffes, penguins |
| Favorite movie | The Lion King |
| Favorite songs | "The Goldfish" (Laurie Berkner Band), "Hop Little Bunnies," "Going on a Bear Hunt" |

*(Real personal details are used intentionally so the story feels designed for a specific person, not a generic template.)*

---

## 4. The structure — 5 scenes (scroll-driven) + 1 modal Easter egg

A **scrollytelling** narrative. Each scene reveals one surprising cumulative stat with a bold, cartoony element that animates in as you scroll. Interaction is the icing; the story is the thing.

### Scene 1 — "912 days ago, you were born."
The cover slide. Headline, the birth date and a short narrative blurb, a 3-segment stat pill (date of arrival / weight / length), and the 912-day big number — plus a single Polaroid-style photo placeholder. The date-of-arrival segment carries a small clickable Pisces icon that opens the star-chart Easter egg (see below).

### Scene 2 — Diaper City → Potty Trained 🚽 *(interaction #1)*
Eyebrow "Phase 01: Welcome to Diaper City." The big number: **~7,300 diapers**. A literal bar chart shows the daily diaper rate across 5 periods (Mo 1–3 → Today), tapering to zero with an "Officially potty trained!" flag on the final bar. A speech-bubble quote ("Send help...") adds a comedic aside.

### Scene 3 — The book stack 📚 *(interaction #2)*
Eyebrow "Phase 02: Repetitive literary genius." Favorite books render as a horizontal ranked-bar list, widest/bottom = most read:
1. *Peekaboo Feelings* — ~200 reads (the OG favorite)
2. *Grumpy Monkey* — ~60 reads
3. *The Pout-Pout Fish* — ~45 reads
4. *Fairy Tales* — ~25 reads
5. *Cinderella* — ~10 reads (newest favorite, on top)

Big number: **~340 books read**. An "Honorable Mentions" card lists the wider rotating shelf (Jamberry, Green Eggs and Ham, The Lion King).

### Scene 4 — The adventure map 🗺️
Eyebrow "Phase 03: Adventures galore." Headline "We've been on so many adventures." — a large, cartoony illustrated map (hand-drawn SVG: landmass, river, a dashed road connecting the stops) with 5 pins for real places: Philadelphia Zoo, Adventure Aquarium, Please Touch Museum, Mom Mom and Grandpop's House (Newtown, PA), and PG & Pappy's House (Beach Lake, PA). Tapping a pin opens an accessible pop-up with a short story and photos from that place. The Philadelphia Zoo pin carries what used to be this scene's whole body: the "~48 tiny expeditions" stat, Big Cat Falls/giraffe-feeding copy, and the "Favorite Animal Spotted" tally card (lions ×17, giraffes ×12, penguins ×7) — folded in rather than dropped when the scene became map-driven. The pin/pop-up pattern is this scene's core content-delivery mechanism (like scroll-snap is for the whole site), not counted as a 3rd interaction — see §5.

### Scene 5 — The closer 🦁
Eyebrow "★ The heartwarming end (for now)." A recap card — "Let's wrap up the adventure so far..." — rolls up diapers, books, and expeditions (each with a one-line callback) plus a final "1 incredible little kid" row, landing on **"912 days of wonder."**

### Easter egg — Written in the Stars (modal)
Clicking the Pisces icon on the title scene opens an accessible modal overlay: "Interlude: Star Chart," with 3 placement cards (Sun/Pisces, Rising/Leo, Moon/Aquarius), each with a hand-drawn constellation, degree/house notation, and a short personality blurb. Closable via Escape, click-outside, or the close button; focus is trapped while open and restored to the trigger on close. This is explicitly a bonus, not one of the 5 scroll scenes or 2 named interactions.

---

## 5. The two playful interactions (kept intentionally light)

| # | Scene | Interaction | Why it stays finishable |
|---|---|---|---|
| 1 | Diapers | Animated bar chart: rate tapering to zero ("potty trained!") | Triggered on scroll, no complex state |
| 2 | Books | Ranked bars fill in progressively as you scroll | Sequential reveal, pure CSS/scroll animation |

*(A third interaction — a "then → now" word-pronunciation toggle — was cut along with its scene; see `context/decisions.md`. The star-chart modal is a bonus Easter egg, and the adventure map's pin-and-pop-up pattern is Scene 4's core content-delivery mechanism — neither is counted as a 3rd interaction. Interaction is icing, not the point, so 2 named interactions is fine.)*

Primary interaction across the whole piece = **scroll progress**, reinforced by scroll-snapping so each scene locks into focus rather than scrolling past like a plain list. Everything else is a light accent so the build stays fast.

---

## 6. The data (invented + estimated)

All figures are believable estimates, not real logs — per the P302 brief, the goal is the story, not the dataset.

| Metric | Estimate | How it's derived |
|---|---|---|
| Total days | ~912 | Born 3/8/24 → ~2.5 years |
| Diapers | ~7,300 | Rate tapers 10/day (Mo 1–3) → 8 → 6 → 3 → 0 (potty trained), averaged across 912 days |
| The one book, on repeat | ~200 reads | *Peekaboo Feelings* |
| Total books read | ~340 | Sum of the 5-book ranked stack (200+60+45+25+10) plus the wider rotating shelf |
| Zoo / outings | ~48 | 2/month since 6 months old |
| Animal sightings | Lions ×17, giraffes ×12, penguins ×7 | Lifetime tally across zoo/aquarium visits |
| Naps taken | **~1,500** | ~4/day as newborn → 2/day → 1/day, tapering across 912 days |
| Miles carried | **~250 miles** | ~0.25 mi/day carried/worn, avg across 912 days (~a marathon every ~5 weeks) |
| "Why?" / questions per day | **~350/day** | Peak toddler-talk comedic stat (~one every ~2 waking minutes) |
| Rising sign & Moon sign | Leo rising, Aquarius moon | Invented for the star-chart Easter egg, alongside the established Pisces sun sign |

*(All estimates are invented but internally consistent — derivation shown so the plan reads as intentional, not guessed. The parent-sleep-lost stat was retired along with the Sleep scene — see `context/decisions.md`.)*

The adventure map's 5 locations are real places, not invented data — each carries real photos and a short story rather than an estimated stat. Photos were matched to locations by filename/content, with confidence levels logged in `context/decisions.md`; Mom Mom and Grandpop's House has none yet.

---

## 7. Visual direction — flat, bold & cartoony

For the "does it look right?" dimension: bold flat color blocks, hard-edged cartoony drop shadows, and literal, legible charts — a confident, playful editorial look rather than a hand-drawn sketchbook. This direction was arrived at by independently prototyping the story in Figma Make and preferring the result over the project's original crayon/hand-drawn build (see `context/decisions.md` for the full pivot rationale).

- **Aesthetic:** Flat and cartoony. Rounded cards with thin ink borders and a hard, non-blurred offset drop shadow (no soft/blurred shadows) — used consistently on Polaroids, stat pills, quote bubbles, and recap cards. No decorative hand-drawn frame around scenes; clean flat color backgrounds instead.
- **Palette:** The same 5 core crayon hues (red, blue, yellow, green, orange) carried over from the original direction, but used as flat solid fills/borders rather than hand-drawn strokes — plus a deep night-navy + starfield reserved for the star-chart modal.
- **Type:** One typeface throughout — Nunito Sans — with headlines set heavy-weight, uppercase, and tight-tracking for a bold flat-grotesk feel; body copy stays regular-weight for readability.
- **Layout:** Left-aligned two-column scenes (copy left, photo/visual right on desktop, stacking to one column on mobile), with a persistent sticky header ("● 912 DAYS / Scroll to read our story ↓") and phase-numbered eyebrow labels ("Phase 01: Welcome to Diaper City," etc.).
- **Motion:** Bars and ranked lists animate in with a clean, snappy easing on scroll (no wobble). The one deliberate exception is the star-chart modal's constellation SVGs, which keep their original hand-drawn draw-in animation as a framed "interlude" accent, distinct from the rest of the flat system.
- **Charts:** Literal and legible — an axis-labeled bar chart for diapers, a horizontal ranked-bar list for books, an icon-tally card for animal sightings.
- **Photos:** `[PHOTO PLACEHOLDER]` markers left throughout, styled as flat-shadow Polaroids with a small tape accent — one on the title scene, one on diapers, one on books, two (stacked) on outings, one on the closer.

---

## 8. Scope guardrails (to finish ASAP)

- **5 scroll scenes + 1 modal Easter egg, hard cap.** History: started at 7 → split the opening into two (8) → cut the words/vocabulary scene (back to 7) → cut the Sleep scene entirely and moved the star-sign content out of the scroll flow into a click-triggered modal (5 scroll scenes + 1 Easter egg). Each change is logged with its reasoning in `context/decisions.md` — this is intentional iteration, not drift. No further scene creep beyond this.
- **2 interactions, as specified.** Everything else is scroll-only (plus scroll-snapping, so each scene locks into view rather than scrolling past). The star-chart modal is a bonus Easter egg, not a 3rd interaction.
- **Reuse a single component pattern** for each scene (a scene wrapper + a "big number" reveal) rather than bespoke builds per scene.
- **Placeholders over perfection** for photos and bracketed stats — fill last.
- Deploy early, then polish. Password-protect the site per Protogen guidance.

---

## 9. What "done" looks like

- [ ] Live, password-protected, accessible site
- [ ] All 5 scenes scroll end-to-end, plus the star-chart modal opens/closes accessibly
- [ ] 2 playful interactions working (diaper chart, book stack)
- [ ] Flat/cartoony aesthetic evident and intentional
- [ ] Photo placeholders swapped for real images
- [ ] BRIEF.md in repo root, matching the build
- [ ] README.md + LICENSE in root
- [ ] Commit history shows real progress over time
