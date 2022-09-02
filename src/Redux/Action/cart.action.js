import *as ActionTypes from "../ActionTypes"

export const addtocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_TO_CART })
}

export const removetocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_TO_CART })
}

// export const emptytocart = () => (dispatch) => {
//     dispatch({ type: ActionTypes.EMPTY_TO_CART })
// }