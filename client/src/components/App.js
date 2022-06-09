import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import Cart from "./Cart"
import Products from "./Products"

const App = () => {
 
  return (
    <div id="app">
      <Cart />
      <Products />
    </div>
  );
};

export default App;
