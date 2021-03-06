import React from 'react';

import classes from './Arrows.css'
import leftArrow from './left-arrow.png';

const LeftArrow = (props) => {
    return(
      <div className={classes.Arrow} onClick={props.goToPrevSlide}>
        <img src={leftArrow} alt="Left-Arrow" />
      </div>
    )
}
export default LeftArrow;