import React, { Component } from 'react';
import '../css/Cronicas.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';
import Slide from '../components/Slide';
import cronicasData from '../cronicas-data';
// import { Carousel } from 'react-responsive-carousel';

export default class Cronicas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      length: cronicasData.length,
    };
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
      let index = this.state.activeIndex;
      let length = this.state.length;

      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }

      this.setState({
        activeIndex: index
      });
  }

    
  render() {
    return (
      <div className="cronicas-wrapper">
          <div className="cronicas-header">
          <a href="/"><p className="name">CARMEN RUIZ</p></a>
          <p className="title">PARA QUE NO QUEDE EN EL OLVIDO</p>
          </div>
          <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            className="leftArrow"
            goToPrevSlide={() => this.goToPrevSlide()}
          />
        <div className='slider-text'>
          <Slide
            activeIndex={this.state.activeIndex}
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </div>
      </div>
    );
  }
}


{/* 
  This is to put a button and a text field at the end  under the carousel 
  <form className="cronicas-form"> 
          <input className="form-input" type="text" placeholder="Chapter Number"/> <br/>
          <input className="form-button" type="submit" value="Browse"/>
</form> 
*/}