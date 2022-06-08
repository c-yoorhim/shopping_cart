import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import Cart from "./Cart"
import Products from "./Products"
// todo:
// should we move the data into individual components? (cart data will be different from product data)
const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])

  const handleEdit = async ({productName, productPrice, productQuantity, id}, callback) => {
    try {
      const response = await axios.put(`api/products/${id}`, {
        title: productName,
        quantity: productQuantity,
        price: productPrice
      })
      setProducts(products.map(product => product._id === id ? response.data : product))
      if (callback) {
        callback()
      }
      
    } catch (e) { console.error(e); }
  }

  const handleAddToCart = async (product) => {
    try {
      const response = await axios.post("/api/add-to-cart", { productId: product._id })
      const found = cartItems.find(c => c.productId === product._id)

      if (found) {
        const updatedCart = cartItems.map(item => {
          return item.productId === product._id ?
          response.data.item
          : item 
        })
        
        setCartItems(updatedCart)
      } else {
        setCartItems(cartItems.concat(response.data.item)) // add to cart if not already in cart
      }
      const updatedProducts = products.map(p => {
        return p._id === product._id ? response.data.product : p 
      })
      setProducts(updatedProducts)

    } catch (e) { console.error(e) }
  }

  const handleCheckout = async () => {
    await axios.post("/api/checkout")
    setCartItems([])
  }

  useEffect(()=> {
    ;(async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data)

      const cartResponse = await axios.get("/api/cart")
      setCartItems(cartResponse.data)
      
      })()
    
    }, [])

  return (
    <div id="app">
      <Cart products={products} cartItems={cartItems} setCartItems={ setCartItems } onCheckout={handleCheckout}/>
      <Products onEdit = {handleEdit} products={products} setProducts={setProducts} onAddToCart={handleAddToCart}/>
    </div>
  );
};

export default App;
