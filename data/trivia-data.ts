export interface TriviaQuestion {
  question: string
  answers: string[]
  correctAnswer: number
}

export const triviaQuestions: TriviaQuestion[] = [
  {
    question: 'How many days did it take God to create the world?',
    answers: ['5 days', '6 days', '7 days', '8 days'],
    correctAnswer: 1,
  },
  {
    question: 'Who was the first man according to the Bible?',
    answers: ['Noah', 'Abraham', 'Adam', 'Moses'],
    correctAnswer: 2,
  },
  {
    question: 'How many commandments did God give to Moses?',
    answers: ['5', '10', '15', '20'],
    correctAnswer: 1,
  },
  {
    question: 'Who is known as the "Father of the Faithful"?',
    answers: ['Isaac', 'Jacob', 'Abraham', 'Joseph'],
    correctAnswer: 2,
  },
  {
    question: 'How many plagues did God send upon Egypt?',
    answers: ['7', '9', '10', '12'],
    correctAnswer: 2,
  },
  {
    question: 'Who was swallowed by a great fish?',
    answers: ['Elijah', 'Jonah', 'Jeremiah', 'Daniel'],
    correctAnswer: 1,
  },
  {
    question: 'What is the longest book in the Bible?',
    answers: ['Genesis', 'Psalms', 'Isaiah', 'Matthew'],
    correctAnswer: 1,
  },
  {
    question: 'How many books are in the New Testament?',
    answers: ['27', '39', '66', '73'],
    correctAnswer: 0,
  },
  {
    question: 'Who baptized Jesus?',
    answers: ['Peter', 'John the Baptist', 'Andrew', 'James'],
    correctAnswer: 1,
  },
  {
    question: 'What is the shortest verse in the Bible?',
    answers: ['John 1:1', 'John 11:35', 'Mark 1:1', 'Luke 1:1'],
    correctAnswer: 1,
  },
  {
    question: 'How many apostles did Jesus choose?',
    answers: ['10', '11', '12', '13'],
    correctAnswer: 2,
  },
  {
    question: 'Who betrayed Jesus?',
    answers: ['Peter', 'Thomas', 'Judas', 'John'],
    correctAnswer: 2,
  },
  {
    question: 'How many times did Peter deny Jesus?',
    answers: ['1', '2', '3', '4'],
    correctAnswer: 2,
  },
  {
    question: 'Who was the first Christian martyr?',
    answers: ['Stephen', 'James', 'Peter', 'Paul'],
    correctAnswer: 0,
  },
  {
    question: 'What was the profession of Matthew before becoming an apostle?',
    answers: ['Fisherman', 'Tax collector', 'Carpenter', 'Shepherd'],
    correctAnswer: 1,
  },
]
