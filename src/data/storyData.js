export const storyStats = {
  diapers: { value: '~7,300', label: 'diapers', detail: 'One about every 3 hours, nonstop.' },
  books: { value: '~340', label: 'books read', detail: 'Peekaboo Feelings: about 200 times.' },
  expeditions: { value: '~48', label: 'tiny expeditions', detail: 'About two trips a month since six months old.' },
  naps: { value: '~1,500', label: 'naps taken' },
  carried: { value: '~250', label: 'miles carried', detail: 'A marathon about every five weeks.' },
  questions: { value: '~350', label: 'why?s per day', detail: 'About one every two waking minutes.' },
}

export const birthDetails = {
  born: 'March 8, 2024, 2:40 PM',
  date: 'March 8, 2024',
  time: '2:40 PM',
  bornISO: '2024-03-08T14:40:00',
  stats: '6 lbs 0 oz, 19.5 in long',
  weight: '6 lbs 0 oz',
  length: '19.5 in',
  sign: 'Pisces',
  realName: 'Charlotte',
  nickname: 'Big Simba',
}

export function getDaysSinceBirth() {
  return Math.floor((Date.now() - new Date(birthDetails.bornISO).getTime()) / 86400000)
}

// Real logged measurements (pediatrician growth-tracker export) — not estimated.
export const growthChart = [
  { months: 0, label: 'Birth', date: 'Mar 8, 2024', charlotte: 19.5, percentile: 53.4 },
  { months: 0.1, label: '0.1mo', date: 'Mar 11, 2024', charlotte: 19.3, percentile: 37.7 },
  { months: 1.1, label: '1.1mo', date: 'Apr 11, 2024', charlotte: 21.3, percentile: 51.6 },
  { months: 2, label: '2mo', date: 'May 9, 2024', charlotte: 22.2, percentile: 45.1 },
  { months: 4, label: '4mo', date: 'Jul 9, 2024', charlotte: 25, percentile: 78 },
  { months: 9.1, label: '9.1mo', date: 'Dec 10, 2024', charlotte: 28.3, percentile: 76.5 },
  { months: 12.1, label: '12.1mo', date: 'Mar 11, 2025', charlotte: 30.5, percentile: 89.5 },
  { months: 15.1, label: '15.1mo', date: 'Jun 10, 2025', charlotte: 30.9, percentile: 65.3 },
  { months: 22.7, label: '22.7mo', date: 'Jan 27, 2026', charlotte: 34, percentile: 69.7 },
  { months: 24, label: '24mo', date: 'Mar 10, 2026', charlotte: 35, percentile: 81.9 },
]

export const growthStats = {
  weightThen: birthDetails.weight,
  weightThenValue: 6,
  weightNow: '29 lbs',
  weightNowValue: 29,
  heightThenValue: 19.5,
  heightNowValue: 35,
  heightPercentile: 82,
  shoeSize: { then: 'Newborn', now: 'Toddler 7' },
  wardrobe: { then: 'Newborn', now: '3T' },
}

