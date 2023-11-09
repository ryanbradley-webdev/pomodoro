import { useState } from 'react'
import OptionsBar from './components/OptionsBar/OptionsBar'
import Timer from './components/Timer/Timer'
import SettingsIcon from './assets/SettingsIcon'
import SettingsModal from './components/SettingsModal/SettingsModal'
import { AppSettings } from './lib/types'
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

  const toggleSettingsModal = () => {
    setSettingsVisible(!settingsVisible)
  }

  const handleUpdateSettings = (newSettings: Partial<AppSettings>) => {
    setAppSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }))
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
        setOption={handleUpdateSettings}
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
        updateSettings={handleUpdateSettings}
        {...appSettings}
      />

    </main>
  )
}

export default App
