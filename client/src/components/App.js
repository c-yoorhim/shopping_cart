import React from "react";
import Cart from "./Cart"
import Products from "./Products"
import data from "../lib/data.js"
// cart
  // Summary
    // title, price, quantity
  // total
  // checkout button
// products
  // product
    // title, price, quantity in stock
    // buttons: add, edit
    // form (edit): name, price, quantity
  // add products button
  // form (add): name, price, quantity

const App = () => {
  return (
    <div id="app">
      <h1>The Shop!</h1>
      <Cart data={data}/>
      <Products data={data}/>
    </div>
  );
};

export default App;
