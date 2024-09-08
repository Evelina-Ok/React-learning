import { useState } from 'react'
import { ControlledForm } from './components/ControlledForm/ControlledForm'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ControlledForm />
    </>
  )
}

export default App
