import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const[value,setvalue]=useState(0)

  return (
    <div className="App">
      <button onClick={()=>setvalue(value+1)}>increase</button>
      <button onClick={()=>setvalue(value>0? value-1:0)}>decrease</button>
     <h1> count:- {value}</h1>
    </div>
  );
}

export default App;
