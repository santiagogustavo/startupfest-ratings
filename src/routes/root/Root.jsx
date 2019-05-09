import React from 'react';

import logo from 'assets/imgs/ReactBoilerRoom.png';

import 'assets/stylesheets/App.css';
import { Logo } from './Root.styles';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Logo>
        <div id="logo-layer-main-container">
          <img src={logo} id="logo-layer-main" alt="logo-layer-main" />
        </div>
        <img src={logo} id="logo-layer-mirror" alt="logo-layer-mirror" />
      </Logo>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
