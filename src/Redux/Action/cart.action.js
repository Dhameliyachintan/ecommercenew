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

//1
export const buynowdata = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.BUY_NOW_DATA, payload : data})
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

export const handleempty = () => (dispatch) => {
    console.log("emptycart");
    dispatch({ type: ActionTypes.EMPTY_CART_PRODUCT })
}


export const buynoweempty = () => (dispatch) => {
    console.log("emptycart");
    dispatch({ type: ActionTypes.BUYNOW_CART_EMPTY })
}



export const errorcartproduct = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.CART_PRODUCT_ERROR, payload: error })
} 