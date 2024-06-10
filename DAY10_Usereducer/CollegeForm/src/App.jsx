import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Collegeform from './Components/Collegeform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Collegeform/>
    </>
  )
}

export default App
