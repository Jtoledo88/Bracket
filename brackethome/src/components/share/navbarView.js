import React, { Component } from 'react';


export default class Nav extends Component {
    render(){
        return (
            <nav>
              	<div className="main-nav">
			        <div className="logo-left">
				        <a data-scroll href="#home">
					    <img src="img/bracketLogo.jpeg" alt="logo"/>
				        </a>
			        </div>
			        <div className="menu-button toggle-menu menu-right push-body">
				        <button><i className="fa fa-bars"></i></button>
			        </div>
		        </div>
            </nav>
            );
    };
}