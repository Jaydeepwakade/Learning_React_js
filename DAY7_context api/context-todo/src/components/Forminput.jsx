import React from "react";
import { useContext } from "react";
import { Todocontext } from "../context/Todocontext";
import { useState } from "react";

function Forminput() {
  const { todos, addtodo } = useContext(Todocontext);
  const [input, setinput] = useState("");
  

  const id = Math.floor(Math.random(100) * 100);
  function onsubmit(e) {
    e.preventDefault();

    if(input===""){
        alert("enter the task")
        return
    }
    const obj = { id: id, name: input };
    addtodo(obj);
    setinput("")
    console.log(todos);
  }
  return (
    <div className=" flex flex-col w-60 bg-red-600 justify-center items-center w-[700px]">
      <input
      value={input}
        className="border border-black"
        placeholder="ENTER THE TODO HERE"
        type="text"
        onChange={(e) => setinput(e.target.value)}
      />
      <button className="bg-yellow-600 p-1 w-34" onClick={onsubmit}>Add todo</button>
    </div>
  );
}

export default Forminput;
