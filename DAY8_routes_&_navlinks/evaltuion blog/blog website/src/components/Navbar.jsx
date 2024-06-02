import React from 'react'
 import { NavLink } from 'react-router-dom'
function Navbar() {
  return (

    <div className='bg-red-300 flex justify-center gap-7 text-3xl font-bold'>
       <NavLink to={""}>lists</NavLink>
       <NavLink to={"add"}>Add</NavLink>
      
    </div>
  )
}

export default Navbar