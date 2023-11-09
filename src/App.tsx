import { useState } from 'react'
import OptionsBar from './components/OptionsBar/OptionsBar'
import Timer from './components/Timer/Timer'
import SettingsIcon from './assets/SettingsIcon'
import SettingsModal from './components/SettingsModal/SettingsModal'
import './App.css'

export type Font = 'Kumbh Sans' | 'Roboto Slab' | 'Space Mono'
export type Color = 'orange' | 'teal' | 'purple'
export type TimerOption = 'pomodoro' | 'short break' | 'long break'

type AppSettings = {
  font: Font
  fontOptions: [
    'Kumbh Sans',
    'Roboto Slab',
    'Space Mono'
  ]
  color: Color
  colorOptions: [
    'orange',
    'teal',
    'purple'
  ]
  timerOption: TimerOption
  timerOptions: [
    'pomodoro',
    'short break',
    'long break'
  ]
  timerTimes: {
    ['pomodoro']: number,
    ['short break']: number,
    ['long break']: number
  }
}

function App() {
  const [appSettings, setAppSettings] = useState<AppSettings>({
    font: 'Kumbh Sans',
    fontOptions: [
      'Kumbh Sans',
      'Roboto Slab',
      'Space Mono'
    ],
    color: 'orange',
    colorOptions: [
      'orange',
      'teal',
      'purple'
    ],
    timerOption: 'pomodoro',
    timerOptions: [
      'pomodoro',
      'short break',
      'long break'
    ],
    timerTimes: {
      ['pomodoro']: 25,
      ['short break']: 5,
      ['long break']: 15
    }
  })

  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSetOption = (newOption: TimerOption) => {
    setAppSettings(prevSettings => ({
      ...prevSettings,
      timerOption: newOption
    }))
  }

  const toggleSettingsModal = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <main
      style={{
        fontFamily: appSettings.font
      }}
      data-color-option={appSettings.color}
    >

      <h1>
        pomodoro
      </h1>

      <OptionsBar
        selectedOption={appSettings.timerOption}
        timerOptions={appSettings.timerOptions}
        setOption={handleSetOption}
      />

      <Timer
        selectedOption={appSettings.timerOption}
        timerTimes={appSettings.timerTimes}
      />

      <button
        className='settings_btn'
        onClick={toggleSettingsModal}
      >
        <SettingsIcon />
      </button>
      
      <SettingsModal
        visible={settingsVisible}
        setVisible={setSettingsVisible}
      />

    </main>
  )
}

export default App
