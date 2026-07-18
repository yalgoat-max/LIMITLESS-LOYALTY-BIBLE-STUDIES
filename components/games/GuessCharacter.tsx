'use client'

import { useState, useEffect } from 'react'
import { bibleCharacters } from '@/data/games-data'
import styles from './games.module.css'

interface Props {
  onBack: () => void
}

export default function GuessCharacter({ onBack }: Props) {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0)
  const [currentClueIndex, setCurrentClueIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [message, setMessage] = useState('')
  const [shuffledCharacters, setShuffledCharacters] = useState<typeof bibleCharacters>([])

  useEffect(() => {
    // Shuffle characters
    const shuffled = [...bibleCharacters].sort(() => Math.random() - 0.5)
    setShuffledCharacters(shuffled)
  }, [])

  const currentCharacter = shuffledCharacters[currentCharacterIndex]
  const currentClue = currentCharacter?.clues[currentClueIndex]

  const handleGuess = () => {
    if (!userGuess.trim() || answered) return

    setAnswered(true)
    setTotalAnswered(totalAnswered + 1)

    if (userGuess.toLowerCase() === currentCharacter.name.toLowerCase()) {
      setMessage('✓ Correct!')
      setScore(score + 1)
    } else {
      setMessage(`✗ Wrong! The answer is: ${currentCharacter.name}`)
    }
  }

  const handleNextQuestion = () => {
    if (currentCharacterIndex < shuffledCharacters.length - 1) {
      setCurrentCharacterIndex(currentCharacterIndex + 1)
      setCurrentClueIndex(0)
      setAnswered(false)
      setUserGuess('')
      setMessage('')
    } else {
      // Game complete
      setCurrentCharacterIndex(0)
      setCurrentClueIndex(0)
      setScore(0)
      setTotalAnswered(0)
      setAnswered(false)
      setUserGuess('')
      setMessage('')
      const shuffled = [...bibleCharacters].sort(() => Math.random() - 0.5)
      setShuffledCharacters(shuffled)
    }
  }

  const handleShowNextClue = () => {
    if (currentClueIndex < currentCharacter.clues.length - 1) {
      setCurrentClueIndex(currentClueIndex + 1)
    }
  }

  if (shuffledCharacters.length === 0) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.gameContent}>
      <div className={styles.gameHeader}>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back
        </button>
        <h2>Guess the Bible Character</h2>
        <span className={styles.gameScore}>{score}/{totalAnswered || 1}</span>
      </div>

      <div className={styles.gameBox}>
        <p className={styles.clueNumber}>
          Clue {currentClueIndex + 1} of {currentCharacter.clues.length}
        </p>
        <div className={styles.clueBox}>
          <p className={styles.clue}>"{currentClue}"</p>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter the character name..."
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !answered && handleGuess()}
            disabled={answered}
            className={styles.input}
          />
          <button
            onClick={handleGuess}
            disabled={answered || !userGuess.trim()}
            className={styles.submitBtn}
          >
            Guess
          </button>
        </div>

        {!answered && currentClueIndex < currentCharacter.clues.length - 1 && (
          <button className={styles.hintBtn} onClick={handleShowNextClue}>
            Show Next Clue
          </button>
        )}

        {answered && (
          <div className={styles.resultBox}>
            <p className={styles.resultMessage}>{message}</p>
            <button className={styles.nextBtn} onClick={handleNextQuestion}>
              {currentCharacterIndex === shuffledCharacters.length - 1
                ? 'Play Again'
                : 'Next Character'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
