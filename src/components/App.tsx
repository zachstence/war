import React from 'react';
import Game from './Game/Game';

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <header><h1>WAR</h1></header>
      <Game />
      <footer>
        <a href="https://github.com/zachstence/war">
          <img src="github.png" alt="GitHub Icon"/>
        </a>
      </footer>
    </div>
  )
};

export default App;
