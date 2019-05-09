import React from 'react';

const Developer = () => {
    return <section id="features">
			<div className="container">
				<div className="row">

					<div className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".15s">
							<p className="icon text-center"><i className="fa fa-camera-retro"></i></p>
							<h5 className="title text-center">Desarrollo Web</h5>
							<p className="info">
								Who doesn't want to share their camera art with friends and family on social media? But why not share them on your own personal photography website and showcase your camera art to the world!
							</p>
						</div>
					</div>

					<div className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".35s">
							<p className="icon text-center"><i className="fa fa-male"></i></p>
							<h5 className="title text-center">Desarrolo Móvil</h5>
							<p className="info">
								This free website template is the first step to get you started with your personal photography website. Learn the game and get some fame. Don't restrict your photography viewership to your close circle.
                            </p>
						</div>
					</div>

					<div className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".55s">
							<p className="icon text-center"><i className="fa fa-users"></i></p>
							<h5 className="title text-center">Mantención de Página con Administrador</h5>
							<p className="info">
								This quality free website template is the best way to save money and time to get started with your photography website. The minimal things that you need are a little personalization in terms of color theme.
							</p>
						</div>
					</div>

				</div>
					<p className="join-btn text-center wow zoomIn">
						<a href="#top" className="btn btn-primary">Ver más</a>
					</p>
			</div>
		</section>
}

export default Developer;