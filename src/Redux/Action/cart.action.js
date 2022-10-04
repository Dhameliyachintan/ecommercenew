import *as ActionTypes from "../ActionTypes"


//2
export const addtocart = (d) => (dispatch, getState) => {
    console.log(d)
    console.log("d", getState().cart)
    dispatch({ type: ActionTypes.CARTADD_DATA, payload: { id: d.id, Quantity: 1 } })
}
//1
export const gettocart = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_TO_CART })
}

//3
export const incrementcounter = (id) => (dispatch) => {
    console.log(id)
    dispatch({ type: ActionTypes.CART_INCREMENTCOUNTER, payload: id })
}

//3
export const decrementcounter = (id) => (dispatch) => {
    console.log(id)
    dispatch({ type: ActionTypes.CART_DECREMENTCOUNTER, payload: id })
}

//4
export const handledeletecart = (id) => (dispatch) => {
    console.log(id)
    dispatch({ type: ActionTypes.DELETE_CART_PRODUCT, payload: id })
}



export const errorcartproduct = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.CART_PRODUCT_ERROR, payload: error })
} 