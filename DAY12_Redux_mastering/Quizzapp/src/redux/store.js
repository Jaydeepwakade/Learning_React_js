 import {applyMiddleware, combineReducers, createStore,} from 'redux'
import reducer from './Loginreducer'
import {thunk }from "redux-thunk"
import {logger} from "redux-logger"

 export const rootreducer = combineReducers({
 loginreducer:reducer

})

export const stores = createStore(rootreducer,applyMiddleware(thunk,logger))