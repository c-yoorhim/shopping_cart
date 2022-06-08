import { useState } from "react";
import ProductEditForm from "./ProductEditForm";

const Product = ({ product })=> {
  const [showEditForm, setShowEditForm ] = useState(false)

  const handleShowEditForm = (e) => {
    e.preventDefault()
    setShowEditForm(!showEditForm)
  }

  const handleHideForm = () => {
    setShowEditForm(false)
  }

  return (
    <div class="product">
      <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <div class="actions product-actions">
        <a href="/#" class="button add-to-cart">Add to Cart</a>
        
        <a href="/#" class="button edit" onClick={ handleShowEditForm }>Edit</a>
      </div>
      <a href="/#" class="delete-button"><span>X</span></a>
    </div>
    {showEditForm ? <ProductEditForm onCancel={ handleHideForm }/> : null }
    
    </div>)
}


export default Product;