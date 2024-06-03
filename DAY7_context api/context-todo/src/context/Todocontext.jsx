import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'



 export const Todocontext = createContext()

function Todoprovider({children}) {
    const [todos ,settodo]=useState([])
    const [flag,setflag]=useState(false)

    function addtodo(todo){
      settodo([...todos ,todo])

    }
    function deletetodo(id){
        settodo( todos.filter(ele=> ele.id !== id))
        
    }
   
  return (
    <Todocontext.Provider value={{todos,addtodo,deletetodo}}>
        {children}
    </Todocontext.Provider>
  )
}

export default Todoprovider