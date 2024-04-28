import React from 'react';
import axios from 'axios';

const DeleteOrder = () => {
  const handleDelete = () => {
    axios.delete('/api/deleteOrder')
      .then(response => {
        console.log('Order deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting order:', error);
      });
  }

  return (
    <div className="container">
      <h2>Delete Order</h2>
      <button onClick={handleDelete} className="btn btn-danger">Delete Order</button>
    </div>
  );
}

export default DeleteOrder;
