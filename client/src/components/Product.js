import { useState } from "react";
// import ProductForm from "./ProductForm";

const ProductEditForm = ({onCancelClick})=> {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  // const handleCancelClick = (e) => {
  //   console.log(setState);
  //   e.preventDefault();
  //   setState(!state);
  // }

  // console.log(productName);
  return (
    <div>
    <h3>Edit Product</h3>
    <form>
      <div class="input-group">
        <label for="product-name">Product Name</label>
        <input type="text" id="product-name" value={productName} onChange={event=>setProductName(event.target.value)}/>
      </div>

      <div class="input-group">
        <label for="product-price">Price</label>
        <input type="text" id="product-price" value={productPrice} onChange={event=>setProductPrice(event.target.value)}/>
      </div>

      <div class="input-group">
        <label for="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={productQuantity} onChange={event=>setProductQuantity(event.target.value)}/>
      </div>

      <div class="actions form-actions">
        <a class="button">Edit</a>
        <a class="button" onClick={onCancelClick}>Cancel</a>
      </div>
    </form> 
    </div>
  )
}

const Product = ({ product })=> {
  const [showEditForm, setShowEditForm ] = useState(false)
  // onClick(showEditForm, setShowEditForm)

  const handleClick = (e) => {
    // console.log('clicked!')
    e.preventDefault()
    setShowEditForm(!showEditForm)
  }

  const handleCancelClick = (e) => {
    // console.log('clicked!')
    e.preventDefault()
    setShowEditForm(false)
  }

  console.log(showEditForm)
  // TODO : button click handler 
  return (
    <div class="product">
      <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        
        <a class="button edit" onClick={ handleClick }>Edit</a>
      </div>
      <a class="delete-button"><span>X</span></a>
    </div>
    {showEditForm ? <ProductEditForm onCancelClick={handleCancelClick}/> : null }
    
    </div>)
}


export default Product;