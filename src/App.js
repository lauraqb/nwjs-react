import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

var prueba = window.require('public/read-jar-jre');
function App() {

  const [text, setText] = useState("...");

  const handleClick_Jar = () => {
    prueba.readJar().then(res => {
      alert(res) 
    })
  }

  useEffect(() => {
    prueba.readJar().then(res => {
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
        <p>Reading JAR file: {text}</p> 
        <button onClick={handleClick_Jar} target="_blank"> 
          Connect and read Jar File 
        </button>
      </header>
    </div>
  );
}

export default App;
