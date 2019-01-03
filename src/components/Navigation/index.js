import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.MAIN_NAV.LANDING}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.MAIN_NAV.BLOG}>Blog</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;