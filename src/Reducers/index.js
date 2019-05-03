import { combineReducers } from "redux";
import {CounterReducer} from "./CounterReducer"
import {EmployeeReducers} from "./EmployeeReducers"

const counterAppReducer = combineReducers({
    counter : CounterReducer,
    employees : EmployeeReducers
})

export default counterAppReducer;