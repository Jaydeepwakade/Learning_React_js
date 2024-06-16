

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo, update, updatetodo } from '../Redux/action'

function Showdata() {

    const state = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

    function handleupdate(id){
       dispatch(updatetodo(id,true))
    }

    function handledelete(id){
        dispatch(deletetodo(id))
    }
  return (
    <div>
        {state.map((ele)=>{
            return(
            <div key={ele.id}>
                <h1 style={{backgroundColor:ele.status===false?"red":"green"}}>{ele.title}</h1>
                  <button onClick={()=>{handleupdate(ele.id)}}>{ele.status===false?"mark completed":"mark incomplete"}</button>
                  <button onClick={()=>handledelete(ele.id)}>delete</button>
              
            </div>
                 
            )
        })}
    </div>
  )
}

export default Showdata