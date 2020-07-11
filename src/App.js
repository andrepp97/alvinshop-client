import React, { Component } from 'react';

// COMPONENTS
import Routes from './Routes';
import Navbar from './1. Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        
        <Routes />

      </div>
    );
  }
}

export default App;