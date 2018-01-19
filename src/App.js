import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "header">
            <img src= "/logo01.jpg"/>
            <h1 className = "title">Zandaka</h1>
            <h2 className = "secondTitle">Without fight we do not survive</h2>
        </div>

        <div className = "middle">

          <div className = "sides">
            <img src = "/left01.jpg" />
          </div>

          <div className = "bord"></div>

          <div className = "sides">
            <img src = "/right01.jpg" />
          </div>

        </div>

        <div className = "footer"></div>
      </div>
    );
  }
}

export default App;
