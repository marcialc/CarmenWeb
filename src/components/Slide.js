import React, { Component, useRef } from 'react';
import cronicasData from '../cronicas-data';
import '../css/Cronicas.css';
// import Modal from "./Modal";
import Iframe from 'react-iframe';
import PropTypes from "prop-types";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Modal from '@material-ui/core/Modal';

export default function Slide() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Try adding modal insid slide to fix and add close click
    return(
      <section>
      {
        this.state.cronicas.map((cronica, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>

                  {this.state.show &&
                    <Modal
                    open={open}
                    onClose={handleClose}
                    >
                      <div class="modal" id="modal" ref={node => this.node = node}>
                        <Iframe
                        url={require('../pdf/pdf1.pdf')} 
                        width="800px"
                        height="800px"
                        overflow="auto"
                        frameBorder="0"
                          />
                      </div>
                    </Modal>
                  }

                  <div className="chapter" ref={this.node}> 
                  <a
                    className="chapter"
                    onClick={handleOpen}
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

{/* <Modal className="modal-wrap" onClose={this.showModal} show={this.state.show}>
<Iframe
  url={require('../pdf/pdf1.pdf')} 
  width="800px"
  height="800px"
  overflow="auto"
  frameBorder="0"
/>
</Modal> */}