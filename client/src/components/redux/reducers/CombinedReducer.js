import { combineReducers } from "redux"
import cartReducer from "./CartReducer"

const reducers = combineReducers({
    cartData: cartReducer
});

export default reducers;