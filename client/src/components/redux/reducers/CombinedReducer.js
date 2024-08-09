import { combineReducers } from "redux"
import cartReducer from "./CartReducer"
import QBModalReducer from "./QBModalReducer"

const reducers = combineReducers({
    cartData: cartReducer,
    toggleQBModal: QBModalReducer
});

export default reducers;