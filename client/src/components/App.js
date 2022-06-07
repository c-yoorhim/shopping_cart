import React from "react";
import Header from "./Header"
import ShopBody from "./ShopBody"
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => { 
    let fetchData = async () => {
      let {data} = await axios.get("/api/products")
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div id="app">
      <Header />
      <ShopBody data={data} />
    </div>
  );
};

export default App;
