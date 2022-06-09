import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAdded } from '../action/productsAction';
import axios from 'axios';
import toggleAddForm from '../action/toggleAddFormAction';

const ProductAddForm = ({ onCancel })=> {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')
  const dispatch = useDispatch();
  const addFormVisibility = useSelector((state) => state.addFormVisibility)

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
        const newProduct = await axios.post("/api/products", {
        title: productName,
        price: productPrice,
        quantity: productQuantity
      })
      dispatch(toggleAddForm(!addFormVisibility));
      dispatch(productAdded(newProduct));    
    } catch (e) { console.error(e) }
  }

  const handleHideForm = (e) => {
    e.preventDefault();
    onCancel();
  } 
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // onSubmit({productName, productPrice, productQuantity})
  // }

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