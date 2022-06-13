import { useContext, useState } from 'react';
import { ProductContext, addProduct } from '../context/productsContext';

const ProductAddForm = ({ onCancel })=> {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const {dispatch} = useContext(ProductContext)

  const handleHideForm = (e) => {
    e.preventDefault();
    onCancel();
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct({productName, productPrice, productQuantity}, dispatch)
    onCancel()
  }

  return (
    <div>
    <h3>Add Product</h3>
    <form >
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" value={productName} onChange={event=> setProductName(event.target.value)}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" value={productPrice} onChange={event=> setProductPrice(event.target.value)}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={productQuantity} onChange={event=> setProductQuantity(event.target.value)}/>
      </div>

      <div className="actions form-actions">
        <a href="/#" className="button" onClick={ handleSubmit }>Add</a>
        <a href="/#" className="button" onClick={ handleHideForm }>Cancel</a>
      </div>
    </form> 
    </div>
  )
}

export default ProductAddForm;