import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//var jarJRE = window.require('public/read-jar-jre');
var jarJRESqlite = window.require('public/read-jar-jre-sqlite');
function App() {

  const [jarContent, setJarContent] = useState(null);

  const handleClick_Jar = () => {
    jarJRESqlite.readJar().then(res => {
      alert(res)
      setJarContent(res)
    })
  }

  const reloadApp = () => {
    //window.location.href = "chrome-extension://ehaimjkcmcaemmhnndgofpdbcckbiheo/build/index.html"
    window.location.reload()
  }

  // useEffect(() => {
  //   //inicio
  // })

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NWJS <code>with React</code> 
        </p>
        <button onClick={handleClick_Jar} target="_blank"> 
          Connect and read Jar File 
        </button>
        {jarContent && <p>JAR file response: {jarContent}</p> }
        <button onClick={reloadApp} target="_blank"> 
          Reload the app 
        </button>
      </header>
    </div>
  );
}

export default App;
