import { useState } from "react";
import ProductEditForm from "./ProductEditForm";
import { useDispatch, useSelector } from 'react-redux'
import cartReceived from "../action/cartsAction";
import { productsReceived } from "../action/productsAction";
import axios from 'axios';

const Product = ({ product })=> {
  const [showEditForm, setShowEditForm ] = useState(false)
  const dispatch = useDispatch();
  const { products, cartItems } = useSelector(state => state)

  const handleShowEditForm = (e) => {
    e.preventDefault();
    setShowEditForm(!showEditForm);
  }
  const handleHideForm = () => {
    setShowEditForm(false);
  }

  const handleAddToCart = async () => {
    try {
      const response = await axios.post("/api/add-to-cart", { productId: product._id })

      const found = cartItems.find(c => c.productId === product._id)

      if (found) {
        const updatedCart = cartItems.map(item => {
          return item.productId === product._id ?
          response.data.item
          : item 
        })
        
        dispatch(cartReceived(updatedCart))
      } else {
        dispatch(cartReceived(cartItems.concat(response.data.item))) // add to cart if not already in cart
      }

      const updatedProducts = products.map(p => {
        return p._id === product._id ? response.data.product : p 
      })
      dispatch(productsReceived(updatedProducts))
      

    } catch (e) { console.error(e) }
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
      <a className="delete-button" ><span>X</span></a>
    </div>
    {showEditForm ? <ProductEditForm id={ product._id} onCancel={ handleHideForm } onShowEditForm={handleShowEditForm} product={product} /> : null }
    
    </div>)
}


export default Product;