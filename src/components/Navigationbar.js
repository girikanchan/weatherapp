import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './nav.css'
function Navigationbar() {
 return (
    <div className="App">
      <img src={logo} alt="logo"></img>
      <h1>Weather 99</h1>
      <i className="fa-solid fa-rotate-right"></i>
      <h5>refresh</h5>
    </div>
 );
}

export default Navigationbar;