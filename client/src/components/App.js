import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import Cart from "./Cart"
import Products from "./Products"

const App = () => {
  const [cartItems, setCartItems] = useState([])

  // const handleAddToCart = async (product) => {
  //   // try {
  //   //   const response = await axios.post("/api/add-to-cart", { productId: product._id })
  //   //   const found = cartItems.find(c => c.productId === product._id)

  //   //   if (found) {
  //   //     const updatedCart = cartItems.map(item => {
  //   //       return item.productId === product._id ?
  //   //       response.data.item
  //   //       : item 
  //   //     })
        
  //   //     setCartItems(updatedCart)
  //   //   } else {
  //   //     setCartItems(cartItems.concat(response.data.item)) // add to cart if not already in cart
  //   //   }
  //   //   const updatedProducts = products.map(p => {
  //   //     return p._id === product._id ? response.data.product : p 
  //   //   })
  //   //   // setProducts(updatedProducts)

  //   // } catch (e) { console.error(e) }
  // }

  // const handleCheckout = async () => {
  //   await axios.post("/api/checkout")
  //   setCartItems([])
  // }

  useEffect(()=> {
    ;(async () => {
      const cartResponse = await axios.get("/api/cart")
      setCartItems(cartResponse.data)
      })()
    }, [])

  return (
    <div id="app">
      <Cart cartItems={cartItems} setCartItems={ setCartItems }/>
      <Products />
    </div>
  );
};

export default App;
