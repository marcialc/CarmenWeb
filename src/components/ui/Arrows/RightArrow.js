import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const RightArrow = (props) => {
    return(
      <div className='backArrow' onClick={props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
    )
}

export default RightArrow;