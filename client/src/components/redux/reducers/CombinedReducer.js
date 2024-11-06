import { combineReducers } from 'redux'
import CartReducer from './CartReducer'

const reducers = combineReducers({
    CartData: CartReducer
})

export default reducers