import React from 'react';
import { useSelector } from "react-redux";
import Navigation from '../Navigation/Navigation';


const CounterPage = () => {
    const thisCounter = useSelector(state => state.mycounter)
    return (
        <div>
            <Navigation></Navigation>
            <h1>Counter Page</h1>
            <h4>Current Counter Value: {thisCounter}</h4>

        </div>
    );
};

export default CounterPage;