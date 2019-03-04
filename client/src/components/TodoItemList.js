// 리스트를 렌더링 하게 될때는, 특히 보여주는 리스트가 동적인 경우에는
// 함수형이 아닌 클래스형 컴포넌트로 작성해야한다. 
// 클래스형 컴포넌트는 나중에 컴포넌트 성능을 최적화할수있다. 

import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    
    // ShouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }
    
    render() {
        const {todos, onToggle, onRemove } = this.props;
        
        const todoList = todos.map(
            todo => {
                const {id ,checked, text, color} = todo.toJS();
                return (
                    <TodoItem 
                        id = {id}
                        text = {text}
                        checked = {checked}
                        onToggle = {onToggle}
                        onRemove = {onRemove}
                        key = {id}
                        color = {color}
                    />
                )
            }
        )
        return (
            <div>
               { todoList}
            </div>
        );
    }
}

export default TodoItemList;