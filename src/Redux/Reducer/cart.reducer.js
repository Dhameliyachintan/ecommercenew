import *as ActionTypes from "../ActionTypes"

const initialState = {
    counter: 0
}

export const cartreducers = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ActionTypes.REMOVE_TO_CART:
            return {
                ...state,
                counter: state.counter - 1
            }
        // case ActionTypes.EMPTY_TO_CART:
        //     return {
        //         ...state,
        //         counter: []
        //     }
        default:
            return state
    }
}