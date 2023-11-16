import styles from './ProgressBar.module.css'

export default function ProgressBar({
  percentageLeft
}: {
  percentageLeft: number
}) {
  const RADIUS = 48
  const CIRCUMFERENCE = Math.PI * RADIUS * 2

  return (
    <svg
      viewBox="0 0 100 100"
      className={styles.container}
    >

      <circle
        strokeWidth={3}
        stroke="var(--selected-color)"
        fill='transparent'
        r={48}
        cx={50}
        cy={50}
        strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
        strokeDashoffset={`${CIRCUMFERENCE * percentageLeft}`}
      />

    </svg>
  )
}
