import React from 'react';
import './App.scss';
import Home from './Home';
import Inquiry from './Inquiry';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img className="logo" src="/logo/ashworth.svg" />
        </nav>
      </header>
      <div className="App-body">
        <main>
          <Home />
        </main>
        <aside>
          <Inquiry />
        </aside>
      </div>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
