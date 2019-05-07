import React from 'react';

const Contact = () => {
    return <section id="contact">
			<div className="map-content">
				<div id="gmap">
				</div>
			</div>
			<div className="color-overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-offset-2 form-content ptb100">
							<h3 className="section-title wow fadeInDown">Impresionado? Ponte en contacto con Nosotros</h3>
							<p className="section-info wow fadeInDown" data-wow-delay=".25s">
								Should you have any question or concern, you can reach us by filling out the contact form below or you can find us on other social networks.
							</p>
							<div className="clearfix"></div>
							<form action="" className="form wow fadeIn" data-wow-delay=".25s">
								<input type="text" className="form-control" placeholder="Your Full Name"/>
								<input type="text" className="form-control" placeholder="Email Address"/>
								<input type="text" className="form-control" placeholder="Contact Number"/>
								<textarea name="" className="form-control" cols="30" rows="5" placeholder="Your Message"></textarea>
								<span className="btn-block btn btn-submit text-uppercase">Send Message Now</span>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
}

export default Contact;