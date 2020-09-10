import React, { Component } from 'react';
import cronicasData from '../data';
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
              <img src={require('../assets/cronica-'+cronica.picture)} alt='pic'></img>
              <h1 className='slider-item heading'>{cronica.title}</h1>
          </div>
        ) }
        </section>
    )
  }
}

export default Slide;