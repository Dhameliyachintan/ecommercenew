import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignAPI } from '../../commene/api/Sign.Api';
import { setalert } from '../Action/Alert.action';
import { emailverify } from '../Action/auth.Action';
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


function* watchsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, Signup);
}

export function* authsagacall() {
    yield all([
        watchsaga()
    ])
}