// Curated from the owner's full tracked-milestone log (30+ entries) — not every
// tracked first is shown, just a pace-and-variety-picked subset. See context/decisions.md.
// Each entry uses real video/photo where the owner shot one for it (filenames
// prefixed TIMELINE_); otherwise it falls back to a representative emoji.
export const milestones = [
  {
    id: 'first-laugh',
    ageMonths: 4,
    ageLabel: '4 months',
    title: 'First laugh',
    description: 'A tickle to the belly turned into the first real giggle.',
    media: { type: 'video', src: '/photos/TIMELINE_Laughing.MOV', alt: 'Charlotte laughing for the first time' },
  },
  {
    id: 'first-bite',
    ageMonths: 4.5,
    ageLabel: '4.5 months',
    title: 'First bite of real food',
    description: 'Held up for inspection first, then devoured — self-feeding from day one.',
    media: { type: 'photo', src: '/photos/TIMELINE_Blueberries.jpeg', alt: 'Charlotte eating blueberries' },
  },
  {
    id: 'first-tooth',
    ageMonths: 6,
    ageLabel: '6 months',
    title: 'First tooth',
    description: 'Two brand-new teeth on the bottom, right on schedule.',
    emoji: '🦷',
  },
  {
    id: 'first-word',
    ageMonths: 8,
    ageLabel: '8 months',
    title: 'First word: "Hi"',
    description: 'Said to absolutely everyone, whether they said it first or not.',
    media: { type: 'video', src: '/photos/TIMELINE_talking.mov', alt: 'Charlotte talking' },
  },
  {
    id: 'first-step',
    ageMonths: 10.5,
    ageLabel: '10.5 months',
    title: 'First step',
    description: 'Wobbly, brief, and immediately followed by a proud round of applause.',
    media: { type: 'video', src: '/photos/TIMELINE_walking.mov', alt: 'Charlotte taking her first steps' },
  },
  {
    id: 'crawling',
    ageMonths: 12,
    ageLabel: '12 months',
    title: 'Crawling... consistently',
    description: "Yes, after she'd already figured out walking. Priorities.",
    emoji: '🐛',
  },
  {
    id: 'first-sentence',
    ageMonths: 15,
    ageLabel: '15 months',
    title: 'First sentence: "Bye bye dada"',
    description: 'Short, sweet, and devastating to Dad.',
    emoji: '👋',
  },
  {
    id: 'peekaboo',
    ageMonths: 16,
    ageLabel: '16 months',
    title: 'Peekaboo',
    description: 'The bit that never stops being funny, apparently for either of you.',
    media: { type: 'video', src: '/photos/TIMELINE_PEEKABOO.MOV', alt: 'Charlotte playing peekaboo' },
  },
  {
    id: 'singing',
    ageMonths: 21,
    ageLabel: '21 months',
    title: 'Singing (and dancing)',
    description: 'Full performances, on request or not.',
    media: { type: 'video', src: '/photos/TIMELINE_Dancing.MOV', alt: 'Charlotte dancing' },
  },
  {
    id: 'potty-trained',
    ageMonths: 23.5,
    ageLabel: '22–25 months',
    title: 'Officially potty trained',
    description: `From ${storyStats.diapers.value} diapers to zero — the Diaper City saga finally wraps.`,
    emoji: '🚽',
  },
  {
    id: 'spelled-name',
    ageMonths: 30,
    ageLabel: '~2.5 years',
    title: 'Spelled her own name',
    description: 'C-H-A-R-L-O-T-T-E, letter by letter, completely unprompted.',
    media: { type: 'video', src: '/photos/TIMELINE_SPELLING.mov', alt: 'Charlotte spelling her name' },
  },
]

export const favoriteBooks = [
  { title: 'Peekaboo Feelings', reads: 200, color: 'var(--crayon-yellow)', note: 'the OG favorite' },
  { title: 'Grumpy Monkey', reads: 60, color: 'var(--crayon-orange)' },
  { title: 'The Pout-Pout Fish', reads: 45, color: 'var(--crayon-green)' },
  { title: 'Fairy Tales', reads: 25, color: 'var(--crayon-blue)' },
  { title: 'Cinderella', reads: 10, color: 'var(--crayon-red)' },
]

export const favoriteOutings = {
  exhibit: 'Big Cat Falls',
  giraffeFeedings: 6,
}

