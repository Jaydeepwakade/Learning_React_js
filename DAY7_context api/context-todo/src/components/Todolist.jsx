import React from 'react'
import { useContext } from 'react'
import { Todocontext } from '../context/Todocontext'

function Todolist() {

    const {todos,deletetodo,flag,setflag}=useContext(Todocontext)
    const handledelete=(id)=>{
        deletetodo(id)
    }
  return (
    <div className=' flex flex-col gap-4'>
        {
            todos.map((ele)=>{
                return(
                    <div className='bg-green-600 flex flex-col gap-3 items-center w-96' key={ele.id}>
                     <li>{ele.name}</li>
                     <button  className='bg-red-400 w-16 '  onClick={()=>handledelete(ele.id)}>delete</button>
                 
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todolist