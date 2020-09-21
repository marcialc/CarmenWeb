import React, { Component, useRef } from 'react';
import cronicasData from '../cronicas-data';
import '../css/Cronicas.css';
import Modal from "./Modal";
import Iframe from 'react-iframe';
import PropTypes from "prop-types";


export default class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cronicas: cronicasData,
      show: false
    };
  }


  showModal = e => {
    this.setState({
      show:!this.state.show
    })
  }
  // Try adding modal insid slide to fix and add close click

  render() {
    return(
      <section>
      {
        this.state.cronicas.map((cronica, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
                  {this.state.show &&
                    <div class="modal" id="modal" ref={node => this.node = node}>
                      <Iframe
                      url={require('../pdf/pdf1.pdf')} 
                      width="800px"
                      height="800px"
                      overflow="auto"
                      frameBorder="0"
                        />
                    </div>
                  }
                  <div className="chapter"> 
                  <a
                    className="chapter"
                    onClick={e => {
                      this.showModal(e);
                    }}
                  >
                     <div style={{ height:"300px" }}>
                      <img src={require('../assets/cronica-'+cronica.picture)} alt='chapter-cover'></img>
                    </div>
                    <h1 className='slider-item heading'>{cronica.title}</h1>
                  </a>
                  </div>
          </div>
          
        )
      }
      </section>
    )
  }
}

{/* <Modal className="modal-wrap" onClose={this.showModal} show={this.state.show}>
<Iframe
  url={require('../pdf/pdf1.pdf')} 
  width="800px"
  height="800px"
  overflow="auto"
  frameBorder="0"
/>
</Modal> */}