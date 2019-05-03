import {SAVE_COMMENT} from  "../Actions/ActionType"

export default function (state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
    }
    return state
}