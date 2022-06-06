import Product from './Product'
import ProductForm from './ProductForm'
// {
//   id: 1,
//   title: "Amazon Kindle E-reader",
//   quantity: 5,
//   price: 79.99
// },
const Products = ({ data })=> {
  return (
    <div>
      <div class="product-listing">
        <h2>Products</h2>
        {data.map(product => {
          return (<Product key={product.id} product={product}/>)
        })}
      </div>
      
      <div class="add-form">
        <p><a class="button add-product-button">Add A Product</a></p>
      </div>
      <ProductForm type="Add"/>
    </div>
)}

export default Products;