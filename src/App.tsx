import React from 'react';
import './App.scss';
import Home from './Home';


function App() {

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="header">
          <img className="logo" src="/logo/ashworth.svg" />
        </div>
      </nav>
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
