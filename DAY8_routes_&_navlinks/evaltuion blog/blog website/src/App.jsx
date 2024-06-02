import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
import Detail from './components/Detail'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div>
          <Routes>
            <Route path="/" element={<BlogList/>}/>
            <Route path="add" element={<Add/>}/>
            <Route path="posts/:id" element={<Detail/>}/>
          </Routes>
     
      </div>
    </>
  )
}

export default App
