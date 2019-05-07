import React from 'react';

const Footer = () => {
    return <section id="footer">
			<div className="container bottom-part">
				<div className="row">
					<div className="col-sm-4 left-part">
						<p className="footer-logo "><img src="img/bracketLogo.jpeg" alt="logo"/></p><br/>
						<p>This free website template is the first step to get you started with your personal photography website. Learn the game and get some fame. Don't restrict your photography viewership to your close circle. Go beyond and make it public on your photography website. </p>
					</div>
					<div className="col-sm-4 col-sm-offset-4">
						<ul className="social-icon-footer list-inline mtb50">
							<li><a href="#top"><i className="fa fa-facebook-square"></i></a></li>
							<li><a href="#top"><i className="fa fa-twitter-square"></i></a></li>
							<li><a href="#top"><i className="fa fa-google-plus-square"></i></a></li>
							<li><a href="#top"><i className="fa fa-vimeo-square"></i></a></li>
							<li><a href="#top"><i className="fa fa-youtube-square"></i></a></li>
							<li><a href="#top"><i className="fa fa-tumblr-square"></i></a></li>
							<li><a href="#top"><i className="fa fa-linkedin-square"></i></a></li>
						</ul>
						<form action="#" className="form subscribe-form">
							<p className="text-uppercase mtb20">get subscribed to the photography tips and news</p>
							<input type="email" className="form-control" placeholder="Enter your email:"/>
						</form>
					</div>
				</div>
			</div>


			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-4">
							<p className="info">
								&copy; <a href="#top">Frittt Templates</a>. Free Photography Website Template.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
}

export default Footer;