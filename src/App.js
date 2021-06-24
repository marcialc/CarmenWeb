import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './container/Home/Home';
import About from './container/About/About.js'
import Cronicas from './container/Cronicas/Cronicas';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/carmen">
        <About />
      </Route>
      <Route exact path="/cronicas">
        <Cronicas />
      </Route>
    </Router>
  );
}

export default App;
