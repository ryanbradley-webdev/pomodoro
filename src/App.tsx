import { useState } from 'react'
import OptionsBar from './components/OptionsBar/OptionsBar'
import './App.css'
import Timer from './components/Timer/Timer'
import SettingsIcon from './assets/SettingsIcon'
import SettingsModal from './components/SettingsModal/SettingsModal'

function App() {
  const [option, setOption] = useState('pomodoro')
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSetOption = (newOption: string) => {
    setOption(newOption)
  }

  const toggleSettingsModal = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <main
      style={{
        fontFamily: 'Kumbh Sans'
      }}
    >

      <h1>
        pomodoro
      </h1>

      <OptionsBar
        selectedOption={option}
        setOption={handleSetOption}
      />

      <Timer
        selectedOption={option}
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
