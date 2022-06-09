import { products } from './productsReducer'
import addFormVisibility from './addFormVisibilityReducer'
import cartItems from './cartReducer'
const rootReducer = (state = {}, action) => {
  return ({
    products: products(state.products, action),
    addFormVisibility: addFormVisibility(state.addFormVisibility, action),
    cartItems: cartItems(state.cartItems, action)
    // cartItems: 
  })
}

export default rootReducer;