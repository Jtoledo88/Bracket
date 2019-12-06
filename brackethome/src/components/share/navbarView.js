import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    render(){
        return (
            <Fragment>
              	<nav className="main-nav">
			        <div className="logo-left">
				        <Link data-scroll to="/">
					    <img src="img/bracketLogo.png" alt="logo"/>
				        </Link>
			        </div>
			        <div className="menu-button toggle-menu push-body">
				        <Link to="/"><button><i class="fa fa-arrow-left"></i></button></Link>
			        </div>
		        </nav>
            </Fragment>
            );
    };
}