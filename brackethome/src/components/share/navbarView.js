import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    render(){
        return (
            <Fragment>
              	<nav className="main-nav navbar navbar-inverse">
			        <div className="logo-left">
				        <Link data-scroll to="/">
					    <img src="img/bracketLogo.png" alt="logo"/>
				        </Link>
			        </div>
			        <div className="menu-button toggle-menu menu-right push-body">
				        <button><i className="fa fa-bars"></i></button>
			        </div>
		        </nav>
            </Fragment>
            );
    };
}