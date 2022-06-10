const cartItems = (state = [], action) => {
  switch (action.type) {

    case "CART_ITEMS_RECEIVED":
      return action.payload

    case "CART_ITEM_RECEIVED": 

      const productId = action.payload.item.productId
      const found = state.find(cartItem => cartItem.productId === productId)

      // if new item is already in cart
      if (found) {
        console.log('cart has this product already')
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

export default cartItems