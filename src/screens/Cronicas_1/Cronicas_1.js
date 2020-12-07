import React, { Component } from 'react';

import './Cronicas_1.css';
import dataJSON from '../../cronicas-data';
import Cronica from './Cronica/Cronica';
import LeftArrow from '../../components/ui/Arrows/LeftArrow';
import RightArrow from '../../components/ui/Arrows/RightArrow';
import Modal from '../../components/Modal_1/Modal_1';
import Pdf from '../../components/ui/Pdf/Pdf';

class Cronicas_1 extends Component {

  state = {
      cronicasData: [],
      dataLength: 29,
      first: 0,
      middle: 1,
      last: 2,
      clicked: false
  };

  componentDidMount () {
    this.fetchData();
    console.log("Updated Cronicas...")
  }

  fetchData = () => {
    this.setState({ cronicasData: dataJSON });
  }

  rightArrowHandler = () => {
    let first = this.state.first+1;
    let middle = this.state.middle+1;
    let last = this.state.last+1;

    if(last > 29) last = 0;
    else if(middle > 29) middle = 0;
    else if(first > 29) first = 0;

    this.setState({ first:first, middle:middle, last:last })
  }

  leftArrowHandler = () => {
    let first = this.state.first-1;
    let middle = this.state.middle-1;
    let last = this.state.last-1;

    if(first < 0) first = 29;
    else if(middle < 0) middle = 29;
    else if(last < 0) last = 29

    this.setState({ first:first, middle:middle, last:last })
  }

  showChapterHandler = () => {
    this.setState({ clicked: true })
  }

  closeChapterHandler = () => {
    this.setState({ clicked: false })
  }
    
  render() {

    const cronicasData = this.state.cronicasData;
    const first = this.state.first;
    const middle = this.state.middle;
    const last = this.state.last;

    let displayData = (<p>Info hasn't loaded...</p>)

    if(cronicasData.length !==0){
      displayData = (
        <div className="Cronicas" >
          <LeftArrow goToPrevSlide={this.leftArrowHandler} />
          <Cronica image={cronicasData[first].picture} title={cronicasData[first].title} clicked={this.showChapterHandler} />
          <Cronica image={cronicasData[middle].picture} title={cronicasData[middle].title} clicked={this.showChapterHandler} />
          <Cronica image={cronicasData[last].picture} title={cronicasData[last].title} clicked={this.showChapterHandler} />
          <RightArrow goToNextSlide={this.rightArrowHandler} />
        </div>
      )
    }


    return (
      <div className="CronicasWrapper">
          <div className="cronicas-header">
            <a href="/"><p className="name">CARMEN RUIZ</p></a>
            <p className="title">PARA QUE NO QUEDE EN EL OLVIDO</p>
            <p>INDEX</p>
          </div>
          <Modal show={this.state.clicked} modalClosed={this.closeChapterHandler} >
            <Pdf />
          </Modal>
          {displayData}
      </div>
    );
  }
}


export default Cronicas_1;