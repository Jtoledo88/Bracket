import React from 'react';

const Stadistic = () => {
    return <section id="count-down" className="text-center">
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
}

export default Stadistic;