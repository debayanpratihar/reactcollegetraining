import React, { useState } from 'react';
import axios from 'axios';

const AddOrder = () => {
  const [orderDetails, setOrderDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/addOrder', { details: orderDetails })
      .then(response => {
        console.log('Order added successfully:', response.data);
        setOrderDetails('');
      })
      .catch(error => {
        console.error('Error adding order:', error);
      });
  }

  return (
    <div className="container">
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="orderDetails" className="form-label">Order Details</label>
          <input type="text" className="form-control" id="orderDetails" value={orderDetails} onChange={(e) => setOrderDetails(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
}

export default AddOrder;
