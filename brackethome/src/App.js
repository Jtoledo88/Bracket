import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './components/home/index.js';
import admin from './components/views/admin.js';



//Para meter info de la API

class App extends Component {

  render() {
    return (
      <div className="App">
     
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/admin" component={admin} />
                  
                </div>
            </BrowserRouter>  

      </div>
    );
  }
}


export default App;