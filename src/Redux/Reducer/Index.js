import { combineReducers } from "redux";
import { alertreducer } from "./Alert.reducer";
import { SignupReducer } from "./auth.reducer";


export const rootReducer = combineReducers({
    auth : SignupReducer,
    alert : alertreducer
})
