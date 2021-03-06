import { useState } from "react";
import ProductEditForm from "./ProductEditForm";
import axios from "axios"

const Product = ({ product, setProducts, onEdit, onAddToCart, onDelete})=> {
  const [showEditForm, setShowEditForm ] = useState(false)

  const handleShowEditForm = () => {
    setShowEditForm(!showEditForm);
  }
  const handleHideForm = () => {
    setShowEditForm(false);
  }
  const handleAddToCart = () => {
    onAddToCart(product)
  }


  return (
    <div className="product">
      <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">{product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        {
          product.quantity > 0 ? 
          (
            <a className="button add-to-cart" onClick={ handleAddToCart }>Add to Cart</a>
            ) :
            (
            <a className="button add-to-cart disabled">Add to Cart</a>
          )
        }
        
        <a className="button edit" onClick={ handleShowEditForm }>Edit</a>
      </div>
      <a className="delete-button" onClick={ onDelete(product._id) }><span>X</span></a>
    </div>
    {showEditForm ? <ProductEditForm id={ product._id} onCancel={ handleHideForm } onEdit={ onEdit } onShowEditForm={handleShowEditForm} product={product} /> : null }
    
    </div>)
}


export default Product;