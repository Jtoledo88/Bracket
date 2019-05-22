import React from 'react';
import { Link } from 'react-router-dom';

const TI = () =>{
    return <section id="latest-blog" className="mtb100">
			<div className="container">
				<h3 className="section-title wow fadeInDown">Servicios de TI</h3>
				<p className="section-info col-sm-8 col-sm-offset-2 wow fadeInDown" data-wow-delay=".25s">
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
				</p>
				<div className="clearfix"></div>

				<div className="row">

					<div className="col-sm-4 each-post wow fadeIn" data-wow-delay=".25s">
						<div className="content">
							<div className="blog-img">
								<a href="#top"><img src="img/blog/01.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">11 Sep</p>
								<h4 className="headline">
									<a href="#top">Desarrollo e instalación de Redes</a>
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
								<a href="#top"><img src="img/blog/02.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">02 Oct</p>
								<h4 className="headline">
									<a href="#top">Arreindo de Equipos para Eventos</a>
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
								<a href="#top"><img src="img/blog/03.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">18 Oct</p>
								<h4 className="headline">
									<a href="#top">Instalación de Servidores</a>
								</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 read-more-button wow zoomIn">
							<p id="button" className="join-btn text-center wow zoomIn">
						<Link to="/itSolutions" className="btn btn-primary">Ver más</Link>
					</p>
					</div>
				</div>
			</div>
		</section>
}

export default TI;