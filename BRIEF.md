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

**"Big Simba"** — a 2.5-year-old force of nature.

| Detail | Value |
|---|---|
| Born | March 8, 2024, 2:40 PM |
| Birth stats | 6 lbs 0 oz, 19.5" long |
| Star sign | Pisces ♓ (dreamy, dramatic, deeply feeling — checks out) |
| Insists on being called | "Big Simba" — only. |
| Favorite animal | Lions (obviously), giraffes |
| Favorite movie | The Lion King |
| Favorite songs | "The Goldfish" (Laurie Berkner Band), "Hop Little Bunnies," "Going on a Bear Hunt" |

*(Real personal details are used intentionally so the story feels designed for a specific person, not a generic template.)*

---

## 4. The structure — 7 scenes (scroll-driven)

A **scrollytelling** narrative. Each scene reveals one surprising cumulative stat with a hand-drawn element that animates in as you scroll. Interaction is the icing; the story is the thing.

### Scene 1 — "912 days ago, you were born."
The cover slide. Headline + the 912-day big number, plus a stacked pile of Polaroid-style photo placeholders. Kept deliberately clean — no birth date or facts here, just the title moment.

### Scene 2 — Born under Pisces
The immersive birth-stats moment, split out from the opening so it can breathe: birth date, "tiny but mighty" stats, and the star sign as the visual centerpiece — a deep night-blue starfield background with a crayon Pisces constellation drawing itself in slowly. Light joke about astrology → sets the funny-but-warm tone. *(A full birth chart — all planets/houses — was considered and deferred; see `context/decisions.md`.)*

### Scene 3 — Diaper City → Potty Trained 🚽 *(playful moment #1)*
The big number: **~7,300 diapers**. A hand-drawn chart shows the daily diaper count starting sky-high ("Diaper City") and tapering to a triumphant zero — the "officially potty trained" flag planted at the end. Framed as *"one diaper roughly every 3 hours, nonstop, for 2.5 years."*

### Scene 4 — The sleep you didn't get 😴
The parent-perspective twist. Cumulative hours of *your* lost sleep, drawn as a crayon moon that fills in. The one scene that's about the grown-ups — reframes the "cute" data as real labor.

### Scene 5 — The book stack 📚 *(playful moment #2)*
As you scroll, favorite books **physically stack on top of each other**, oldest-favorite at the bottom:
1. *Peekaboo Feelings* (the OG — read an estimated **200 times**)
2. *Grumpy Monkey*
3. *Pout-Pout Fish*
4. *Fairy Tales*
5. *Cinderella*

Big number: **~340 books read**, with a callout for the one read 200 times. *(Other faves — Jamberry, Green Eggs and Ham, Lion King — can join the stack or live in a "the whole shelf" moment.)*

### Scene 6 — 48 tiny expeditions 🦒
Zoo & outings: **~2 trips a month since she was 6 months old = ~48 trips.** Big Cat Falls is the automatic first stop; feeding the giraffes is a close second (about 6 times and counting — real photos to come). Hand-drawn lions and giraffes. Playful, visual, breezy — a palate cleanser before the emotional close.

### Scene 7 — The closer 🦁
The equation builds one term at a time as the scene comes into view — *7,300 diapers, then + 340 books, + 48 expeditions, + a thousand mispronounced words* — each in its own crayon color, before landing on the payoff: **"One kid. 912 days."** Ends on the keepsake note — warm, a little devastating, entirely earned.

---

## 5. The two playful interactions (kept intentionally light)

| # | Scene | Interaction | Why it stays finishable |
|---|---|---|---|
| 1 | Diapers | Animated hand-drawn chart: high → zero ("potty trained!") | Triggered on scroll, no complex state |
| 2 | Books | Books stack progressively as you scroll | Sequential reveal, pure CSS/scroll animation |

*(A third interaction — a "then → now" word-pronunciation toggle — was cut along with its scene; see `context/decisions.md`. Interaction is icing, not the point, so 2 is fine.)*

