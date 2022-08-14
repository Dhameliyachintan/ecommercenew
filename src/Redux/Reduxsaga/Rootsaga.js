import { all } from 'redux-saga/effects'
import { authsagacall } from "./Auth.saga"

export function* rootsaga() {
    yield all([
        authsagacall()
    ])
}