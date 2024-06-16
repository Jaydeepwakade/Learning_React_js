

 export const add = "ADD"
 export const DELETE= "DELETE"
 export const update = "UPDATE"


export function addtodo(payload){
   return {type:add,payload}
}
export function deletetodo(payload){
    return{
    type:DELETE, payload
}}
export function updatetodo(payload){
    return {type:update,payload}
}