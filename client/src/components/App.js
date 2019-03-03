import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import TodoNew from './TodoNew'
import Header from './Header';
import Landing from './Landing'
import Dashboard from './Dashboard'
import TodoEdit from './TodoEdit'
// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew'


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render() {
        return (
        <div className="container">
            <BrowserRouter>
                <div>
                    {/* <Header /> */}
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/todo" component={Dashboard}/>
                    <Route exact path="/todos/new" component={TodoNew}/>
                    <Route exact path="/todos/edit/:id" component={TodoEdit}/>
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
    

export default connect(null, actions)(App);