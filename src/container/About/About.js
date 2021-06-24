import React, { Component } from 'react';
import classes from './About.css'

export default class About extends Component {
    
  render() {
    return (
      <div className={classes.aboutWrapper}>
        <div className={classes.aboutHeader}>
        <a href="/"><p>CARMEN RUIZ</p></a>
        </div>
        <div className={classes.aboutMe}>
        <img src={require('../../assets/carmenFace.jpg')} alt='profile'></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue nisi nec laoreet pretium. Pellentesque aliquet enim varius nisi aliquet elementum. In sit amet blandit enim. Suspendisse feugiat eros magna, non accumsan tellus tincidunt gravida. Vivamus sed nisl sed felis tristique rutrum. Nunc eu placerat tellus. Donec et quam sagittis, bibendum nisi laoreet, consequat nisi. Etiam nisl ante, fermentum varius elit eget, feugiat aliquam augue.

Vivamus sed fermentum justo, vel rhoncus ante. Etiam blandit leo velit, semper vehicula turpis scelerisque id. Sed imperdiet nisl a placerat scelerisque. Mauris rhoncus, lectus quis tempus vulputate, ligula ipsum laoreet felis, et imperdiet nunc felis id metus. Vestibulum et tortor sed arcu porttitor posuere. Sed semper, orci sed suscipit venenatis, massa justo dignissim libero, vel dapibus arcu nisl ac metus. Suspendisse lacus nunc, ultrices at nulla non, vulputate posuere arcu. Nullam auctor odio ut erat cursus, ornare condimentum nisi rutrum. Phasellus non metus non sem commodo ornare vitae id orci us hendrerit.</p>
        </div>
      </div>
    );
  }
}


