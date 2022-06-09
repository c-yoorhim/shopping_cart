const cartReceived = (items) => {
  return ({
    type: "CART_ITEMS_RECEIVED",
    payload: items
  })
}

export default cartReceived