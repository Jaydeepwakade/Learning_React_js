import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);

  function handleOnchange(e) {
    setValue(e.target.value);
  }
  function handlesubmit() {
    setArr([...arr, value]);
    console.log(value);
    setValue("");
  }
  function handleDelete(i) {
    const newarr = arr.filter((_, index) => index != i);
    setArr(newarr);
  }

  return (
    <>
      <input value={value} onChange={handleOnchange} type="text" />
      <button onClick={handlesubmit}>submit</button>
      <ul>
        {arr.map((ele, index) => {
          return (
            <div key={index} style={{ display: "flex", gap: "20px" }}>
              <li>{ele}</li>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;
