import React from 'react';
import './App.css';
import holbertonLogo from './dashboard/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils'; // Import utility functions


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>

      <footer className="App-footer">
        {/* Using getFullYear and getFooterCopy */}
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}

export default App;
