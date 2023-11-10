import { ColorOption, FontOption, valueIsColor, valueIsFont } from "../../lib/types"
import { COLOR_OPTIONS, FONT_OPTIONS } from "../../constants/appOptions"
import styles from './RadioInput.module.css'

type RadioInputProps = {
  updateSelectedValue: (type: 'font' | 'color', newValue: FontOption | ColorOption) => void
} & ({ 
  type: 'font', 
  selectedFont: FontOption 
} | { 
  type: 'color', 
  selectedColor: ColorOption
})

export default function RadioInput(props: RadioInputProps) {
  const { type } = props

  const options = type === 'font' ?
    FONT_OPTIONS : COLOR_OPTIONS

  const selectedOption = type === 'font' ?
    props.selectedFont : props.selectedColor

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target

    if (checked && (valueIsFont(id) || valueIsColor(id))) {
      props.updateSelectedValue(type, id)
    }
  }

  const Input = ({
    option,
    selected
  }: {
    option: string
    selected: boolean
  }) => (
    <label
      className={styles.input}
      htmlFor={option}
    >

      {type === 'font' && (
        <span
          style={{
            fontFamily: option
          }}
        >
          Aa
        </span>
      )}

      <input
        type="radio"
        name={type}
        id={option}
        checked={selected}
        onChange={handleChange}
      />
    </label>
  )

  return (
    <div
      className={styles.input_container}
    >

      {options.map(option => (
        <Input
          key={option}
          option={option}
          selected={option === selectedOption}
        />
      ))}

    </div>
  )
}
