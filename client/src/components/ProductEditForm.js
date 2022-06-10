import { useState } from "react"
import { useDispatch } from 'react-redux'
import { productEdited } from "../action/productsAction";
import axios from 'axios'

const ProductEditForm = ({ id, onCancel, onShowEditForm, product })=> {
  const [productName, setProductName] = useState(product.title)
  const [productPrice, setProductPrice] = useState(product.price)
  const [productQuantity, setProductQuantity] = useState(product.quantity)
  const dispatch = useDispatch();

  const handleHideForm = (e) => {
    e.preventDefault();
    onCancel();
  } 

  const handleEdit = async (e) => {
    e.preventDefault()
      try {
        const {data} = await axios.put(`api/products/${id}`, {
          title: productName,
          quantity: productQuantity,
          price: productPrice
        })

        dispatch(productEdited(data))

        resetForm();
        onShowEditForm();
      } catch (e) { console.error(e); }
  }

  const resetForm = () => {
    setProductName("")
    setProductPrice("")
    setProductQuantity("")
    onShowEditForm()
  }
  
  return (
    <div>
    <h3>Edit Product</h3>
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" value={productName} onChange={event=>setProductName(event.target.value)}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" value={productPrice} onChange={event=>setProductPrice(event.target.value)}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={productQuantity} onChange={event=>setProductQuantity(event.target.value)}/>
      </div>

      <div className="actions form-actions">
        <a href="/#" className="button" onClick={ handleEdit }>Edit</a>
        <a href="/#" className="button" onClick={ handleHideForm }>Cancel</a>
      </div>
    </form> 
    </div>
  )
}

export default ProductEditForm