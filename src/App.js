import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About.js'
import Crpnicas from './screens/Cronicas/Cronicas';

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
        <Crpnicas />
      </Route>
    </Router>
  );
}

export default App;
