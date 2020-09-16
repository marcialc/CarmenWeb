import React, { Component } from 'react';
import cronicasData from '../cronicas-data';
import '../css/Cronicas.css';
import Modal from "./Modal";
import Iframe from 'react-iframe';

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

  render() {
    return(
      <section>
      {
        this.state.cronicas.map((cronica, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
                  <Modal className="modal-wrap" onClose={this.showModal} show={this.state.show}>
                    <Iframe
                      url={require('../pdf/pdf1.pdf')} 
                      width="600px"
                      height="700px"
                      overflow="auto"
                      frameBorder="0"
                    />
                  </Modal>
                  <a
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
        )
      }
      </section>
    )
  }
}



