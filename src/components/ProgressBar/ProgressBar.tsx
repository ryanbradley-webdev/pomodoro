import styles from './ProgressBar.module.css'

export default function ProgressBar() {


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
      />

    </svg>
  )
}
