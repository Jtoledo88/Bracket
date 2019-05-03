import React from 'react';

const NavBar = () => {
    return <nav id="main-navigation" className="nav-menu nav-menu-vertical nav-menu-right">
			<ul className="list-inline">
				<li className="current"><a href="#home">home</a></li>
				<li><a href="#features">Desarrollo</a></li>
				<li><a href="#courses">Diseño Web</a></li>
				<li><a href="#portfolio">Comunnity Manager</a></li>
				<li><a href="#teams">The Team</a></li>
				<li><a href="#latest-blog">Blog</a></li>
				<li><a href="#client-feedback">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		   </nav>
}
    
export default NavBar;
