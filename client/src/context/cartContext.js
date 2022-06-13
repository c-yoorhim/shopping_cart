import { createContext, useReducer } from 'react';
import axios from 'axios'

export const CartContext = createContext();

export const fetchCart = async (dispatch) => {
  const { data } = await axios.get("/api/cart")
  console.log(data)
  dispatch({type: 'CART_ITEMS_RECEIVED', payload: data})  
}

export const addToCart = async (product, dispatch) => {
  const { data } = await axios.post("/api/add-to-cart", { productId: product._id })
  dispatch({type: 'CART_ITEM_RECEIVED', payload: data})
  return data;  
}

const cartReducer = (state, action) => {
  switch (action.type) {

    case "CART_ITEMS_RECEIVED":
      return action.payload

    case "CART_ITEM_RECEIVED": 

      const productId = action.payload.item.productId
      const found = state.find(cartItem => cartItem.productId === productId)

      // if new item is already in cart
      if (found) {
        return state.map(cartItem =>
          cartItem.productId === productId ?
          action.payload.item
          : cartItem 
        )
      } else {
        return state.concat(action.payload.item)
      }
    
    case "CHECKOUT_CART":
      return []
  
    default:
      return state;
  }
}

export const CartProvider = ({children}) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{cartItems, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}