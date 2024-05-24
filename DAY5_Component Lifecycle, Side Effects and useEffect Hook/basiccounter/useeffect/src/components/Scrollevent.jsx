import React, { useEffect, useState } from "react";

function Scrollevent() {
  const [flag, setflag] = useState(false);
  const [scrol, setscroll] = useState(0);

  useEffect(() => {
    const handlescroll = () => {
      setscroll(window.scrollY);
      console.log("scrrol detected");
    };

    if (flag) {
      window.addEventListener("scroll", handlescroll);
    }

    return () => {
      window.removeEventListener("scroll", handlescroll);
      console.log("scroll efeect rwmove");
  
    };
  }, [flag]);

  return (
    <div>
      <div style={fixedDivStyle}>
        <button  onClick={() => setflag(!flag)}>{flag ? "unsubscribe":"subscribe"}</button>
        <h1 >{flag ? "mounted" : "unmounted"}</h1>
        {flag ? <h2 >scroll position{scrol}px</h2> : null}
      </div>
      
      
    </div>
  );
}
const fixedDivStyle = {
  position: 'fixed',
  bottom: '10px', // adjust this value to position the div at the desired location
  right: '10px', // adjust this value to position the div at the desired location
  backgroundColor: 'yellow', // just for visibility
  padding: '10px',
  border: '1px solid black'
};

export default Scrollevent;
