import { useEffect, useRef, useState } from 'react'
import { generateStartTime } from '../../lib/generateStartTime'
import { parseRemainingTime } from '../../lib/parseRemainingTime'
import styles from './Timer.module.css'

export default function Timer({
  selectedOption
}: {
  selectedOption: string
}) {
  const [remainingTime, setRemainingTime] = useState(generateStartTime(selectedOption))
  const [isPaused, setIsPaused] = useState(true)

  const timerInterval = useRef<number | undefined>()

  const resetTimer = () => {
    clearInterval(timerInterval.current)

    timerInterval.current = undefined

    setIsPaused(true)
  }

  const timerFunction = () => {
    setRemainingTime(prev => {
      const newTimeRemaining = prev - 1

      if (newTimeRemaining === 0) {
        resetTimer()
      }

      return newTimeRemaining
    })
  }

  const handleToggleTimer = () => {
    if (timerInterval.current) {
      resetTimer()
    } else {
      timerInterval.current = setInterval(timerFunction, 1000)

      setIsPaused(false)
    }
  }

  useEffect(() => {
    return () => {
      clearInterval(timerInterval.current)

      timerInterval.current = undefined
    }
  }, [])

  return (
    <div
      className={styles.timer}
    >

      {parseRemainingTime(remainingTime)}

      <button
        onClick={handleToggleTimer}
      >
        {remainingTime === 0 ? 
          'RESTART' :
          isPaused ?
            'START' :
            'PAUSE'
        }
      </button>

    </div>
  )
}
