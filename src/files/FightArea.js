import React, { Component } from 'react';
import '../../src/App.css';

const areasTable = ['/area01.jpg','/area.jpg'];

let divStyle = {
  color: 'white',
  backgroundImage: 'url(' + areasTable[0] + ')',
  WebkitTransition: 'all',
  msTransition: 'all'
};

class FightArea extends Component {
  render() {
    return <div className = "boardFightArea">
      <div className = "topBar" ></div>
      <div className = "fight" style = {divStyle}>
        <div className = "player"></div>
        <div className = "enemy"></div>
      </div>
      <div className = "bottom">
        <div className = "ability"></div>
      </div>
    </div>;
  }
}

export default FightArea;
