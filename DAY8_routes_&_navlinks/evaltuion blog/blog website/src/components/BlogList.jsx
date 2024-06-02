import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function BlogList() {
       const [data,setData]= useState([])
       document.title="lists"
       useEffect(() => {
        document.title = "lists";
        fetch("http://localhost:3000/posts")
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
          })
          .then(res => setData(res))
          .catch(error => console.error('Fetch error:', error));
      }, []);
    
      function handleDelete(id) {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(() => {
            setData(prevData => prevData.filter(ele => ele.id !== id));
          })
          .catch(error => console.error('There was a problem with the delete request:', error));
      }
  return (

         <div className='flex flex-col gap-5 mt-5 justify-center items-center'>

            <div><h1>click on the title th view the deatils</h1></div>
            {data.map((ele,ind)=>{
          return  (
            <div key={ind} className='flex flex-col justify-center items-center p-2  w-80 gap-3 bg-green-200 box-border shadow-xl rounded-3xl'>
              <h1 className=' text-red-900 text-2xl text-wrap text-center'>Title:-<NavLink to={`posts/${ele.id}`}>{ele.title}</NavLink></h1>
              <p> content:-{ele.content}</p>
              <h1><b>author:{ele.author}</b></h1>
               <h2>catgegory: {ele.category}</h2>
               <button onClick={()=>handleDelete(ele.id)} className=''>Delete</button>
            </div>
          )
  
            })}
    
         </div>
         
  )
}

export default BlogList