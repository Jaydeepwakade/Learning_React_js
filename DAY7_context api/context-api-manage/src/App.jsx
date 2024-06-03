import React from "react";
import { useContext } from "react";
import { contexttheme } from "./components/ThemContext";
 import Logincom from "./components/Logincom";
import { Usercontext } from "./components/Usercontest";
function App() {
  const { theme, settheme, toggletheme } = useContext(contexttheme);
  const {user}=useContext(Usercontext)
  return (
    <>
      <div
        className={` ${
          theme === "light" ? "bg-pink-300 text-slate-950" : "bg-black"
        } flex flex-col`}
      >
        <button
          onClick={toggletheme}
          className={`border border-white bg-red-700 p-3 text-3xl ${
            theme === "light" ? " bg-pink-300" : "bg-black  text-rose-50"
          }`}
        >
          {theme === "light" ? "light" : "dark"}
        </button>
        
    
      </div>
      <Logincom/>
         
    </>
  );
}

export default App;
