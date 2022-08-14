import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginAPI, SignAPI } from '../../commene/api/Sign.Api';
import { history } from '../../History';
import { setalert } from '../Action/Alert.action';
import { emailverify, Loggedinuser } from '../Action/auth.Action';
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
        yield put(Loggedinuser(user))
        // yield put(emailverify(user));
    } catch (e) {
        console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(setalert({ text: e.payload, color: "error" }))
    }
}


function* watchsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, Signup);
    yield takeEvery(ActionTypes.LOGIN_USER, Login);
}

export function* authsagacall() {
    yield all([
        watchsaga()
    ])
}