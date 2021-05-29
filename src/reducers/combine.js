import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    mycounter:counterReducer,
    checkLogged:loggedReducer
})

export default allReducers;