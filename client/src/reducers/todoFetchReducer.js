import {FETCH_TODOS, DELETE_TODO } from '../actions/types';
import { handleActions } from 'redux-actions';

const fetchState = [];

export default handleActions({
    [FETCH_TODOS] : (state,action) => {
        console.log(action.payload)
        return action.payload;
    },
    [DELETE_TODO] : (state, action) => {
        console.log(action.payload)
        return action.payload;
    }
}, fetchState);
