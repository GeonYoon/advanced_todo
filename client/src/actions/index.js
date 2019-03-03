import axios from 'axios';
import { FETCH_USER, 
        CHANGE_INPUT, 
        INSERT,
        TOGGLE,REMOVE, 
        UPDATE_COLOR,
        SUBMIT_TODO,
        FETCH_TODOS,
        DELETE_TODO,
        RESET_TODO,
        EDIT_FETCH } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    
    dispatch({type: FETCH_USER, payload: res.data});
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe',token);
    
    //action type to update the user model inside of the authreducer
    dispatch({type: FETCH_USER, payload: res.data});
};

export const changeInput = (value) => ({ type: CHANGE_INPUT,payload : value });
export const insert = (text) => ({ type: INSERT, payload : text });
export const toggle = (id) => ({ type: TOGGLE, payload : id });
export const remove = (id) => ({ type: REMOVE,payload : id });
export const updateColor = (value) => async dispatch => {
    dispatch({ type : UPDATE_COLOR, payload : value});
}

export const submitTodo = (title,date, todos,completeness, history) => async dispatch => {
    const compact = { title, date, todos, completeness} 
    await axios.post('/api/todos',compact)
    history.push('/todo');
    dispatch({ type: SUBMIT_TODO});
};

export const editTodo = (todos,completeness,history,id) => async dispatch => {
    const compact = { todos, completeness} 
    await axios.put(`/api/todos/edit/${id}`,compact)
    history.push('/todo');
    dispatch({ type: SUBMIT_TODO});
};

export const fetchTodos = () => async dispatch => {
    const res = await axios.get('/api/todos');
    
    dispatch({type : FETCH_TODOS, payload : res.data });
};

export const deleteTodos = (id) => async dispatch => {
    const res = await axios.delete(`/api/todos/delete/${id}`);
    dispatch({type : DELETE_TODO, payload : res.data})
    
};

export const editFetch = (completeness,todos) => async dispatch => {
    dispatch({type : EDIT_FETCH, payload : {completeness : completeness, todos : todos}})
}

export const resetTodo = () => async dispatch => {
    dispatch({type : RESET_TODO})
}