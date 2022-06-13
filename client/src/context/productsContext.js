import { createContext, useReducer } from 'react';
import axios from 'axios'

export const ProductContext = createContext();

const productsReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED':
      return action.payload

    case 'PRODUCT_ADDED':
      return state.concat(action.payload)
    
    case 'CART_ITEM_RECEIVED':
      const updatedItem = action.payload.item
      const products = state.map(product => {
        return product._id === updatedItem.productId ? action.payload.product : product 
      })
      return products

    case "PRODUCT_EDITED":
      return state.map(product => product._id === action.payload._id ? action.payload : product)

    case "PRODUCT_DELETED":
      return state.filter(p => p._id !== action.payload)

    default:
      return state;
  } 
}

export const fetchProducts = async (dispatch) => {
  const { data } = await axios.get("/api/products");
  dispatch({ type: 'PRODUCTS_RECEIVED', payload: data });
}

export const editProduct = async ({productName, productQuantity, productPrice, id}, dispatch, callback) => {
  const { data } = await axios.put(`api/products/${id}`, {
    title: productName,
    quantity: productQuantity,
    price: productPrice
  })

  dispatch({ type: 'PRODUCT_EDITED', payload: data })
} 

export const addProduct = async ({productName, productPrice, productQuantity}, dispatch) => { 
  const { data } = await axios.post("/api/products", {
    title: productName,
    price: productPrice,
    quantity: productQuantity
  })
  dispatch({ type: 'PRODUCT_ADDED', payload: data})
}

export const deleteProduct = async (id, dispatch) => {
    await axios.delete(`/api/products/${id}`)
    dispatch({type: 'PRODUCT_DELETED', payload: id})
}

export const updateProductQuantity = (data, dispatch) => {
  dispatch({type: 'CART_ITEM_RECEIVED', payload: data })
}

export const ProductProvider = ({children}) => {
  const [products, dispatch] = useReducer(productsReducer, []);
  return (
    <ProductContext.Provider value={{products, dispatch}}>
      {children}
    </ProductContext.Provider>
  )
}