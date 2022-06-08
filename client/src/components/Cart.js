import React from 'react';
// {
//   id: 1,
//   title: "Amazon Kindle E-reader",
//   quantity: 5,
//   price: 79.99
// },
const Cart = ({ data })=> {
  let total = 0;
  return (
  <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
            {data.map(item => {
            total += item.price * item.quantity  
            return (<tr>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td> 
            </tr>)
            })}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan="3" class="total">Total: ${total.toFixed(2)}</td>
          </tr>
          </tfoot>
        </table>
        <a href="/#" class="button checkout">Checkout</a>
      </div>    
  );
};

export default Cart;