import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment } from '../../actions';
import { decrement } from '../../actions';
import Navigation from '../Navigation/Navigation';



const Home = () => {
    const thisCounter = useSelector(state => state.mycounter)
    const isLogged = useSelector(state => state.checkLogged);
    const dispatch = useDispatch();//We will fire action through useDispatch()
    const handleIncrement=(number)=>{
        console.log('hello');
        dispatch(increment(number))
    }
    return (
        <div>
            <Navigation/>
            <h1>Hello Redux</h1>
            <h4>Counter: {thisCounter}</h4>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={()=>handleIncrement(5)}>++</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {
                isLogged ? <p>Login Information</p> : <p>You did not Logged In</p>
            }
        </div>
    );
};

export default Home;