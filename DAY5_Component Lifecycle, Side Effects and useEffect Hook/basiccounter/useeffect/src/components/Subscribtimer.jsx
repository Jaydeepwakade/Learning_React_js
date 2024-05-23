import React, { useEffect, useState } from "react";

function Subscribtimer() {
  const [flag, setflag] = useState(false);
  const [time, settimer] = useState(0);
 
  useEffect(() => {
    let increasetime
     if(flag){
        increasetime = setInterval(() => {
            
            settimer((prevtime) => prevtime+1);
            console.log(time)
          }, 1000);
     }
     else{
        settimer(0)
     }

    return () => {
      clearInterval(increasetime);
    };
  }, [flag]);
  return (
    <div>
      <button onClick={() => setflag(!flag)}>subscribe</button>
      <h1>{flag ? time : "bye"}</h1>
    </div>
  );
}

export default Subscribtimer;
