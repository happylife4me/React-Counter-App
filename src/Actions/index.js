import * as ActionType from "./ActionType"

export const addCounter = (newVale) => ({
    type: ActionType.ADD_COUNTER,
    payload:newVale
})

export const removeCounter = (newVale) => ({
    type: ActionType.REMOVE_COUNTER,
    payload:newVale
})