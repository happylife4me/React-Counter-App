import * as ActionType from  "../Actions/ActionType"

export const CounterReducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_COUNTER:
            state.counter  = state.counter+ action.payload
            break
        case ActionType.REMOVE_COUNTER:
            state.counter =  state.counter- action.payload
            break
    }
    return state
}
