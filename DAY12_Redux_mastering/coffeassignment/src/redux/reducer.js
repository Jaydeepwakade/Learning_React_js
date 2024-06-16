import { fetcherror, fetchrequest, fetchsuccess } from "./action"

  const intialstate={
     loading:false,
     coffelist:[],
     erorr:""
  }


 const coffereducer =(state=intialstate,action)=>{

    switch (action.type) {
        case fetchrequest: return {...state, loading:true}
        case fetchsuccess: return {...state, loading: false , coffelist:action.payload,error:""}
        case fetcherror: return{...state,loading:false, coffelist:[], error:action.payload}
            
        default: return state
    }

 }
 export default coffereducer