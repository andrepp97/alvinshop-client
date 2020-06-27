import React from 'react';
import { Route, Switch } from "react-router-dom";

// PAGES
import Home from './2. Pages/Home';
import Cart from './2. Pages/Cart';
import Catalog from './2. Pages/Catalog';
import Signup from './2. Pages/Auth/Signup';
import NotFound from './2. Pages/404';

const Routes = () => {
    return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/cart' exact component={Cart} />
          <Route path='*' component={NotFound} />
        </Switch>
    );
};

export default Routes;