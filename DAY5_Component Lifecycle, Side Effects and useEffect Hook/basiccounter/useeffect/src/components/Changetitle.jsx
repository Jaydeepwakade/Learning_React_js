import React, { useEffect, useState } from 'react'

function Changetitle() {
    const [sflag,setsflag]=useState(false)
    const [value,setvalue]=useState("")

     useEffect(()=>{
    if(value){
        document.title= value
    }
            
        

        return ()=>{
            document.title="unmount"
        };
     },[value])

  return (
    <div>
       
       
            <h1>dynamic title</h1>

        <input onChange={(e)=>setvalue(e.target.value)} type="text" />
    </div>
  )
}

export default Changetitle