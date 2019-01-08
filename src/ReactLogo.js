import React from 'react'
import logo from './logo.svg';

const ReactLogo = function (props) {
  return (
    <React.Fragment>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
    </React.Fragment>
  );
};

export default ReactLogo