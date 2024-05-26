import React, { useRef } from "react";
import { useState } from "react";

function Dynamicfocus() {
  const uesreff = useRef([]);
  const [arr, setarr] = useState([""]);

  const focusinput = (index) => {
    if (uesreff.current[index]) {
      uesreff.current[index].focus();
    }
  };

  const addinputfield = () => {
    uesreff.current.push(React.createRef());
    setarr([...arr, ""]);
  };

  return (
    <div>
      {arr.map((ele, index) => (
        <div key={index}>
          <input
            type="text"
            ref={(el) => (uesreff.current[index] = el)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                focusinput(index + 1);
              }
            }}
          />
          <button onClick={() => focusinput(index)}>focus</button>
        </div>
      ))}
      <button onClick={addinputfield}>add</button>
    </div>
  );
}

export default Dynamicfocus;
