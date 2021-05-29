import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
        </div>
    );
};

export default Navigation;