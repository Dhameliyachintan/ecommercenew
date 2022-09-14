import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    category: [],
    errors: ''
}

export const categoryreducer = (state = initialState, action) => {
    // console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.ADD_CATOGORIES:
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload),
                errors: ''
            }
        case ActionTypes.GET_CATOGORIES:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                errors: ''
            }
        case ActionTypes.UPDATE_CATOGORIES:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((d) => {
                    if (d.id === action.payload.id) {
                        return action.payload
                    } else {
                        return d;
                    }
                }),
                errors: ''
            };
        case ActionTypes.DELETE_CATOGORIES:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((d,i) => d.id !== action.payload),
                errors: ''
            }

        case ActionTypes.ERROR_CATOGORIES:
            return {
                ...state,
                isLoading: false,
                category: [],
                errors: action.payload
            }
        default:
            return state
    }
}