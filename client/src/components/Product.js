import ProductEditForm from "./ProductEditForm"
import { useState } from "react"

const Product = ({details}) => {
  const [edit, setEdit] = useState(false)
  function closeEdit(e) {
    setEdit(false)
  }
  const addBtnClass = "button add-to-cart"
  return (
    <div className="product">
      <div className="product-details">
        <h3>{details.title}</h3>
        <p className="price">{details.price}</p>
        <p className="quantity">{details.quantity} left in stock</p>
        {!edit ?
          <div className="actions product-actions">
            <a className={details.quantity ? addBtnClass : addBtnClass + " disabled"}>Add to Cart</a>
            <a className="button edit" onClick={() => setEdit(true)}>Edit</a>
          </div>
          : null
        }
        <a className="delete-button"><span>X</span></a>
      </div>
      {edit ? <ProductEditForm details={details} btnHandler={closeEdit}/> : null}
    </div>
  )
}

export default Product