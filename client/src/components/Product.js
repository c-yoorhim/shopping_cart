import { useState } from "react";
import ProductEditForm from "./ProductEditForm";
import { useDispatch } from 'react-redux'
import {cartItemReceived} from "../action/cartsAction";
import { productDeleted } from "../action/productsAction";
import axios from 'axios';

const Product = ({ product })=> {
  const [showEditForm, setShowEditForm ] = useState(false)
  const dispatch = useDispatch();

  const handleShowEditForm = (e) => {
    e.preventDefault();
    setShowEditForm(!showEditForm);
  }

  const handleHideForm = () => {
    setShowEditForm(false);
  }

  const handleAddToCart = async () => {
    try {
      const {data} = await axios.post("/api/add-to-cart", { productId: product._id })
      dispatch(cartItemReceived(data))

    } catch (e) { console.error(e) }
  }

  const handleDeleteProduct = (id) => {
    return (async () => {
      try {
        await axios.delete(`/api/products/${id}`)
        dispatch(productDeleted(id))
      } catch (e) { console.error(e) }
    })
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
      <a className="delete-button" onClick={ handleDeleteProduct(product._id) }><span>X</span></a>
    </div>
    {showEditForm ? <ProductEditForm id={ product._id} onCancel={ handleHideForm } onShowEditForm={handleHideForm} product={product} /> : null }
    
    </div>)
}


export default Product;