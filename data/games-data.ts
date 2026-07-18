export interface BibleCharacter {
  id: number
  name: string
  clues: string[]
}

export interface BibleBook {
  id: number
  name: string
  position: number
}

export interface BiblePersonStory {
  id: number
  person: string
  story: string
}

export const bibleCharacters: BibleCharacter[] = [
  {
    id: 1,
    name: 'David',
    clues: [
      'I was a shepherd boy',
      'I defeated Goliath with a sling',
      'I became King of Israel',
      'I played the harp',
    ],
  },
  {
    id: 2,
    name: 'Samson',
    clues: [
      'My strength came from my hair',
      'I was betrayed by Delilah',
      'I fought the Philistines',
      'I pushed down the temple pillars',
    ],
  },
  {
    id: 3,
    name: 'Joseph',
    clues: [
      'I had a coat of many colors',
      'My brothers sold me into slavery',
      'I interpreted dreams',
      'I ruled Egypt as Pharaoh\'s advisor',
    ],
  },
  {
    id: 4,
    name: 'Esther',
    clues: [
      'I was a queen of Persia',
      'I saved my people from destruction',
      'I was an orphan',
      'I risked my life to speak to the king',
    ],
  },
  {
    id: 5,
    name: 'Noah',
    clues: [
      'I built an ark',
      'I survived a great flood',
      'I brought two of every animal',
      'I found grace in God\'s eyes',
    ],
  },
]

export const bibleBooks: BibleBook[] = [
  { id: 1, name: 'Genesis', position: 1 },
  { id: 2, name: 'Exodus', position: 2 },
  { id: 3, name: 'Leviticus', position: 3 },
  { id: 4, name: 'Numbers', position: 4 },
  { id: 5, name: 'Deuteronomy', position: 5 },
  { id: 6, name: 'Joshua', position: 6 },
  { id: 7, name: 'Judges', position: 7 },
  { id: 8, name: '1 Samuel', position: 8 },
  { id: 9, name: '2 Samuel', position: 9 },
  { id: 10, name: '1 Kings', position: 10 },
]

export const biblePersonStories: BiblePersonStory[] = [
  {
    id: 1,
    person: 'Abraham',
    story: 'Father of the faithful who left his homeland at God\'s call',
  },
  {
    id: 2,
    person: 'Moses',
    story: 'Led the Israelites out of Egypt and received the Ten Commandments',
  },
  {
    id: 3,
    person: 'Ruth',
    story: 'A Moabite woman who showed great loyalty to Naomi',
  },
  {
    id: 4,
    person: 'Daniel',
    story: 'Remained faithful to God even in the lion\'s den',
  },
  {
    id: 5,
    person: 'Mary Magdalene',
    story: 'First person to see Jesus after his resurrection',
  },
  {
    id: 6,
    person: 'Timothy',
    story: 'Young pastor who was mentored by the apostle Paul',
  },
]
