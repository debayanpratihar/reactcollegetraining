import React, { useState } from 'react';
import axios from 'axios';

const UpdateOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [newDetails, setNewDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/api/updateOrder/${orderId}`, { details: newDetails })
      .then(response => {
        console.log('Order updated successfully:', response.data);
        setOrderId('');
        setNewDetails('');
      })
      .catch(error => {
        console.error('Error updating order:', error);
      });
  }

  return (
    <div className="container">
      <h2>Update Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="orderId" className="form-label">Order ID</label>
          <input type="text" className="form-control" id="orderId" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="newDetails" className="form-label">New Order Details</label>
          <input type="text" className="form-control" id="newDetails" value={newDetails} onChange={(e) => setNewDetails(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Update Order</button>
      </form>
    </div>
  );
}

export default UpdateOrder;
