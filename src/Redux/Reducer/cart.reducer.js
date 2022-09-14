import *as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    cart: [],
    cartcounter: 0,
    errors: ''
}

export const cartreducers = (state = initialState, action) => {
    // console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartcounter: state.cartcounter + 1
            }
        case ActionTypes.REMOVE_TO_CART:
            return {
                ...state,
                cartcounter: state.cartcounter - 1
            }
        case ActionTypes.CARTGET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
                errors: ''
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