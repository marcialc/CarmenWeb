import React, { Component } from 'react';
import '../css/Cronicas.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Cronicas extends Component {
    
  render() {
    return (
      <div className="cronicas-wrapper">
          <div className="cronicas-header">
          <a href="/"><p>CARMEN RUIZ</p></a>
          </div>
          <Carousel>
              <div>
                  <img src={require('../assets/carmenPardo.jpg')} alt=""/>
              </div>
          </Carousel>
      </div>
    );
  }
}


