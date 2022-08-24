import React, { useContext } from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import Cart from "./Cart"
import Products from "./Products"
import { addToCart, ProductContext } from "../context/productsContext";

const App = () => {
  const {dispatch: productsDispatch} = useContext(ProductContext)
  const handleCheckout = async () => {
    await axios.post("/api/checkout")
  }

  return (
    <div id="app">
      <Cart />
      <Products />
    </div>
  );
};

export default App;
