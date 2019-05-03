import * as ActionType from "./ActionType"
import axios from "axios"
import { error } from "util";

export const addCounter = (newVale) => ({
    type: ActionType.ADD_COUNTER,
    payload:newVale
})

export const removeCounter = (newVale) => ({
    type: ActionType.REMOVE_COUNTER,
    payload:newVale
})

export const saveComment = (newVale) => ({
    type: ActionType.SAVE_COMMENT,
    payload:newVale
})

export const getEmployee = () => {
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(jsone => {
        return {
            type: ActionType.GET_EMPLOYEE,
            payload:JSON.stringify(jsone.data)
        }
    })
    .catch(error => {
        return {
            type: ActionType.ERROR_GET_EMPLOYEE,
            payload: error
        }
    })    
}