
import Product from './Product'
import ProductAddForm from './ProductAddForm'
import { useDispatch, useSelector } from 'react-redux';
import toggleAddForm from "../action/toggleAddFormAction";
import { useEffect } from 'react';
import { productsReceived } from "../action/productsAction"
import axios from 'axios';

const Products = ()=> {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products)
  const addFormVisibility = useSelector((state) => state.addFormVisibility)

  console.log(products)
  useEffect(() => {
    ;(async () => {
      const response = await axios.get("/api/products")
      dispatch(productsReceived(response.data))
    })()
  },[dispatch]);

  const handleAddClick = (e) => {
    e.preventDefault()
    dispatch(toggleAddForm(!addFormVisibility))
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    dispatch(toggleAddForm(!addFormVisibility));
  }
  // const handleDeleteProduct = (id) => {
    
  //   return async () => {
  //     try {
  //       await axios.delete(`/api/products/${id}`)
  //       const updatedProducts = products.filter(p => p._id !== id)
  //       // setProducts(updatedProducts)
  //     } catch (e) { console.error(e) }
  //   }
  // }
   
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return (<Product key={product._id} product={product}/>)
        })}
      </div>
      
      <div className="add-form">
        <p><a href="/#" className="button add-product-button" onClick={ handleAddClick }>Add A Product</a></p>
      </div>
      {addFormVisibility ? <ProductAddForm onCancel={ handleCancelClick }/> : null}
    </main>
)}

export default Products;