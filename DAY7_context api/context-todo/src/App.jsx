import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'
import Forminput from './components/Forminput'

function App() {
 

  return (
  <div className='flex flex-col items-center justify-center w-[100vw] gap-10'>
    <Forminput />
     <Todolist/>
  </div>
   

  )
}

export default App
