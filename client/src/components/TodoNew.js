import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions';
import { withRouter } from 'react-router-dom';

import './css/todos.css';
import TodoContainer from './TodosContainer';
import { Input } from 'react-materialize';
import { Modal } from 'react-materialize';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = { title : ''};
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({title : event.target.value});
    }
    
    render() {
        const current_date = new Date().toDateString();
        const  { TodoActions, todos,completeness,history} = this.props;
        return (
         <div className="row">
                <div className="todos"><TodoContainer /></div>
               
                <div className="fixed-action-btn">
                    <div className="btn-floating btn-large red">
                        <Modal
                            actions = {
                                <div>
                                    <a 
                                        className="waves-effect waves-teal btn-flat"
                                         onClick={() => TodoActions.submitTodo(this.state.title,current_date, todos,completeness,history)}
                                    >
                                        Save
                                    </a>
                                    <a href="#!"className="modal-close waves-effect waves-teal btn-flat">Cancel</a>
                                </div>
                            }
                            trigger={<i className="material-icons">add</i>}>
                            <div>
                                <Input type = "text" s={12} value={this.state.title} onChange={this.handleChange} label="Choose a Name" />
                                <Input s={12} label="Time" defaultValue={current_date} disabled />
                            </div>
                        </Modal>
                    </div>
                </div>
        </div>
        
        );
    }
}

//export default Dashboard

export default connect(
    // destructuring state
    ({ todo }) => ({
        // because we're using immutable, we use .get to get a data 
        todos : todo.get('todos'),
        completeness : todo.get('completeness'),
    }),
    (dispatch) => ({
        TodoActions : bindActionCreators(todoActions, dispatch)
    })
)(withRouter(Dashboard))