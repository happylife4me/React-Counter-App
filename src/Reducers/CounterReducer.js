import * as ActionType from  "../Actions/ActionType"

export const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case ActionType.ADD_COUNTER:
            return state + action.payload
        case ActionType.REMOVE_COUNTER:
            return state - action.payload
    }
    return state
}
