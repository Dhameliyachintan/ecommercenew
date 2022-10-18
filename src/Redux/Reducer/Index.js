import { combineReducers } from "redux";
import { alertreducer } from "./Alert.reducer";
import { SignupReducer } from "./auth.reducer";
import { cartreducers } from "./cart.reducer"
import { productreducer } from "./Product.reducer";
import { orderreducer } from "./Order.Reducer";
import { categoryreducer } from "./categeries.reducer";

export const rootReducer = combineReducers({
    auth: SignupReducer,
    alert: alertreducer,
    cart: cartreducers,
    category : categoryreducer,
    product : productreducer,
    order: orderreducer
})
