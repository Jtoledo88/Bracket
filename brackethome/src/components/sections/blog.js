import React from 'react';

const Blog = () =>{
    return <section id="latest-blog" className="mtb100">
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
								<a href="#top"><img src="img/blog/01.jpg" className="img-100p" alt="latest blog"/></a>
							</div>
							<div className="info">
								<p className="date">11 Sep</p>
								<h4 className="headline">
									<a href="#top">Why a photography website template important?</a>
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
									<a href="#top">Responsive and free website template (HTML/CSS)</a>
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
									<a href="#top">Download free photography website template</a>
								</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 read-more-button wow zoomIn">
						<p className="text-uppercase text-center"><a href="#top">View All</a></p>
					</div>
				</div>
			</div>
		</section>
}

export default Blog;