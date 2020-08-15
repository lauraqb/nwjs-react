import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

var jarJRE = window.require('public/read-jar-jre');
var jarJRESqlite = window.require('public/read-jar-jre-sqlite');
function App() {

  const [text, setText] = useState("...");

  const handleClick_Jar = () => {
    // jarJRE.readJar().then(res => {
    //   alert(res) 
    // })
    jarJRESqlite.readJar().then(res => {
      alert(res) 
    })
  }

  useEffect(() => {
    jarJRE.readJar().then(res => {
      setText(res)
    })
  })

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NWJS <code>with React</code> 
        </p>
        <p>JAR file response: {text}</p> 
        <button onClick={handleClick_Jar} target="_blank"> 
          Connect and read Jar File 
        </button>
      </header>
    </div>
  );
}

export default App;
