

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer/Index'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from './Reduxsaga/Rootsaga'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()


const middleware = [thunk, sagaMiddleware]

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'counter', 'product',]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Configreducer = () => {
    // const store = createStore(rootReducer, applyMiddleware(...middleware))
    const store = createStore(persistedReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootsaga)
    return store
}

export const store = Configreducer()
export let persistor = persistStore(store)
export default store