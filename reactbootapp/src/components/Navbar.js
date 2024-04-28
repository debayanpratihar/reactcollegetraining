import React from 'react';

const Navbar = ({ handleButtonClick }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Food App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleButtonClick('home')}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleButtonClick('order')}>Order</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => handleButtonClick('viewOrder')}>View Order</button>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Food App
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><button className="dropdown-item" onClick={() => handleButtonClick('addOrder')}>Add Order</button></li>
                                <li><button className="dropdown-item" onClick={() => handleButtonClick('deleteOrder')}>Delete Order</button></li>
                                <li><button className="dropdown-item" onClick={() => handleButtonClick('updateOrder')}>Update Order</button></li>
                                <li><button className="dropdown-item" onClick={() => handleButtonClick('searchOrder')}>Search Order</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
