import React from 'react';
import logo from './logo.svg';
import jkLogo from './images/titleGraphicWithLogoOPTIMIZED.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Testing Heroku Deployment
        </h2>        
      </header>
      <main className="App-main">
        <img src={jkLogo} alt="jkLogo" />
      </main>
    </div>
  );
}

export default App;
