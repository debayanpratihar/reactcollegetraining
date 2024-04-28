import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewOrder = () => {
  const [latestOrder, setLatestOrder] = useState(null);
  useEffect(() => {
    axios.get('/api/latestOrder')
      .then(response => {
        setLatestOrder(response.data);
      })
      .catch(error => {
        console.error('Error fetching latest order:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Latest Order</h2>
      {latestOrder ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Order ID: {latestOrder.id}</h5>
            <p className="card-text">Order details: {latestOrder.details}</p>
          </div>
        </div>
      ) : (
        <p>Loading latest order...</p>
      )}
    </div>
  );
}

export default ViewOrder;
