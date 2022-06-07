const ProductEditForm = ({details, btnHandler}) => {
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={details.title}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={details.price}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={details.quantity}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={btnHandler}>Update</a>
          <a className="button" onClick={btnHandler}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ProductEditForm