import { combineReducers } from "redux";
import {CounterReducer} from "./CounterReducer"

const counterAppReducer = combineReducers({
    counter : CounterReducer
})

export default counterAppReducer;