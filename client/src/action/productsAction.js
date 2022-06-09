export const productsReceived = (products) => {
  return ({
    type: "PRODUCTS_RECEIVED",
    payload: products
  })
}

export const productAdded = (product) => {
  return ({
    type: "PROUCT_ADDED",
    payload: product
  })
}

// export default;