import React, { Component } from 'react';
import '../css/Body.css';
import deskURL from '../static/desk.jpg';


export default class Body extends Component {
  render() {
    return (
      <div className="main">
        <div className="stone">
          <img src={deskURL} alt="stones" />
          <h2 className="headline">Hello! I am a full stack web developer!</h2>
        </div>
      </div>
    );
  }
}
