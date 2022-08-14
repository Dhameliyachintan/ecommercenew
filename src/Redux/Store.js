

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './Reducer/Index'

import { rootsaga } from './Reduxsaga/Rootsaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]


const Configreducer = () => {
    const store = createStore(rootReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootsaga)
    return store
} 

export const store = Configreducer()