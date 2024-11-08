const initialState = {
    cartItems: [],
    totalCartQty: 0
}
  
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ITEM_ADDED_TO_CART':
        return {
          cartItems: [...state.cartItems, action.payload],
          totalCartQty: state.totalCartQty + 1
        }
    }
    return state
  }

  export default CartReducer