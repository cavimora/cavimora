import React, { Component } from 'react';
import logo from '../../svg/logo.svg';
import './landing.css';

class Landing extends Component {
  render() {
    return (

        <div className="Landing">
            <header className="Landing-header">
                <img src={logo} className="Landing-logo" alt="logo" />
                <p>
                Carlos Mora Web Consultant
                </p>
                <a
                    className="Landing-link"
                    href="mailto:cavimora@gmail.com"
                    rel="noopener noreferrer"
                >
                contact
                </a>
            </header>
        </div>
    );
  }
}

export default Landing;