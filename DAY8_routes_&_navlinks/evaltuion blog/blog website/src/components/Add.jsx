import React, { useEffect, useRef, useState } from 'react'

function Add() {
    document.title="Add the data"
     const title = useRef()
     const content = useRef()
     const author = useRef()
     const  category = useRef()

     const [userdata ,setuserdata]=useState({})


     useEffect(()=>{
      if(userdata){
    
    fetch(`http://localhost:3000/posts`,{
        method:"POST",
        headers:{
           "content-type":'application/json'
        },
        body:JSON.stringify(userdata)
  
     })
   }


     },[userdata])


     function handlesubmit(e){
        e.preventDefault()
         let obj ={
            title: title.current.value,
            content:content.current.value,
            author:author.current.value,
            category: category.current.value,
         }

         setuserdata(obj)
      
         

     }



  return (
    <div className='flex justify-center items-center bg-violet-500 h-[100vh] gap-5'>
        <form onSubmit={handlesubmit} className='flex flex-col bg-violet-400 w-[400px]  h-60 gap-3 items-center justify-center'>
            <input  ref={title}  className='w-80 text-center' placeholder='Enter the title' type="text" />
            <input  ref={content} className='w-80 text-center' placeholder='Enter the Content' type="text" />
            <input ref={author}  className='w-80 text-center' placeholder='Enter the Author' type="text" />
            <input ref={category}  className='w-80 text-center' type="text" placeholder='Enter the category' />
            <button type='submit' className='bg-yellow-500 w-80'>add</button>
        </form>
    </div>
  )
}

export default Add