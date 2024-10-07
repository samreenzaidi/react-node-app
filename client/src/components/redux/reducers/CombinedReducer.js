import { combineReducers } from "redux"
import CartReducer from "./CartReducer"

const reducers = combineReducers({
    CartItems: CartReducer
});

export default reducers;