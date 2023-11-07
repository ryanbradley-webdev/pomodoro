import { useEffect, useRef, useState } from 'react'
import styles from './Timer.module.css'
import { generateStartTime } from '../../lib/generateStartTime'
import { parseRemainingTime } from '../../lib/parseRemainingTime'

export default function Timer({
  selectedOption
}: {
  selectedOption: string
}) {
  const [remainingTime, setRemainingTime] = useState(generateStartTime(selectedOption))

  const timerInterval = useRef<number | undefined>()

  useEffect(() => {

    timerInterval.current = setInterval(() => {

      setRemainingTime(prev => {

        const newTimeRemaining = prev - 1

        if (newTimeRemaining === 0) {
          clearInterval(timerInterval.current)
        }

        return newTimeRemaining

      })

    }, 1000)

    return () => clearInterval(timerInterval.current)
    
  }, [])

  return (
    <div
      className={styles.timer}
    >

      {parseRemainingTime(remainingTime)}

    </div>
  )
}
