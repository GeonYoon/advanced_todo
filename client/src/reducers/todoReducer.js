import { CHANGE_INPUT, INSERT,TOGGLE,REMOVE, UPDATE_COLOR,SUBMIT_TODO,RESET_TODO,EDIT_FETCH } from '../actions/types';
import { handleActions } from 'redux-actions';
import {Map, List, fromJS} from 'immutable';


let id = 0;
let savedId = 0;

const initialState = Map({
    input : '',
    completeness : 0,
    color : '#343a40',
    colors :  List(['#343a40', '#f03e3e', '#12b886', '#228ae6']),
    todos : List()
    //id를 추적해서 수정할때 아이디를 복사해서 붙이도록 해야한다. 
});

function calComp(state) {
    const all = state.get('todos').map(x => x.get('checked')).count();
    const checked  = state.get('todos').filter(x => x.get('checked') === true ).count();
    if (all === 0) {
        return 0;
    }
    return (checked/all*100).toFixed(2)
}

export default handleActions({
    [CHANGE_INPUT] : (state, action) => {
       
        return state.set('input', action.payload)
        },
    [INSERT] : (state, {payload : text}) => {
        const current_color = state.get('color')
       
        let myHash  = {}
        myHash['#343a40'] = 1
        myHash['#f03e3e'] = 2
        myHash['#12b886'] = 3
        myHash['#228ae6'] = 4
        
        const current_importance  = myHash[current_color]
        const item = Map({ id : ++id, checked : false, text : text, color : current_color, importance : current_importance});
        const unsorted  = state.update('todos', todos => todos.push(item));
        const sorted = unsorted.get('todos').sort(
                (a,b) => a.get('importance') - b.get('importance')        
            )
        const returnVal = state.update('todos', todos => sorted)
        return returnVal.update('completeness', completeness => calComp(returnVal))
    },
    [TOGGLE] : (state, {payload : id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        const returnVal = state.updateIn(['todos',index,'checked'], checked => !checked);
        return returnVal.update('completeness', completeness => calComp(returnVal))
    },
    [REMOVE] : (state, {payload : id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        const returnVal =  state.deleteIn(['todos', index]);
        return returnVal.update('completeness', completeness => calComp(returnVal))
    },
    [UPDATE_COLOR] : (state, {payload : value}) => {
        return state.set('color', value)     
    },
    [SUBMIT_TODO] : (state,action) => {
        savedId = id
        id = 0
        return state.set('input', '').set('completeness', 0).set('todos', List()).set('color', '#343a40')
    },
    [EDIT_FETCH] : (state,action) => {
        const convertTodos = fromJS(action.payload.todos)
        id = savedId 
        savedId = 0
        console.log(id)
        return state.set('input', '').set('completeness', action.payload.completeness).set('todos', convertTodos).set('color', '#343a40')
    },
    [RESET_TODO] : (state,action) => {
        return state.set('input', '').set('completeness', 0).set('todos', List()).set('color', '#343a40')
    }
  
        
}, initialState);