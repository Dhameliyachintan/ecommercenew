import * as ActionTypes from '../ActionTypes'

const initalState = {
    isLoding: false,
    cart: [],
    error: ''
}


export const cartreducers = (state = initalState, action) => {
    console.log(action.payload, action.type);
    switch (action.type) {
        case ActionTypes.CARTADD_DATA:
            const cartdata = state.cart.find((item) => item.id === action.payload.id)
            if (cartdata) {
                cartdata.Quantity++;
            }
            else {
                state.cart.push(action.payload)
            }
            return {
                ...state,
                isLoding: false,
                error: ''
            }
        case ActionTypes.GET_TO_CART:
            return {
                ...state,
                isLoding: false,
                error: ''
            }
        case ActionTypes.EMPTY_CART_PRODUCT:
            return {
                ...state,
                isLoding: false,
                cart: [],
                error: ''
            }
        case ActionTypes.BUYNOW_CART_EMPTY:
            return {
                ...state,
                isLoding: false,
                buy: [],
                error: ''
            }
        case ActionTypes.BUY_NOW_DATA:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat((d) => d.id !== action.payload),
                errors: ''
            }

        case ActionTypes.DELETE_CART_PRODUCT:
            return {
                ...state,
                isLoding: false,
                cart: state.cart.filter((d, i) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.CART_INCREMENTCOUNTER:
            return {
                ...state,
                isLoding: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            Quantity: c.Quantity + 1
                        }
                    } else {
                        return c;
                    }
                }),
                error: ''
            }
        case ActionTypes.CART_DECREMENTCOUNTER:
            return {
                ...state,
                isLoding: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            Quantity: c.Quantity - 1
                        }
                    } else {
                        return c;
                    }
                }),
                error: ''
            }
        default:
            return state
    }
}