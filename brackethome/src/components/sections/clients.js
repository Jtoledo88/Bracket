import React from 'react';

const Clients = () => {
    return <section id="our-clients" className="mtb100">
			<div className="container">
				<h3 className="section-title wow fadeInDown">Brands we work with</h3>
				<p className="section-info col-sm-8 col-sm-offset-2 wow fadeInDown" data-wow-delay=".25s">
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
				</p>
				<div className="clearfix"></div>

				<div className="row">
					<div className="col-sm-12">
						<ul className="list-inline text-center">
							<li className="each-client"><a href="#top"><img src="img/clients/logo-01.png" alt="client"/></a></li>
							<li className="each-client"><a href="#top"><img src="img/clients/logo-02.png" alt="client"/></a></li>
							<li className="each-client"><a href="#top"><img src="img/clients/logo-03.png" alt="client"/></a></li>
							<li className="each-client"><a href="#top"><img src="img/clients/logo-04.png" alt="client"/></a></li>
							<li className="each-client"><a href="#top"><img src="img/clients/logo-05.png" alt="client"/></a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
}

export default Clients;