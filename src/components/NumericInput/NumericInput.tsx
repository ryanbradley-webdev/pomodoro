import DownArrowIcon from '../../assets/DownArrowIcon'
import UpArrowIcon from '../../assets/UpArrowIcon'
import { TimerOption, TimerTimes } from '../../lib/types'
import styles from './NumericInput.module.css'

export default function NumericInput({
  label,
  value,
  updateValue
}: {
  label: TimerOption
  value: number
  updateValue: (newTimeField: Partial<TimerTimes>) => void
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value)

    updateValue({ [label]: newValue })
  }

  const incrementValue = () => {
    updateValue({ [label]: value + 1 })
  }

  const decrementValue = () => {
    updateValue({ [label]: value - 1 })
  }

  return (
    <label
      className={styles.label}
      htmlFor={label}
    >

      <span>
        {label}
      </span>

      <input
        type="number"
        name={label}
        id={label}
        value={value}
        onChange={handleChange}
        min={0}
      />

      <button
        onClick={incrementValue}
      >
        <UpArrowIcon />
      </button>

      <button
        onClick={decrementValue}
        disabled={value <= 0}
      >
        <DownArrowIcon />
      </button>

    </label>
  )
}
