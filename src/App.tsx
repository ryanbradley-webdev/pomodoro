import { useState } from 'react'
import OptionsBar from './components/OptionsBar/OptionsBar'
import './App.css'

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

    </main>
  )
}

export default App
