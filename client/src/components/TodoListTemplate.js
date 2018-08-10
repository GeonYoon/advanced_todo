import React from 'react';
import './css/TodoListTemplate.css';

const TodoListTemplate = ({palette, form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                Things to do today 
            </div>
            <section className="form-wrapper">
                { palette }
            </section>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="form-wrapper">
                { children }
            </section>
        </main>
    );
};

export default TodoListTemplate;
