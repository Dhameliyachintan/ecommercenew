import { call, put, takeEvery, all } from 'redux-saga/effects'
import { FacebookLoginAPI, ForgetpasswordAPI, googleLoginAPI, LoginAPI, LogoutAPI, SignAPI } from '../../commene/api/Sign.Api';
import { history } from '../../History';
import { setalert } from '../Action/Alert.action';
import { emailverify, LoggedinoutUser, Loggeduser, } from '../Action/auth.Action';
import * as ActionTypes from "../ActionTypes"

function* Signup(action) {
    try {
        console.log(action.payload);
        const user = yield call(SignAPI, action.payload);
        yield put(setalert({ text: user.payload, color: "success" }))
        console.log(user);
        yield put(emailverify(user));
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
        console.log(e.message);
    }
}

function* Login(action) {
    try {
        // console.log(action.payload);
        const user = yield call(LoginAPI, action.payload);    //request
        console.log(user);
        history.push("/")
        yield put(setalert({ text: "Login successfull", color: "Success" }))
        yield put(Loggeduser(user))  // logout text lakayne ave 
        // yield put(emailverify(user));
    } catch (e) {
        console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* Logout(action) {
    try {
        // console.log(action.payload);
        const user = yield call(LogoutAPI, action.payload);    //request
        console.log(user);
        history.push("/Logins")
        yield put(setalert({ text: user.payload, color: "Success" }))
        yield put(LoggedinoutUser())  //login karava mate // data null karava // Login lakaya na ave
    } catch (e) {
        console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}
function* googleLogin(action) {
    try {
        // console.log(action.payload);
        const user = yield call(googleLoginAPI);    //request
        console.log(user);
        history.push("/")
        yield put(Loggeduser(user))
        yield put(setalert({ text: "Login successfull", color: "Success" }))
    } catch (e) {
        console.log(e);
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* Forgetpassword(action) {
    try {
        // console.log(action.payload);
        const user = yield call(ForgetpasswordAPI, action.payload);    //request
        console.log(user);
        yield put(setalert({ text: user.payload, color: "Success" }))
        // history.push("/")
    } catch (e) {
        console.log(e);
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}

function* FacebookLogin(action) {
    try {
        // console.log(action.payload);
        const user = yield call(FacebookLoginAPI, action.payload);    //request
        console.log(user);
        yield put(setalert({ text: "Login successfull", color: "Success" }))
        // yield put(Loggeduser(user))
        // history.push("/")
    } catch (e) {
        console.log(e);
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}



function* watchsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, Signup);  //Signup
    yield takeEvery(ActionTypes.LOGIN_USER, Login);    //Login
    yield takeEvery(ActionTypes.LOGOUT_USER, Logout);    //Login
    yield takeEvery(ActionTypes.GOOGLELOGIN_USER, googleLogin);    //googlelogin
    yield takeEvery(ActionTypes.FORGET_PASSWORD_USER, Forgetpassword);    //Forgetpassword verify
    yield takeEvery(ActionTypes.FACEBOOK_LOGIN, FacebookLogin);    //FacebookLogin verify
}

export function* authsagacall() {
    yield all([
        watchsaga()
    ])
}