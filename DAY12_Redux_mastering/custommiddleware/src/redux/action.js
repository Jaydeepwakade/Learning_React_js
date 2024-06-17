export const add="ADD"
export const sub="SUB"


 export const adddata=(payload)=>{
    return {type:add,payload}
}

 export const subdata=(payload)=>{
  return {type:sub,payload}
}

