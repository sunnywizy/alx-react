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

      <main className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Form section for email and password */}
        <form>
          {/* Email Label and Input */}
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />

          <br /><br />

          {/* Password Label and Input */}
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />

          <br /><br />

          {/* OK Button */}
          <button type="button">OK</button>
        </form>
      </main>

      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