export const locations = [
  {
    id: 'please-touch',
    name: 'Please Touch Museum',
    icon: '🎠',
    color: 'var(--crayon-yellow)',
    x: 18,
    y: 64,
    tagline: 'Please Touch Museum',
    place: 'Philadelphia, PA',
    hoverStats: [
      { value: 5, label: 'visits' },
      { value: 2, label: 'illnesses contracted' },
    ],
    story: 'Carousel rides, a tractor to "drive," and a whole museum built for little hands to explore.',
    photos: [
      { src: '/photos/PleaseTouch1.jpeg', alt: 'Charlotte and a family member riding a carousel horse together' },
      { src: '/photos/PleaseTouch2.jpeg', alt: 'Charlotte steering a ride-on toy tractor with a family member' },
      { src: '/photos/PleaseTouch3.jpeg', alt: 'Dad pushing Charlotte on a tricycle in front of the museum building' },
      { src: '/photos/PleaseTouch4.jpeg', alt: 'Charlotte holding a yellow toy in the water-play exhibit' },
      { src: '/photos/PleaseTouch_Carousel_Pappy.jpeg', alt: 'Pappy riding the carousel with Charlotte on a carved pig figure' },
    ],
  },
  {
    id: 'zoo',
    name: 'Philadelphia Zoo',
    icon: '🦒',
    color: 'var(--crayon-orange)',
    x: 40,
    y: 76,
    tagline: 'The Zoo',
    place: 'Philadelphia, PA',
    hoverStats: [
      { value: 15, label: 'visits' },
      { value: favoriteOutings.giraffeFeedings, label: 'giraffes fed' },
    ],
    story: `${favoriteOutings.exhibit} is the automatic first stop, feeding the giraffes a close second (about ${favoriteOutings.giraffeFeedings} times and counting) — one stop on ${storyStats.expeditions.value} tiny expeditions and counting. Every single animal we saw was officially named "Big Simba" or "Baby Simba."`,
    photos: [
      { src: '/photos/ZOO_Giraffes_1.jpeg', alt: 'Charlotte, held by a family member, reaching out to feed a giraffe' },
      { src: '/photos/ZOO_Giraffes_2.jpeg', alt: 'Charlotte, held by her dad, feeding a giraffe leaves through a fence' },
      { src: '/photos/Zoo_Mommom.jpeg', alt: 'Charlotte and Mom Mom at the zoo' },
      { src: '/photos/ZOO_Gorilla.jpeg', alt: 'Charlotte at the gorilla habitat' },
      { src: '/photos/ZOO_Tiger.jpeg', alt: 'Charlotte at the tiger exhibit' },
      { src: '/photos/ZOO_Halloween.jpeg', alt: "Charlotte and her dad in Halloween costumes at the zoo's spider exhibit" },
      { src: '/photos/ZOO_Lion_carousel.jpeg', alt: 'Charlotte sitting on a carved lion carousel figure at the zoo' },
    ],
  },
  {
    id: 'aquarium',
    name: 'Adventure Aquarium',
    icon: '🐠',
    color: 'var(--crayon-blue)',
    x: 64,
    y: 84,
    tagline: 'The Aquarium',
    place: 'Camden, NJ',
    hoverStats: [
      { value: 9, label: 'visits' },
      { value: 3, label: 'stingrays petted' },
    ],
    story: 'Face-to-face with sea turtles, seals, and hippos — a whole ocean (and then some) without getting wet.',
    photos: [
      { src: '/photos/Aquarium.jpeg', alt: 'Charlotte at Adventure Aquarium' },
      { src: '/photos/AQUARIUM_Sea_Turtle.jpeg', alt: 'Charlotte looking at a sea turtle' },
      { src: '/photos/Seal.jpeg', alt: 'Charlotte watching a seal' },
      { src: '/photos/AQUARIUM_Hippo.JPG', alt: "Charlotte at the aquarium's hippo exhibit" },
    ],
  },
  {
    id: 'mommom-grandpop',
    name: "Mom Mom and Grandpop's House",
    icon: '🏠',
    color: 'var(--crayon-red)',
    x: 58,
    y: 42,
    tagline: "Mom Mom's House",
    place: 'Newtown, PA',
    hoverStats: [
      { value: 10, label: 'visits' },
      { value: 'Too many', label: 'Christmas presents opened' },
    ],
    story: 'Holidays are always a little louder — and a little better — at Mom Mom and Grandpop\'s.',
    photos: [
      { src: '/photos/MomMom_Christmas.jpeg', alt: "Charlotte in a green dress by the Christmas tree at Mom Mom's" },
      { src: '/photos/MomMom_Thanksgiving.jpeg', alt: 'Charlotte with her cousins on the couch at Thanksgiving' },
      { src: '/photos/MomMom_easter.jpeg', alt: 'Charlotte wearing bunny ears at Easter' },
    ],
  },
  {
    id: 'pappys',
    name: "PG & Pappy's House",
    icon: '🏡',
    color: 'var(--crayon-green)',
    x: 70,
    y: 12,
    tagline: "PG's House",
    place: 'Beach Lake, PA',
    hoverStats: [
      { value: 6, label: 'visits' },
      { value: 1, label: 'baby goat petted' },
    ],
    story: 'Lake days and baby goats — the whole point of a trip up to Beach Lake.',
    photos: [
      { src: '/photos/PGs_Dad_Lake.jpeg', alt: "Charlotte and her dad by the lake at PG and Pappy's house" },
      { src: '/photos/PGs_Baby_Goat.jpeg', alt: 'Charlotte holding a baby goat at the farm' },
      { src: '/photos/PGs_Dad_Snow.jpeg', alt: "Charlotte and her dad in the snow at PG and Pappy's" },
      { src: '/photos/PGs_Horse.jpeg', alt: 'Charlotte on a horse in the barn' },
      { src: '/photos/PGs_Doody.jpeg', alt: 'Charlotte making a silly face during an outing' },
      { src: '/photos/PGs_Silly.jpeg', alt: 'Charlotte being silly outside' },
    ],
  },
]

