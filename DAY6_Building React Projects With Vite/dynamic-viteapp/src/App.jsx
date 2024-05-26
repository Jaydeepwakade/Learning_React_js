import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dynamicfocus from './assets/components/Dynamicform'
import Validation from './assets/components/Validation'
import Customform from './assets/components/Customform'

function App() {
  

  return (
    <>
     <Dynamicfocus/>
     <Validation/>
     <Customform/>
    </>
  )
}

export default App
