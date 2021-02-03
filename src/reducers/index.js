import counter from './counter';
import loggedIn from './loggedIn';
import {combineReducers} from 'redux';

const allReducers = combineReducers(
    {
        counter:counter,
        loggedIn:loggedIn
    }
);
export default allReducers;

