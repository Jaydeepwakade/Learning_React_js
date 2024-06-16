export const fetchrequest = "Fetchrequest"
export const fetchsuccess = "fetchsucces"
export const fetcherror = "fetcherror"


export function fetchdatareq(){
     return{ type: fetchrequest }
}

export function fetchsuccesres(data) {
     return{
        type: fetchsuccess,
        payload: data
    }
}
export function fetchcoffefailure(error) {
   return {
        type: fetcherror,
        payload: error
    }
}


export function fetchcoffe (sortorder = "asc")  {
  return  function(dispatch){
   dispatch(fetchdatareq())
    fetch( `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?_sort=desc`)
    .then((res)=>res.json())
    .then((data)=>{

        
        dispatch(fetchsuccesres(data.data));
        console.log(data.data)
    })
    .then((error)=>{
        dispatch(fetchcoffefailure(error.message))
    })
  }
}