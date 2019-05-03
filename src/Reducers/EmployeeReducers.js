import * as ActionType from  "../Actions/ActionType"

export const EmployeeReducers = (state, action) => {
    console.log("from :EmployeeReducer => action", action)
    switch (action.type) {
        case ActionType.GET_EMPLOYEE:
             state.employess = action.payload;
             state.error=""
             break
        case ActionType.ERROR_GET_EMPLOYEE:
            state.error = action.payload
            break;
    }
    console.log("from :EmployeeReducer => state", state)
    return state
}