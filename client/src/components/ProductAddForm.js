import { useState } from 'react';

const ProductAddForm = ({ onCancel })=> {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleHideForm = (e) => {
    e.preventDefault();
    onCancel();
  } 

  return (
    <div>
    <h3>Add Product</h3>
    <form>
      <div class="input-group">
        <label for="product-name">Product Name</label>
        <input type="text" id="product-name" value={productName} onChange={event=> setProductName(event.target.value)}/>
      </div>

      <div class="input-group">
        <label for="product-price">Price</label>
        <input type="text" id="product-price" value={productPrice} onChange={event=> setProductPrice(event.target.value)}/>
      </div>

      <div class="input-group">
        <label for="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={productQuantity} onChange={event=> setProductQuantity(event.target.value)}/>
      </div>

      <div class="actions form-actions">
        <a href="/#" class="button">Add</a>
        <a href="/#" class="button" onClick={ handleHideForm }>Cancel</a>
      </div>
    </form> 
    </div>
  )
}

export default ProductAddForm;