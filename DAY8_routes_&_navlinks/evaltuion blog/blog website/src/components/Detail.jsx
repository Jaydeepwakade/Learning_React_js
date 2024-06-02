import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

  const {id} = useParams()
  const [detail,setdetail]=useState({})
  document.title="details"

  useEffect(()=>{
   fetch(`http://localhost:3000/posts/${id}`)
   .then(res=>res.json())
   .then(res=>setdetail(res))
   
  },[])
  console.log(detail)
  return (
    <div className='flex flex-col bg-orange-300 gap-6 text-3xl'>
      <h1><b>Title:-</b> {detail.title}</h1>
      <h1><b>Content:-</b>{detail.content}</h1>
      <h1><b>Author:-</b>   {detail.author}</h1>
      <h1><b>Category;-</b>{detail.category}</h1>
    </div>
  )
}

export default Detail