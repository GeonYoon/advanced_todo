import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import todoFetchReducer from './todoFetchReducer';

export default combineReducers({
    auth : authReducer,
    todo : todoReducer,
    todoList : todoFetchReducer
});



