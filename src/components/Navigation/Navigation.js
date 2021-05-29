import React from 'react';
import {Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <Link to="/">Home</Link> | 
            <Link to="/counter">Counter</Link> | 
            <Link to="/add-product">Add Product</Link>
        </div>
    );
};

export default Navigation;