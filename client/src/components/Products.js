import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Product from './Product'
import ProductAddForm from './ProductAddForm'
import { ProductContext, fetchProducts } from '../context/productsContext'

const Products = ({ onEdit, onAddToCart })=> {
  const [showAddForm, setAddForm] = useState(false)
  const { products, dispatch } = useContext(ProductContext) 

  useEffect(()=> {
    fetchProducts(dispatch)
  }, [dispatch]);

  const handleAddClick = (e) => {
    e.preventDefault()
    setAddForm(!showAddForm)
  }
  const handleCancelClick = () => setAddForm(false);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return (<Product onEdit={onEdit} key={product._id} product={product} onAddToCart={onAddToCart}/>)
        })}
      </div>
      
      <div className="add-form">
        <p><a href="/#" className="button add-product-button" onClick={ handleAddClick }>Add A Product</a></p>
      </div>
      {showAddForm ? <ProductAddForm onCancel={ handleCancelClick }/> : null}
    </main>
)}

export default Products;