import *as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    cart: [],
    errors: ''
}

export const cartreducers = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.CARTADD_DATA: //2
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.Quantity++;
        } else { 
          state.cart.push(action.payload);
        }
            return {
                ...state,
                isLoading: false,
                // cart: state.cart.concat(action.payload),
                errors: ''
            }
        case ActionTypes.GET_TO_CART: //1
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
                errors: ''
            }
        case ActionTypes.DELETE_CART_PRODUCT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter((d) => d.id !== action.payload),
                errors: ''
            }
        case ActionTypes.CART_INCREMENTCOUNTER: //3
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            Quantity: c.Quantity + 1
                        }
                    } else {
                        return c
                    }
                })
            }
        case ActionTypes.CART_DECREMENTCOUNTER: //3
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    if (c.id === action.payload) {
                        return {
                            id: c.id,
                            Quantity: c.Quantity - 1
                        }
                    } else {
                        return c
                    }
                })
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