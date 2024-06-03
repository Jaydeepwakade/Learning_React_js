import React from "react";
import { useState } from "react";
import { createContext } from "react";

 export const contexttheme = createContext();

const ThemContext=({ children })=>{
    const [theme,settheme]=useState("light")

    const toggletheme = ()=>{
      settheme((prevtheme)=>(prevtheme==="light"?"dark":"light"))
    }
  return (
     <contexttheme.Provider value={{theme,settheme, toggletheme}}>
         {children}
         </contexttheme.Provider>
  )
}

export default ThemContext;
