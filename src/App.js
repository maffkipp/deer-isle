import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero id="home" />
        <Gallery id="pictures" />
      </div>
    );
  }
}

export default App;
