import { TimerOption } from '../../lib/types'
import { TIMER_OPTIONS } from '../../constants/appOptions'
import styles from './OptionsBar.module.css'

export default function OptionsBar({
  selectedOption,
  setOption
}: {
  selectedOption: string
  setOption: (newOption: TimerOption) => void
}) {
  return (
    <ul
      className={styles.options_bar}
      data-selected-option={selectedOption}
    >
      
      {
        TIMER_OPTIONS.map((option, idx) => (
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
