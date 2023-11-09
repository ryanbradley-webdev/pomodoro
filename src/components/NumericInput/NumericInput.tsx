import styles from './NumericInput.module.css'

export default function NumericInput({
  label,
  value,
  updateValue
}: {
  label: string
  value: number
  updateValue: (newValue: number) => void
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value)

    updateValue(newValue)
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

    </label>
  )
}
