import React, { Component } from 'react';

import classes from './Cronicas.css';
import dataJSON from '../../cronicas-data';
import Cronica from './Cronica/Cronica';
import LeftArrow from '../../components/ui/Arrows/LeftArrow';
import RightArrow from '../../components/ui/Arrows/RightArrow';
import Modal from '../../components/Modal/Modal';
import Pdf from '../../components/ui/Pdf/Pdf';
import TableOfContents from '../../components/TableOfContents/TableOfContents';

class Cronicas extends Component {

  state = {
      cronicasData: [],
      dataLength: 29,
      first: 0,
      middle: 1,
      last: 2,
      showChapter: false,
      showIndex: false
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

    if(last > 59) last = 0;
    else if(middle > 59) middle = 0;
    else if(first > 59) first = 0;

    this.setState({ first:first, middle:middle, last:last })
  }

  leftArrowHandler = () => {
    let first = this.state.first-1;
    let middle = this.state.middle-1;
    let last = this.state.last-1;

    if(first < 0) first = 59;
    else if(middle < 0) middle = 59;
    else if(last < 0) last = 59

    this.setState({ first:first, middle:middle, last:last })
  }

  showChapterHandler = () => {
    this.setState({ showChapter: true });
  }

  closeChapterHandler = () => {
    this.setState({ showChapter: false });
  }

  closeIndexHandler = () => {
    this.setState({ showIndex: false });
  }

  openIndexHandler = () => {
    this.setState({ showIndex: true });
  }

  indexHandler = (e) => {
    let first;
    let middle = e.target.id-1;
    let last;

    if(middle === 59) {
      first = middle-1;
      last = 0;
    }else if(middle === 0){
      first = 59;
      last  = middle+1
    }else{
      first = middle-1;
      last = middle+1;
    }


    this.setState({ first:first, middle:middle, last:last, showIndex: false });
  }
    
  render() {

    const cronicasData = this.state.cronicasData;
    const first = this.state.first;
    const middle = this.state.middle;
    const last = this.state.last;

    let displayData = (<p>Info hasn't loaded...</p>)

    if(cronicasData.length !==0){
      displayData = (
        <div className={classes.Cronicas} >
          <LeftArrow goToPrevSlide={this.leftArrowHandler} />
          <Cronica hide={true}  className={classes.Extra} image={cronicasData[first].picture} title={cronicasData[first].title} clicked={this.showChapterHandler} />
          <Cronica hide={false} image={cronicasData[middle].picture} title={cronicasData[middle].title} clicked={this.showChapterHandler} />
          <Cronica hide={true} className={classes.Extra} image={cronicasData[last].picture} title={cronicasData[last].title} clicked={this.showChapterHandler} />
          <RightArrow goToNextSlide={this.rightArrowHandler} />
        </div>
      )
    }


    return (
      <div className={classes.CronicasWrapper}>
          <div className={classes.CronicasHeader}>
            <a href="/"><p className={classes.Name}>CARMEN RUIZ</p></a>
            <p className={classes.Title}>PARA QUE NO QUEDE EN EL OLVIDO</p>
            <img className={classes.Button} src={require("./index.png")} onClick={this.openIndexHandler} alt="Index-Button" />
            <Modal show={this.state.showIndex} modalClosed={this.closeIndexHandler}>
              <TableOfContents clicked={this.indexHandler} data={cronicasData} />
            </Modal>
          </div>
          <Modal show={this.state.showChapter} modalClosed={this.closeChapterHandler} >
            <Pdf />
          </Modal>
          {displayData}
      </div>
    );
  }
}


export default Cronicas;