import { Dispatch, SetStateAction, useEffect, useState } from "react"
import CloseIcon from "../../assets/CloseIcon"
import NumericInput from "../NumericInput/NumericInput"
import RadioInput from "../RadioInput/RadioInput"
import { TIMER_OPTIONS } from "../../constants/appOptions"
import { ColorOption, FontOption, TimerTimes } from "../../lib/types"
import styles from './SettingsModal.module.css'

export default function SettingsModal({
  visible,
  setVisible,
  font,
  color,
  timerTimes
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  font: FontOption
  color: ColorOption
  timerTimes: TimerTimes
}) {
  const [display, setDisplay] = useState('none')

  const closeModal = () => {
    setVisible(false)
  }

  const applySettings = () => {
    setVisible(false)
  }

  useEffect(() => {
    setDisplay(visible ? '' : 'none')
  }, [visible])

  return (
    <aside
      className={styles.modal_container}
      style={{
        display
      }}
    >
      
      <section
        className={styles.modal}
      >

        <div
          className={styles.heading}
        >

          <h2
            className={styles.heading_h2}
          >
            Settings
          </h2>

          <button
            onClick={closeModal}
          >
            <CloseIcon />
          </button>

        </div>

        <div
          className={styles.time_inputs_container}
        >

          <h4>
            TIME (MINUTES)
          </h4>

          <div
            className={styles.time_inputs}
          >

            {TIMER_OPTIONS.map(option => (
              <NumericInput
                key={option}
                label={option}
                value={timerTimes[option]}
                updateValue={newValue => console.log(newValue)}
              />
            ))}

          </div>

        </div>

        <div>

          <h4>
            FONT
          </h4>

          <RadioInput
            selectedFont={font}
            type="font"
          />

        </div>

        <div>

          <h4>
            COLOR
          </h4>

          <RadioInput
            selectedColor={color}
            type="color"
          />

        </div>

        <button
          onClick={applySettings}
        >
          Apply
        </button>

      </section>

    </aside>
  )
}
