import React from 'react';
import { Link } from 'react-router-dom';
import TodoDashList from './TodoDashList'

const Dashboard = () => {
    return(
        <div>
            <TodoDashList />
            <div className="fixed-action-btn">
                <Link to="/todos/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div> 
        </div>
    );
};


export default Dashboard;