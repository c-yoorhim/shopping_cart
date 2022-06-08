import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import Cart from "./Cart"
import Products from "./Products"
import staticData from "../lib/data.js"
// todo:
  // onclick for showing add form
  // onclick for showing edit form
// should we move the data into individual components? (cart data will be different from product data)
const App = () => {
  const [data, setProductData] = useState([]);

  useEffect(()=> {
    setProductData(staticData)}, [])

    // ;(async () => {
      
    // })()


  return (
    <div id="app">
      <h1>The Shop!</h1>
      <Cart data={data}/>
      <Products data={data}/>
    </div>
  );
};

export default App;
