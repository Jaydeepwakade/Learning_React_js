import { logginerror, logginrequest, logginsucces } from "./actions";





const intialstate = {
    isauthenticate: false,
    user: null,
    loading: false,
    error: ""

}

const reducer = (state = intialstate, action) => {
    switch (action.type) {
        case logginrequest: return { ...state, loading: true }

        case logginsucces: return { ...state,isauthenticate: true, user: action.payload }

        case logginerror: return { ...state, loading: false, error: action.payload ,isauthenticate:false }

        default: return state

    }
}

export default reducer