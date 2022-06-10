export const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": 
      return action.payload;

    case "PRODUCT_ADDED": 
      return state.concat(action.payload);

    case "CART_ITEM_RECEIVED":
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