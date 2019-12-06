import React, { Component, Fragment } from 'react';
import NavBar from '../share/navbar.js';
import Slider from '../sections/slider.js';
import Developer from '../sections/develop.js';
import Design from '../sections/design.js';
import Comunnity from '../sections/community.js';
import TI from '../sections/TI.js';
import Stadistic from '../sections/stadistics.js';
import Team from '../sections/team.js';
import Comments from '../sections/comments.js';
import Clients from '../sections/clients.js';
import Join from '../sections/join_us.js';
import Contact from '../share/contact.js';
import Footer from '../share/footer.js';
//import Video from '../sections/video.js';


export default class Home extends Component {
	render (){
  return (
  	<Fragment>
		<NavBar/>

		<Slider/>

		<Developer/>

		<Design/>

		<Comunnity/>

		<TI/>

		<Stadistic/>

		<Team/>

		<Comments/>

		<Clients/>

		<Join/>

		<Contact/>

		<Footer/>
</Fragment>

		);
	}
}

