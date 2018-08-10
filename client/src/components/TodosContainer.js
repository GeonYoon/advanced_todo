import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions';
import TodoListTemplate from './TodoListTemplate';
import TodoItemList from './TodoItemList';
import Form from './Form';
import Palette from './Palette';

class TodoContainer extends Component {
    
    handleChange = (e) => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }
    
    handleInsert = () => {
        const { input, TodoActions } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }
    
    handleToggle = (id) => {
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }
    
    handleRemove = (id) => {
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    }
    
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleInsert();
        }
    }
    
    handleColor = (color) => {
        const { TodoActions } = this.props;
        TodoActions.updateColor(color)
    }
    
    componentDidMount() {
        this.props.TodoActions.resetTodo();
      
    }
    
    render() {
        const { handleChange, handleInsert, handleToggle, handleRemove, handleKeyPress, handleColor } = this;
        const  { input, todos, color, colors,completeness  } = this.props
        
        return (
            <TodoListTemplate 
                form={(
                  <Form 
                    color = {color}
                    value = {input}
                    onKeyPress = { handleKeyPress }
                    onChange = { handleChange }
                    onCreate = { handleInsert }
                  />
                )}
                palette = {( 
                  <Palette
                    completeness = { completeness  }
                    colors = {colors}
                    onSelect = { handleColor }
                    selected = { color }
                  />
                )}
            >
                <TodoItemList todos = {todos} onToggle = {handleToggle} onRemove = {handleRemove} />
            </TodoListTemplate>
        );
    }
}



// // props 값으로 넣어 줄 액션 함수들을 정의해줍니다
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(counterActions.increment()),
//   decrement: () => dispatch(counterActions.decrement())
// })

// // 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// // connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// // 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect(
    // destructuring state
    ({ todo }) => ({
        // because we're using immutable, we use .get to get a data 
        input : todo.get('input'),
        todos : todo.get('todos'),
        completeness : todo.get('completeness'),
        color : todo.get('color'),
        colors : todo.get('colors')
    }),
    (dispatch) => ({
        TodoActions : bindActionCreators(todoActions, dispatch)
    })
)(TodoContainer)