import React from 'react'
import { useReducer } from 'react'
const intialstate={
    theme:"light"
}

function reducer(state,action){
    switch (action.type) {
        case "CHANGE": return {theme:state.theme==="dark"?"light":"dark"}
            
          
    
        default: return state
            break;
    }

}
function ThemeChange() {
const [themestate, dispatcher]= useReducer(reducer,intialstate)
  function handletheme(){
      
    dispatcher({type:"CHANGE"})
  }
  return (

    <div style={{height:"200px", backgroundColor:themestate.theme==="dark"?"black":"green",width:"500px",border:"2px solid black"}}>
        <button onClick={handletheme} style={{margin:"100px"}}>DarkTheme</button>
    </div>
  )
}

export default ThemeChange