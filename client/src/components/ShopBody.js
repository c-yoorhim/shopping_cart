import Product from "./Product"
import seedData from "../lib/data.js"
import { useState, useEffect } from "react"

const ShopBody = () => {
  const [data, setData] = useState([])
  useEffect(() => { setData(seedData) }, [])

  function showForm(e) {
    let formElt = e.target.closest('.add-form')
    formElt.classList.toggle('visible')
  }

  return(
    <main>
      <div class="product-listing">
        <h2>Products</h2>
        {data.map(product => {
          return <Product details={product}/>
        })}
      </div>

      <div class="add-form">
        <p><a class="button add-product-button" onClick={showForm}>Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value=""/>
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value=""/>
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value=""/>
          </div>

          <div class="actions form-actions">
            <a class="button">Add</a>
            <a class="button" onClick={showForm}>Cancel</a>
          </div>
        </form>
      </div>
    </main>
  )
}

export default ShopBody