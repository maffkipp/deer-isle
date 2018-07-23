import React, { Component } from 'react';
import './App.css';

// import Contentful client
import client from './contentfulClient';

// import components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    // Pulls in all entries from Contentful and adds them to state
    client.getEntries()
      .then(entries => {
        let dataArray = [];
        entries.items.forEach(entry => {
          dataArray.push(entry);
        });
        this.setState({
          data: dataArray
        })
      })
      .catch(console.log('Failed to retrieve data'));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero id="home" data={this.state.data} />
        <Gallery id="pictures" />
      </div>
    );
  }
}

export default App;
