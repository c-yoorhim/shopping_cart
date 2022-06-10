// import rootReducer from './reducer/rootReducer';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartItemsReducer,
  }
})
export default store;