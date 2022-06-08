import axios from "axios";
import { useState } from "react";
import Product from './Product'
import ProductAddForm from './ProductAddForm'

const Products = ({ products, setProducts, onEdit, onAddToCart })=> {
  const [showAddForm, setAddForm] = useState(false)

  const handleAddClick = (e) => {
    e.preventDefault()
    setAddForm(!showAddForm)
  }
  const handleCancelClick = () => setAddForm(false);

  const handleSubmit = async ({productName, productPrice, productQuantity}) => { 
    try {
        const newProduct = await axios.post("/api/products", {
        title: productName,
        price: productPrice,
        quantity: productQuantity
      })
      setAddForm(false)
      setProducts(products.concat(newProduct.data))
    } catch (e) { console.error(e) }
  }

  const handleDeleteProduct = (id) => {
    
    return async () => {
      try {
        await axios.delete(`/api/products/${id}`)
        const updatedProducts = products.filter(p => p._id !== id)
        setProducts(updatedProducts)
      } catch (e) { console.error(e) }
    }
  }
   

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return (<Product onEdit={onEdit} key={product._id} product={product} setProducts={setProducts} onAddToCart={onAddToCart} onDelete={handleDeleteProduct}/>)
        })}
      </div>
      
      <div className="add-form">
        <p><a href="/#" className="button add-product-button" onClick={ handleAddClick }>Add A Product</a></p>
      </div>
      {showAddForm ? <ProductAddForm onSubmit={ handleSubmit } onCancel={ handleCancelClick }/> : null}
    </main>
)}

export default Products;