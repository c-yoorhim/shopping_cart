import { products } from './productsReducer'
import addFormVisibility from './addFormVisibilityReducer'

const rootReducer = (state = {}, action) => {
  return ({
    products: products(state.products, action),
    addFormVisibility: addFormVisibility(state.addFormVisibility, action)
    // cartItems: 
  })
}

export default rootReducer;