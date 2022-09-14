import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    product: [],
    errors: ''
}

export const productreducer = (state = initialState, action) => {
    // console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.payload),
                errors: ''
            }
        case ActionTypes.GET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                errors: ''
            }
        case ActionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.map((d) => {
                    if (d.id === action.payload.id) {
                        return action.payload
                    } else {
                        return d;
                    }
                }),
                errors: ''
            };
        case ActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.filter((d,i) => d.id !== action.payload),
                errors: ''
            }

        case ActionTypes.ERROR_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [],
                errors: action.payload
            }
        default:
            return state
    }
}