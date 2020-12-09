import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About.jsx'
import Trial from './screens/Cronicas_1/Cronicas_1';

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
        <Trial />
      </Route>
    </Router>
  );
}

export default App;
