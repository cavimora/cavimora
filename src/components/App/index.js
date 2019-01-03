import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';

import LandingPage from '../Landing';
import HomePage from '../Home';

import './app.css'

import * as ROUTES from '../../constants/routes';

class App extends Component {
  render() {
    return (

      <Router>
        <div class='container'>
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
