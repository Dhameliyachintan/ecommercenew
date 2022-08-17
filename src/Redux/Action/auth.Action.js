import *as ActionTypes from "../ActionTypes"

export const signupAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
    console.log(data);
}

export const emailverify = (user) => (dispatch) => {
    dispatch({ type: ActionTypes.EMAIL_VERIFY, payload: user })
}

// Login/Home page
export const LoginAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_USER, payload: data })
    console.log(data);
}

export const Loggeduser = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGED_USER, payload: data })
}

// Logout / Loginnull

export const LogoutUser = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_USER })
}

export const LoggedinoutUser = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGEDINOUT_USER })
}