import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';

import LandingPage from '../Landing';
import BlogPage from '../Blog';

import './app.css'

import * as ROUTES from '../../constants/routes';

class App extends Component {
  render() {
    return (

      <Router>
        <div class='container'>
          <Navigation />
          <Route exact path={ROUTES.MAIN_NAV.LANDING} component={LandingPage} />
          <Route path={ROUTES.MAIN_NAV.BLOG} component={BlogPage} />
        </div>
      </Router>
    );
  }
}

export default App;
