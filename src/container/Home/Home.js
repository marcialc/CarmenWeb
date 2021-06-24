import React, { Component } from 'react';

import classes from './Home.css';

export default class Home extends Component {
    
  render() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.nav}>
            <a href="/carmen"><p className={classes.nombre} >CARMEN RUIZ</p></a>
            <a href="/cronicas"><p className={classes.historias} >CRONICAS</p></a>
        </div>
      </div>
    );
  }
}


