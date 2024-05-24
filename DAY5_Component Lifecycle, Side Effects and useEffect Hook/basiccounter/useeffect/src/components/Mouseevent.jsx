import React, { useEffect, useState } from "react";

function Mouseevent() {
  const [value, setvalue] = useState(0);
  const [flag, setflag] = useState(false);
  function mouselog(event) {
    console.log("mousemoving");
    console.log(event.screenX);
    setvalue(event.clientX);
  }

  useEffect(() => {
    if(flag){  window.addEventListener("mousemove", mouselog);}
    else{
        console.log("tu galat hai")
        window.removeEventListener("mousemove", mouselog);
    }
  

    return () => {
      console.log("clean iup");
      window.removeEventListener("mousemove",()=>{});
    };
  }, [flag]);


  return(
  <div>
    <button onClick={()=>setflag(!flag)}>
    {flag ? "unmount" : "mount the mouseevent"}
    </button>
    {flag &&<h1>{value}</h1>}
    
    </div>

  )
}

export default Mouseevent;
