import { useState } from "react";
import Product from './Product'
import ProductAddForm from './ProductAddForm'

const Products = ({ data })=> {
  const [showAddForm, setAddForm] = useState(false)

  const handleAddClick = (e) => {
    e.preventDefault()
    setAddForm(!showAddForm)
  }

  const handleCancelClick = () => {
    setAddForm(false)
  }

  return (
    <div>
      <div class="product-listing">
        <h2>Products</h2>
        {data.map(product => {
          return (<Product key={product.id} product={product}/>)
        })}
      </div>
      
      <div class="add-form">
        <p><a href="/#" class="button add-product-button" onClick={ handleAddClick }>Add A Product</a></p>
      </div>
      {showAddForm ? <ProductAddForm onCancel={ handleCancelClick }/> : null}
    </div>
)}

export default Products;