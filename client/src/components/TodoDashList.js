import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import * as todoActions from '../actions';

class TodoDashList extends Component {
    
    componentDidMount() {
        this.props.TodoActions.fetchTodos();
    }
    
    renderTodos() {
        return this.props.todoList.reverse().map(todo => {
            return (
                <div className="card darken-1" key={todo._id}>
                    <div className="card-content">
                        <span className="card-title">{todo.title}</span>
                        <p>
                            Completeness : {todo.completeness}
                        </p>
                        <p className="right">
                            Date created: { todo.date }
                        </p>
                    </div>
                    <div className="card-action">
                        <Link to={`/todos/edit/${todo._id}`}>
                            <i className="material-icons">edit</i>
                        </Link>
                        <i
                            className = "material-icons right"
                            onClick={() => this.props.TodoActions.deleteTodos(todo._id)}
                            style={{cursor:"pointer"}}
                        >
                            delete
                        </i>
                    </div>
                </div>
            );
        });
    }

    
    render () {
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    }
}

export default connect(
    // destructuring state
    ({ todoList }) => ({
        // because we're using immutable, we use .get to get a data 
        todoList : todoList
    }),
    (dispatch) => ({
        TodoActions : bindActionCreators(todoActions, dispatch)
    })
)(TodoDashList)