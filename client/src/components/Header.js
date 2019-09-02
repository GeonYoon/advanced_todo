import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';


class Header extends Component {
    
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                 return [
                    <li key="1"><a href="/api/auth/google">Login With Google</a></li>,
                    // <li key="2"><a href="/api/auth/facebook">Login With Facebook</a></li>
                ];
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>

                );
        }
    }
    
    render() {
        return (
                <nav>
                    <div className="nav-wrapper">
                        <Link 
                            to={this.props.auth ? '/todo' : '/'}
                            className="left brand-logo"
                        >
                            Todo
                        </Link>
                        <ul className = "right">
                            { this.renderContent() }
                        </ul>
                    </div>
                </nav>
            );
    }
}

const mapStateToProps = ({auth}) => {
    return {
      auth : auth
    }
  };

export default withRouter(connect(mapStateToProps,null)(Header));

