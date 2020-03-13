import React from 'react';

export default class Developer extends React.Component {
   state = {
       services: [],
   };

   async componentDidMount() {
       const url = "https://8000-e054b82f-a90d-4d10-8c33-43f8168d1891.ws-us02.gitpod.io/api/services/";
       const response = await fetch(url);
       const data = await response.json();
       this.setState({services: data})
       console.log(data);
   }

   render() {
       let services = this.state.services.map(function (service,i){
           return <div key={i} className="col-md-4 feature-item">
						<div className="content wow fadeInDown" data-wow-delay=".15s">
							<p className="icon text-center"><i className="fa fa-camera-retro"></i></p>
							<h5 className="title text-center">{service.title}</h5>
							<p className="info">
								{service.description}
							</p>
						</div>
				  </div>
       })
        return <section id="features">
			<div className="container">
				<div className="row">

                    {services}

				</div>
					<p className="join-btn text-center wow zoomIn">
						<a href="#top" className="btn btn-primary">Ver más</a>
					</p>
			</div>
		</section>
   }
}

