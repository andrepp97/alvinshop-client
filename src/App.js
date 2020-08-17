import React, { Component } from 'react';
import StickyWhatsapp from './1. Components/StickyWhatsapp';

// PAGES
import Routes from './Routes';
import Navbar from './1. Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <StickyWhatsapp />
      </div>
    );
  }
}

export default App;