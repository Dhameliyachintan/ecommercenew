import { combineReducers } from "redux";
import { alertreducer } from "./Alert.reducer";
import { SignupReducer } from "./auth.reducer";
import { cartreducers } from "./cart.reducer"


export const rootReducer = combineReducers({
    auth: SignupReducer,
    alert: alertreducer,
    counter: cartreducers,
})
