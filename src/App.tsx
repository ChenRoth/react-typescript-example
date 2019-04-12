import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Block } from './Block';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Block color="orange"/>
        <Block text="hello!" color="blue"/>
      </div>
    );
  }
}

export default App;
