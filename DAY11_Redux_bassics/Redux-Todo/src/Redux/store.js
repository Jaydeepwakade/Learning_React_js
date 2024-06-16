import {createStore} from "redux"
import { DELETE, add, update } from "./action";

const intialstate={
    todos:[]
}
 const reducer = (state=intialstate,action)=>{
   switch (action.type) {
    case add: return{...state, todos:[...state.todos,action.payload]};
    case DELETE:  return{...state, todos:state.todos.filter((todo)=>todo.id !==action.payload)}
    case update:return {...state, todos:state.todos.map((todo)=>
     todo.id===action.payload?{...todo, status:!todo.status}:todo
    )}
    default: return state   
        
   }
 }

 const store = createStore(reducer)

 export default store