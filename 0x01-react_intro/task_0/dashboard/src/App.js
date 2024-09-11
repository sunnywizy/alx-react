// src/App.js
import React from 'react';
import './App.css';
import holbertonLogo from './dashboard/holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>      
      <hr className="App-hr" />
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <hr className="App-hr" />
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
