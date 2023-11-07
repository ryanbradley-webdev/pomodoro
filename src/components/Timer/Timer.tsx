import { useCallback, useEffect, useRef, useState } from 'react'
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

  const timerFunction = useCallback(() => {

    setRemainingTime(prev => {

      const newTimeRemaining = prev - 1

      if (newTimeRemaining === 0) {
        clearInterval(timerInterval.current)
        timerInterval.current = undefined
        setIsPaused(true)
      }

      return newTimeRemaining

    })

  }, [])

  const handleToggleTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current)
      timerInterval.current = undefined
      setIsPaused(true)
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
  }, [timerFunction])

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
