import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cartReceived from '../action/cartsAction'
import axios from 'axios'

const Cart = ()=> {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleCheckout = async (e) => {
    e.preventDefault();
    await axios.post("/api/checkout")
    dispatch(cartReceived([]))
  }

  useEffect(()=> {
    ;(async () => {
      const cartResponse = await axios.get("/api/cart")
      dispatch(cartReceived(cartResponse.data))
      })()
    }, [dispatch])
  
  let total = 0;
  return (
    <header>
    <h1>Shop</h1>
  <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
            {cartItems.map(item => {
            total += item.price * item.quantity  
            return (
            <tr key={ item._id }>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td> 
            </tr>)
            })}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${total.toFixed(2)}</td>
          </tr>
          </tfoot>
        </table>
        <a href="/#" className="button checkout" onClick={handleCheckout}>Checkout</a>
      </div>    
    </header>
  );
};

export default Cart;