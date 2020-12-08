import React, { Component } from 'react';
import classes from '../css/Home.css';

export default class Home extends Component {
    
  render() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.nav}>
            <a href="/carmen"><p className={classes.nombre} >CARMEN RUIZ</p></a>
            <a href="/trial"><p className={classes.historias} >CRONICAS</p></a>
        </div>
      </div>
    );
  }
}


