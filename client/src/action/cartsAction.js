export const cartItemReceived = (addedItem) => {
  return ({
    type: "CART_ITEM_RECEIVED",
    payload: addedItem
  })
}

export const cartItemsReceived = (items) => {
  return {
  type: "CART_ITEMS_RECEIVED",
  payload: items,
  }
}

export const checkoutCart = () => {
  return {
    type: "CHECKOUT_CART",
  }
}

// export default cartReceived