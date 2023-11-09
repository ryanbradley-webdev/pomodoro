import { TimerOption } from '../../App'
import { TIMER_OPTIONS } from '../../constants/appOptions'
import styles from './OptionsBar.module.css'

export default function OptionsBar({
  selectedOption,
  timerOptions,
  setOption
}: {
  selectedOption: string
  timerOptions: typeof TIMER_OPTIONS
  setOption: (newOption: TimerOption) => void
}) {
  return (
    <ul
      className={styles.options_bar}
      data-selected-option={selectedOption}
    >
      
      {
        timerOptions.map((option, idx) => (
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
