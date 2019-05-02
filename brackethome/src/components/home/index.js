import React, { Component } from 'react';
import NavBar from '../share/navbar.js';
import Footer from '../share/footer.js';
import Slider from '../sections/slider.js';
import Team from '../sections/team.js';

export default class Home extends Component {
	render (){
  return (

    <div id="wrapper">

		<div className="main-nav">
			<div className="logo-left">
				<a data-scroll href="#home">
					<img src={"img/logo.png"} alt="logo"/>
				</a>
			</div>
			<div className="menu-button toggle-menu menu-right push-body">
				<button><i className="fa fa-bars"></i></button>
			</div>
		</div>


		<NavBar/>

		<Slider/>

		<section id="features">
			<div className="container">
				<div className="row">

					<div className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".15s">
							<p className="icon text-center"><i className="fa fa-camera-retro"></i></p>
							<h5 className="title text-center">Wedding Photography</h5>
							<p className="info">
								Who doesn't want to share their camera art with friends and family on social media? But why not share them on your own personal photography website and showcase your camera art to the world!
							</p>
						</div>
					</div>

					<div className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".35s">
							<p className="icon text-center"><i className="fa fa-male"></i></p>
							<h5 className="title text-center">Portfolio Photoshoot</h5>
							<p className="info">
								This free website template is the first step to get you started with your personal photography website. Learn the game and get some fame. Don't restrict your photography viewership to your close circle.
                            </p>
						</div>
					</div>

					<div className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".55s">
							<p className="icon text-center"><i className="fa fa-users"></i></p>
							<h5 className="title text-center">Festival Coverage</h5>
							<p className="info">
								This quality free website template is the best way to save money and time to get started with your photography website. The minimal things that you need are a little personalization in terms of color theme.
							</p>
						</div>
					</div>

				</div>
			</div>
		</section>




		<section id="courses">
			<div className="color-overlay ptb100">
				<div className="container">
					<h3 className="section-title wow fadeInDown">Professional Photography Courses</h3>
					<div className="row">

							<div className="col-md-8 info-part">
								<div className="first-courses each-courses">

									<h4 className="title">How to do a perfect wedding photoshoot</h4>
									<p className="info">
										The commission of violent crime may form partial of a criminal form organization's 'tools' used.
									</p>
								</div>
								<div className="second-courses each-courses">
									<h4 className="title">How to build a career as a Photographer</h4>
									<p className="info">
										The role of the hit man has been generally consistent through out the history of organized crime.
									</p>
								</div>
								<div className="third-courses each-courses">
									<h4 className="title">Birthday Parties Photography Techniques</h4>
									<p className="info">
										In addition to what is considered traditional organized crime is  direct crimes of fraud.
									</p>
								</div>
								<div className="fourth-courses each-courses">
									<h4 className="title">Photo retouching</h4>
									<p className="info">
										Organized crime groups generate very large amounts of money by
									</p>
								</div>
							</div>
							 <div className="col-md-4 text-right">
                             <p className="timing first">28 Oct, 2015 by John Donga<br/>Saturdays & Sundays<br/>8 pm - 10 pm</p>
                             <p className="timing">28 Oct, 2015 by John Donga<br/>Saturdays & Sundays<br/>8 pm - 10 pm</p>
                             <p className="timing">28 Oct, 2015 by John Donga<br/>Saturdays & Sundays<br/>8 pm - 10 pm</p>
                             <p className="timing">28 Oct, 2015 by John Donga<br/>Saturdays & Sundays<br/>8 pm - 10 pm</p>
                             </div>

					</div>
				</div>
			</div>
		</section>




		<section id="portfolio" className="mtb100">
			<div className="container">
				<h3 className="section-title wow fadeInDown">Our Portfolio</h3>
				<p className="section-info col-sm-8 col-sm-offset-2 wow fadeInDown" data-wow-delay=".25s">
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
				</p>
				<div className="clearfix"></div>

				<div className="portfolio-content">
					<ul className="portfolio-filter text-center list-inline mtb40 text-uppercase">
						<li><a className="active" href="#" data-filter="*"> All</a></li>
						<li><a href="#" data-filter=".wedding">Wedding</a></li>
						<li><a href="#" data-filter=".festival">Festival</a></li>
						<li><a href="#" data-filter=".engagement">Engagement</a></li>
						<li><a href="#" data-filter=".birthday">Birthday</a></li>
					</ul>
					<div className="portfolio-items">
						<div className="col-lg-3 col-md-4 col-sm-6 portfolio-item festival wedding">
						 	<figure className="content wow fadeIn" data-wow-delay=".15s">
						 		<img src="img/portfolio/01.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-01.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item festival birthday">
						 	<figure className="content wow fadeIn" data-wow-delay=".25s">
						 		<img src="img/portfolio/02.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-02.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item engagement">
						 	<figure className="content wow fadeIn" data-wow-delay=".35s">
						 		<img src="img/portfolio/03.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-03.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item birthday wedding hit-and-run">
						 	<figure className="content wow fadeIn" data-wow-delay=".45s">
						 		<img src="img/portfolio/04.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-04.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item engagement birthday hit-and-run">
						 	<figure className="content wow fadeIn" data-wow-delay=".55s">
						 		<img src="img/portfolio/05.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-05.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item festival wedding hit-and-run">
						 	<figure className="content wow fadeIn" data-wow-delay=".65s">
						 		<img src="img/portfolio/06.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-06.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item festival wedding">
						 	<figure className="content wow fadeIn" data-wow-delay=".75s">
						 		<img src="img/portfolio/07.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-07.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
						 <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item engagement hit-and-run">
						 	<figure className="content wow fadeIn" data-wow-delay=".85s">
						 		<img src="img/portfolio/08.jpg" className="img-100p" alt="portfolio"/>
						 		<figcaption className="overflow-content-full">
						 			<p className="icon horizontal-vertical-center">
						 				<a data-lightbox="portfolio" href="img/portfolio/main-08.jpg"><i className="fa fa-search-plus"></i></a>
						 			</p>
						 			<div className="caption text-center">
						 				<p className="title">John Donga</p>
						 				<p className="info">Lorem Ipsum is simply dummy text of the printing industry. </p>
						 			</div>
						 		</figcaption>
						 	</figure>
						 </div>
					</div>
				</div>
			</div>
		</section>




		<section id="count-down" className="text-center">
			<div className="color-overlay ptb100">
				<div className="container">
					<h3 className="section-title wow fadeInDown">Notable Stats</h3>
					<div className="row">
						<div className="counter-content">
							<div className="col-sm-4 each-counter wow zoomIn">
								<span className="counter count1">2043</span>
								<p className="title">Events Covered</p>
							</div>
							<div className="col-sm-4 each-counter wow zoomIn">
								<span className="counter count2">1602</span>
								<p className="title">Weddings</p>
							</div>
							<div className="col-sm-4 each-counter wow zoomIn">
								<span className="counter count3">441</span>
								<p className="title">Birthday Parties</p>
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
									<p className="client-name"><a href="#">J. Donga</a></p>
								</li>
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="#">D. John</a></p>
								</li>
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="#">S. Dongian</a></p>
								</li>
								<li>
									<p>There is just something so fun about this one pager for the photography website template. The typography and load transitions are just awesome adding to the uplifting tone that all weddings aim to have.</p>
									<p className="client-name"><a href="#">P. Donga</a></p>
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
							<li className="each-client"><a href="#"><img src="img/clients/logo-01.png" alt="client"/></a></li>
							<li className="each-client"><a href="#"><img src="img/clients/logo-02.png" alt="client"/></a></li>
							<li className="each-client"><a href="#"><img src="img/clients/logo-03.png" alt="client"/></a></li>
							<li className="each-client"><a href="#"><img src="img/clients/logo-04.png" alt="client"/></a></li>
							<li className="each-client"><a href="#"><img src="img/clients/logo-05.png" alt="client"/></a></li>
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
						<a href="#" className="btn btn-primary">join now</a>
					</p>
				</div>
			</div>
		</section>




		<section id="contact">
			<div className="map-content">
				<div id="gmap">
				</div>
			</div>
			<div className="color-overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-offset-2 form-content ptb100">
							<h3 className="section-title wow fadeInDown">Impressed? Let's touch base</h3>
							<p className="section-info wow fadeInDown" data-wow-delay=".25s">
								Should you have any question or concern, you can reach us by filling out the contact form below or you can find us on other social networks.
							</p>
							<div className="clearfix"></div>
							<form action="#" className="form wow fadeIn" data-wow-delay=".25s">
								<input type="text" className="form-control" placeholder="Your Full Name"/>
								<input type="text" className="form-control" placeholder="Email Address"/>
								<input type="text" className="form-control" placeholder="Contact Number"/>
								<textarea name="" className="form-control" cols="30" rows="5" placeholder="Your Message"></textarea>
								<a className="btn-block btn btn-submit text-uppercase">Send Message Now</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>




		<Footer/>


	</div>
		);
	}
}

