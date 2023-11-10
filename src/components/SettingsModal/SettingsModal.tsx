import { Dispatch, SetStateAction, useEffect, useState } from "react"
import CloseIcon from "../../assets/CloseIcon"
import NumericInput from "../NumericInput/NumericInput"
import RadioInput from "../RadioInput/RadioInput"
import { TIMER_OPTIONS } from "../../constants/appOptions"
import { AppSettings, ColorOption, FontOption, Prettify, TimerTimes } from "../../lib/types"
import styles from './SettingsModal.module.css'

type TempSettings = Prettify<Omit<AppSettings, 'timer'>>

export default function SettingsModal({
  visible,
  setVisible,
  updateSettings,
  font,
  color,
  timerTimes
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  updateSettings: (newSettings: Partial<AppSettings>) => void
  font: FontOption
  color: ColorOption
  timerTimes: TimerTimes
}) {
  const [display, setDisplay] = useState('none')
  const [tempSettings, setTempSettings] = useState<TempSettings>({
    font,
    color,
    timerTimes
  })

  const closeModal = () => {
    setVisible(false)
  }

  const applySettings = () => {
    updateSettings(tempSettings)
    setVisible(false)
  }

  const handleChangetimerTime = (newTimeField: Partial<TimerTimes>) => {
    setTempSettings(prevSettings => ({
      ...prevSettings,
      timerTimes: {
        ...prevSettings.timerTimes,
        ...newTimeField
      }
    }))
  }

  const handleUpdateSelectedValue = (type: 'font' | 'color', newValue: FontOption | ColorOption) => {
    setTempSettings(prevSettings => ({
      ...prevSettings,
      [type]: newValue
    }))
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
                value={tempSettings.timerTimes[option]}
                updateValue={handleChangetimerTime}
              />
            ))}

          </div>

        </div>

        <div>

          <h4>
            FONT
          </h4>

          <RadioInput
            selectedFont={tempSettings.font}
            type="font"
            updateSelectedValue={handleUpdateSelectedValue}
          />

        </div>

        <div>

          <h4>
            COLOR
          </h4>

          <RadioInput
            selectedColor={tempSettings.color}
            type="color"
            updateSelectedValue={handleUpdateSelectedValue}
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
