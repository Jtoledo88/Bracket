import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/index';
import Navbar from './components/share/navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
