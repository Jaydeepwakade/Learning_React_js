import { createStore } from "redux"
const intialzestate = {
    counter: 0
}
const countreducer = (state=intialzestate, action) => {
    switch (action.type) {
        case "increment": return { ...state, counter: state.counter + 1 };
        case "decrement": return { ...state, counter: state.counter >=1 ? state.counter - 1:0 };
        default: return state
    }

}
const store = createStore(countreducer)

export default store