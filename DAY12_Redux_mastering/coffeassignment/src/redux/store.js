
import {applyMiddleware, createStore, combineReducers} from "redux"
import coffereducer from "./reducer";
import {thunk} from "redux-thunk"
import logger from "redux-logger"


const reducer = combineReducers({
    coffee: coffereducer
});

const store= createStore( reducer ,applyMiddleware(thunk,logger))
export default store