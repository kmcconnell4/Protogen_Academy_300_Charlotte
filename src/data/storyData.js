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
  stats: '6 lbs 0 oz, 19.5 in long',
  weight: '6 lbs 0 oz',
  length: '19.5 in',
  sign: 'Pisces',
  realName: 'Charlotte',
  nickname: 'Big Simba',
}

export const favoriteBooks = [
  { title: 'Peekaboo Feelings', reads: 200, color: 'var(--crayon-yellow)', note: 'the OG favorite' },
  { title: 'Grumpy Monkey', reads: 60, color: 'var(--crayon-orange)' },
  { title: 'The Pout-Pout Fish', reads: 45, color: 'var(--crayon-green)' },
  { title: 'Fairy Tales', reads: 25, color: 'var(--crayon-blue)' },
  { title: 'Cinderella', reads: 10, color: 'var(--crayon-red)' },
]

export const honorableMentionBooks = ['Jamberry', 'Green Eggs and Ham', 'The Lion King']

export const favoriteOutings = {
  exhibit: 'Big Cat Falls',
  giraffeFeedings: 6,
}

export const animalTally = [
  { animal: 'The majestic lion (Simba!)', count: 17, icon: '🦁' },
  { animal: 'Super tall giraffes', count: 12, icon: '🦒' },
  { animal: 'Waddling penguins', count: 7, icon: '🐧' },
]

export const locations = [
  {
    id: 'please-touch',
    name: 'Please Touch Museum',
    icon: '🎠',
    color: 'var(--crayon-yellow)',
    x: 18,
    y: 64,
    tagline: 'Please Touch Museum',
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
    story: `${favoriteOutings.exhibit} is the automatic first stop, feeding the giraffes a close second (about ${favoriteOutings.giraffeFeedings} times and counting) — one stop on ${storyStats.expeditions.value} tiny expeditions and counting. Every single animal we saw was officially named "Big Simba" or "Baby Simba."`,
    tally: animalTally,
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
