import { useState } from 'react'
import OptionsBar from './components/OptionsBar/OptionsBar'
import './App.css'
import Timer from './components/Timer/Timer'

function App() {
  const [option, setOption] = useState('pomodoro')

  const handleSetOption = (newOption: string) => {
    setOption(newOption)
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

    </main>
  )
}

export default App
