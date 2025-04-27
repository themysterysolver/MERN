import React from 'react'
import { getCart, placeOrder } from '../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart=getCart();
  const nav=useNavigate();
  const handlePlaceOrder=()=>{
    placeOrder();
    alert('Order placed sucessfully');
    nav('/orders');
  }
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx} className="d-flex justify-content-between align-items-center mb-3">
              <span>{item.name}</span>
              <span>${item.price} x {item.quantity}</span>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
