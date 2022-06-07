import { useState } from 'react'

const AddProduct = () => {
  const [formVisibility, setFormVisibility] = useState(false)



  return (
    <div className="add-form">
      <p><a className="button add-product-button" onClick={showForm}>Add A Product</a></p>
      { !formVisibility ? null : (
        <>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value=""/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value=""/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value=""/>
        </div>

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button" onClick={showForm}>Cancel</a>
        </div>
      </form>
      </>
      )}
    </div>
  )
}