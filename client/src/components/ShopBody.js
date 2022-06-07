import Product from "./Product"
import { useState, useEffect } from "react"
import AddProduct from "./AddProduct"

const ShopBody = ({data}) => {

  function showForm(e) {
    let formElt = e.target.closest('.add-form')
    formElt.classList.toggle('visible')
  }

  console.log("data =", data)

  return(
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {data.map(product => {
          return <Product key={product.id} details={product}/>
        })}
      </div>
      <AddProduct />  
    </main>
  )
}

export default ShopBody