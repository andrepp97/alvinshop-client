import React, { Component } from 'react';
import StickyWhatsapp from './1. Components/StickyWhatsapp';

// PAGES
import Routes from './Routes';
import Navbar from './1. Components/Navbar';
import Footer from './1. Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <StickyWhatsapp />
        <Footer />
      </div>
    );
  }
}

export default App;