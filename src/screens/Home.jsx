import React, { Component } from 'react';
import '../css/Home.css';
// import About from './About.jsx';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
    
  render() {
    return (
      <div className="main-container">
        <div className="nav">
            <a href="/carmen"><p className="nombre" >CARMEN RUIZ</p></a>
            <a href="/cronicas"><p className="historias" >CRONICAS</p></a>
        </div>
      </div>
    );
  }
}


