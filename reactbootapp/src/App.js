import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './components/Order';
import ViewOrder from './components/ViewOrder';
import AddOrder from './components/AddOrder';
import DeleteOrder from './components/DeleteOrder';
import UpdateOrder from './components/UpdateOrder';
import SearchOrder from './components/SearchOrder';


const App = () => {
  const [content, setContent] = useState(<Home />);

  const handleButtonClick = (page) => {
    switch (page) {
      case 'home':
        setContent(<Home />);
        break;
      case 'order':
        setContent(<Order />);
        break;
      case 'viewOrder':
        setContent(<ViewOrder />);
        break;
      case 'addOrder':
        setContent(<AddOrder />);
        break;
      case 'deleteOrder':
        setContent(<DeleteOrder />);
        break;
      case 'updateOrder':
        setContent(<UpdateOrder />);
        break;
      case 'searchOrder':
        setContent(<SearchOrder />);
        break;
      default:
        setContent(<Home />);
        break;
    }
  }

  return (
    <div>
      <Navbar handleButtonClick={handleButtonClick} />
      <div id="content">
        {content}
      </div>
    </div>
  );
}

export default App;