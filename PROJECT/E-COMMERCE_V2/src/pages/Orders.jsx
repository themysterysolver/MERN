import React from 'react'
import { getOrders } from '../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const orders = getOrders();

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center">No orders yet</p>
      ) : (
        orders.map((order, idx) => (
          <div key={idx} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Order #{order.orderId}</h5>
              <ul className="list-group list-group-flush mb-3">
                {order.items.map((item, i) => (
                  <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name}
                    <span>${item.price} x {item.quantity}</span>
                  </li>
                ))}
              </ul>
              <h6 className="card-subtitle text-muted">Total: ${order.totalAmount}</h6>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Orders
