import React, { Component } from 'react';
import cronicasData from '../cronicas-data';
import '../css/Cronicas.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {cronicas: cronicasData};
  }

  render() {
    return(
      <section>
      {
        this.state.cronicas.map((cronica, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
              <a href={require('../pdf/Project1-Coding-Instructions.pdf')} target="_blank">
              <img src={require('../assets/cronica-'+cronica.picture)} alt='chapter-cover'></img>
              <h1 className='slider-item heading'>{cronica.title}</h1>
              </a>
          </div>
        ) }
        </section>
    )
  }
}

export default Slide;