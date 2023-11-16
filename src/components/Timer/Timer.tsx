import { useEffect, useRef, useState } from 'react'
import { parseRemainingTime } from '../../lib/parseRemainingTime'
import styles from './Timer.module.css'
import { TimerTimes } from '../../lib/types'
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Timer({
  selectedOption,
  timerTimes
}: {
  selectedOption: 'pomodoro' | 'short break' | 'long break'
  timerTimes: TimerTimes
}) {
  const [remainingTime, setRemainingTime] = useState(timerTimes[selectedOption] * 60)
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
    resetTimer()
    setRemainingTime(timerTimes[selectedOption] * 60)
  }, [timerTimes, selectedOption])

  useEffect(() => {
    return () => {
      resetTimer()
    }
  }, [])

  return (
    <div
      className={styles.timer_container}
    >

      <div
        className={styles.timer}
      >

        <h2
          className={styles.time}
        >

          {parseRemainingTime(remainingTime)}
          
          <button
            className={styles.time_btn}
            onClick={handleToggleTimer}
          >
            &nbsp;{remainingTime === 0 ? 
              'RESTART' :
              isPaused ?
                'START' :
                'PAUSE'
            }
          </button>

        </h2>

        <ProgressBar />

      </div>

    </div>
  )
}
