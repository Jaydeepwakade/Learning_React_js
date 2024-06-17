import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata, subdata } from '../redux/action'

function Dispatch() {
  const Dispatch = useDispatch()
  const state= useSelector((state)=>state.count)
  const handleadd=()=>{
   const payload="data added"
       Dispatch(adddata(payload))
  }
   const handledelete = ()=>{
   const payload="data removed"
    Dispatch(subdata(payload))
   }
  return (
    <div>{state}
     <button onClick={handleadd}>ADD</button>
     <button onClick={handledelete}>SUB</button>
    </div>
    
  )
}

export default Dispatch