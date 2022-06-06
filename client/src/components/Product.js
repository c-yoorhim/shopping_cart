import ProductEditForm from "./ProductEditForm"
import { useState } from "react"

const Product = ({details}) => {
  console.log(details)
  const [edit, setEdit] = useState(false)
  function closeEdit(e) {
    setEdit(false)
  }
  const addBtnClass = "button add-to-cart"
  return (
    <div class="product">
      <div class="product-details">
        <h3>{details.title}</h3>
        <p class="price">{details.price}</p>
        <p class="quantity">{details.quantity} left in stock</p>
        {!edit ?
          <div class="actions product-actions">
            <a class={details.quantity ? addBtnClass : addBtnClass + " disabled"}>Add to Cart</a>
            <a class="button edit" onClick={() => setEdit(true)}>Edit</a>
          </div>
          : null
        }
        <a class="delete-button"><span>X</span></a>
      </div>
      {edit ? <ProductEditForm details={details} btnHandler={closeEdit}/> : null}
    </div>
  )
}

export default Product