import { useState } from 'react'
import OptionsBar from './components/OptionsBar/OptionsBar'
import Timer from './components/Timer/Timer'
import SettingsIcon from './assets/SettingsIcon'
import SettingsModal from './components/SettingsModal/SettingsModal'
import { TIMER_OPTIONS } from './constants/appOptions'
import { TimerOption, AppSettings } from './lib/types'
import './App.css'

function App() {
  const [appSettings, setAppSettings] = useState<AppSettings>({
    font: 'Kumbh Sans',
    color: 'orange',
    timer: 'pomodoro',
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
        selectedOption={appSettings.timer}
        timerOptions={TIMER_OPTIONS}
        setOption={handleSetOption}
      />

      <Timer
        selectedOption={appSettings.timer}
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
        {...appSettings}
      />

    </main>
  )
}

export default App
