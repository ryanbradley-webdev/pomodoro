import styles from './OptionsBar.module.css'

const OPTIONS = [
  'pomodoro',
  'short break',
  'long break'
]

export default function OptionsBar({
  selectedOption,
  setOption
}: {
  selectedOption: string
  setOption: (newOption: string) => void
}) {
  return (
    <ul
      className={styles.options_bar}
      data-selected-option={OPTIONS.indexOf(selectedOption)}
    >
      
      {
        OPTIONS.map((option, idx) => (
          <li
            key={idx}
          >
            <button
              onClick={() => setOption(option)}
            >
              {option}
            </button>
          </li>
        ))
      }

    </ul>
  )
}
