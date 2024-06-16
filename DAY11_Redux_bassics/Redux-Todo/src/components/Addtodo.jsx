import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addtodo } from '../Redux/action'

function Addtodo() {

    const dispatch =useDispatch()
    const todos = useSelector((state)=>state.todos)
    const [todo,settodo]=useState('')
    const id = Math.floor(Math.random()*1000)

    const handlesubmit=()=>{
        const newtodo= {
            id:id,
            title:todo,
            status:false
        }
        dispatch(addtodo(newtodo))
        settodo("")
        console.log(newtodo)
    }
  return (
    <div>
        <input value={todo} type="text" onChange={(e)=>settodo(e.target.value)} />
        <button onClick={handlesubmit}>Add todo</button>
    </div>

   
  )
}

export default Addtodo