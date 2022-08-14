import *as ActionTypes from "../ActionTypes"

export const setalert = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SET_ALERT, payload: data })
}

export const resetalert = () => (dispatch) => {
    dispatch({ type: ActionTypes.RESET_ALERT })
}