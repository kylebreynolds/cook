import React from "react";

import logo from '../../cookloading.png'
import 'animate.css'

function LoadingScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="loading-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default LoadingScreen;