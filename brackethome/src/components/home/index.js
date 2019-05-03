import React, { Component } from 'react';
import NavBar from '../share/navbar.js';
import Footer from '../share/footer.js';
import Slider from '../sections/slider.js';
import Team from '../sections/team.js';
import Design from '../sections/design.js';
import Developer from '../sections/develop.js';
import Comunnity from '../sections/community.js';
import Contact from '../share/contact.js';

export default class Home extends Component {
	render (){
  return (

    <div id="wrapper">

		<div className="main-nav">
			<div className="logo-left">
				<a data-scroll href="#home">
					<img src={"img/bracketLogo.jpeg"} alt="logo"/>
				</a>
			</div>
			<div className="menu-button toggle-menu menu-right push-body">
				<button><i className="fa fa-bars"></i></button>
			</div>
		</div>

		<NavBar/>

		<Slider/>

		<Developer/>

		<Design/>

		<Comunnity/>

		<section id="count-down" className="text-center">
			<div className="color-overlay ptb100">
				<div className="container">
					<h3 className="section-title wow fadeInDown">Estadisticas Notables</h3>
					<div className="row">
						<div className="counter-content">
							<div className="col-sm-4 each-counter wow zoomIn">
								<span className="counter count1">2043</span>
								<p className="title">Páginas Hechas</p>
							</div>
							<div className="col-sm-4 each-counter wow zoomIn">
								<span className="counter count2">1602</span>
								<p className="title">Años de Experiencia</p>
							</div>
							<div className="col-sm-4 each-counter wow zoomIn">
								<span className="counter count3">441</span>
								<p className="title">Clientes Satisfechos</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<Team/>

		<section id="latest-blog" className="mtb100">
			<div className="container">
				<h3 className="section-title wow fadeInDown">Oven Hot News</h3>
				<p className="section-info col-sm-8 col-sm-offset-2 wow fadeInDown" data-wow-delay=".25s">
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
				</p>
				<div className="clearfix"></div>

				<div className="row">

					<div className="col-sm-4 each-post wow fadeIn" data-wow-delay=".25s">
						<div className="content">
							<div className="blog-img">
								<a href="javascript:"><img src="img/blog/01.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">11 Sep</p>
								<h4 className="headline">
									<a href="javascript:">Why a photography website template important?</a>
								</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-4 each-post wow fadeIn" data-wow-delay=".45s">
						<div className="content">
							<div className="blog-img">
								<a href="javascript:"><img src="img/blog/02.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">02 Oct</p>
								<h4 className="headline">
									<a href="javascript:">Responsive and free website template (HTML/CSS)</a>
								</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-4 each-post wow fadeIn" data-wow-delay=".65s">
						<div className="content">
							<div className="blog-img">
								<a href="javascript:"><img src="img/blog/03.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">18 Oct</p>
								<h4 className="headline">
									<a href="javascript:">Download free photography website template</a>
								</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 read-more-button wow zoomIn">
						<p className="text-uppercase text-center"><a href="javascript:">View All</a></p>
					</div>
				</div>
			</div>
		</section>


		<section id="client-feedback">
			<div className="color-overlay ptb100">
				<div className="container">
					<h3 className="section-title wow fadeInDown">Happy Clients</h3>
					<div className="row">
						<div className="col-sm-10 col-sm-offset-1">
							<div className="custom-control">
								<p><span id="slider-prev"></span> <span id="slider-next"></span></p>
							</div>
							<ul className="bx-slider main-content">
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="">J. Donga</a></p>
								</li>
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="">D. John</a></p>
								</li>
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="">S. Dongian</a></p>
								</li>
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="">P. Donga</a></p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>



		<section id="our-clients" className="mtb100">
			<div className="container">
				<h3 className="section-title wow fadeInDown">Brands we work with</h3>
				<p className="section-info col-sm-8 col-sm-offset-2 wow fadeInDown" data-wow-delay=".25s">
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
				</p>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-sm-12">
						<ul className="list-inline text-center">
							<li className="each-client"><a href=""><img src="img/clients/logo-01.png" alt="client"/></a></li>
							<li className="each-client"><a href=""><img src="img/clients/logo-02.png" alt="client"/></a></li>
							<li className="each-client"><a href=""><img src="img/clients/logo-03.png" alt="client"/></a></li>
							<li className="each-client"><a href=""><img src="img/clients/logo-04.png" alt="client"/></a></li>
							<li className="each-client"><a href=""><img src="img/clients/logo-05.png" alt="client"/></a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>


		<section id="join-us">
			<div className="color-overlay ptb100">
				<div className="container">
					<h3 className="section-title wow fadeInDown">Learn photography tips & techniques</h3>
					<p className="section-info col-sm-8 col-sm-offset-2 wow fadeInDown" data-wow-delay=".25s">
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
					</p>
					<div className="clearfix"></div>
					<p className="join-btn text-center wow zoomIn">
						<a href="" className="btn btn-primary">join now</a>
					</p>
				</div>
			</div>
		</section>

		<Contact/>

		<Footer/>

	</div>
		);
	}
}

