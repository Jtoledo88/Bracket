import React, { Fragment } from 'react';

const NavBar = () => {
    return <Fragment>
    
    	<div className="main-nav">
			<div className="logo-left">
				<a data-scroll href="#home">
					<img src="img/bracketLogo.png" alt="logo"className="h-30"/>
				</a>
			</div>
			<div className="menu-button toggle-menu menu-right push-body">
				<button><i className="fa fa-bars"></i></button>
			</div>
		</div>
    
    	<nav id="main-navigation" className="nav-menu nav-menu-vertical nav-menu-right">
			<ul className="list-inline">
				<li className="current"><a href="#home">home</a></li>
				<li><a href="#features">Desarrollo</a></li>
				<li><a href="#courses">Diseño Web</a></li>
				<li><a href="#portfolio">Comunnity Manager</a></li>
				<li><a href="#latest-blog">TI Services</a></li>
				<li><a href="#teams">The Team</a></li>
				<li><a href="#client-feedback">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		 </nav>
	  </Fragment>
}
    
export default NavBar;
