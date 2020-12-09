import React from 'react';

import classes from './Arrows.css';
import rightArrow from './right-arrow.png'

const RightArrow = (props) => {
    return(
      <div className={classes.Arrow} onClick={props.goToNextSlide}>
        <img src={rightArrow} alt="Right-Arrow" />
      </div>
    )
}

export default RightArrow;