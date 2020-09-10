import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/Home.jsx';
import About from './screens/About.jsx'
import Cronicas from './screens/Cronicas.jsx';

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
