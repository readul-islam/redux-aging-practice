import { ADDBY, DECREMENT, INCREMENT, RESET } from "./actionType";

const intialState = {
    value: 0
}

const counterReducer = (state=intialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
        case RESET:
            return {
                ...state,
                value: 0
            }
        case ADDBY:
            return {
                ...state,
                value: state.value + action.payload
            }

        default:
            return state
    }
}

export default counterReducer;