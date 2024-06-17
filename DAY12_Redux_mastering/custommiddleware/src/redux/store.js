import {applyMiddleware, createStore} from "redux"
import rootreducer from "./reducer"


  const actiontypelogger=(store)=>(next)=>(action)=>{
    console.log("dispatchin the action",action.type)
    next(action)
  }
   const actiontypepayload=(store)=>(next)=>(action)=>{
   console.log("dispathing the payload ",action.payload)
   next(action)
   }


   export const store = createStore(
  rootreducer,
    applyMiddleware(actiontypelogger,actiontypepayload)
  )