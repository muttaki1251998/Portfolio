import React from 'react';
import './stylesheet/logo.css';
import logo from '../logo.svg';

const Logo = () => {
  return(
    <div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Logo;