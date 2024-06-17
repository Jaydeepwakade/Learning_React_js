import { add, sub } from "./action";
  const intialstate={
    count:0
  }
const rootreducer=(state=intialstate,action)=>{

    switch (action.type) {
        case add: return {...state , count:state.count+1}

        case sub:return { ...state ,count:state.count>0?state.count-1:0}
            
        default: return state
            
    }
}

export default rootreducer