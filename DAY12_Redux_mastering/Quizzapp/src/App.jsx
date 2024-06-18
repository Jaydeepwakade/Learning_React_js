
import './App.css'
import Loginpage from './components/Loginpage'
import {Route, Routes} from "react-router-dom"
import Quiz from './components/Quiz'

function App() {


  return (
    <div>
    
  <Routes>
  <Route path="/" element={<Loginpage />} />
    <Route path='/quiz' Component={Quiz}/>
  </Routes>

    </div>
  )
}

export default App
