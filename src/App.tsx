import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Block } from './Block';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Block text="hello" color="orange"/>
      </div>
    );
  }
}

export default App;
