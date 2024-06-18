export const logginrequest = "LoginRequest"
export const logginsucces = "LogginSucces"
export const logginerror = "logginerror"


export const logginreqaction = (data) => {
    return { type: logginrequest, payload: data }
}
export const logginsuccesaction = (data) => {
    return { type: logginsucces, payload: data }
}
export const ligginerroraction = (data) => {
    return { type: logginerror, payload: data }
}


export const loginfunction = (payload) => {

    return (dispatch) => {
        dispatch(logginreqaction())
        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(payload)
        }).then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    dispatch(logginsuccesaction(res))
                }
                else {
                    dispatch(ligginerroraction("user not found"))
                }
            })
            .catch((error) => { dispatch(ligginerroraction(error.message)), console.log(error) })


    }


}