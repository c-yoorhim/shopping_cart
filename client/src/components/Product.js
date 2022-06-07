import { useState } from "react";
import ProductForm from "./ProductForm";

const Product = ({ product })=> {
  const [showEditForm, setShowEditForm ] = useState(false)
  // onClick(showEditForm, setShowEditForm)

  const handleClick = (e) => {
    console.log('clicked!')
    e.preventDefault()
    setShowEditForm(!showEditForm)
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
    {showEditForm ? <ProductForm type="Edit"/> : <h1>hello</h1> }
    
    </div>)
}

export default Product;