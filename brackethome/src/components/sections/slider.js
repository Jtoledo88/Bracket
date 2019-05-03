import React from 'react';

const Slider = () => {
    return <section id="home">
			<div id="home-slider" className="carousel slide in" data-ride="carousel">

			<ol className="carousel-indicators">
				<li className="active" data-slide-to="0" data-target="#home-slider"></li>
				<li data-slide-to="1" data-target="#home-slider" className=""></li>
				<li data-slide-to="2" data-target="#home-slider" className=""></li>
			</ol>

		      <div className="carousel-inner">
		        <div className="item active" style={{backgroundImage: "url(img/slider/01.jpg)"}}>
		        	<div className="col-sm-offset-1 caption caption-wide">
		        		<h1 className="main-title wow fadeInUp" data-wow-delay=".25s">Free<br/>Photography<br/>website<br/>template</h1>
		        		<a className="btn btn-start wow fadeInUp" href="#features" data-scroll data-wow-delay=".85s">Learn More</a>
		        	</div>
		        </div>
		        <div className="item" style={{backgroundImage: "url(img/slider/02.jpg)"}}>
		        	<div className="col-sm-offset-1 caption caption-wide">
		        		<h1 className="main-title wow fadeInUp" data-wow-delay=".25s">An Effortless <br/>Photography <br/>Website<br/>Template</h1>
		        		<a className="btn btn-start wow fadeInUp" href="#features" data-scroll data-wow-delay=".85s">Free Download</a>
		        	</div>
		        </div>
		        <div className="item" style={{backgroundImage: "url(img/slider/03.jpg)"}}>
		          <div className="col-sm-offset-1 caption">
		        		<h1 className="main-title wow fadeInUp" data-wow-delay=".25s">Cherish every<br/>moment</h1>
		        		<p className="sub-title wow fadeInUp" data-wow-delay=".55s">Up & Running in minutes</p>
		        		<a className="btn btn-start wow fadeInUp" href="#features" data-scroll data-wow-delay=".85s">Read More</a>
		        	</div>
		        </div>
		      </div>
		    </div>
		</section>
}

export default Slider;