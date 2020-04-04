import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Navbar from './1. Components/Navbar';

// PAGES
import Home from './2. Pages/Home';
import NotFound from './2. Pages/404';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>

      </div>
    );
  }
}

export default App;