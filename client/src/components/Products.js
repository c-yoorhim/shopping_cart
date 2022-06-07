import { useState } from "react";
import Product from './Product'
import ProductAddForm from './ProductAddForm'
// {
//   id: 1,
//   title: "Amazon Kindle E-reader",
//   quantity: 5,
//   price: 79.99
// },

const Products = ({ data })=> {
  const [showAddForm, setAddForm] = useState(false)

  const handleAddClick = (e) => {
    // console.log('clicked!')
    e.preventDefault()
    setAddForm(!showAddForm)
  }

  const handleCancelClick = (e) => {
    // console.log('clicked!')
    e.preventDefault()
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
        <p><a class="button add-product-button" onClick={handleAddClick}>Add A Product</a></p>
      </div>
      {showAddForm ? <ProductAddForm onCancelClick={handleCancelClick}/> : null}
    </div>
)}

export default Products;