const ProductEditForm = ({details, btnHandler}) => {
  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={details.title}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={details.price}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={details.quantity}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={btnHandler}>Update</a>
          <a class="button" onClick={btnHandler}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ProductEditForm