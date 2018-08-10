import React, { Component } from  'react';
import './css/TodoItem.css';

class TodoItem extends Component {
     
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    
    render() {
        const { text, checked, id, onToggle, onRemove, color } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                        // stopPropagation stop diffusion of the event
                        e.stopPropagation(); // make onToggle not excute 
                        onRemove(id)}
                    }>&times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`} style={{ color : color}}>
                    <div>{text}</div>
                </div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                
            </div>
        );
    }
}

export default TodoItem;