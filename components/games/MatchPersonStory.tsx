'use client'

import { useState, useEffect } from 'react'
import { biblePersonStories } from '@/data/games-data'
import styles from './games.module.css'

interface Props {
  onBack: () => void
}

interface Match {
  person: string
  story: string
}

interface Selection {
  personIndex: number | null
  storyIndex: number | null
}

export default function MatchPersonStory({ onBack }: Props) {
  const [currentSet, setCurrentSet] = useState<typeof biblePersonStories>([])
  const [shuffledStories, setShuffledStories] = useState<string[]>([])
  const [selection, setSelection] = useState<Selection>({ personIndex: null, storyIndex: null })
  const [matches, setMatches] = useState<Match[]>([])
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    const set = [...biblePersonStories].sort(() => Math.random() - 0.5).slice(0, 4)
    setCurrentSet(set)
    const stories = [...set].map((p) => p.story).sort(() => Math.random() - 0.5)
    setShuffledStories(stories)
    setSelection({ personIndex: null, storyIndex: null })
    setMatches([])
    setMessage('')
  }

  const handlePersonClick = (index: number) => {
    if (matches.some((m) => m.person === currentSet[index].person)) return
    setSelection({ ...selection, personIndex: index })
  }

  const handleStoryClick = (index: number) => {
    if (matches.some((m) => m.story === shuffledStories[index])) return
    setSelection({ ...selection, storyIndex: index })
  }

  useEffect(() => {
    if (selection.personIndex !== null && selection.storyIndex !== null) {
      const person = currentSet[selection.personIndex].person
      const story = shuffledStories[selection.storyIndex]
      const correctStory = currentSet[selection.personIndex].story

      if (story === correctStory) {
        setMatches([...matches, { person, story }])
        setScore(score + 1)
        setMessage('✓ Correct match!')
      } else {
        setMessage('✗ Wrong match. Try again!')
      }

      setTimeout(() => {
        setSelection({ personIndex: null, storyIndex: null })
        setMessage('')
      }, 1000)
    }
  }, [selection.personIndex, selection.storyIndex])

  const handlePlayAgain = () => {
    resetGame()
    setScore(0)
  }

  if (currentSet.length === 0) {
    return <div className={styles.loading}>Loading...</div>
  }

  const isComplete = matches.length === currentSet.length

  return (
    <div className={styles.gameContent}>
      <div className={styles.gameHeader}>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back
        </button>
        <h2>Match Person to Story</h2>
        <span className={styles.gameScore}>{score}/{currentSet.length}</span>
      </div>

      <div className={styles.gameBox}>
        <p className={styles.instruction}>Click a person and then click the matching story</p>

        <div className={styles.matchingContainer}>
          <div className={styles.matchColumn}>
            <h3>People</h3>
            <div className={styles.matchList}>
              {currentSet.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handlePersonClick(index)}
                  className={`${styles.matchItem} ${
                    matches.some((m) => m.person === item.person) ? styles.matched : ''
                  } ${selection.personIndex === index ? styles.selected : ''}`}
                  disabled={matches.some((m) => m.person === item.person)}
                >
                  {item.person}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.matchColumn}>
            <h3>Stories</h3>
            <div className={styles.matchList}>
              {shuffledStories.map((story, index) => (
                <button
                  key={index}
                  onClick={() => handleStoryClick(index)}
                  className={`${styles.matchItem} ${
                    matches.some((m) => m.story === story) ? styles.matched : ''
                  } ${selection.storyIndex === index ? styles.selected : ''}`}
                  disabled={matches.some((m) => m.story === story)}
                >
                  {story}
                </button>
              ))}
            </div>
          </div>
        </div>

        {message && <p className={styles.matchMessage}>{message}</p>}

        {isComplete && (
          <div className={styles.resultBox}>
            <p className={styles.resultMessage}>✓ All matches completed!</p>
            <button className={styles.nextBtn} onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
