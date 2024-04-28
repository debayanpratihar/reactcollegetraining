import React, { useState } from 'react';
import axios from 'axios';

const SearchOrder = () => {
 
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);
  
    const handleSearch = () => {
      axios.get(`/api/searchOrder?query=${searchQuery}`)
        .then(response => {
          console.log('Search result:', response.data);
          setSearchResult(response.data);
        })
        .catch(error => {
          console.error('Error searching for order:', error);
        });
    }
  
    return (
      <div className="container">
        <h2>Search Order</h2>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Enter search query" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
        {searchResult && (
          <div className="mt-3">
            <h4>Search Result:</h4>
            <p>{searchResult}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default SearchOrder;
  
