import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero id="home" />
      </div>
    );
  }
}

export default App;
