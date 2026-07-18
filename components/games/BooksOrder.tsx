'use client'

import { useState, useEffect } from 'react'
import { bibleBooks } from '@/data/games-data'
import styles from './games.module.css'

interface Props {
  onBack: () => void
}

interface BookItem {
  id: number
  name: string
  position: number
}

export default function BooksOrder({ onBack }: Props) {
  const [books, setBooks] = useState<BookItem[]>([])
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [message, setMessage] = useState('')
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    const shuffled = [...bibleBooks.slice(0, 5)].sort(() => Math.random() - 0.5)
    setBooks(shuffled)
    setMessage('')
    setShowResult(false)
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('index', String(index))
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetIndex: number) => {
    e.preventDefault()
    const sourceIndex = parseInt(e.dataTransfer.getData('index'))

    if (sourceIndex === targetIndex) return

    const newBooks = [...books]
    const [draggedBook] = newBooks.splice(sourceIndex, 1)
    newBooks.splice(targetIndex, 0, draggedBook)
    setBooks(newBooks)
  }

  const handleCheckOrder = () => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    const isCorrect = books.every((book, index) => {
      const expectedPosition = books[index].position
      return index === 0 || expectedPosition > books[index - 1].position
    })

    if (isCorrect) {
      setMessage('✓ Perfect! The books are in the correct order!')
      setScore(score + 1)
      setShowResult(true)
    } else {
      setMessage('✗ Not quite right. Keep trying!')
    }
  }

  const handlePlayAgain = () => {
    resetGame()
    setAttempts(0)
  }

  return (
    <div className={styles.gameContent}>
      <div className={styles.gameHeader}>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back
        </button>
        <h2>Books of the Bible Order</h2>
        <span className={styles.gameScore}>{score} Correct</span>
      </div>

      <div className={styles.gameBox}>
        <p className={styles.instruction}>
          Drag and drop the books in the correct order
        </p>

        <div className={styles.dragDropContainer}>
          {books.map((book, index) => (
            <div
              key={book.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={styles.dragItem}
            >
              {book.name}
            </div>
          ))}
        </div>

        {!showResult && (
          <button className={styles.checkBtn} onClick={handleCheckOrder}>
            Check Order
          </button>
        )}

        {showResult && (
          <div className={styles.resultBox}>
            <p className={styles.resultMessage}>{message}</p>
            <p className={styles.attempts}>Attempts: {attempts}</p>
            <button className={styles.nextBtn} onClick={handlePlayAgain}>
              Next Round
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
