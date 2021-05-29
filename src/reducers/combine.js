import counterReducer from './counter';
import productReducer from './product';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    mycounter:counterReducer,
    product:productReducer,
    checkLogged:loggedReducer
})

export default allReducers;