import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addvalue = () => {
    setCounter(counter + 1)
  }

  const subvalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Press the keys to update the counter value</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Increase Value {counter}</button>
      <button onClick={subvalue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
