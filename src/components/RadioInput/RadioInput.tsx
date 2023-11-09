export default function RadioInput({
  options,
  type
}: {
  options: string[]
  type: 'font' | 'color'
}) {
  const Input = ({ option }: { option: string }) => (
    <label
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
      />
    </label>
  )

  return (
    <div>

      {options.map(option => (
        <Input
          option={option}
        />
      ))}

    </div>
  )
}
