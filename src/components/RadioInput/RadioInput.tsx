import { ColorOption, FontOption } from "../../App"
import { COLOR_OPTIONS, FONT_OPTIONS } from "../../constants/appOptions"

type RadioInputProps = 
  | { type: 'font', selectedFont: FontOption }
  | { type: 'color', selectedColor: ColorOption }

export default function RadioInput(props: RadioInputProps) {
  const { type } = props

  const options = type === 'font' ?
    FONT_OPTIONS : COLOR_OPTIONS

  const selectedOption = type === 'font' ?
    props.selectedFont : props.selectedColor

  const Input = ({
    option,
    selected
  }: {
    option: string
    selected: boolean
  }) => (
    <label
      htmlFor={option}
      data-selected={selected}
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
      />
    </label>
  )

  return (
    <div>

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