Primary interaction across the whole piece = **scroll progress**, reinforced by scroll-snapping so each scene locks into focus rather than scrolling past like a plain list. Everything else is a light accent so the build stays fast.

---

## 6. The data (invented + estimated)

All figures are believable estimates, not real logs — per the P302 brief, the goal is the story, not the dataset.

| Metric | Estimate | How it's derived |
|---|---|---|
| Total days | ~912 | Born 3/8/24 → ~2.5 years |
| Diapers | ~7,300 | ~8/day tapering to 0 at potty training (~age 2.5) |
| The one book, on repeat | ~200 reads | *Peekaboo Feelings* |
| Total books read | ~340 | Rotating shelf of favorites over 2.5 years |
| Zoo / outings | ~48 | 2/month since 6 months old |
| Parent sleep lost | **~1,200 hours (~50 full days)** | Yr 1: ~2 hrs/night lost × 365 ≈ 730; Yr 2: ~0.75 hrs × 365 ≈ 275; last 6 mo: ~0.3 hrs × 182 ≈ 55; + illness/teething buffer ≈ 1,200 |
| Naps taken | **~1,500** | ~4/day as newborn → 2/day → 1/day, tapering across 912 days |
| Miles carried | **~250 miles** | ~0.25 mi/day carried/worn, avg across 912 days (~a marathon every ~5 weeks) |
| "Why?" / questions per day | **~350/day** | Peak toddler-talk comedic stat (~one every ~2 waking minutes) |

*(All estimates are invented but internally consistent — derivation shown so the plan reads as intentional, not guessed.)*

---

## 7. Visual direction — bold crayon / gleeful chaos

For the "does it look right?" dimension: the medium matches the subject. A polished corporate chart would fight the story; a childlike sketchbook feel makes it feel drawn *by* and *for* a toddler.

- **Aesthetic:** Sketchbook / crayon. Imperfect, slightly wobbly hand-drawn lines. Paper or construction-paper texture background. Every scene is framed by a single hand-traced wobbly outline (one imperfect line, not a crisp geometric border) that draws itself in on scroll.
- **Palette:** **Bold primary crayon** — gleeful chaos, but curated to ~5 core colors (crayon red, blue, yellow, green, orange) plus a deep night-blue + starfield for the star-sign scene, so it reads intentional, not like the whole 64-box.
- **Type:** Hand-lettered / crayon display font for headlines + a clean, highly readable body font (legibility over gimmick).
- **Motion:** Elements "draw themselves" in on scroll. Slightly wobbly, playful easing. Nothing snappy or corporate.
- **Charts:** Hand-drawn style — squiggly axes, crayon-filled bars, hand-sketched icons (lions, giraffes, moons, books).
- **Photos:** `[PHOTO PLACEHOLDER]` markers left throughout — real photos of Big Simba to be dropped in (a stacked Polaroid-style trio on the title scene, plus book stack, feeding the giraffes, and closer).

---

## 8. Scope guardrails (to finish ASAP)

- **7 scenes, hard cap.** The opening was split into a title slide and an immersive birth-stats/star-sign scene (a cover moment and an immersive one are two different emotional beats), and the vocabulary/words scene was cut entirely as inaccurate to how much Big Simba actually talks now — net still 7. No further scene creep beyond this.
- **2 interactions, as specified.** Everything else is scroll-only (plus scroll-snapping, so each scene locks into view rather than scrolling past).
- **Reuse a single component pattern** for each scene (a scene wrapper + a "big number" reveal) rather than bespoke builds per scene.
- **Placeholders over perfection** for photos and bracketed stats — fill last.
- Deploy early, then polish. Password-protect the site per Protogen guidance.

---

## 9. What "done" looks like

- [ ] Live, password-protected, accessible site
- [ ] All 7 scenes scroll end-to-end
- [ ] 2 playful interactions working (diaper chart, book stack)
- [ ] Crayon aesthetic evident and intentional
- [ ] Photo placeholders swapped for real images
- [ ] BRIEF.md in repo root, matching the build
- [ ] README.md + LICENSE in root
- [ ] Commit history shows real progress over time
