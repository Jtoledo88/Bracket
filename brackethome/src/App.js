import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './components/home/index.js';
import itSolutions from './components/views/itsolutions.js';



//Para meter info de la API

class App extends Component {

  render() {
    return (
      <div className="App">
     
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/itSolutions" component={itSolutions} />
                  
                </div>
            </BrowserRouter>  

      </div>
    );
  }
}


export default App;