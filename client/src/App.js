import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Landing />
      </Fragment>
    </Router>
  );
}

export default App;