export const diaperRateByPeriod = [
  { label: 'Mo 1–3', value: 10, color: 'var(--crayon-red)' },
  { label: 'Mo 4–8', value: 8, color: 'var(--crayon-orange)' },
  { label: 'Mo 9–15', value: 6, color: 'var(--crayon-yellow)' },
  { label: 'Mo 16–24', value: 3, color: 'var(--crayon-blue)' },
  { label: 'Today', value: 0, color: 'var(--crayon-green)', flag: 'Officially potty trained!' },
]

export const birthChart = [
  {
    kind: 'sun',
    icon: '☉',
    label: 'Sun',
    sign: 'Pisces',
    degree: '18°43\'28" · Eighth House',
    blurb: 'Dreamy, dramatic, deeply feeling — checks out.',
    constellation: {
      path: 'M22 111L72 44L126 76L178 22L218 95',
      points: [
        [22, 111],
        [72, 44],
        [126, 76],
        [178, 22],
        [218, 95],
      ],
    },
  },
  {
    kind: 'rising',
    icon: '⊖',
    label: 'Rising sign',
    sign: 'Leo',
    degree: '9°52\'42" · First House',
    blurb: 'Natural charisma and zest for life. A bold, radiant personality that walks into a room already narrating the story.',
    constellation: {
      path: 'M30 100L70 55L115 40L150 60L120 95L170 110L210 75',
      points: [
        [30, 100],
        [70, 55],
        [115, 40],
        [150, 60],
        [120, 95],
        [170, 110],
        [210, 75],
      ],
    },
  },
  {
    kind: 'moon',
    icon: '☽',
    label: 'Moon',
    sign: 'Aquarius',
    degree: '26°36\'4" · Seventh House',
    blurb: 'Originality and independence, even at 2.5. Emotional fulfillment comes from connections that let her be exactly herself.',
    constellation: {
      path: 'M20 60L55 90L90 60L125 90L160 60L195 90L220 65',
      points: [
        [20, 60],
        [55, 90],
        [90, 60],
        [125, 90],
        [160, 60],
        [195, 90],
        [220, 65],
      ],
    },
  },
]
