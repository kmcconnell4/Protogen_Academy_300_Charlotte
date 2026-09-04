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
  { animal: 'The majestic lion (Simba!)', count: 17 },
  { animal: 'Super tall giraffes', count: 12 },
  { animal: 'Waddling penguins', count: 7 },
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
