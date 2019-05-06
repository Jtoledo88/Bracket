import React, { Component } from 'react';
import NavBar from '../share/navbar.js';
import Slider from '../sections/slider.js';
import Developer from '../sections/develop.js';
import Design from '../sections/design.js';
import Comunnity from '../sections/community.js';
import Stadistic from '../sections/stadistics.js';
import Team from '../sections/team.js';
import Blog from '../sections/blog.js';
import Comments from '../sections/comments.js';
import Clients from '../sections/clients.js';
import Join from '../sections/join_us.js';
import Contact from '../share/contact.js';
import Footer from '../share/footer.js';


export default class Home extends Component {
	render (){
  return (

    <div id="wrapper">
		<div class="main-nav">
			<div class="logo-left">
				<a data-scroll href="#home">
					<img src="img/bracketLogo.jpeg" alt="logo"/>
				</a>
			</div>
			<div class="menu-button toggle-menu menu-right push-body">
				<button><i class="fa fa-bars"></i></button>
			</div>
		</div>

		<NavBar/>

		<Slider/>

		<Developer/>

		<Design/>

		<Comunnity/>

		<Stadistic/>

		<Team/>

		<Blog/>

		<Comments/>

		<Clients/>

		<Join/>

		<Contact/>

		<Footer/>

	</div>
		);
	}
}

